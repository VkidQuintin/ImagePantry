"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const router = useRouter();
    const auth = getAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login'); // Redirect to login page if not authenticated
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [auth, router]);

    if (loading) {
      return <p>Loading...</p>; // Show a loading message or spinner
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
