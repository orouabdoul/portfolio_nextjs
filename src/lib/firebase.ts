import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
};

let appCheckInitialized = false;

export function isFirebaseConfigured() {
  return Object.values(firebaseConfig).every((value) => value.trim().length > 0);
}

export function getFirebaseDb() {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase client configuration is missing.");
  }

  const app =
    getApps().find((existingApp) => existingApp.name === "portfolio") ??
    initializeApp(firebaseConfig, "portfolio");
  const appCheckSiteKey = process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_SITE_KEY;

  if (typeof window !== "undefined" && appCheckSiteKey && !appCheckInitialized) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
    appCheckInitialized = true;
  }

  return getFirestore(app);
}
