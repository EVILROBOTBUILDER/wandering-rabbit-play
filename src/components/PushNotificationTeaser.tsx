"use client";

import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PushNotificationTeaser = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-mtv-blue-700 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 max-w-xs">
      <Bell className="h-6 w-6" />
      <div className="flex-grow">
        <p className="font-semibold text-sm">Get Real-time Alerts!</p>
        <p className="text-xs">Enable push notifications for urgent MVT updates.</p>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsVisible(false)} 
        className="text-white hover:bg-mtv-blue-600"
        aria-label="Dismiss notification teaser"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PushNotificationTeaser;