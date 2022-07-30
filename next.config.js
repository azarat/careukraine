/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: { removeViewBox: false },
                },
              },
            ]},
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  
}

module.exports = nextConfig
