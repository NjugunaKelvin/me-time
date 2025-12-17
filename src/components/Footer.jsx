"use client";

import Link from "next/link";

const SocialIcon = ({ href, icon, label }) => (
    <Link
        href={href}
        target="_blank"
        aria-label={label}
        className="text-gray-500 hover:text-amber-400 transition-colors p-2"
    >
        {icon}
    </Link>
);

export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-gray-900 bg-[#1c1c1c] text-sm">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-1 font-mono text-gray-600">
                    <span>© {new Date().getFullYear()}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="hidden md:inline">Njuguna Kelvin</span>
                </div>

                <div className="flex items-center gap-4">
                    <SocialIcon
                        href="https://github.com/NjugunaKelvin"
                        label="GitHub"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        }
                    />
                    <SocialIcon
                        href="https://x.com/NjugunaVin"
                        label="X (Twitter)"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        }
                    />
                    <SocialIcon
                        href="https://linkedin.com/in/njuguna-vin"
                        label="LinkedIn"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        }
                    />
                </div>

                <div className="md:text-right">
                    <a href="mailto:njugunak349@gmail.com" className="text-gray-600 hover:text-amber-500 transition-colors font-mono text-xs">
                        njugunak349@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
