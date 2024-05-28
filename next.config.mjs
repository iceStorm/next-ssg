/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next-ssg",
  assetPrefix: "/next-ssg/",

  output: "export",
  cleanDistDir: true,
};

export default nextConfig;
