import React from "react";
import { ImgHTMLAttributes } from "react";

// Use React's built-in img attributes directly to avoid type conflicts
type CustomImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function CustomImage({ src, alt, ...props }: CustomImageProps) {
    // Handle the case where src might be a Blob or undefined
    let srcString = "";

    if (typeof src === "string") {
        srcString = src;
    } else if (
        src &&
        typeof src === "object" &&
        "constructor" in src &&
        src.constructor.name === "Blob"
    ) {
        srcString = URL.createObjectURL(src as Blob);
    }

    if (!srcString) {
        return null;
    }

    return <img src={srcString} alt={alt || ""} {...props} />;
}
