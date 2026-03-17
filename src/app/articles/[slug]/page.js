import Navbar from "@/components/Navbar";
import { articles } from "@/data/content";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    // Simple Markdown Parser (very basic for this demo)
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-amber-100 mt-6 mb-3">{trimmedLine.replace('### ', '')}</h3>;
            }
            if (trimmedLine.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-amber-400 mt-8 mb-4 border-l-4 border-amber-600 pl-3">{trimmedLine.replace('## ', '')}</h2>;
            }
            if (trimmedLine.startsWith('- **')) {
                const parts = trimmedLine.split('**');
                return <li key={index} className="ml-6 list-disc mb-2 text-gray-300"><strong className="text-white">{parts[1]}</strong>{parts[2]}</li>;
            }
            if (trimmedLine === '') {
                return <br key={index} />;
            }
            return <p key={index} className="text-gray-300 leading-relaxed mb-4 text-lg">{trimmedLine}</p>;
        });
    };

    // Get 2 more articles to read
    const moreArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

    return (
        <div className="flex flex-col min-h-screen text-gray-300 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-4xl mx-auto w-full pb-20">
                <div className="mb-8">
                    <Link href="/articles" className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2 mb-8">
                        ← Back to Articles
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{article.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 font-mono text-sm border-b border-gray-800 pb-8">
                        <span>{article.date}</span>
                        <span className="text-amber-500">•</span>
                        <span>{article.readTime}</span>
                        <span className="text-amber-500">•</span>
                        <span className="text-gray-400">By Njuguna Kelvin</span>
                    </div>
                </div>

                <article className="prose prose-invert prose-amber max-w-none">
                    {renderContent(article.content)}
                </article>

                {/* More to Read Section */}
                <div className="mt-24 pt-10 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-8">More to read</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {moreArticles.map((moreArticle, idx) => (
                            <Link href={`/articles/${moreArticle.slug}`} key={idx} className="block group">
                                <article className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3">
                                            <span>{moreArticle.date}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                                            {moreArticle.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {moreArticle.summary}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono text-amber-500/0 group-hover:text-amber-500 transition-all duration-300">
                                        READ ARTICLE ↗
                                    </span>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

// Generate static params for all articles to ensure they can be statically exported if needed
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}
