"use client";

import MinimalNav from "@/components/MinimalNav";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function About() {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto px-8 py-24 max-w-3xl">
            <MinimalNav />

            <div className="space-y-12 text-base font-light leading-loose text-[#777777]">
                <p className="border-l border-[#333333] pl-8">
                    {t.aboutPara1}
                </p>
                <p className="border-l border-[#333333] pl-8">
                    {t.aboutPara2}
                </p>
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
                    <Link
                        href="/world"
                        className="text-[10px] tracking-[0.2em] uppercase text-[#555] hover:text-[#eaeaea] transition-colors border-b border-transparent hover:border-[#eaeaea] pb-1"
                    >
                        {t.return}
                    </Link>
                </div>
            </footer>
        </main>
    );
}
