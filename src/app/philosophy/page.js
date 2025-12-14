import Navbar from "@/components/Navbar";

export default function Philosophy() {
    return (
        <div className="flex flex-col min-h-screen text-gray-400 font-sans selection:bg-amber-500/30">
            <Navbar />
            <main className="flex-grow px-6 md:px-32 max-w-3xl mx-auto w-full pt-12 pb-20">
                <header className="mb-20">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Engineering Philosophy</h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Hard-won convictions. No hedging.</p>
                </header>

                <div className="space-y-24">
                    {/* Core Beliefs */}
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8 border-l-2 border-amber-500 pl-3">01. Core Beliefs</h2>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Complexity is the Enemy</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    If you cannot hold the entire system state in your head while debugging at 3 AM, you have failed.
                                    Every abstraction adds cognitive load. I default to WET (Write Everything Twice) over premature DRY
                                    until duplication becomes a maintenance burden greater than the abstraction itself.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Performance is Design</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    "Make it work, make it right, make it fast" is a lie for distributed systems.
                                    If you design a quadratic algorithm for a scale problem, no amount of loop unrolling will save you.
                                    Performance constraints defined my data structures, not the other way around.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Boring Technology</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    I spend my innovation tokens on the product, not the infrastructure.
                                    Postgres has survived decades of hype cycles. Redis works.
                                    I choose tools that have already failed in public so I know <i>how</i> they break.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Decision Framework */}
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8 border-l-2 border-amber-500 pl-3">02. Decision Framework</h2>
                        <ul className="space-y-6">
                            <li className="group">
                                <span className="text-white font-bold block mb-1">When I reject abstractions:</span>
                                <span className="text-gray-400">When the abstraction leaks the underlying implementation details anyway (Rule of Leaky Abstractions). If I have to read the source code of the library to use it, I might as well write the raw code.</span>
                            </li>
                            <li className="group">
                                <span className="text-white font-bold block mb-1">When I accept duplication:</span>
                                <span className="text-gray-400">When two pieces of code look the same but change for different reasons. Coupling accidental similarities is the root of spaghetti code.</span>
                            </li>
                            <li className="group">
                                <span className="text-white font-bold block mb-1">What I refuse to optimize:</span>
                                <span className="text-gray-400">Code that runs once at startup. Theoretical scalability limits that won't be hit for 10 years. Developer aesthetics over user latency.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Failure & Retrospectives */}
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8 border-l-2 border-amber-500 pl-3">03. Failures & Lessons</h2>
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-gray-200 mb-2">The Microservices Trap</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    <span className="text-amber-500/80 font-mono text-xs block mb-2">CONTEXT: 2021 FinTech Migration</span>
                                    Splitting a perfectly functional monolith into 15 services too early introduced distributed transactions,
                                    network latency, and observability nightmares. I learned that modular monoliths are superior until organizational
                                    boundaries force a network boundary.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-200 mb-2">Over-Engineering Generic Interfaces</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    <span className="text-amber-500/80 font-mono text-xs block mb-2">CONTEXT: 2023 AI Pipeline</span>
                                    Built a "universal" plugin system for modals that only ever had two implementations.
                                    The cost of maintaining the generic interface outweighed the cost of maintaining two separate, concrete implementations.
                                    YAGNI (You Ain't Gonna Need It) is real.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Long Term Thinking */}
                    <section>
                        <h2 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-8 border-l-2 border-amber-500 pl-3">04. Long-Term Arc</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I write code for the poor developer who has to maintain it 5 years from now (that developer is usually me).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Stable APIs</h4>
                                <p className="text-sm text-gray-500">
                                    Once an interface is public, breaking it is an act of violence against the user. I prefer append-only modifications and explicit deprecation cycles measured in years.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Dependencies</h4>
                                <p className="text-sm text-gray-500">
                                    Every dependency is a liability. I audit the git commit history of libraries. If the maintainer hasn't committed in 6 months, I don't import it.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
