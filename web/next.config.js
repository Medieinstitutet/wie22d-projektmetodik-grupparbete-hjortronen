/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
        images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'static.goshopping.dk',
            port: '',
            pathname: '/products/**',
            },
        ],
        },
        nextConfig,
    
    }


    