"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { snippets } from "@/data/content";
/**
 * Using Client Side rendering here for the interactivity of the copy button 
 * and the heavy syntax highlighting library.
 */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from "react";

/**
 * @component CodeBlock
 * @description
 * Reusable component for rendering syntax-highlighted code with a seamless copy experience.
 * UI mimics a macOS terminal window for aesthetic consistency with the developer brand.
 */
const CodeBlock = ({ code, language }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset feedback after 2s
    };

    return (
        <div className="bg-[#1e1e1e] rounded-md border border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
                <div className="flex items-center gap-3">
                    {/* Window Controls Decoration */}
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 ml-2">{language}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-[10px] font-mono uppercase tracking-wider text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                >
                    {copied ? (
                        <span className="text-green-500">Copied!</span>
                    ) : (
                        <span>Copy</span>
                    )}
                </button>
            </div>
            <div className="text-sm">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'transparent',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{ minWidth: "2em", paddingRight: "1em", color: "#6e7681", textAlign: "right" }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default function Code() {
    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-4xl mx-auto w-full pt-12 pb-20">
                <header className="mb-16">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Code Evidence</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Mastery demonstrated, not claimed.</p>
                </header>

                <div className="grid grid-cols-1 gap-16">
                    {snippets.map((item, idx) => (
                        <div key={idx} className="pl-6 border-l-2 border-gray-800">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-xs text-amber-500 uppercase tracking-wider">{item.domain}</span>
                                <Link href={item.link} className="text-xs font-mono text-gray-600 hover:text-white transition-colors">
                                    SOURCE ↗
                                </Link>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <div className="space-y-6">
                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>

                                <CodeBlock code={item.code} language={item.language} />

                                {/* Architectural commentary block - Adds depth beyond just viewing code */}
                                <div className="bg-[#1c1c1c]/50 p-4 rounded-sm border-l-2 border-gray-700">
                                    <span className="text-gray-500 text-xs font-bold uppercase block mb-1">Architectural Decision</span>
                                    <p className="text-sm text-gray-400 italic">"{item.why}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mt-24 border-t border-gray-800 pt-12">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">The Negative Space</h2>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                        What isn't shown here: The three rewrites of the billing system before understanding the domain model.
                        The "clever" one-liners that confused the junior devs.
                        The premature micro-optimizations that delayed shipping by a week.
                        <br /><br />
                        Seniority is knowing what <strong>not</strong> to write.
                    </p>
                </section>
            </main>
        </div>
    );
}
