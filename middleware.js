// middleware.js
import { getAuth } from 'firebase/auth';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const auth = getAuth();
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated
  const user = auth.currentUser; // Modify as needed to check actual auth state

  if (!user && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
