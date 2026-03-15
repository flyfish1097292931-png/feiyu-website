import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Static generation only
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
