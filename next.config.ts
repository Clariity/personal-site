import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  env: {
    BUILD_MONTH_YEAR: new Date().toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    }),
  },
};

export default nextConfig;
