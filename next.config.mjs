import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
};

// Enable MDX support
const withMDX = nextMDX({
    extension: /\.mdx?$/,
});

export default withMDX({
    ...nextConfig,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
