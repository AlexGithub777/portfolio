"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Navigation() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = (sectionId: string) => {
        const header = document.querySelector("nav");
        const headerHeight = header ? header.offsetHeight : 40;

        // If not on home page, store target and navigate
        if (pathname !== "/") {
            sessionStorage.setItem("scrollTarget", sectionId);
            router.push("/"); // ScrollHandler will handle the scrolling
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const elementPosition =
                    element.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
            }
        }

        setIsMenuOpen(false);
    };

    const navigateHome = () => {
        router.push("/");
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <button
                        onClick={navigateHome}
                        className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
                    >
                        Alex Scott
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection("blog")}
                            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="block w-full text-left px-2 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="block w-full text-left px-2 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection("blog")}
                            className="block w-full text-left px-2 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="block w-full text-left px-2 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
