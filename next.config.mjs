/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
};

export const getSrcImage = (s) => {
  return `${process.env.BASE_PATH}/${s}`;
};

export default nextConfig;
