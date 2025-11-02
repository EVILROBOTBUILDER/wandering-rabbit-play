"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useLocation } from 'react-router-dom';

interface SessionContextType {
  session: Session | null;
  supabase: typeof supabase;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setLoading(false);

        const authPages = ['/residents/login', '/residents/signup'];
        const isAuthPage = authPages.includes(location.pathname);

        if (currentSession && isAuthPage) {
          // User is logged in and trying to access login/signup, redirect to home
          navigate('/');
        } else if (!currentSession && !isAuthPage && location.pathname !== '/404') {
          // User is not logged in and trying to access a non-auth page (excluding 404), redirect to login
          // NOTE: For now, we're only redirecting *away* from login/signup if authenticated.
          // Implementing full protected routes would require more specific route checks.
        }
      }
    );

    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      const authPages = ['/residents/login', '/residents/signup'];
      const isAuthPage = authPages.includes(location.pathname);
      if (session && isAuthPage) {
        navigate('/');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  if (loading) {
    // You might want a loading spinner here
    return <div className="min-h-screen flex items-center justify-center">Loading authentication...</div>;
  }

  return (
    <SessionContext.Provider value={{ session, supabase }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a SessionContextProvider');
  }
  return context;
};