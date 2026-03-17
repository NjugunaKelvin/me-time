"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6 pb-20 pt-10">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Column: The "Unreachable" Statement */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
                                Currently <br />
                                <span className="text-gray-600 line-through decoration-amber-500/50 decoration-4">Searching</span>
                                <br />
                                <span className="text-amber-500">Engaged.</span>
                            </h1>

                            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                                <p>
                                    I am currently happily deployed on high-value problems and am not actively looking for a change.
                                </p>
                                <p>
                                    That said, I believe in the value of serendipity. My inbox is always open to discussing extraordinary <strong className="text-white font-normal border-b border-amber-500/50">Remote</strong> engineering challenges or technical collaborations that push the boundaries of what's possible.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="pt-4"
                        >
                            <a
                                href="mailto:njugunak349@gmail.com"
                                className="inline-flex items-center gap-3 text-white border border-gray-700 bg-gray-900/50 px-6 py-3 rounded-full hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 group"
                            >
                                <span className="font-mono text-sm tracking-wide">njugunak349@gmail.com</span>
                                <span className="text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <div className="flex items-center gap-2 mt-4 ml-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                <p className="text-xs text-gray-500 font-mono">Status: Remote & Asynchronous</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Social Proof & X Feed Simulation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
                        <div className="relative bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl shadow-2xl">

                            <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                Latest Thoughts
                            </h3>

                            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 transparent' }}>
                                {/* Tweet 1 */}
                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-white font-mono">V</div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none">Vin 😉</p>
                                                <p className="text-xs text-gray-500 mt-1">@NjugunaVin</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600">Jan 12</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                                        Tech has to be one of the most humbling niches. Each and every day you're reminded how much you don't know.<br/><br/>The skill actually is learning how to learn.<br/>
                                        <span className="text-amber-500">#Tech</span> <span className="text-amber-500">#programming</span>
                                    </p>
                                    <div className="flex gap-4 text-xs text-gray-600">
                                        <span className="hover:text-green-500 transition-colors">1 Repost</span>
                                        <span className="hover:text-red-500 transition-colors">5 Likes</span>
                                        <span className="hover:text-blue-500 transition-colors">108 Views</span>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-800/50"></div>

                                {/* Tweet 2 */}
                                <div className="group cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-white font-mono">V</div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none">Vin 😉</p>
                                                <p className="text-xs text-gray-500 mt-1">@NjugunaVin</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600">Dec 10, 2025</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                                        It's all about staying in the game long enough for skill and timing to collide. And everyone will say it's luck, but deep down it's not..
                                    </p>
                                    <div className="flex gap-4 text-xs text-gray-600">
                                        <span className="hover:text-red-500 transition-colors">5 Likes</span>
                                        <span className="hover:text-blue-500 transition-colors">195 Views</span>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-800/50"></div>

                                {/* Tweet 3 */}
                                <div className="group cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-white font-mono">V</div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none">Vin 😉</p>
                                                <p className="text-xs text-gray-500 mt-1">@NjugunaVin</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600">Nov 26, 2025</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                                        The world keeps widening.<br/>With every step, I discover how little I’ve touched.
                                    </p>
                                    <div className="flex gap-4 text-xs text-gray-600">
                                        <span className="hover:text-red-500 transition-colors">4 Likes</span>
                                        <span className="hover:text-blue-500 transition-colors">207 Views</span>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-800/50"></div>

                                {/* Tweet 4 */}
                                <div className="group cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-white font-mono">V</div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none">Vin 😉</p>
                                                <p className="text-xs text-gray-500 mt-1">@NjugunaVin</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-600">Mar 7, 2025</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                                        It's Jus' a matter of time... Everything will fall into place 💪😊
                                    </p>
                                    <div className="flex gap-4 text-xs text-gray-600">
                                        <span className="hover:text-red-500 transition-colors">4 Likes</span>
                                        <span className="hover:text-blue-500 transition-colors">191 Views</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    className="inline-block text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-all duration-300"
                                >
                                    Follow on X
                                </a>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
