import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
    BRAND_COLOR,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
} from "@/lib/site";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
        "houses for rent Kenya",
        "apartments for rent Nairobi",
        "verified rentals",
        "property management Kenya",
        "list my property",
        "rental platform Kenya",
        "Homigram",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: "/" },
    category: "real estate",
    openGraph: {
        type: "website",
        siteName: SITE_NAME,
        locale: "en_KE",
        url: "/",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: BRAND_COLOR,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en-KE" className={`${inter.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-foreground"
                >
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
