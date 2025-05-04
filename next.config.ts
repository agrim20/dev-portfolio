import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Agrim_resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
