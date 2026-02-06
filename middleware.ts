import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Das Passwort definierst du in deinen Vercel Environment Variables
  const PASSWORD = process.env.STAGING_PASSWORD;

  // Wenn kein Passwort gesetzt ist (z.B. lokal), darf jeder durch
  if (!PASSWORD) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    const authValue = authHeader.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Benutzername ist hier fest auf 'admin' gesetzt
    if (user === 'admin' && pwd === PASSWORD) {
      return NextResponse.next();
    }
  }

  // Wenn das Passwort falsch oder nicht da ist: Browser-Login erzwingen
  return new NextResponse('Zugriff verweigert. Bitte Zugangsdaten eingeben.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Retourio Staging"',
    },
  });
}

// Schützt alle Pfade außer statischen Dateien (Bilder, Icons)
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};