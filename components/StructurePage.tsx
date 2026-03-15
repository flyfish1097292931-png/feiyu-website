"use client";

import MinimalNav from "@/components/MinimalNav";
import Divider from "@/components/Divider";
import { useLanguage } from "@/components/LanguageContext";
import { structures } from "@/lib/structure";
import Link from "next/link";

interface StructurePageProps {
    id: string;
}

export default function StructurePage({ id }: StructurePageProps) {
    const { language, t } = useLanguage();
    const data = structures[id][language];

    return (
        <main className="container mx-auto px-8 py-24 max-w-3xl">
            <MinimalNav />

            {/* Header Section */}
            <header className="mb-24">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#777] mb-6">
                    {data.label}
                </div>
                <h1 className="text-5xl font-extralight tracking-[0.1em] text-[#eaeaea] mb-8 leading-tight">
                    {data.name}
                </h1>
                {data.subtitle && (
                    <p className="text-sm tracking-widest text-[#555] uppercase font-light mb-12">
                        {data.subtitle}
                    </p>
                )}
                <Divider />
            </header>

            {/* Concept Guiding Area */}
            {data.intro && (
                <section className="mb-32 border-l border-[#333] pl-12 py-4">
                    <p className="text-base font-light text-[#777] leading-loose max-w-xl whitespace-pre-line">
                        {data.intro}
                    </p>
                </section>
            )}

            {/* Main Content: Description & Substructures (Optional/Compact) */}
            <section className="mb-32">
                <p className="text-lg font-light text-[#666] leading-relaxed mb-20 italic">
                    {data.description}
                </p>

                {/* Embedded References for I (Structure) */}
                {data.embeddedReferences && (
                    <div className="mt-16 space-y-12">
                        <p className="text-[11px] tracking-widest uppercase text-[#444] font-light">
                            Structure requires consistency.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {data.embeddedReferences.map((ref, i) => (
                                <div key={i} className="group">
                                    <div className="text-[10px] text-[#444] mb-2 font-mono">[{ref.year}]</div>
                                    <div className="text-base text-[#eaeaea] font-light tracking-wide group-hover:text-[#fff] transition-colors">{ref.title}</div>
                                    <div className="text-[10px] text-[#555] mt-1 italic">{ref.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular Substructures if no milestones */}
                {!data.milestones && !data.embeddedReferences && (
                    <div className="space-y-8">
                        <h2 className="text-[10px] tracking-widest uppercase text-[#444] mb-12">
                            {t.substructures}
                        </h2>
                        <ul className="grid grid-cols-2 gap-y-6 gap-x-12">
                            {data.substructures.map((sub, i) => (
                                <li key={i} className="flex items-baseline space-x-4">
                                    <span className="text-[9px] font-mono text-[#444]">
                                        {(i + 1).toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-base font-extralight tracking-wide text-[#999]">
                                        {sub}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* Theory Evolution Timeline for II & III */}
            {data.milestones && (
                <section className="mb-32">
                    <h2 className="text-[10px] tracking-[0.3em] uppercase text-[#333] mb-24 text-center">
                        {t.theoryEvolution}
                    </h2>

                    <div className="space-y-32 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-[#222]" />

                        {data.milestones.map((paper, i) => (
                            <div key={i} className="relative pl-12 group">
                                {/* Dot */}
                                <div className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-[#444] group-hover:bg-[#eaeaea] transition-colors" />

                                <div className="space-y-6">
                                    <div className="flex items-baseline justify-between mb-2">
                                        <span className="text-[10px] font-mono text-[#555]">
                                            【{paper.year}】
                                        </span>
                                        {paper.journal && (
                                            <span className="text-[9px] tracking-widest text-[#444]">
                                                {paper.journal}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-extralight text-[#eaeaea] leading-snug tracking-wide group-hover:text-white transition-colors">
                                        {paper.title}
                                    </h3>

                                    <div className="flex space-x-6 text-[9px] tracking-[0.15em] font-light">
                                        <a
                                            href={paper.arXiv}
                                            target="_blank"
                                            className="text-[#555] hover:text-[#eaeaea]"
                                        >
                                            ARXIV
                                        </a>
                                        <a
                                            href={paper.pdf}
                                            target="_blank"
                                            className="text-[#555] hover:text-[#eaeaea]"
                                        >
                                            PDF
                                        </a>
                                        {paper.doi && (
                                            <a
                                                href={paper.doi}
                                                target="_blank"
                                                className="text-[#555] hover:text-[#eaeaea]"
                                            >
                                                DOI
                                            </a>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#1a1a1a]">
                                        <div>
                                            <h4 className="text-[9px] tracking-widest text-[#444] uppercase mb-3">
                                                {t.technicalCore}
                                            </h4>
                                            <p className="text-xs font-light text-[#777] leading-relaxed">
                                                {paper.core}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[9px] tracking-widest text-[#444] uppercase mb-3">
                                                {t.structuralSignificance}
                                            </h4>
                                            <p className="text-xs font-light text-[#888] leading-relaxed italic border-l border-[#222] pl-4">
                                                {paper.meaning}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

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
                        {t.underConstruction}
                    </div>
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
