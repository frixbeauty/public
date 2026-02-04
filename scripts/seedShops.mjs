import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import fs from "fs";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!config.projectId) {
  console.error("Missing Firebase env vars. Copy .env.example to .env.local.");
  process.exit(1);
}

const app = initializeApp(config);
const db = getFirestore(app);
const data = JSON.parse(fs.readFileSync(new URL("../seed/shops.json", import.meta.url)));

for (const shop of data) {
  await addDoc(collection(db, "shops"), {
    ...shop,
    createdAt: new Date().toISOString()
  });
}

console.log("Seeded shops:", data.length);
