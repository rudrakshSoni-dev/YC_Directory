import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
  turbo: {},
},

  webpack: (config) => {
    // Fix for Next.js 15 missing html-context
    config.resolve.alias[
      "next/dist/server/route-modules/app-page/vendored/contexts/html-context"
    ] = path.resolve("./patches/fix-html-context.js");
    return config;
  },

  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
    domains: ["avatars.githubusercontent.com"],
  },
};

export default withSentryConfig(nextConfig, {
  org: "none-fqi",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
