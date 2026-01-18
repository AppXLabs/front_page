/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow images from all domains (needed for subdomain routing)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;