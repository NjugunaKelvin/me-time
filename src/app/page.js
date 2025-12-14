import Navbar from "@/components/Navbar";

export default function Home() {
  const stack = [
    { category: "Languages", items: "Python, JavaScript/TypeScript, Go, SQL (PostgreSQL)" },
    { category: "AI & ML", items: "PyTorch, TensorFlow, HuggingFace, LangChain, OpenAI API" },
    { category: "Backend & Cloud", items: "FastAPI, Node.js, Docker, K8s, AWS, GCP" },
    { category: "Tools", items: "Git, Linux, Terraform, GitHub Actions" },
  ];

  const projects = [
    {
      title: "Distributed RAG System",
      tech: "Python, LangChain, Pinecone",
      description: "Scalable Retrieval-Augmented Generation processing 1M+ documents with sub-200ms latency."
    },
    {
      title: "Real-time Anomaly Detection",
      tech: "Go, Kafka, TensorFlow",
      description: "Streaming pipeline for financial fraud detection handling 50k events/sec."
    },
    {
      title: "Autonomous Agent Orchestrator",
      tech: "TypeScript, OpenAI",
      description: "Framework for multi-agent workflows with self-correction capabilities."
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
            Full-Stack Developer and AI/ML practitioner building scalable solutions for complex problems.
            I combine technical rigor with strategic thinking to drive impact, translating AI innovations
            into practical, high-performance applications.
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">Selected Works</h2>
          <div className="space-y-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-1">{project.description}</p>
                <p className="text-xs font-mono text-gray-600">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}