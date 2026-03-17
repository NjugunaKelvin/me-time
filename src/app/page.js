import Navbar from "@/components/Navbar";

/**
 * @component Home
 * @description
 * Entry point for the application. This page serves as a high-level executive summary
 * of my technical profile.
 * 
 * Architectural Decision:
 * We intentionally keep this content static and localized. For a personal portfolio,
 * introducing a CMS or database layer adds unnecessary latency and maintenance overhead.
 * The data structure is defined locally to ensure type safety (implicitly) and 
 * rapid iteration during content updates.
 */
export default function Home() {
  // Data is defined within the component scope to avoid global namespace pollution
  // and keep the context tight.
  const stack = [
    { category: "Languages", items: "Python, JavaScript/TypeScript, Go, SQL (PostgreSQL)" },
    { category: "AI & ML", items: "PyTorch, TensorFlow, HuggingFace, LangChain, OpenAI API" },
    { category: "Backend & Cloud", items: "FastAPI, Node.js, Docker, K8s, AWS, GCP" },
    { category: "Tools", items: "Git, Linux, Terraform, GitHub Actions" },
  ];

  const projects = [
    {
      title: "Roavva",
      subtitle: "Founder & Lead Engineer",
      tech: "Fastify, Next.js, PostgreSQL",
      description: "Founded and developed an adventure and exploration company pushing the boundaries of how people discover, book, and experience the world. Architected the entire platform—from the high-performance booking engine to distributed payment flows—handling everything from zero to scale.",
      link: "https://roavva.com"
    },
    {
      title: "Machine Tasks Protocol",
      tech: "Node.js",
      description: "A decentralized framework that standardizes secure machine-to-machine task delegation by combining cryptographic identity, strict data schemas, and transport-independent verification to ensure all autonomous interactions are mathematically provable and trustless."
    },
    {
      title: "Africorpus",
      subtitle: "Founder & Data Engineer",
      tech: "TypeScript, OpenAI",
      description: "Founded and engineered a data platform built to rigorously curate, clean, and organize African context datasets for modern AI model alignment and evaluation.",
      link: "https://africorpus.netlify.app/"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
      <Navbar />
      <main className="flex-grow px-6 md:px-32 max-w-3xl mx-auto w-full pt-12 pb-20">
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Njuguna Kelvin (Vin)</h1>
          <p className="text-xl text-amber-500/90 font-mono">Backend Systems & AI Engineer</p>
        </header>

        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">About</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Founder and Systems Engineer building resilient, highly scalable platforms for complex problems.
            I combine technical rigor with an entrepreneurial focus on distribution and execution, currently translating deep technical architecture into high-performance realities as the Founder of Roavva.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">Tech Stack</h2>
          <div className="space-y-4">
            {stack.map((group, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-white font-medium w-32 shrink-0">{group.category}</span>
                <span className="text-gray-400 font-mono text-sm">{group.items}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">Companies & Core Projects</h2>
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-3">
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                            {project.title}
                            <svg className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        project.title
                    )}
                    {project.subtitle && (
                        <span className="text-xs font-mono font-normal tracking-wide px-2 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20">
                            {project.subtitle}
                        </span>
                    )}
                  </h3>
                </div>
                <p className="text-gray-400 mb-3 leading-relaxed">{project.description}</p>
                <p className="text-xs font-mono text-gray-600 tracking-wide">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}