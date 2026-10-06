/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export ke folder `out/`.
  // Hapus baris `output` ini saat dashboard/login dibuat nanti,
  // karena auth, middleware, dan route handler butuh server Next.js.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
