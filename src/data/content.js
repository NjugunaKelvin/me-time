/**
 * @file content.js
 * @description
 * Single Source of Truth (SSoT) for the application's content data.
 * 
 * Architectural Decision:
 * We are using a flat file data structure instead of a headless CMS (like Contentful or Sanity)
 * or a database.
 * 
 * Reasoning:
 * 1. Simplicity: Removes API latency and third-party dependencies during build time.
 * 2. Version Control: Content changes are tracked via Git, providing atomic commits 
 *    linking code changes with content updates.
 * 3. Type Safety: Can be easily typed (if we switch to TS) without complex SDKs.
 */

export const projects = [
    {
        title: "Roavva",
        tech: "Next.js, Node.js, Fastify, PostgreSQL, Typescript",
        description: "Founded and developed an adventure and exploration company pushing the boundaries of how people discover, book, and experience the world.",
        link: "https://roavva.com",
        category: "Founder & Product Development"
    },
    {
        title: "Africorpus",
        tech: "React, Kafka, Pandas/Numpy, PySpark",
        description: "Founded and engineered Africorpus to build rigorously curated, machine-readable datasets designed for training, evaluation, and alignment of modern AI models.",
        link: "https://africorpus.netlify.app/",
        category: "Founder & Data Engineering"
    },
    {
        title: "Autonomous Agent Orchestrator",
        tech: "TypeScript, Node.js, OpenAI",
        description: "Developed a framework for orchestrating multi-agent workflows. Features include dynamic tool selection, memory persistence with Redis, and a self-correction loop for code generation tasks.",
        link: "#",
        category: "Data Engineering"
    },
    {
        title: "High-Frequency Trading Engine",
        tech: "C++, ZeroMQ, Redis",
        description: "Prototype exchange engine matching orders in microseconds. Focused on lock-free data structures and minimizing network hops for ultra-low latency execution.",
        link: "#",
        category: "Systems Programming"
    },
    {
        title: "Coastal Cleaning Services",
        tech: "Next.js, TypeScript",
        description: "A cleaning services company's landing page.",
        link: "https://coastalservicescleaning.com/",
        category: "Web Development"
    },
    {
        title: "IML impac",
        tech: "Next.js, TypeScript, Tailwind",
        description: "Integral Media's company website with a focus to communicate impact to the community.",
        link: "https://iml-impact.netlify.app/",
        category: "Web development"
    },
    {
        title: "SpinGraphy creations",
        tech: "Next.js, TypeScript, Tailwind",
        description: "Created a semantic search engine for video content. Extracts frames, generates embeddings using CLIP, and indexes them for natural language search queries against video libraries.",
        link: "",
        category: "Web Development"
    },
    {
        title: "Serverless Image Processing Pipeline",
        tech: "AWS Lambda, S3, SQS, Python",
        description: "Architected a highly scalable image processing pipeline handling millions of uploads per day. Uses event-driven architecture to decouple uploads from processing logic.",
        link: "#",
        category: "Web Development"
    }
];

export const articles = [
    {
        slug: "developers-assembling-not-building",
        title: "Most Developers Are Not Building: They're Assembling",
        date: "Mar 15, 2026",
        readTime: "7 min read",
        summary: "Why assembling pieces other people created isn't real engineering, and the long-term value of deep system understanding.",
        content: `
I used to think I was building things.

I wasn't. I was assembling pieces other people created: frameworks, APIs, templates, and calling it engineering. That realization hit hard, because the entire industry rewards that illusion. You find a library on npm, plug it into your Next.js app, configure a few environment variables, and suddenly you're "shipping." Ship fast, glue things together, move on.

But assembling is not building.

## Confronting the Unknown

I realized this the hard way last year. I was tasked with debugging a service that was randomly dropping WebSocket connections under heavy load. The usual playbook didn't work. I couldn't just swap in a different library. Upgrading the framework did nothing. Throwing more RAM at the container only delayed the inevitable crash. 

For the first time in a while, StackOverflow and the official documentation couldn't save me. I had to dive into the raw source code of the ` + "`node_modules`" + ` we blindly trusted. It was deeply uncomfortable. It forced me to confront how little I actually knew about the TCP lifecycle, garbage collection under sustained backpressure, and how the underlying event loop was actually functioning. 

Building is when you understand the system deeply enough to break it, rebuild it, and improve it without relying on documentation as a crutch. Most developers avoid that level because it's uncomfortable. 

I've started shifting how I approach things. Instead of asking, "How do I use this framework?" I force myself to ask, "How does this framework work underneath?" Before I pull in a 10MB dependency for a single utility function, I write the function myself. Instead of stacking tools, I aggressively try to reduce them.

## The Only Path That Compounds

This is slower. Slower to start, slower to show a shiny UI on your local server. It lacks the instant dopamine hit of running ` + "`npx create-magic-app`" + `.

But it's also the only path that compounds. If you only know how to assemble React components, your knowledge deprecates every two years when the industry invents a new paradigm. If you know how the V8 engine parses the DOM, you own that knowledge forever.

My working hypothesis: the developers who win long-term are not the fastest builders, they're the ones who understand systems deeply enough to bend them when the abstractions inevitably leak.

I'm betting my career on testing that.`
    },
    {
        slug: "founder-experience-scar-tissue",
        title: "Founder Experience Is Not a Title: It's Scar Tissue",
        date: "Feb 28, 2026",
        readTime: "8 min read",
        summary: "The harsh reality of building from zero. Ideas don't matter; execution under constraints, distribution, and persistence do.",
        content: `
People throw around "founder" like it's a badge of honor. You put it in your Twitter bio and suddenly people assume you've cracked a secret code to wealth and autonomy.

It's not a badge. It's a record of mistakes you paid for in time, reputation, and opportunity cost.

Building something from zero—actually zero, with no corporate backing or built-in distribution—forces you into reality fast. There is no abstraction, no theory, no arbitrary Agile points to hide behind. Just outcomes. Either people open their wallets for what you built, or they don't. 

There's nowhere to hide when the metrics dashboard reads absolute zero.

## The Illusion of Ideas

When I started my first major project, I thought I had a genius idea. I spent months perfecting the architecture. I obsessed over the database schema, ensuring my React components were perfectly decoupled, feeling like an absolute 10x engineer. I deployed it, braced for the influx of users... and heard absolutely nothing. Crickets. It was a ghost town.

Working on my own ideas exposed how naive I was about "good ideas." Ideas don't matter. Implementing a neat technical architecture doesn't matter if you have zero distribution. Timing matters. Execution under extreme constraints matters. Writing an ugly, hacky script that actually onboard users on day one matters a thousand times more than a beautifully over-engineered monolith sitting unused in the cloud.

And most importantly, persistence under uncertainty.

The hardest part of being a founder isn't building the app. It's waking up on a Tuesday, looking at a stagnant user graph, fighting the urge to quit, and continuing to push forward when the universe is giving you absolutely no signal that you're on the right path.

## The Real Value

My current belief: founder experience only has value if it changes how you operate on an atomic level. If you go through the wringer of building your own product and still think like an employee—waiting for direction, avoiding risk, prioritizing "safe" technical decisions over unglamorous market wins—then you didn't actually learn anything.

I'm trying to extract the ugly, painful lessons from these experiences, rather than just carrying the title.`
    },
    {
        slug: "ai-exposing-developers",
        title: "AI Is Not Replacing You: It's Exposing You",
        date: "Jan 14, 2026",
        readTime: "6 min read",
        summary: "AI didn't create the weakness of predictable, repetitive coding; it revealed it. How to transition from code execution to system judgment.",
        content: `
There's an ever-present, low-level panic right now about AI replacing developers. Every week, a new model drops that can build an entire CRUD application from a napkin sketch, and Twitter loses its collective mind.

I think that's the wrong frame of reference entirely.

AI is not here to replace developers. AI is here to ruthlessly expose who actually understands what they're doing.

## Fragile Value vs Defensible Value

If your daily value contribution is writing predictable, boilerplate code—taking a Jira ticket, translating it into a generic API endpoint, and pushing a PR—then yes, you are wildly at risk. 

But I'd argue that was always fragile value. AI didn't create the weakness in our industry; it merely shined a massive spotlight on it. 

What AI does exceptionally well is execution. It can spit out perfectly indented boilerplate in milliseconds. What it doesn't do well (yet, and arguably for a long time) is judgment.

Knowing what to build in the first place, understanding why a feature matters to a specific user base, knowing what technical tradeoffs to accept to hit a deadline, knowing what edge cases the AI hallucinated over—that's still a deeply human domain. The problem is that most developers are weak at this, because they've consciously trained themselves for years to blindly follow instructions and accept specs, stripping themselves of the responsibility of making actual decisions.

## Reframing Leverage

I've watched developers copy-paste massive blocks of generated code they don't fundamentally understand. It works today, but six months later, it becomes a nightmare of technical debt. 

I've started using AI differently. Not as a crutch or a replacement, but as raw leverage. It compresses time. It types faster than me. But it also forces me to think with terrifying clarity, because vague, lazy thinking produces dangerously useless outputs.

Hypothesis: AI will not eliminate the role of the developer. It will violently split the profession into two distinct groups: those who direct systems with high-level judgment, and those who are inevitably replaced by them.

I'm positioning myself entirely for the first group.`
    },
    {
        slug: "systems-thinking-compounds",
        title: "Systems Thinking Is the Only Skill That Compounds",
        date: "Dec 05, 2025",
        readTime: "7 min read",
        summary: "Tools change, systems don't. Why stepping back to understand inputs, outputs, constraints, and feedback loops is the true path to progress.",
        content: `
Most people in tech obsessively focus on tools. 

They argue about Next.js vs Remix. They debate Rust vs Go. They learn whatever new framework is trending on Hacker News, believing that the tool itself will unlock some unseen level of productivity.

That's short-term thinking masquerading as hustle.

Tools change constantly. Systems do not.

## The Core Principles

I remember dealing with a sluggish API a few years ago. The immediate reaction of the team was to scale up the AWS instance—treating the symptom with a bigger, more expensive hammer. It "worked" for a week. 

But when we actually stepped back and approached it as a system, the reality became clear: a minor misconfiguration in the ORM was generating thousands of N+1 database queries on every page load. The database was choking; the server was totally fine. 

Once I started thinking in systems (inputs, outputs, constraints, feedback loops) everything became clearer. Whether it's a software architecture, a business pipeline, or even personal habits, the exact same core principles apply.

If something isn't working, it's never random. There is a bottleneck. There is a broken feedback loop. There is a misaligned incentive somewhere down the chain.

The problem is, systems thinking is exhausting. It requires you to step back instead of jumping straight into action. It forces you to look at the ugly, holistic picture rather than the neat, isolated piece of code you're currently working on. It forces you to see uncomfortable truths: like realizing the system you spent three months building is fundamentally flawed at its core architecture.

## Applying It Everywhere

Right now, I'm trying to apply this lens everywhere:

- **In code:** Designing for extreme simplicity, ensuring data flows linearly and predictably.
- **In products:** Looking past what users say they want, and observing the system of their actual behavior.
- **In my own life:** Identifying the behavioral bottlenecks where I'm pouring 80% of my energy for 20% of the return.

Working theory: if you understand systems deeply, you don't need to chase opportunities: you can simply create them by identifying inefficiencies others are blind to.`
    },
    {
        slug: "playing-the-wrong-game",
        title: "I'm Not Behind: I've Just Been Playing the Wrong Game",
        date: "Nov 20, 2025",
        readTime: "6 min read",
        summary: "Questioning the premise of feeling behind. Why optimizing for depth, autonomy, and original thinking beats chasing credentials.",
        content: `
There is a constant, suffocating pressure in the tech industry to feel like you're behind.

You open LinkedIn and someone younger than you just raised $5M for a startup. You scroll Twitter and an ex-colleague just landed a Staff Engineer role at a FAANG. You look at your own IDE, doing mundane work, and the panic sets in. You must be doing something wrong. You are losing the race.

For a long time, I completely bought into that anxiety.

But recently, I've started questioning the entire premise.

Behind… compared to what? And according to whose metrics?

## Invisible Tradeoffs

We routinely compare our behind-the-scenes struggles to everyone else's highlight reels. Most of the benchmarks we use are based purely on highly visible outcomes. You don't see their underlying reality. You don't see the massive technical debt they shipped to hit that launch date. You don't see the crushing burnout tied to their promotion. You don't see the constraints on their autonomy.

What I've realized is deeply liberating: I wasn't actually behind. I was just optimizing my life for the wrong overarching variables.

I was chasing external credentials instead of internal capability.
I was optimizing for speed of execution instead of depth of knowledge.
I was desperately seeking validation instead of carving out real, sovereign autonomy.

## Recalibrating

Now, I'm deliberately recalibrating.

I'm enforcing fewer distractions and placing a hyper-focus on leverage.
I'm curating my inputs to have dramatically less noise and more signal.
I'm rejecting the urge to imitate what's popular, and leaning harder into original, independent thinking.

Let me be clear: this is not a comfortable pivot. It feels slow. Often, it looks to the outside world like I'm completely stagnant.

But my hypothesis is simple: if I get the absolute fundamentals right (deep thinking, robust systems, pure execution) the compounding results will eventually follow.

And if they don't? At least I'll sleep well knowing I lost on my own terms, not because I was desperately trying to play someone else's rigged game.`
    },
    {
        slug: "illusion-of-productivity",
        title: "The Illusion of Productivity: Movement is Not Progress",
        date: "Oct 10, 2025",
        readTime: "5 min read",
        summary: "Reflecting on how busyness can mask a lack of impact, and why doing less can often mean achieving more.",
        content: `
We live in an era where frantic activity is continuously mistaken for genuine value.

For years, I proudly measured the success of my workdays by how completely exhausted I was by 6 PM. High git commit counts, a calendar packed back-to-back with meetings, and an endless stream of Jira tickets moved ceremoniously from 'In Progress' to 'Done'. 

It felt incredibly productive. It felt like I was moving mountains.

But in reality, I was just moving dirt from one pile to another.

## The Trap of Busyness

Busyness is wildly seductive because it perfectly mimics progress. It releases a steady drip of dopamine. It tells your brain you are indispensable. If you are stressed and rushing, you *must* be doing something important, right?

Wrong. Movement without a defined, critical direction is just friction.

I remember a specific sprint where I grinded through the weekend to ship a complex, heavily requested feature. We deployed it on time. Two months later, the analytics showed that less than 1% of our user base had ever even clicked on it. I had been immensely productive, and immensely useless.

When you're constantly rushing, you fundamentally lose the cognitive space required to ask the most important question in engineering: *Should this actually be done at all?*

Most "urgent" work is just poorly planned work wrapped in panic.

## Optimizing for Impact

I've recently started ruthlessly auditing my output. If a task doesn't explicitly move the needle on a core, high-priority objective, it shouldn't exist. Not, "it should be backlogged for later." It should be deleted entirely.

This requires immense professional discipline. It means looking stakeholders in the eye and saying no to things that sound like good ideas. It means accepting periods of quiet, deep, conceptual work that completely lack the visual optics of "hustle" to an external observer.

My current philosophy: The goal of my career is not to do more things. The goal is to identify and execute the very few things that render the majority of other work completely irrelevant.`
    },
    {
        slug: "overengineering-defense-mechanism",
        title: "Over-Engineering as a Defense Mechanism",
        date: "Sep 15, 2025",
        readTime: "6 min read",
        summary: "Why we build complex systems when simple ones will do, and how fear of the unknown drives architectural bloat.",
        content: `
I've reviewed hundreds of architectures over the years, and I've noticed a deeply human pattern hiding behind the code.

The most complex, convoluted systems aren't built by the smartest engineers. They are built by the most anxious ones.

We like to pretend that over-engineering is born from a pursuit of technical excellence or future-proofing. It is rarely either. It's almost always an emotional response. It is a defense mechanism against the terrifying uncertainty of not knowing what tomorrow's requirements will be.

## Designing for Fear

I am incredibly guilty of this. A few years ago, I built a side project that had exactly three daily active users. Yet, I deployed it on a fully automated Kubernetes cluster, implemented an event-driven Kafka architecture, and spun up three distinct microservices. It was a masterpiece of modern cloud engineering. It was also completely, undeniably absurd.

When we don't know exactly how a product will be used, we try to abstract everything just to be safe. We build microservices for a scale and traffic load we literally do not possess. We introduce message queues just in case we suddenly become Twitter overnight. We write abstract adapter layers for our database, just in case we capriciously decide to switch from Postgres to MongoDB next week (spoiler alert: we never will).

This isn't software architecture. This is just hoarding generic solutions.

Every abstraction you create is a massive liability. Every layer of indirection is a dark corner for a bug to hide, and an extra hurdle for a new developer to trip over.

## The Courage to Be Simple

It takes profound technical confidence to build a boring solution. It takes guts to sit in a planning meeting, look at a complex, buzzy problem, and say, "A simple monolith and a single, well-indexed Postgres table will easily solve this for the next 24 months."

Boring architectures are highly resilient. Boring architectures are easily maintainable. And most importantly, boring architectures actually ship to production.

I'm actively working on pruning my knee-jerk instinct to abstract. I force myself to stick to the absolute simplest path. If that simple solution breaks a year from now because we experienced hyper-growth and scaled too fast? That's a luxury problem to have. We can fix it then, with the actual capital we earned from shipping quickly.

Until then: do less, but do it infinitely better.`
    }
];

export const snippets = [
    {
        domain: "Concurrency",
        title: "Lock-Free Ring Buffer",
        description: "A single-producer, single-consumer circular buffer using atomic memory barriers to avoid mutex contentions in high-frequency trading contexts.",
        why: "Standard Go interaction via channels introduced too much GC pressure at 100k msg/sec.",
        link: "#",
        language: "go",
        code: `// Single-producer, single-consumer lock-free queue
type RingBuffer[T any] struct {
    buffer []T
    head   uint64
    tail   uint64
    mask   uint64
}

func (rb *RingBuffer[T]) Offer(item T) bool {
    head := atomic.LoadUint64(&rb.head)
    tail := atomic.LoadUint64(&rb.tail)
    
    // Check if buffer is full (head wrapped around and caught tail)
    if head-tail >= uint64(len(rb.buffer)) {
        return false 
    }
    
    rb.buffer[head & rb.mask] = item
    atomic.StoreUint64(&rb.head, head+1) // Release
    return true
}`
    },
    {
        domain: "Resilience",
        title: "Circuit Breaker Middleware",
        description: "Custom implementation of a state-machine based circuit breaker. Features half-open state testing and exponential backoff reset timers.",
        why: "Needed fine-grained control over failure thresholds that off-the-shelf libraries didn't expose.",
        link: "#",
        language: "javascript",
        code: `class CircuitBreaker {
  constructor(failureThreshold, resetTimeout) {
    this.failureThreshold = failureThreshold;
    this.resetTimeout = resetTimeout;
    this.failures = 0;
    this.state = 'CLOSED';
    this.lastFailureTime = null;
  }

  async exec(command) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit is OPEN');
      }
    }

    try {
      const result = await command();
      if (this.state === 'HALF_OPEN') {
        this.reset();
      }
      return result;
    } catch (e) {
      this.recordFailure();
      throw e;
    }
  }
}`
    },
    {
        domain: "Database",
        title: "Hierarchical Indexing for Geospatial Data",
        description: "Implementation of Quadtrees on top of a Key-Value store to enable efficient radius search without PostGIS.",
        why: "Running full Postgres instances on edge devices was not feasible due to memory constraints.",
        link: "#",
        language: "python",
        code: `class QuadTree:
    def __init__(self, boundary, capacity):
        self.boundary = boundary # Rect
        self.capacity = capacity
        self.points = []
        self.divided = False

    def insert(self, point):
        if not self.boundary.contains(point):
            return False

        if len(self.points) < self.capacity:
            self.points.append(point)
            return True
        else:
            if not self.divided:
                self.subdivide()
            
            return (self.northeast.insert(point) or
                    self.northwest.insert(point) or
                    self.southeast.insert(point) or
                    self.southwest.insert(point))`
    },
    {
        domain: "Systems",
        title: "Custom Memory Allocator",
        description: "Arena allocator for handling short-lived request objects in a C++ web server.",
        why: "Heap fragmentation was causing long tail latencies after 24 hours of uptime.",
        link: "#",
        language: "cpp",
        code: `class Arena {
public:
    void* alloc(size_t bytes) {
        // Align to 8 bytes
        size_t aligned = (bytes + 7) & ~7;
        
        if (ptr + aligned > end) {
            // Fallback to new block or OS alloc
            return grow(aligned);
        }
        
        void* result = ptr;
        ptr += aligned;
        return result;
    }
    
    void reset() {
        ptr = buffer; // Instant deallocation of everything
    }

private:
    char* buffer;
    char* ptr;
    char* end;
};`
    }
];
