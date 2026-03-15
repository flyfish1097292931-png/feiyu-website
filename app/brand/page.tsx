"use client";

import Link from "next/link";
import React from "react";
import MinimalNav from "@/components/MinimalNav";
import { useLanguage } from "@/components/LanguageContext";

type Rule = { title: string; items: string[] };

const RULES: Rule[] = [
    {
        title: "Logo",
        items: [
            "Primary mark: the flying-fish symbol.",
            "Allowed only in monochrome: black on white / white on black.",
            "No gradients, shadows, outlines, textures.",
        ],
    },
    {
        title: "Clear space",
        items: [
            "Minimum clear space = 0.5 × head-tip length (X).",
            "No text / frames / images inside the clear space.",
        ],
    },
    {
        title: "Minimum size",
        items: ["Digital: ≥ 24px height.", "Print: ≥ 10mm height."],
    },
    {
        title: "Incorrect usage",
        items: [
            "Do not stretch, skew, rotate.",
            "Do not change stroke/shape proportions.",
            "Do not recolor (no brand color yet).",
            "Do not add extra details or text inside the mark.",
        ],
    },
    {
        title: "Background",
        items: [
            "Preferred: pure black / pure white.",
            "Allowed: dark solid backgrounds with high contrast.",
            "Avoid: low-contrast, busy patterns, gradients.",
        ],
    },
    {
        title: "Icons",
        items: [
            "Favicon: simplified silhouette; centered; generous padding.",
            "App icon: black rounded square; white mark centered; ≥ 20% padding.",
        ],
    },
    {
        title: "Symbol philosophy",
        items: [
            "Direction · Momentum · Structure · Breakthrough.",
            "Keep it silent and precise. Less, but inevitable.",
        ],
    },
    {
        title: "Typography (tone)",
        items: [
            "Recommended: Inter / SF Pro / Helvetica Neue / Noto Sans.",
            "Use uppercase labels + wide tracking for structure headings.",
            "Avoid decorative typefaces.",
        ],
    },
];

const DO: string[] = [
    "Monochrome only",
    "High contrast",
    "Keep proportions",
    "Use clear space",
];

const DONT: string[] = [
    "No gradients/shadows",
    "No stretching/skew",
    "No recolors",
    "No extra details",
];

function Divider() {
    return <div className="h-px w-full bg-white/10" />;
}

function Label({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-xs tracking-[0.35em] uppercase text-white/60">
            {children}
        </div>
    );
}

function H1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-3xl sm:text-4xl tracking-[0.18em] uppercase font-light">
            {children}
        </h1>
    );
}

function H2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-lg tracking-[0.22em] uppercase font-light text-white/85">
            {children}
        </h2>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 text-sm leading-relaxed text-white/75">
            {items.map((t, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-[0.35em] h-1 w-1 rounded-full bg-white/35" />
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    );
}

function MarkPlaceholder({
    variant,
}: {
    variant: "dark" | "light";
}) {
    const isDark = variant === "dark";
    return (
        <div
            className={[
                "relative w-full aspect-[16/9] rounded-2xl overflow-hidden",
                isDark ? "bg-black border border-white/15" : "bg-white border border-black/10",
            ].join(" ")}
        >
            <div className="absolute inset-0 grid place-items-center">
                <div className="relative w-56 h-56">
                    {isDark ? (
                        <img
                            src="/logo-whitebg.svg"
                            alt="Feiyu Logo Dark"
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <img
                            src="/logo-whitebg.svg"
                            alt="Feiyu Logo Light"
                            className="w-full h-full object-contain brightness-0"
                        />
                    )}
                </div>
            </div>

            {/* Clear-space guide (subtle) */}
            <div
                className={[
                    "absolute inset-6 rounded-xl border border-dashed",
                    isDark ? "border-white/15" : "border-black/15",
                ].join(" ")}
            />
            <div
                className={[
                    "absolute left-6 top-6 text-[10px] tracking-[0.35em] uppercase",
                    isDark ? "text-white/45" : "text-black/45",
                ].join(" ")}
            >
                Clear space
            </div>
        </div>
    );
}

function DoDontCard({
    title,
    items,
    good,
}: {
    title: string;
    items: string[];
    good: boolean;
}) {
    return (
        <div className="rounded-2xl border border-white/12 bg-white/5 p-6">
            <div className="flex items-center justify-between gap-4">
                <H2>{title}</H2>
                <span
                    className={[
                        "text-[10px] tracking-[0.35em] uppercase px-3 py-1 rounded-full border",
                        good
                            ? "border-white/25 text-white/70"
                            : "border-white/15 text-white/50",
                    ].join(" ")}
                >
                    {good ? "DO" : "DON'T"}
                </span>
            </div>
            <div className="mt-4">
                <BulletList items={items} />
            </div>
        </div>
    );
}

export default function BrandPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Minimal Nav for subpages */}
            <div className="container mx-auto px-8 py-24 max-w-5xl">
                <MinimalNav />
            </div>

            <section className="px-8 sm:px-10 pb-16">
                <div className="max-w-5xl mx-auto">
                    <Label>Brand Guidelines</Label>
                    <div className="mt-3 flex flex-col gap-4">
                        <H1>FEIYU</H1>
                        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
                            A minimal standard for consistent use of the flying-fish mark.
                            Monochrome. Precise. No ornament.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Divider />
                    </div>

                    {/* Logo display */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <H2>Primary — White on Black</H2>
                            <MarkPlaceholder variant="dark" />
                            <p className="text-xs text-white/50 leading-relaxed">
                                Replace the placeholder with your official SVG (recommended:
                                inline SVG for perfect scaling).
                            </p>
                        </div>

                        <div className="space-y-3">
                            <H2>Primary — Black on White</H2>
                            <MarkPlaceholder variant="light" />
                            <p className="text-xs text-white/50 leading-relaxed">
                                Keep the exact same geometry. Only invert colors.
                            </p>
                        </div>
                    </div>

                    {/* Do / Don't */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DoDontCard title="Correct usage" items={DO} good />
                        <DoDontCard title="Incorrect usage" items={DONT} good={false} />
                    </div>

                    {/* Rules */}
                    <div className="mt-14">
                        <Divider />
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {RULES.map((r, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-baseline justify-between gap-6">
                                    <H2>{r.title}</H2>
                                    <span className="text-[10px] tracking-[0.35em] uppercase text-white/35">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <BulletList items={r.items} />
                            </div>
                        ))}
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-48 pt-24 border-t border-[#1a1a1a] flex flex-col md:flex-row md:justify-between items-start md:items-end space-y-12 md:space-y-0">
                        <div className="space-y-1">
                            <p className="text-[11px] tracking-[0.4em] uppercase text-[#333] font-light">
                                {t.footer.line1}
                            </p>
                            <p className="text-[11px] tracking-[0.4em] uppercase text-[#333] font-light">
                                {t.footer.line2}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4 items-end">
                            <div className="text-[9px] tracking-widest uppercase text-[#333] font-mono">
                                VERSION 1.0
                            </div>
                            <Link
                                href="/world"
                                className="text-[10px] tracking-[0.2em] uppercase text-[#555] hover:text-[#eaeaea] transition-colors border-b border-transparent hover:border-[#eaeaea] pb-1"
                            >
                                {t.return}
                            </Link>
                        </div>
                    </footer>

                    <div className="mt-10 pb-16 text-[10px] tracking-[0.35em] uppercase text-white/30">
                        {t.inProgress}
                    </div>
                </div>
            </section>
        </main>
    );
}
