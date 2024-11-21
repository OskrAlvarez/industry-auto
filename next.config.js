/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfccunevwyzjcdfoyuti.supabase.co",
        pathname: "/storage/v1/object/public/product_bucket/images/**",
      },
    ]
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

module.exports = nextConfig;
