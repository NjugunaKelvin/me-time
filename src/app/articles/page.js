import Navbar from "@/components/Navbar";
import Link from "next/link";
import { articles } from "@/data/content";

export default function Articles() {
    return (
        <div className="flex flex-col min-h-screen text-gray-300 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-5xl mx-auto w-full pb-20">
                <header className="mb-12 border-b border-gray-800 pb-8">
                    <h1 className="text-4xl font-bold text-amber-400 mb-2">Articles</h1>
                    <p className="text-xl text-gray-400 font-light">Thoughts on systems, AI, and engineering.</p>
                </header>

                <div className="space-y-16">
                    {articles.map((article, idx) => (
                        <Link href={`/articles/${article.slug}`} key={idx} className="block group">
                            <article>
                                <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3">
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 max-w-2xl leading-relaxed mb-4">{article.summary}</p>
                                <span className="text-xs font-mono text-amber-500/0 group-hover:text-amber-500 transition-all duration-300">
                                    READ ARTICLE ↗
                                </span>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
