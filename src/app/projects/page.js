import Navbar from "@/components/Navbar";
import Link from "next/link";
import { projects } from "@/data/content";

/**
 * @component Projects
 * @description
 * Lists technical projects categorized by domain. 
 * This view focuses on the "what" and "how" of my work.
 * 
 * Design Pattern:
 * Usage of Client-Side filtering vs Server-Side. 
 * Given the dataset size (N < 100), performing the category reduction and 
 * filtering on the client (or during SSG build time in Next.js) is more efficient 
 * than a database roundtrip.
 */
export default function Projects() {
    // Extract unique categories dynamically from the dataset.
    // This allows the content.js file to be the single source of truth; adding a new
    // category there automatically renders a new section here without code changes.
    const categories = [...new Set(projects.map(p => p.category))];

    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-3xl mx-auto w-full pt-12 pb-20">
                <header className="mb-16">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Projects</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Technical Implementation Deep Dives</p>
                </header>

                <div className="space-y-20">
                    {categories.map((category) => (
                        <div key={category}>
                            {/* Sticky Header Effect could be applied here if list grows too long */}
                            <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8">{category}</h2>
                            <div className="space-y-12">
                                {projects.filter(p => p.category === category).map((project, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
                                            <Link href={project.link} className="text-xs font-mono text-gray-600 hover:text-white transition-colors mt-1 md:mt-0">
                                                VIEW ↗
                                            </Link>
                                        </div>
                                        <p className="text-gray-400 mb-2 max-w-2xl leading-relaxed">{project.description}</p>
                                        <p className="text-xs font-mono text-gray-600">{project.tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
