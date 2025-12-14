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
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-amber-100 mt-6 mb-3">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-amber-400 mt-8 mb-4 border-l-4 border-amber-600 pl-3">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('- **')) {
                const parts = line.split('**');
                return <li key={index} className="ml-6 list-disc mb-2 text-gray-300"><strong className="text-white">{parts[1]}</strong>{parts[2]}</li>;
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            return <p key={index} className="text-gray-300 leading-relaxed mb-4 text-lg">{line}</p>;
        });
    };

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
