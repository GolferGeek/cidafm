# AFM Library

## Response Modifiers (^)
- **^fad**: Assume the contents of the prompt are a proposition, then provide the best argument for it, followed by the best argument against it. Then, provide your decision based on both arguments.
- **^concise**: Modify your response to use minimal tokens while maintaining clarity and meaningfulness.

## State AFMs (&)
- **&concise**: Ensure all responses use minimal tokens while maintaining clarity and meaningfulness.
- **&widescope**: Ensure responses are as context-independent as possible, providing all necessary information for complete understanding without relying on external context.

## Execution Commands (!)
- **!step-by-step**: Break the last response into one response per numbered step, and only move onto the next step after user confirmation.
- **!cidafm-optimizer**: Take the text of your previous reply, and create a new version of it which is:
  - Token-efficient
  - Clear of redundancies
  - Context-independent (understandable outside the scope of a specific chat)
  Then, create an assessment of:
  - Meaningfulness retention compared to the old text
  - Token efficiency
  - Lack of redundancy
  - Context-independence
- **!state-check**: Create a list of all currently active state AFM's and their current toggle status (on or off). 