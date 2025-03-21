-- Create the execute_sql function
create or replace function execute_sql(sql text)
returns void
language plpgsql
security definer
as $$
begin
  execute sql;
end;
$$; 