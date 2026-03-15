"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import MinimalNav from "@/components/MinimalNav";
import Divider from "@/components/Divider";

export default function WorldPage() {
    const { language, t } = useLanguage();

    const routes = [
        { numeral: "I", label: language === "en" ? "STRUCTURE" : "结构", sub: "/form" },
        { numeral: "II", label: language === "en" ? "BOUNDARY" : "边界", sub: "/boundary" },
        { numeral: "III", label: language === "en" ? "SYSTEM" : "系统", sub: "/system" },
        { numeral: "IV", label: language === "en" ? "NARRATIVE" : "叙事", sub: "/narrative" },
        { numeral: "V", label: language === "en" ? "LAB" : "实验室", sub: "/lab" },
    ];

    return (
        <main className="min-h-screen bg-black text-[#eaeaea] px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <MinimalNav />

                <header className="mb-24 mt-12">
                    <h1 className="text-xs tracking-[0.5em] font-light opacity-50 uppercase">
                        {t.world.title}
                    </h1>
                </header>

                <div className="space-y-0">
                    {routes.map((route, index) => (
                        <div key={index} className="group">
                            <Link
                                href={route.sub}
                                className="flex items-center justify-between py-10 hover:opacity-100 transition-all"
                            >
                                <div className="flex items-baseline space-x-12">
                                    <span className="text-xs tracking-widest font-light opacity-30 group-hover:opacity-100 transition-opacity w-8">
                                        {route.numeral}
                                    </span>
                                    <span className="text-2xl md:text-3xl tracking-[0.15em] font-light group-hover:tracking-[0.2em] transition-all duration-500 uppercase">
                                        {route.label}
                                    </span>
                                </div>
                                <span className="text-[10px] tracking-widest font-light opacity-0 group-hover:opacity-40 transition-opacity">
                                    VIEW
                                </span>
                            </Link>
                            <Divider />
                        </div>
                    ))}
                </div>

                <footer className="mt-48 pb-12 flex flex-col space-y-8">
                    <p className="text-[10px] tracking-widest text-white/30 uppercase font-light">
                        {t.inProgress}
                    </p>
                    <div>
                        <Link
                            href="/"
                            className="text-[9px] tracking-[0.4em] text-white/40 hover:text-white transition-colors uppercase font-light"
                        >
                            {t.world.returnGateway}
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    );
}
