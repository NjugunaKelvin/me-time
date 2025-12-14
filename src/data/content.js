export const projects = [
    {
        title: "Distributed RAG System",
        tech: "Python, LangChain, Pinecone, FastAPI",
        description: "Designed and implemented a scalable Retrieval-Augmented Generation system capable of processing 1M+ documents with sub-200ms query latency. Implemented hybrid search (dense + sparse) for improved relevance.",
        link: "#",
        category: "AI Engineering"
    },
    {
        title: "Real-time Anomaly Detection",
        tech: "Go, Kafka, TensorFlow Serving",
        description: "Built a streaming data pipeline to detect financial fraud anomalies in real-time. Utilized Kafka for high-throughput event ingestion and TensorFlow Serving for low-latency inference.",
        link: "#",
        category: "Backend Systems"
    },
    {
        title: "Autonomous Agent Orchestrator",
        tech: "TypeScript, Node.js, OpenAI",
        description: "Developed a framework for orchestrating multi-agent workflows. Features include dynamic tool selection, memory persistence with Redis, and a self-correction loop for code generation tasks.",
        link: "#",
        category: "AI Engineering"
    },
    {
        title: "High-Frequency Trading Engine",
        tech: "C++, ZeroMQ, Redis",
        description: "Prototype exchange engine matching orders in microseconds. Focused on lock-free data structures and minimizing network hops for ultra-low latency execution.",
        link: "#",
        category: "Systems Programming"
    },
    {
        title: "Custom Kubernetes Operator",
        tech: "Go, Kubernetes API, Docker",
        description: "Built a custom K8s operator to manage the lifecycle of stateful ML training jobs. Automates checkpointing, spot instance interruption handling, and resource scaling.",
        link: "#",
        category: "DevOps/MLOps"
    },
    {
        title: "Distributed Key-Value Store",
        tech: "Rust, Raft Consensus, gRPC",
        description: "Implemented a distributed KV store from scratch to understand consensus algorithms. Features leader election, log replication, and snapshotting using the Raft protocol.",
        link: "#",
        category: "Systems Programming"
    },
    {
        title: "Video Content Search Engine",
        tech: "Python, CLIP, FFmpeg, Opensearch",
        description: "Created a semantic search engine for video content. Extracts frames, generates embeddings using CLIP, and indexes them for natural language search queries against video libraries.",
        link: "#",
        category: "AI Engineering"
    },
    {
        title: "Serverless Image Processing Pipeline",
        tech: "AWS Lambda, S3, SQS, Python",
        description: "Architected a highly scalable image processing pipeline handling millions of uploads per day. Uses event-driven architecture to decouple uploads from processing logic.",
        link: "#",
        category: "Cloud Architecture"
    }
];

export const articles = [
    {
        slug: "optimizing-vector-search",
        title: "Optimizing Vector Search at Scale",
        date: "Oct 12, 2024",
        readTime: "8 min read",
        summary: "Exploring HNSW vs IVF configurations for billion-scale datasets using Pinecone and Milvus.",
        content: `
  ## Introduction
  
  Vector databases have become the backbone of modern AI applications, especially with the rise of RAG (Retrieval-Augmented Generation). However, as your dataset grows from millions to billions of vectors, out-of-the-box configurations often fail to meet latency and recall requirements. In this post, we'll dive deep into the internals of vector indexing, specifically comparing HNSW (Hierarchical Navigable Small World) and IVF (Inverted File Index).
  
  ## HNSW: The Graph Approach
  
  HNSW is widely regarded as the state-of-the-art for approximate nearest neighbor search. It builds a multi-layer graph where lower layers contain more detailed connections.
  
  ### Pros:
  - **High Recall:** Excellent accuracy even at high speeds.
  - **Low Latency:** Traverses graphs efficiently.
  
  ### Cons:
  - **Memory Usage:** The graph structure consumes significant RAM.
  - **Build Time:** Constructing the index can be slow.
  
  ## IVF: The Clustering Approach
  
  IVF, or Inverted File Index, partitions the vector space into Voronoi cells (clusters). When a query comes in, it first finds the closest centroids and only searches vectors within those clusters.
  
  ### Pros:
  - **Memory Efficient:** Requires less RAM than HNSW.
  - **Fast Construction:** Quicker to build.
  
  ### Tuning for Scale
  
  When dealing with billion-scale datasets, a hybrid approach or careful tuning of HNSW parameters (like \`M\` and \`efConstruction\`) is crucial. We found that...
      `
    },
    {
        slug: "python-to-go-microservices",
        title: "Why I Switched from Python to Go for Microservices",
        date: "Sep 28, 2024",
        readTime: "6 min read",
        summary: "A deep dive into performance benchmarks, concurrency patterns, and the developer experience of migrated services.",
        content: `
  ## The Bottleneck
  
  Our data ingestion pipeline was written in Python. It served us well for years, but as our throughput hit 50k events per second, the Global Interpreter Lock (GIL) became a massive hurdle. We were spinning up dozens of instances just to utilize multi-core CPUs efficiently.
  
  ## Enter Go
  
  Go (Golang) caught our eye with its promise of performant concurrency via Goroutines and Channels.
  
  ### The Migration Process
  
  We picked a non-critical service—the log aggregator—as our pilot project. The rewrite took 3 days. The results were staggering:
  
  - **CPU Usage:** Dropped by 60%.
  - **Memory Footprint:** Reduced by 40%.
  - **Tail Latency:** p99 latency went from 200ms to 15ms.
  
  ## Concurrency Patterns
  
  Python's \`asyncio\` is great, but Go's model feels much more natural for backend systems engineering...
      `
    },
    {
        slug: "attention-mechanisms-explained",
        title: "Understanding Attention Mechanisms in Transformers",
        date: "Aug 15, 2024",
        readTime: "12 min read",
        summary: "Visualizing Q, K, V matrices and understanding how self-attention actually works under the hood.",
        content: `
  ## Beyond Recurrence
  
  Before Transformers, RNNs and LSTMs were the kings of NLP. They processed data sequentially, which made parallelization impossible. The "Attention Is All You Need" paper changed everything.
  
  ## The Q, K, V Metaphor
  
  Think of a database:
  - **Query (Q):** What you are looking for.
  - **Key (K):** The label or ID of the data in the DB.
  - **Value (V):** The actual content.
  
  In self-attention, every token in a sentence produces these three vectors. The attention score is calculated by taking the dot product of the Query with all Keys...
  
  ## Multi-Head Attention
  
  Why settle for one perspective? Multi-head attention allows the model to focus on different parts of the sentence simultaneously (e.g., one head implementation syntax, another semantics)...
      `
    },
    {
        slug: "database-internals-lsm-vs-btree",
        title: "Database Internals: LSM Trees vs B-Trees",
        date: "Jul 22, 2024",
        readTime: "10 min read",
        summary: "When to use what? Analyzing write-heavy vs read-heavy workloads in storage engines.",
        content: `
  ## The Storage Engine Dilemma
  
  When choosing a database, you're essentially choosing a storage engine. The two dominant data structures are B-Trees (used in Postgres, MySQL) and Log-Structured Merge (LSM) Trees (used in Cassandra, RocksDB).
  
  ## B-Trees: Read Optimized
  
  B-Trees are balanced tree data structures that maintain sorted data and allow for searches, sequential access, insertions, and deletions in logarithmic time. They are great for read-heavy workloads because...
  
  ## LSM Trees: Write Optimized
  
  LSM trees buffer writes in memory (MemTable) and flush them to disk (SSTables) in a sequential manner. This makes them incredibly fast for write-heavy applications like activity logs or time-series data...
      `
    },
    {
        slug: "designing-rate-limiter",
        title: "System Design: Designing a Distributed Rate Limiter",
        date: "Jun 10, 2024",
        readTime: "15 min read",
        summary: "Token Bucket vs Leaky Bucket. Redis Lua scripts vs Envoy sidecars. A comprehensive guide.",
        content: `
  ## Why Rate Limit?
  
  To prevent abuse (DDoS), manage costs, and ensure fairness among users.
  
  ## Algorithms
  
  ### Token Bucket
  Imagine a bucket that gets filled with tokens at a constant rate. Each request removes a token. If the bucket is empty, the request is dropped.
  
  ### Sliding Window
  ...
  
  ## Implementation with Redis
  
  A common pattern is using Redis to store counters. However, race conditions are a risk. Using Lua scripts ensures atomicity...
      `
    },
    {
        slug: "raft-consensus-simplified",
        title: "Raft Consensus Algorithm Simplified",
        date: "May 05, 2024",
        readTime: "9 min read",
        summary: "Leader election, Log replication, and Safety. Making sense of distributed consensus.",
        content: `
  ## The Problem of Consensus
  
  In a distributed system, getting multiple nodes to agree on a shared state (like "x is now 5") is notoriously hard when failures occur. Paxos was the standard but was famously difficult to understand. Enter Raft.
  
  ## Leader Election
  
  Raft assigns one node as the Leader. All writes go to the leader. The leader replicates these to Followers. If the leader dies, a timeout triggers a new election...
      `
    },
    {
        slug: "kafka-event-driven",
        title: "Building Reliable Event-Driven Architectures with Kafka",
        date: "Apr 18, 2024",
        readTime: "7 min read",
        summary: "Handling idempotent processing, dead letter queues, and schema evolution.",
        content: `
  ## Decoupling Services
  
  Microservices shouldn't call each other directly for everything. That creates tight coupling. Instead, emit an event ("OrderPlaced") and let other services listen...
  
  ## Exactly-Once Processing
  
  Kafka supports exactly-once semantics, but it requires careful configuration of producers and consumers...
      `
    }
];
