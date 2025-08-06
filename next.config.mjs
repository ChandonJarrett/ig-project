/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fuwiwzrnssrjqcojzdhw.supabase.co',
                pathname: 'storage/v1/object/public/avatars/**',
            },
            {
                protocol: 'https',
                hostname: 'fuwiwzrnssrjqcojzdhw.supabase.co',
                pathname: 'storage/v1/object/public/posts/**',
            },
        ],
    }
};

export default nextConfig;
