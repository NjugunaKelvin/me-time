"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? "text-amber-400" : "text-gray-400";

    return (
        <div className="sticky top-6 z-50 flex justify-center mb-10 w-full px-4">
            <nav className="backdrop-blur-md bg-[#1c1c1c]/70 border border-white/10 rounded-full px-8 py-3 shadow-2xl shadow-black/50 ring-1 ring-white/5 max-w-full overflow-x-auto no-scrollbar">
                <ul className="flex items-center text-sm font-medium gap-8 flex-nowrap whitespace-nowrap">
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/')}`} href='/'>Home</Link></li>
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/projects')}`} href='/projects'>Projects</Link></li>
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/code')}`} href='/code'>Code</Link></li>
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/philosophy')}`} href='/philosophy'>Philosophy</Link></li>
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/articles')}`} href='/articles'>Articles</Link></li>
                    <li><Link className={`hover:text-amber-400 transition-all hover:scale-105 inline-block ${isActive('/contact')}`} href='/contact'>Reach out</Link></li>
                </ul>
            </nav>
        </div>
    );
};