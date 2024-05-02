const path = require('path');

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dyweauwosjjahwbmhpiw.supabase.co',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};