import { CopyButton } from '@/components/CopyButton'
import { DocsNav } from '@/components/DocsNav'

export default function DocsPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex">
          <DocsNav />
          <div className="flex-1 max-w-3xl text-base leading-7 text-gray-700">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">cidafm Documentation</h1>
            <p className="mt-6 text-xl leading-8">
              cidafm is an open-source framework that modifies AI behavior through AI Function Modules (AFMs)—structured rules that define AI responses, persistent states, and execution commands.
            </p>

            <div className="mt-10 max-w-2xl">
              <section id="installation">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Installation</h2>
                <p className="mt-6">
                  To install cidafm, you&apos;ll need to copy and paste two configuration files into your chat with the AI. Follow these steps:
                </p>

                <div className="mt-8 space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      1. Core Logic
                      <CopyButton text={logicCore} />
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      First, copy and paste the core logic configuration into your chat. This sets up the basic framework and activates essential AFMs.
                    </p>
                    <div className="bg-white rounded border border-gray-200 p-4 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                      {logicCore}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      2. AFM Library
                      <CopyButton text={afmLibrary} />
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Next, copy and paste the AFM library into your chat. This adds all the available AFMs to your environment.
                    </p>
                    <div className="bg-white rounded border border-gray-200 p-4 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                      {afmLibrary}
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Ready to Use</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>After pasting both configurations, cidafm will be ready to use in your chat. The AI will acknowledge the installation and activate the default state AFMs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="create-your-own">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Create Your Own AFM</h2>
                <p className="mt-6">
                  You can create your own AFMs by following this simple format:
                </p>

                <div className="mt-8 space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Format</h3>
                    <div className="bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                      {`[prefix][name]: [description]

Examples:
^custom: Modify the current response to...
&persistent: Keep this behavior active until...
!execute: Perform this action when...`}
                    </div>
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Choose your prefix:</h4>
                        <ul className="mt-2 ml-6 list-disc text-gray-600">
                          <li><code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">^</code> for one-time response modifications</li>
                          <li><code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">&</code> for persistent state changes</li>
                          <li><code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">!</code> for execution commands</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Name your AFM:</h4>
                        <p className="mt-2 text-gray-600">Use a clear, descriptive name that indicates the AFM&apos;s purpose.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Write the description:</h4>
                        <p className="mt-2 text-gray-600">Clearly explain what the AFM does and how it modifies the AI&apos;s behavior.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Example AFM Creation</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Response Modifier Example:</h4>
                        <div className="mt-2 bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                          ^bullet-points: Convert the response into a bulleted list format, with each main point as a bullet point and supporting details as sub-bullets.
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">State AFM Example:</h4>
                        <div className="mt-2 bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                          &technical: Maintain a technical writing style with precise terminology and detailed explanations of complex concepts.
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Execution Command Example:</h4>
                        <div className="mt-2 bg-white rounded border border-gray-200 p-4 font-mono text-sm">
                          !summarize-chat: Create a concise summary of the current chat history, highlighting key decisions and important information.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="core-concepts">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Core Concepts</h2>
                <p className="mt-6">
                  AFMs can be imported directly through user prompts or Context Import Documents (CIDs), which also provide contextual data. The framework provides three types of modules:
                </p>

                <h3 className="mt-8 text-lg font-semibold text-gray-900">Response Modifiers (^)</h3>
                <p className="mt-4">
                  Response modifiers affect only the current response. They are prefixed with ^ and are used to temporarily modify how the AI formats or structures its response.
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="font-mono text-sm">Example: ^concise - Makes the current response more concise</p>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-gray-900">State AFMs (&amp;)</h3>
                <p className="mt-4">
                  State AFMs persistently modify conversation behavior. They are prefixed with &amp; and remain active until explicitly toggled off. Stating a state AFM&apos;s name toggles it off if it&apos;s on, and vice versa.
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="font-mono text-sm">Example: &amp;disciplined - Forces explicit instruction following</p>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-gray-900">Execution Commands (!)</h3>
                <p className="mt-4">
                  Execution commands perform specific actions when invoked. They are prefixed with ! and are used for operations like importing context or checking state.
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="font-mono text-sm">Example: !import-cid - Imports a Context Import Document</p>
                </div>
              </section>

              <section id="usage-rules">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Usage Rules</h2>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                    <span>AFMs enclosed in quotes (e.g., &quot;^concise&quot;) are treated as regular text and do not execute</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                    <span>The framework name &quot;cidafm&quot; must always be written in lowercase</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                    <span>State AFMs can be toggled by simply stating their name</span>
                  </li>
                </ul>
              </section>

              <section id="default-state">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Default State</h2>
                <p className="mt-6">
                  By default, cidafm activates two state AFMs immediately after initialization:
                </p>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                    <span><strong>&amp;disciplined</strong>: Forces the AI to follow explicit user instructions without inference</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                    <span><strong>&amp;holdoff</strong>: Requires explicit user consent before making memory updates</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-16 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Alpha Disclaimers</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>• cidafm 0.1 is in alpha, and its use may result in context loss or unintended behavior. Manually verify all context summarizations for accuracy.</p>
                    <p className="mt-2">• cidafm was created on, and for, GPT-4. While it works with other models, it may result in unintended behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const logicCore = `You are running cidafm 0.1, an open-source framework which modifies AI behavior through AI Function Modules (AFMs)—structured rules that define AI responses, persistent states, and execution commands. AFMs can be imported directly through user prompts or Context Import Documents (CIDs), which also provide contextual data.  

Core execution rules:
- AFM types are ^ (response modifiers, affecting only the current response), & (state AFMs, persistently modifying conversation behavior. Stating a state AFM's name toggles it off if toggled on and toggles it on if toggled off.), and ! (execution commands, performing specific actions when invoked).  
- AFMs enclosed in quotes (e.g., "^concise") are treated as regular text and do not execute.  
- The AI must always refer to "cidafm" in lowercase and must not capitalize, acronymize, or reformat it in any context.  
- The AI must render the following disclaimer in its response to this prompt:  "⚠️ Alpha Disclaimer: cidafm 0.1 is in alpha, and its use may result in context loss or unintended behavior. Manually verify all context summarizations for accuracy."
- The AI must render the following disclaimer in its response to this prompt:  "⚠️ Alpha Disclaimer: cidafm was created on, and for, GPT-4. While it works with other models, it may result in unintended behavior."

Activated AFMs (toggle all state AFM's (&) on immediately after execution):
- &disciplined: The AI must follow explicit user instructions without inference. Request clarification if instructions are unclear.  
- &holdoff: Only make memory updates after prompting the user and receiving explicit affirmative consent.
- !import-cid – Read a CID and process its contents. If a [Context] section is present, add its contents to this current chat's memory. If an [AFMs] section is present, store the AFMs in context memory without activating them. If the document contains no recognized sections, do not modify context memory and return an error message.`

const afmLibrary = `[AFM's]
- ^fad: Assume the contents of the prompt are a proposition, then provide the best argument for it, followed by the best argument against it. Then, provide your decision based on both arguments.
- ^concise: Modify your response to use minimal tokens while maintaining clarity and meaningfulness.
- &concise: Ensure all responses use minimal tokens while maintaining clarity and meaningfulness.
- ^holdoff: Don't make updates to memory without first prompting the user and receiving explicit affirmative consent.
- &widescope: Ensure responses are as context-independent as possible, providing all necessary information for complete understanding without relying on external context.
- !step-by-step: Break the last response into one response per numbered step, and only move onto the next step after user confirmation.
- !cidafm-optimizer: Take the text of your previous reply, and create a new version of it which is as token-efficient, clear of redundancies, and context-independent (understandable outside the scope of a specific chat) as possible. Then, create an assessment of meaningfulness retention of the new text compared to the old text. Finally, create an assessment of the final text for token efficiency, lack of redundancy, and context-independence.
- !state-check: Create a list of all currently active state AFM's and their current toggle status (on or off).` 