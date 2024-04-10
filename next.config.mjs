/** @type {import('next').NextConfig} */
const nextConfig = {images: {
        domains: ['i.imgur.com']
    },
    output: 'export',
    distDir: 'build'
};

export default nextConfig;
