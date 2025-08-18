"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const scrollTarget = sessionStorage.getItem("scrollTarget");
        if (!scrollTarget) return;

        const scrollToElement = () => {
            const element = document.getElementById(scrollTarget);
            if (!element) return;

            // Calculate header height dynamically
            const header = document.querySelector("nav");
            const headerHeight = header ? header.offsetHeight : 0;

            // Calculate position relative to top of document
            const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({ top: elementPosition, behavior: "smooth" });

            // Clean up sessionStorage
            sessionStorage.removeItem("scrollTarget");
        };

        // Ensure we scroll after everything has rendered (images, MDX, etc.)
        if (document.readyState === "complete") {
            requestAnimationFrame(scrollToElement);
        } else {
            window.addEventListener("load", scrollToElement, { once: true });
        }
    }, [pathname]);

    return null;
}
