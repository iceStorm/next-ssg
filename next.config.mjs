const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: (isProd && process.env.BASE_PATH) ?? "",

  output: "export",
  cleanDistDir: true,
};

export default nextConfig;
