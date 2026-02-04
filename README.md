# Gloweasy MVP (Firebase Studio ready)

Curated beauty booking workflow for Korea visitors. Guests submit a request, admins confirm one main option plus two alternatives, and the guest tracks progress via a private link.

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- Firebase Auth (admin only), Firestore, Firebase Hosting

## Setup
1) Install dependencies
```bash
npm install
```

2) Configure Firebase
- Create a Firebase project.
- Enable **Email/Password** auth.
- Create a Firestore database in **production** or **test** mode.
- Copy `.env.example` to `.env.local` and fill in your web app config.

3) Run locally
```bash
npm run dev
```
Open `http://localhost:3000`.

4) Apply Firestore rules
```bash
firebase deploy --only firestore:rules
```

5) Seed shops
```bash
npm run seed:shops
```

## Admin access
- Create an admin user in Firebase Auth (Email/Password).
- Any authenticated user can access admin screens in this MVP.

## Routes
Guest:
- `/request/new`
- `/request/[token]`

Admin:
- `/admin/login`
- `/admin/requests`
- `/admin/requests/[id]`
- `/admin/directory`

## Data model (Firestore)
Collections:
- `requests/{token}`
- `shops/{id}`

## Notes / TODO
- Add Storage upload for reference photos.
- Add admin role claims for stricter security.
- Add payment integration when ready.

## Deployment (Firebase Hosting)
Use Firebase frameworks integration:
```bash
firebase init hosting
firebase deploy
```
