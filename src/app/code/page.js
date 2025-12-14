import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Code() {
    const snippets = [
        {
            domain: "Concurrency",
            title: "Lock-Free Ring Buffer",
            description: "A single-producer, single-consumer circular buffer using atomic memory barriers to avoid mutex contentions in high-frequency trading contexts.",
            why: "Standard Go interaction via channels introduced too much GC pressure at 100k msg/sec.",
            link: "#"
        },
        {
            domain: "Resilience",
            title: "Circuit Breaker Middleware",
            description: "Custom implementation of a state-machine based circuit breaker. Features half-open state testing and exponential backoff reset timers.",
            why: "Needed fine-grained control over failure thresholds that off-the-shelf libraries didn't expose.",
            link: "#"
        },
        {
            domain: "Database",
            title: "Hierarchical Indexing for Geospatial Data",
            description: "Implementation of Quadtrees on top of a Key-Value store to enable efficient radius search without PostGIS.",
            why: "Running full Postgres instances on edge devices was not feasible due to memory constraints.",
            link: "#"
        },
        {
            domain: "Systems",
            title: "Custom Memory Allocator",
            description: "Arena allocator for handling short-lived request objects in a C++ web server.",
            why: "Heap fragmentation was causing long tail latencies after 24 hours of uptime.",
            link: "#"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-4xl mx-auto w-full pt-12 pb-20">
                <header className="mb-16">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Code Evidence</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Mastery demonstrated, not claimed.</p>
                </header>

                <div className="grid grid-cols-1 gap-12">
                    {snippets.map((item, idx) => (
                        <div key={idx} className="group border-l-2 border-gray-800 hover:border-amber-500 pl-6 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-xs text-amber-500 uppercase tracking-wider">{item.domain}</span>
                                <Link href={item.link} className="text-xs font-mono text-gray-600 hover:text-white transition-colors">
                                    SOURCE ↗
                                </Link>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="bg-[#1c1c1c] p-4 rounded-sm border border-gray-800">
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
