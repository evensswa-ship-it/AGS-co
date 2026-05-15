# Déploiement AGS & Co

## 1. Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Ouvrir l'éditeur SQL et exécuter le fichier `supabase/schema.sql`
3. Récupérer vos clés dans **Project Settings > API** :
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2. Variables d'environnement

Remplir `.env.local` pour le développement local :

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

## 3. Vercel

1. Pousser le repo sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Dans **Settings > Environment Variables**, ajouter les deux variables ci-dessus
4. Déployer

## 4. Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure des composants

```
app/
  components/
    Header.tsx              — Navigation fixe avec scroll effect
    Hero.tsx                — Section hero plein écran
    ProblemSection.tsx      — 5 blocs de constat
    PositioningSection.tsx  — Positionnement + 3 piliers
    ExpertiseSection.tsx    — 4 cartes d'expertise
    InsuranceVerticalSection.tsx — Verticale assurance
    DiagnosticOfferSection.tsx   — Offre diagnostic + format
    MethodSection.tsx       — 5 étapes de méthode
    LeadForm.tsx            — Formulaire + connexion Supabase
    Footer.tsx              — Pied de page
  page.tsx                  — Page principale
  layout.tsx                — Layout root
  globals.css               — Design system tokens
lib/
  supabase.ts               — Client Supabase (lazy init)
supabase/
  schema.sql                — DDL table leads + RLS policies
```
