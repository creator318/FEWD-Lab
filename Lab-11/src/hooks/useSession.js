// Custom hook for session management using sessionStorage
import { useState, useEffect } from 'react';

export function useSession() {
  const [session, setSessionState] = useState(() => {
    const stored = sessionStorage.getItem('session');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (session) {
      sessionStorage.setItem('session', JSON.stringify(session));
    } else {
      sessionStorage.removeItem('session');
    }
  }, [session]);

  const setSession = (value) => {
    setSessionState(value);
  };

  return [session, setSession];
}
