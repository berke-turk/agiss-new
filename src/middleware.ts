// middleware.ts (root dizinde olmalı)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // URL'den pathname al
    const pathname = request.nextUrl.pathname

    // Örnek: /gizli sayfayı ana sayfaya yönlendir
    if (pathname.startsWith('/static'))
        // Devam et
        return NextResponse.next()

    else if (
        !pathname.startsWith('/tr') &&
        !pathname.startsWith('/en')
    ) {
        return NextResponse.redirect(new URL(`/tr`, request.url))
    }

    // Devam et
    return NextResponse.next()
}

// Hangi path'lerde çalışacağını belirt
export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /fonts (inside /public)
         * 4. /images (inside /public)
         * 5. all root files inside /public (robots.txt, favicon.ico, etc.)
         */
        '/((?!api|_next|fonts|images|[\\w-]+\\.\\w+).*)'
    ]
}