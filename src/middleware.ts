import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidAppSubdomain, getPathForSubdomain } from "./config/apps";

export function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    const pathname = request.nextUrl.pathname;

    // Extract subdomain from hostname
    // Examples:
    // - notifypay.appxlab.space -> notifypay
    // - jaanuji.appxlab.space -> jaanuji
    // - www.appxlab.space -> www
    // - appxlab.space -> appxlab
    // - notifypay.localhost -> notifypay (for local development)
    const parts = hostname.split(".");

    // For localhost:3000, parts will be ["localhost:3000"]
    // For notifypay.localhost:3000, parts will be ["notifypay", "localhost:3000"]
    // For notifypay.appxlab.space, parts will be ["notifypay", "appxlab", "space"]

    let subdomain = "";

    if (parts.length >= 2) {
        // Check if it's a localhost subdomain (e.g., notifypay.localhost)
        if (parts[1].startsWith("localhost")) {
            subdomain = parts[0];
        }
        // Check if it's a production subdomain (e.g., notifypay.appxlab.space)
        else if (parts.length >= 3) {
            subdomain = parts[0];
        }
    }

    // Skip if no subdomain or if it's www/appxlab (main domain)
    if (!subdomain || subdomain === "www" || subdomain === "appxlab") {
        return NextResponse.next();
    }

    // Check if this is a valid app subdomain
    if (isValidAppSubdomain(subdomain)) {
        const appPath = getPathForSubdomain(subdomain);

        // If the pathname already starts with the app path, don't rewrite
        // This prevents infinite loops
        if (pathname.startsWith(appPath)) {
            return NextResponse.next();
        }

        // Handle root path (/) -> rewrite to app home page
        if (pathname === "/") {
            const url = request.nextUrl.clone();
            url.pathname = appPath;
            return NextResponse.rewrite(url);
        }

        // Handle nested paths (e.g., /privacy) -> rewrite to app nested page
        // notifypay.appxlab.space/privacy -> /notifypay/privacy
        const url = request.nextUrl.clone();
        url.pathname = `${appPath}${pathname}`;
        return NextResponse.rewrite(url);
    }

    // If subdomain doesn't match any app, continue normally
    return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
    // Run on all routes except static files and API routes
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc.)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
    ],
};
