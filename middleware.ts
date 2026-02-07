import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const PASSWORD = process.env.STAGING_PASSWORD;

  // 1. WICHTIG: Wenn kein Passwort gesetzt ist, Schutz komplett deaktivieren
  if (!PASSWORD) {
    return NextResponse.next();
  }

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      // atob ist der sicherste Weg in der Edge-Runtime zum Dekodieren
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      // 2. Abgleich: Benutzername 'admin' und dein Passwort aus Vercel
      if (user === 'admin' && pwd === PASSWORD) {
        return NextResponse.next();
      }
    } catch (e) {
      console.error("Fehler beim Dekodieren der Auth-Daten");
    }
  }

  // 3. Wenn die Daten falsch sind oder fehlen: 401 zurückgeben
  return new NextResponse('Bitte Zugangsdaten eingeben.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Retourio Staging Area"',
    },
  });
}

// 4. Matcher: Schützt alles außer API-Routen und statische Next.js Dateien
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};