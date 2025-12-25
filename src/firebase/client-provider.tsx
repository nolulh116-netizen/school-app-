'use client';
import { initializeFirebase, FirebaseProvider } from '@/firebase';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { app, auth, firestore } = initializeFirebase();
  return (
    <FirebaseProvider value={{ firebaseApp: app, auth, firestore }}>
      {children}
    </FirebaseProvider>
  );
}
