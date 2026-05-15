-- AGS & Co — Table leads
-- À exécuter dans l'éditeur SQL de votre projet Supabase

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  email       text not null,
  organization text not null,
  sector      text not null,
  role        text not null,
  topic       text not null,
  message     text,
  consent     boolean not null default false
);

-- Sécurité : lecture uniquement via service_role (admin)
alter table public.leads enable row level security;

-- Autoriser l'insertion depuis le client public (anon key)
create policy "Allow anon insert"
  on public.leads
  for insert
  to anon
  with check (consent = true);

-- Interdire toute lecture depuis le client public
create policy "Deny anon select"
  on public.leads
  for select
  to anon
  using (false);
