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
        description: "Founded and developed an adventure and exploration platform that focuses on curating the moments that make life worth living.",
        link: "https://roavva.com",
        category: "Product Development"
    },
    {
        title: "Africorpus",
        tech: "React, Kafka, Pandas/Numpy, PySpark",
        description: "Founded africorpus to build rigorously curated, machine-readable datasets designed for training, evaluation, and alignment of modern AI models.",
        link: "https://africorpus.netlify.app/",
        category: "Data Engineering"
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
        readTime: "4 min read",
        summary: "Why assembling pieces other people created isn't real engineering, and the long-term value of deep system understanding.",
        content: `
I used to think I was building things.

I wasn't. I was assembling pieces other people created: frameworks, APIs, templates, and calling it engineering. That realization hit hard, because the entire industry rewards that illusion. Ship fast, glue things together, move on.

But assembling is not building.

## Confronting the Unknown

Building is when you understand the system deeply enough to break it, rebuild it, and improve it without relying on documentation as a crutch. Most developers avoid that level because it's uncomfortable. It forces you to confront how little you actually know.

I've started shifting how I approach things. Instead of asking, "How do I use this?" I ask, "How does this work underneath?" Instead of stacking tools, I try to reduce them.

## The Only Path That Compounds

This is slower. It's also the only path that compounds.

My working hypothesis: the developers who win long-term are not the fastest builders, they're the ones who understand systems deeply enough to bend them.

I'm testing that.`
    },
    {
        slug: "founder-experience-scar-tissue",
        title: "Founder Experience Is Not a Title: It's Scar Tissue",
        date: "Feb 28, 2026",
        readTime: "5 min read",
        summary: "The harsh reality of building from zero. Ideas don't matter; execution under constraints, distribution, and persistence do.",
        content: `
People throw around "founder" like it's a badge.

It's not. It's a record of mistakes you paid for in time, reputation, and opportunity cost.

Building something from zero forces you into reality fast. No abstraction, no theory: just outcomes. Either people use what you built, or they don't. Either money comes in, or it doesn't.

There's no hiding.

## The Illusion of Ideas

Working on my own ideas exposed how naive I was about "good ideas." Ideas don't matter. Distribution does. Timing does. Execution under constraints does.

And most importantly, persistence under uncertainty.

The hardest part isn't building. It's continuing when there's no signal that you're on the right path.

## The Real Value

My current belief: founder experience only has value if it changes how you operate. If you still think like an employee: waiting for direction, avoiding risk, then you didn't actually learn anything.

I'm trying to extract the lessons, not just carry the label.`
    },
    {
        slug: "ai-exposing-developers",
        title: "AI Is Not Replacing You: It's Exposing You",
        date: "Jan 14, 2026",
        readTime: "4 min read",
        summary: "AI didn't create the weakness of predictable, repetitive coding; it revealed it. How to transition from code execution to system judgment.",
        content: `
There's a lot of noise about AI replacing developers.

I think that's the wrong frame.

AI is exposing who actually understands what they're doing.

## Fragile Value vs Defensible Value

If your value is writing predictable, repetitive code, then yes, you're at risk. But that was always fragile value. AI didn't create the weakness; it revealed it.

What AI does well is execution. What it doesn't do well (yet) is judgment.

Knowing what to build, why it matters, what tradeoffs to accept, what to ignore: that's still human. And it's where most developers are weak, because they've trained themselves to follow instructions, not make decisions.

## Reframing Leverage

I've started using AI differently. Not as a replacement, but as leverage. It compresses time. It removes friction. But it also forces me to think more clearly, because vague thinking produces useless output.

Hypothesis: AI will not eliminate developers. It will split them into two groups: those who direct systems, and those who are replaced by them.

I'm positioning for the first group.`
    },
    {
        slug: "systems-thinking-compounds",
        title: "Systems Thinking Is the Only Skill That Compounds",
        date: "Dec 05, 2025",
        readTime: "6 min read",
        summary: "Tools change, systems don't. Why stepping back to understand inputs, outputs, constraints, and feedback loops is the true path to progress.",
        content: `
Most people focus on tools.

New framework. New language. New trend.

That's short-term thinking.

Tools change. Systems don't.

## The Core Principles

Once I started thinking in systems (inputs, outputs, constraints, feedback loops) everything became clearer. Whether it's a product, a business, or even personal growth, the same principles apply.

If something isn't working, it's not random. There's a bottleneck. There's a broken feedback loop. There's a misaligned incentive.

The problem is, systems thinking is harder. It requires stepping back instead of jumping into action. And it forces you to see uncomfortable truths: like realizing the system you built is fundamentally flawed.

## Applying It Everywhere

Right now, I'm trying to apply this everywhere:

- **In code:** designing for simplicity and scale
- **In products:** focusing on real user behavior, not assumptions
- **In my own life:** identifying where I'm wasting effort with no return

Working theory: if you understand systems deeply, you don't need to chase opportunities: you can create them.`
    },
    {
        slug: "playing-the-wrong-game",
        title: "I'm Not Behind: I've Just Been Playing the Wrong Game",
        date: "Nov 20, 2025",
        readTime: "5 min read",
        summary: "Questioning the premise of feeling behind. Why optimizing for depth, autonomy, and original thinking beats chasing credentials.",
        content: `
There's this constant pressure to feel behind.

Someone is earning more. Building faster. Getting hired by better companies.

For a while, I bought into that.

But I've started questioning the premise.

Behind… compared to what? And according to who?

## Invisible Tradeoffs

Most of the benchmarks people use are based on visible outcomes, not underlying reality. You don't see the tradeoffs, the constraints, or the long-term viability of those paths.

What I've realized is this: I wasn't behind. I was just optimizing for the wrong things.

Chasing credentials instead of capability.
Speed instead of depth.
Approval instead of autonomy.

## Recalibrating

Now I'm recalibrating.

Fewer distractions. More focus on leverage.
Less noise. More signal.
Less imitation. More original thinking.

This is not comfortable. It feels slower, and sometimes it looks like I'm not progressing.

But my hypothesis is simple: if I get the fundamentals right (thinking, systems, execution) the results will follow.

And if they don't, at least I'll know I wasn't just playing someone else's game.`
    },
    {
        slug: "illusion-of-productivity",
        title: "The Illusion of Productivity: Movement is Not Progress",
        date: "Oct 10, 2025",
        readTime: "4 min read",
        summary: "Reflecting on how busyness can mask a lack of impact, and why doing less can often mean achieving more.",
        content: `
We live in an era where activity is mistaken for value.

For years, I measured my days by how exhausted I was. High commit counts, back-to-back meetings, endless tickets moved from 'In Progress' to 'Done'. It felt like I was moving mountains.

But I was just moving dirt.

## The Trap of Busyness

Busyness is seductive because it feels like progress. It releases dopamine. It tells your brain you are indispensable. But movement without direction is just friction.

When you're constantly rushing, you lose the ability to ask the most important question: *Should this be done at all?*

Most "urgent" work is just poorly planned work.

## Optimizing for Impact

I've started ruthlessly auditing my output. If a task doesn't move the needle on a core objective, it shouldn't exist. Not, "it should be done later." It should be deleted.

This requires immense professional discipline. It means saying no to things that sound good. It means accepting periods of quiet deep work that don't look "productive" to an external observer.

My current philosophy: The goal is not to do more. The goal is to do the few things that render everything else irrelevant.`
    },
    {
        slug: "overengineering-defense-mechanism",
        title: "Over-Engineering as a Defense Mechanism",
        date: "Sep 15, 2025",
        readTime: "5 min read",
        summary: "Why we build complex systems when simple ones will do, and how fear of the unknown drives architectural bloat.",
        content: `
I've reviewed hundreds of architectures, and I've noticed a pattern.

The most complex systems aren't built by the smartest engineers. They're built by the most anxious ones.

Over-engineering is rarely about technical excellence. It's almost always an emotional response. It's a defense mechanism against uncertainty.

## Designing for Fear

When we don't know exactly how a product will be used, we abstract everything. We build microservices for scale we don't have. We introduce message queues for traffic that doesn't exist. We abstract databases just in case we need to switch from Postgres to Mongo next week (spoiler: we won't).

This isn't architecture. This is hoarding generic solutions.

Every abstraction is a liability. Every layer of indirection is a place for a bug to hide.

## The Courage to Be Simple

It takes profound confidence to build a boring solution. To look at a complex problem and say, "A simple monolith and a well-indexed Postgres table will solve this for the next two years."

Boring architectures are resilient. Boring architectures are maintainable. Boring architectures actually ship.

I'm actively working on pruning my instinct to abstract. If the simple solution breaks because we grew too fast, that's a luxury problem to have. We can fix it then.

Until then: do less, but do it better.`
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
