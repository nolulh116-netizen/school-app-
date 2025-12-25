"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function InteractiveButton() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleClick} size="lg" variant="destructive">
        <MessageCircle className="mr-2 h-5 w-5" /> New Button Color!
      </Button>
      {showMessage && (
        <div className="p-4 bg-secondary rounded-lg text-center animate-in fade-in duration-500 w-full">
          <p className="text-sm text-secondary-foreground">
            Great! The UI changes are working.
          </p>
        </div>
      )}
    </div>
  );
}
