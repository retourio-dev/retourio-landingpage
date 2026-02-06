import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  // Das Passwort aus deinen Vercel Environment Variables
  const PASSWORD = process.env.STAGING_PASSWORD;

  // Falls kein Passwort gesetzt ist, Schutz überspringen (wichtig für Localhost)
  if (!PASSWORD) {
    return NextResponse.next();
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

    // Benutzername ist fest 'admin', Passwort ist dein STAGING_PASSWORD
    if (user === 'admin' && pwd === PASSWORD) {
      return NextResponse.next();
    }
  }

  // Login-Fenster im Browser erzwingen
  return new NextResponse('Bitte Zugangsdaten eingeben.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Retourio Safe Area"',
    },
  });
}

// Diese Zeilen sind extrem wichtig: Sie sagen Next.js, was geschützt werden soll
export const config = {
  matcher: [
    /*
     * Matcht alle Pfade außer:
     * 1. /api/ (deine Stripe API muss frei bleiben!)
     * 2. /_next/ (Statische Dateien)
     * 3. /static (Bilder etc.)
     * 4. favicon.ico, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};