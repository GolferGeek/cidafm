-- Function to create the migrations table
create or replace function create_migrations_table()
returns void
language plpgsql
security definer
as $$
begin
  create table if not exists public._migrations (
    id uuid default gen_random_uuid() primary key,
    name text not null unique,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
  );
end;
$$;

-- Function to create AFM schema
create or replace function create_afm_schema()
returns void
language plpgsql
security definer
as $$
begin
  -- Create enum if it doesn't exist
  if not exists (select 1 from pg_type where typname = 'afm_type') then
    create type afm_type as enum ('response_modifier', 'state', 'execution');
  end if;

  -- Create AFMs table if it doesn't exist
  create table if not exists public.afms (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    prefix char(1) not null,
    type afm_type not null,
    description text not null,
    is_original boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(name, prefix)
  );

  -- Create updated_at trigger function if it doesn't exist
  create or replace function update_updated_at_column()
  returns trigger as $$
  begin
    new.updated_at = timezone('utc'::text, now());
    return new;
  end;
  $$ language plpgsql;

  -- Create or replace the trigger
  drop trigger if exists update_afms_updated_at on public.afms;
  create trigger update_afms_updated_at
    before update on public.afms
    for each row
    execute function update_updated_at_column();
end;
$$; 