-- Create enum for AFM types
create type afm_type as enum ('response_modifier', 'state', 'execution');

-- Create AFMs table
create table if not exists public.afms (
    id uuid default gen_random_uuid() primary key,
    name text not null unique,
    prefix char(1) not null,
    type afm_type not null,
    description text not null,
    is_original boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
create trigger update_afms_updated_at
    before update on public.afms
    for each row
    execute function update_updated_at_column();

-- Insert original AFMs from documentation
insert into public.afms (name, prefix, type, description, is_original) values
-- Response Modifiers
('fad', '^', 'response_modifier', 'Assume the contents of the prompt are a proposition, then provide the best argument for it, followed by the best argument against it. Then, provide your decision based on both arguments.', true),
('concise', '^', 'response_modifier', 'Modify your response to use minimal tokens while maintaining clarity and meaningfulness.', true),

-- State AFMs
('concise', '&', 'state', 'Ensure all responses use minimal tokens while maintaining clarity and meaningfulness.', true),
('widescope', '&', 'state', 'Ensure responses are as context-independent as possible, providing all necessary information for complete understanding without relying on external context.', true),
('disciplined', '&', 'state', 'The AI must follow explicit user instructions without inference. Request clarification if instructions are unclear.', true),
('holdoff', '&', 'state', 'Only make memory updates after prompting the user and receiving explicit affirmative consent.', true),

-- Execution Commands
('step-by-step', '!', 'execution', 'Break the last response into one response per numbered step, and only move onto the next step after user confirmation.', true),
('cidafm-optimizer', '!', 'execution', 'Take the text of your previous reply, and create a new version of it which is token-efficient, clear of redundancies, and context-independent. Then assess meaningfulness retention, token efficiency, redundancy, and context-independence.', true),
('state-check', '!', 'execution', 'Create a list of all currently active state AFMs and their current toggle status (on or off).', true),
('import-cid', '!', 'execution', 'Read a CID and process its contents. Add Context section to chat memory, store AFMs section without activation, or return error if no recognized sections.', true); 