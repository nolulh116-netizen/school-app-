"use client";

import { InteractiveButton } from '@/components/interactive-button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useFirebase } from '@/firebase';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Home() {
  const { firebaseApp } = useFirebase();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline">Bare Bones Project</CardTitle>
          <CardDescription className="text-lg">
            A minimal starting point for your application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="pt-4">
            <InteractiveButton />
          </div>
          <div className="mt-6 flex justify-center">
            {firebaseApp ? (
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Firebase Connected</span>
              </Badge>
            ) : (
              <Badge variant="destructive" className="flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                <span>Firebase Not Connected</span>
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
