// One-shot script: fetches free Unsplash photos into public/images/.
// Uses the public napi endpoint (same one unsplash.com uses); no API key needed.
// Filters out Unsplash+ (paid) results by URL host.

import { access, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "public", "images");

const targets = [
    { file: "hero-building.jpg", query: "modern apartment building exterior", orientation: "portrait", w: 1200 },
    { file: "hero-interior.jpg", query: "modern living room scandinavian", orientation: "landscape", w: 1200 },
    { file: "confidence-building.jpg", query: "tall residential apartment tower blue sky", orientation: "portrait", w: 900 },
    { file: "confidence-interior.jpg", query: "scandinavian living room grey sofa", orientation: "landscape", w: 900 },
    { file: "how-it-works.jpg", query: "woman smiling using smartphone", orientation: "landscape", w: 1400 },
    { file: "investment-building.jpg", query: "apartment building exterior sunny", orientation: "portrait", w: 900 },
    { file: "investment-interior.jpg", query: "modern kitchen apartment", orientation: "squarish", w: 900 },
    { file: "listing-1.jpg", query: "modern apartment living room grey sofa", orientation: "squarish", w: 240 },
    { file: "listing-2.jpg", query: "kitchen apartment", orientation: "squarish", w: 240 },
    { file: "listing-3.jpg", query: "apartment bedroom cozy", orientation: "squarish", w: 240 },
    { file: "handle-building.jpg", query: "modern residential apartment building glass", orientation: "portrait", w: 900 },
    { file: "handle-livingroom.jpg", query: "bright modern living room interior", orientation: "landscape", w: 800 },
    { file: "handle-mortgage.jpg", query: "house keys contract document", orientation: "landscape", w: 800 },
];

async function pickPhoto(query, orientation) {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(
        query
    )}&per_page=15&orientation=${orientation}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`Search failed for "${query}": ${res.status}`);
    const data = await res.json();
    const free = data.results.find((p) =>
        p.urls?.regular?.startsWith("https://images.unsplash.com/")
    );
    if (!free) throw new Error(`No free result for "${query}"`);
    return free;
}

async function download(url, dest) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Download failed ${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return buf.length;
}

await mkdir(OUT_DIR, { recursive: true });
const credits = [];

async function exists(p) {
    try {
        await access(p);
        return true;
    } catch {
        return false;
    }
}

for (const t of targets) {
    const dest = join(OUT_DIR, t.file);
    if (await exists(dest)) {
        console.log(`✓ ${t.file} already exists — skipping`);
        continue;
    }
    process.stdout.write(`→ ${t.file} (${t.query}) ... `);
    try {
        const photo = await pickPhoto(t.query, t.orientation);
        const src = `${photo.urls.raw}&w=${t.w}&fm=jpg&q=80&fit=max`;
        const bytes = await download(src, dest);
        credits.push({
            file: t.file,
            by: photo.user?.name,
            profile: photo.user?.links?.html,
            page: photo.links?.html,
        });
        console.log(`OK (${(bytes / 1024).toFixed(0)} KB) — ${photo.user?.name}`);
    } catch (err) {
        console.log(`FAIL — ${err.message}`);
    }
}

if (credits.length) {
    await writeFile(
        join(OUT_DIR, "CREDITS.json"),
        JSON.stringify(credits, null, 2)
    );
    console.log(`\nCredits saved to public/images/CREDITS.json`);
}
