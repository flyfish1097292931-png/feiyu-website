"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import MinimalNav from "@/components/MinimalNav";
import Divider from "@/components/Divider";
import { structures } from "@/lib/structure";

export default function LabPage() {
    const { language, t } = useLanguage();
    const labData = structures.lab[language];

    return (
        <main className="min-h-screen bg-black text-[#eaeaea] px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <MinimalNav />

                <div className="mt-24 mb-32">
                    <div className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4">
                        {labData.label}
                    </div>
                    <h1 className="text-5xl md:text-6xl tracking-[0.1em] font-light mb-12 uppercase">
                        {labData.name}
                    </h1>
                    <Divider />
                    <div className="mt-12 max-w-xl">
                        <p className="text-sm md:text-base leading-loose font-light tracking-wide text-white/80">
                            {labData.description}
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="text-[10px] tracking-[0.4em] text-white/40 uppercase">
                        {t.substructures}
                    </div>
                    <ul className="space-y-6">
                        {labData.substructures.map((item, idx) => (
                            <li key={idx} className="flex items-baseline space-x-6 group">
                                <span className="text-[10px] font-light opacity-20 group-hover:opacity-100 transition-opacity">
                                    0{idx + 1}
                                </span>
                                <span className="text-lg md:text-xl tracking-widest font-light opacity-60 group-hover:opacity-100 transition-opacity">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-32 mb-12 flex flex-col space-y-12">
                    <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">
                        {t.underConstruction}
                    </span>
                    <div>
                        <Link
                            href="/world"
                            className="text-xs tracking-[0.4em] text-white/50 hover:text-white transition-opacity border-b border-white/10 pb-1"
                        >
                            {t.return}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
