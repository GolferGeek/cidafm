import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkAfms() {
  console.log('Checking AFMs in database...\n')
  
  const { data: afms, error } = await supabase
    .from('afms')
    .select('*')
    .order('type', { ascending: true })
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching AFMs:', error.message)
    return
  }

  if (!afms?.length) {
    console.log('No AFMs found in database')
    return
  }

  console.log(`Found ${afms.length} AFMs:\n`)
  
  let currentType = ''
  afms.forEach(afm => {
    if (afm.type !== currentType) {
      currentType = afm.type
      console.log(`\n${currentType.toUpperCase()}S:`)
    }
    console.log(`${afm.prefix}${afm.name}: ${afm.description}`)
  })
}

checkAfms() 