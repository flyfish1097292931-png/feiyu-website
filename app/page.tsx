"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
    const { language, t, setLanguage } = useLanguage();

    return (
        <main className="min-h-screen flex flex-col justify-center items-center px-8 bg-black text-[#eaeaea]">
            <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-12">
                {/* Logo */}
                <div className="w-28 h-28">
                    <img
                        src="/logo-whitebg.svg"
                        alt="Feiyu Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Wordmark */}
                <div className="space-y-4">
                    <h1 className="text-sm tracking-[1em] font-light opacity-90">
                        FEIYU
                    </h1>
                </div>

                <div className="space-y-6 flex flex-col items-center">
                    <p className="text-3xl md:text-4xl tracking-[0.25em] font-light leading-snug">
                        {t.gateway.thesis}
                    </p>
                    <p className="text-xs md:text-sm tracking-[0.4em] font-light opacity-40 uppercase">
                        {language === "zh" ? "World emerges when the boundary flows." : "当边界流动，世界随之生成"}
                    </p>
                </div>

                {/* Action */}
                <div className="pt-12">
                    <Link
                        href="/world"
                        className="px-12 py-3 border border-white/20 text-[10px] tracking-[0.5em] uppercase font-light hover:bg-white hover:text-black transition-all duration-500"
                    >
                        {t.gateway.enter}
                    </Link>
                </div>
            </div>

            {/* Persistent Language Toggle at bottom of Gateway */}
            <footer className="absolute bottom-12 flex justify-center items-center space-x-6 text-[9px] tracking-[0.4em] font-light">
                <button
                    onClick={() => setLanguage("en")}
                    className={`hover:opacity-100 transition-opacity ${language === "en" ? "text-white" : "text-white/30"}`}
                >
                    EN
                </button>
                <span className="text-white/10">|</span>
                <button
                    onClick={() => setLanguage("zh")}
                    className={`hover:opacity-100 transition-opacity ${language === "zh" ? "text-white" : "text-white/30"}`}
                >
                    中
                </button>
            </footer>
        </main>
    );
}
