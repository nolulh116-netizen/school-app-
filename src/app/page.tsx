import { InteractiveButton } from '@/components/interactive-button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
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
        </CardContent>
      </Card>
    </main>
  );
}
