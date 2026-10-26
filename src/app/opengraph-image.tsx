import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND_COLOR, SITE_NAME } from "@/lib/site";

export const alt = "Homigram: Rent or List, We handle the rest.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (weight: 500 | 800) =>
    readFile(
        join(
            process.cwd(),
            `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`,
        ),
    );

export default async function Image() {
    const [medium, extraBold] = await Promise.all([fontFile(500), fontFile(800)]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 84px",
                    background: "#eff4ef",
                    color: "#000",
                    fontFamily: "Inter",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <svg width="76" height="72" viewBox="0 0 40 38">
                        <path d="M10.0139 18.0005L18.6862 22.897V32.6899L10.0139 37.5864L1.34161 32.6899V22.897L10.0139 18.0005Z" fill={BRAND_COLOR} />
                        <path d="M29.0139 18L37.6862 22.8965V32.6894L29.0139 37.5859L20.3416 32.6894V22.8965L29.0139 18Z" fill={BRAND_COLOR} />
                        <path d="M19.5422 0L29.0619 5.31304V15.9391L19.5422 21.2521L10.0224 15.9391V5.31304L19.5422 0Z" fill={BRAND_COLOR} />
                    </svg>
                    <div style={{ fontSize: 48, fontWeight: 500 }}>
                        {SITE_NAME.toLowerCase()}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1.05 }}>
                        Rent or List,
                    </div>
                    <div
                        style={{
                            fontSize: 104,
                            fontWeight: 800,
                            lineHeight: 1.05,
                            color: BRAND_COLOR,
                        }}
                    >
                        We handle the rest.
                    </div>
                </div>

                <div style={{ fontSize: 34, color: "#333" }}>
                    Verified rentals and hands-off property management in Kenya
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Inter", data: medium, weight: 500, style: "normal" },
                { name: "Inter", data: extraBold, weight: 800, style: "normal" },
            ],
        },
    );
}
