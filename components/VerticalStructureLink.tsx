"use client";

import Link from "next/link";
import Divider from "./Divider";

interface VerticalStructureLinkProps {
    label: string;
    name: string;
    href: string;
}

export default function VerticalStructureLink({ label, name, href }: VerticalStructureLinkProps) {
    return (
        <Link href={href} className="group block w-full text-center">
            <div className="text-[10px] tracking-mega text-[#777777] uppercase mb-4 transition-opacity group-hover:opacity-100">
                {label}
            </div>
            <Divider />
            <div className="text-3xl md:text-5xl font-extralight tracking-widest text-[#eaeaea] mt-6 mb-12 transition-opacity block group-hover:opacity-70">
                {name}
            </div>
        </Link>
    );
}
