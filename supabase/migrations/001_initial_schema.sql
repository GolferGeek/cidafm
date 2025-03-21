-- Example migration file
-- You can create tables, functions, etc.
create table if not exists public.todos (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
); 