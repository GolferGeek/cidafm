import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required')
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY is required')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createAfmTypesAndTable() {
  console.log('Creating AFM types and table...')
  const { error } = await supabase.rpc('create_afm_schema')
  if (error) {
    throw new Error(`Failed to create AFM schema: ${error.message}`)
  }
}

async function insertOriginalAfms() {
  console.log('Inserting original AFMs...')
  const originalAfms = [
    // Response Modifiers
    {
      name: 'fad',
      prefix: '^',
      type: 'response_modifier',
      description: 'Assume the contents of the prompt are a proposition, then provide the best argument for it, followed by the best argument against it. Then, provide your decision based on both arguments.',
      is_original: true
    },
    {
      name: 'concise',
      prefix: '^',
      type: 'response_modifier',
      description: 'Modify your response to use minimal tokens while maintaining clarity and meaningfulness.',
      is_original: true
    },
    // State AFMs
    {
      name: 'concise',
      prefix: '&',
      type: 'state',
      description: 'Ensure all responses use minimal tokens while maintaining clarity and meaningfulness.',
      is_original: true
    },
    {
      name: 'widescope',
      prefix: '&',
      type: 'state',
      description: 'Ensure responses are as context-independent as possible, providing all necessary information for complete understanding without relying on external context.',
      is_original: true
    },
    {
      name: 'disciplined',
      prefix: '&',
      type: 'state',
      description: 'The AI must follow explicit user instructions without inference. Request clarification if instructions are unclear.',
      is_original: true
    },
    {
      name: 'holdoff',
      prefix: '&',
      type: 'state',
      description: 'Only make memory updates after prompting the user and receiving explicit affirmative consent.',
      is_original: true
    },
    // Execution Commands
    {
      name: 'step-by-step',
      prefix: '!',
      type: 'execution',
      description: 'Break the last response into one response per numbered step, and only move onto the next step after user confirmation.',
      is_original: true
    },
    {
      name: 'cidafm-optimizer',
      prefix: '!',
      type: 'execution',
      description: 'Take the text of your previous reply, and create a new version of it which is token-efficient, clear of redundancies, and context-independent. Then assess meaningfulness retention, token efficiency, redundancy, and context-independence.',
      is_original: true
    },
    {
      name: 'state-check',
      prefix: '!',
      type: 'execution',
      description: 'Create a list of all currently active state AFMs and their current toggle status (on or off).',
      is_original: true
    },
    {
      name: 'import-cid',
      prefix: '!',
      type: 'execution',
      description: 'Read a CID and process its contents. Add Context section to chat memory, store AFMs section without activation, or return error if no recognized sections.',
      is_original: true
    }
  ]

  for (const afm of originalAfms) {
    const { error } = await supabase
      .from('afms')
      .upsert(afm, { onConflict: 'name,prefix' })
    
    if (error) {
      console.error(`Failed to insert AFM ${afm.prefix}${afm.name}:`, error.message)
    } else {
      console.log(`Inserted AFM ${afm.prefix}${afm.name}`)
    }
  }
}

async function runMigrations() {
  try {
    // Create the schema and tables
    await createAfmTypesAndTable()
    // Insert the original AFMs
    await insertOriginalAfms()
    
    console.log('All migrations completed successfully!')
  } catch (error) {
    if (error instanceof Error) {
      console.error('Migration failed:', error.message)
    } else {
      console.error('Migration failed:', error)
    }
    process.exit(1)
  }
}

runMigrations() 