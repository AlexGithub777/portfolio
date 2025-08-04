import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head"; // Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alex Scott | Portfolio",
    description:
        "Portfolio of Alex Scott, a passionate full-stack developer specializing in modern web technologies including Go, C#, Python, React, and Next.js.",
    keywords: [
        "Full-Stack Developer",
        "Go",
        "C#",
        "Python",
        "React",
        "Next.js",
        "Web Development",
    ],
    authors: [{ name: "Alex Scott" }],
    openGraph: {
        title: "Alex Scott | Portfolio",
        description:
            "Portfolio showcasing modern web development projects and technical expertise",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/images/site.webmanifest" />
            </Head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
