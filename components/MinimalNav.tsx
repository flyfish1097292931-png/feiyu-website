"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function MinimalNav() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="flex justify-between items-center mb-24">
            <Link href="/" className="flex items-center space-x-6 hover:opacity-70 group">
                <div className="w-10 h-10">
                    <img src="/logo-whitebg.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] tracking-widest uppercase font-light">
                    FEIYU
                </span>
            </Link>

            <div className="flex items-center space-x-8">
                <Link href="/about" className="text-[10px] tracking-widest uppercase font-light hover:opacity-70">
                    {t.about}
                </Link>

                <Link href="/brand" className="text-[10px] tracking-widest uppercase font-light hover:opacity-70">
                    BRAND
                </Link>

                <div className="flex items-center space-x-3 text-[10px] tracking-widest font-light">
                    <button
                        onClick={() => setLanguage("en")}
                        className={`hover:opacity-70 ${language === "en" ? "text-[#eaeaea]" : "text-[#555]"}`}
                    >
                        EN
                    </button>
                    <span className="text-[#333]">/</span>
                    <button
                        onClick={() => setLanguage("zh")}
                        className={`hover:opacity-70 ${language === "zh" ? "text-[#eaeaea]" : "text-[#555]"}`}
                    >
                        中
                    </button>
                </div>
            </div>
        </nav>
    );
}
