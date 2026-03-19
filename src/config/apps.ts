/**
 * Centralized configuration for app subdomains
 * Add new apps here to enable subdomain routing
 */

export const APP_SUBDOMAINS = {
    notifypay: "/notifypay",
    jaanuji: "/jaanuji",
    godwall: "/godwall",
    astroai: "/astroai",
    "flow-wispr": "/flow-wispr",
    // Future apps can be added here
} as const;

export type AppSubdomain = keyof typeof APP_SUBDOMAINS;

/**
 * Check if a given subdomain is a valid app subdomain
 */
export function isValidAppSubdomain(subdomain: string): subdomain is AppSubdomain {
    return subdomain in APP_SUBDOMAINS;
}

/**
 * Get the path for a given subdomain
 */
export function getPathForSubdomain(subdomain: AppSubdomain): string {
    return APP_SUBDOMAINS[subdomain];
}
