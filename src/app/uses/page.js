import Navbar from "@/components/Navbar";

export default function Uses() {
    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-3xl mx-auto w-full pt-12 pb-20">
                <header className="mb-16">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Uses</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Tools, Hardware & Stack</p>
                </header>

                <div className="space-y-16">
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8">Hardware</h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">MacBook Pro 16" (M3 Max)</span>
                                <span className="text-sm font-mono text-gray-500">64GB RAM, 2TB SSD</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Custom Linux Workstation</span>
                                <span className="text-sm font-mono text-gray-500">RTX 4090, Ryzen 9 7950X, 128GB DDR5</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">HHKB Professional Hybrid</span>
                                <span className="text-sm font-mono text-gray-500">Topre Switches, Blank Keycaps</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Dell UltraSharp 32" 6K</span>
                                <span className="text-sm font-mono text-gray-500">U3224KB</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8">Editor & Terminal</h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Neovim</span>
                                <span className="text-sm font-mono text-gray-500">LazyVim Config, Lua</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">VS Code</span>
                                <span className="text-sm font-mono text-gray-500">Frontend & Jupyter Notebooks</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Alacritty</span>
                                <span className="text-sm font-mono text-gray-500">GPU-accelerated terminal emulator</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Tmux</span>
                                <span className="text-sm font-mono text-gray-500">Session management</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8">Software & Productivity</h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Raycast</span>
                                <span className="text-sm font-mono text-gray-500">Launcher & Scripting</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Obsidian</span>
                                <span className="text-sm font-mono text-gray-500">Knowledge Graph & Zettelkasten</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-800 pb-4">
                                <span className="text-white font-bold">Docker & OrbStack</span>
                                <span className="text-sm font-mono text-gray-500">Container management</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
