import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;

module.exports = {
  images: {
    domains: [
      "s16.stc.yc.kpcdn.net",
      "play-lh.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "altay.sibdom.ru",
      "ombudsmanbiz22.ru",
      "www.maria-ra.ru",
      "www.alpu44.ru",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};
