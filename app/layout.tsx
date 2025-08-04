import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alex Scott | Portfolio",
    description:
        "Portfolio of Alex Scott, a passionate full-stack developer...",
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
        description: "Portfolio showcasing modern web development projects...",
        type: "website",
    },
    icons: {
        icon: "/icon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/_static/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
