/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

export const getSrcImage = (s) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${s}`;
};

export default nextConfig;
