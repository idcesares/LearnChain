/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader', 'markdown-loader']

      });
      return config;
    }
  }