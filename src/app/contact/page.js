import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-3xl mx-auto w-full pt-20 pb-20">
                <h1 className="text-3xl font-bold text-white mb-12 tracking-tight">Reach Out</h1>

                <div className="space-y-12">
                    <section>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            I am available for consulting on large-scale distributed systems and AI architecture.
                        </p>
                    </section>

                    <section className="font-mono text-sm space-y-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 uppercase tracking-wider text-xs">Email</span>
                            <a href="mailto:vin@example.com" className="text-white text-lg hover:text-amber-400 transition-colors w-fit">
                                vin@example.com
                            </a>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 uppercase tracking-wider text-xs">Social</span>
                            <div className="flex gap-8">
                                <a href="https://github.com/njuguna-vin" target="_blank" className="text-white hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5">
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/njuguna-vin" target="_blank" className="text-white hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5">
                                    LinkedIn
                                </a>
                                <a href="https://x.com" target="_blank" className="text-white hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5">
                                    X (Twitter)
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
