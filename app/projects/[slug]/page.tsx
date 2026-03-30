import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

const askMyDocStory = [
  {
    groupTitle: "System Overview",
    sections: [
      {
        title: "How It Works — End to End",
        content: [
          "When a user uploads a PDF, the file is sent as a multipart request to the FastAPI backend where it is read entirely in memory and never written to disk. From there, pdfplumber extracts the raw text, which is then split into overlapping chunks using LangChain recursive text splitting. Each chunk is embedded using OpenAI text-embedding-3-small and stored in a ChromaDB collection namespaced under a unique document UUID. That UUID is returned to the frontend and used for all subsequent queries against that document.",
          "When the user asks a question, the question is embedded using the same model and a semantic similarity search runs against the stored chunks. The top matching chunks are retrieved and injected into a prompt alongside the user question, then sent to gpt-4o-mini. The model is instructed to answer strictly from the provided context and explicitly acknowledge when the answer is not found in the document. The response is returned to the frontend and rendered in the chat interface.",
        ],
      },
    ],
  },
  {
    groupTitle: "AI & ML Architecture",
    sections: [
      {
        title: "RAG — Retrieval, Augmentation, Generation",
        content: [
          "The RAG pipeline has three distinct stages. Retrieval uses semantic similarity search in ChromaDB, where the user question is embedded and matched against stored document chunks to find the most contextually relevant passages. Augmentation injects those retrieved chunks directly into the LLM prompt as grounding context. Generation is handled by gpt-4o-mini, which is instructed to answer only from the provided excerpts and fall back gracefully when the information is not there, preventing fabricated answers.",
        ],
      },
      {
        title: "LLM and Embedding Model Choices",
        content: [
          "Two OpenAI models power the pipeline. text-embedding-3-small handles all embeddings and provides a strong balance of quality and cost for development and light production. gpt-4o-mini handles answer generation and provides good question answering quality at lower latency and cost than gpt-4o, which matters for conversational UX. Temperature is set to 0 to maximize determinism and reduce variability, which is more important than creativity for document question answering.",
        ],
      },
      {
        title: "Chunking and Indexing Strategy",
        content: [
          "Text is split using LangChain recursive character splitting with a chunk size of about 2000 characters and an overlap of 200 characters. The overlap preserves context across chunk boundaries so answers do not get fragmented when a relevant passage straddles two chunks. Larger chunks were chosen over smaller ones to improve context completeness for long form documents such as reports and contracts, while also reducing vector count and keeping embedding and query overhead lower.",
        ],
      },
    ],
  },
  {
    groupTitle: "Infrastructure & Data",
    sections: [
      {
        title: "Why ChromaDB and Why Local",
        content: [
          "ChromaDB was chosen for simplicity and zero infrastructure setup. For a portfolio project the goal was fast iteration and full transparency during debugging, and a locally persisted vector store delivers both without the overhead of a managed cloud service. The tradeoff is clear, ChromaDB local is not suitable for multi user production deployments or high availability requirements. For that, a managed vector database such as Pinecone or Weaviate is the better fit. For this scope, local ChromaDB was the right decision.",
        ],
      },
      {
        title: "Session and State Management",
        content: [
          "The backend is stateless per request, with no server side user session store. Each uploaded document gets a UUID at upload time, which namespaces its ChromaDB collection so multiple documents can coexist without bleeding into each other. The raw PDF is not persisted by default, only embeddings are stored locally in the Chroma directory. Current document and chat state lives in React state on the frontend, keeping backend behavior simple.",
        ],
      },
    ],
  },
  {
    groupTitle: "Application Design",
    sections: [
      {
        title: "Frontend-Backend Communication",
        content: [
          "The frontend communicates with the backend over REST using the Fetch API. There are three endpoints, POST /upload for PDF ingestion, POST /chat for question answering, and GET /health for availability checks. WebSockets were considered and intentionally skipped because the interaction is request response and does not require bidirectional real time messaging. The API surface is minimal, upload returns a document_id and chat uses that ID to scope retrieval to the correct document.",
        ],
      },
      {
        title: "Error Handling and Edge Cases",
        content: [
          "Several failure modes are handled explicitly. On upload, the backend rejects non PDF files, PDFs with no extractable text, and uploads that produce empty or invalid chunks. On query, empty questions are rejected before calling the LLM and a controlled fallback message is returned when no relevant context is found, instead of exposing raw errors. On the frontend, upload and chat failures are shown inline and interactive elements remain disabled until a document is successfully loaded.",
        ],
      },
    ],
  },
  {
    groupTitle: "Reflection",
    sections: [
      {
        title: "What I'd Change If Starting Over",
        content: [
          "A few improvements stand out in hindsight. Source citations should have been a day one feature so each answer can point to the exact chunk or page. Token aware chunking should replace character based splitting for more consistent chunk sizes across document types. An async ingestion pipeline with progress stages would improve UX for large PDFs where synchronous processing feels slow. I would also add extraction, chunking, and retrieval quality tests from the start instead of treating them as later work.",
        ],
      },
    ],
  },
];

const askMyDataStory = [
  {
    groupTitle: "System Overview",
    sections: [
      {
        title: "How It Works — End to End",
        content: [
          "The user uploads a CSV file through the Next.js interface, which sends it to the FastAPI backend via a multipart POST request. The backend loads the file into a pandas DataFrame, extracts column names, data types, row and column counts, and a five row preview, then stores the DataFrame in an in memory session scoped to a unique session ID. That session ID is returned to the frontend and attached to every subsequent request.",
          "When the user asks a question, the backend assembles the dataset schema, the preview rows, and the recent conversation history into a structured prompt and sends it to GPT. The model returns executable Python code which is immediately run in a sandboxed environment. If the code produces a text result it is captured from stdout. If it produces a chart, the matplotlib figure is captured and encoded as a base64 PNG. Both are returned to the frontend and rendered in the chat panel alongside the original question.",
        ],
      },
    ],
  },
  {
    groupTitle: "AI & Architecture",
    sections: [
      {
        title: "The Query Engine Code Generation over RAG or SQL",
        content: [
          "AskMyData query engine is built around LLM code generation combined with sandboxed runtime execution. Rather than retrieving pre indexed passages or translating questions into SQL, the system asks GPT to write pandas and matplotlib Python code tailored to the user question, then executes that code live against the actual dataset.",
          "This approach was chosen deliberately over alternatives. RAG works well for unstructured documents but is weak at numeric computation and chart generation because it retrieves text rather than computing. SQL agents are strong for relational querying but fall short on custom Python transformations and arbitrary visualization without heavy extension. Code generation is the most flexible pattern for open ended analytics and visualization questions over CSV data, and it produces real computed answers rather than approximations from retrieved context.",
        ],
      },
      {
        title: "How Structured Data Is Parsed and Queried",
        content: [
          "CSV ingestion happens at the upload endpoint where the file is parsed directly into a pandas DataFrame. The backend immediately extracts column names, data types, row count, column count, and a five row preview. This schema snapshot is what gets sent to GPT for every question, not the raw data itself. The DataFrame is stored in an in memory session dictionary keyed by a UUID session ID.",
          "Querying happens through generated Python code. GPT receives the schema and writes pandas operations against a variable called df, which maps to the live DataFrame from the session. This means every answer is computed directly from real data rather than from a summarized or indexed representation.",
        ],
      },
      {
        title: "Why This Stack",
        content: [
          "Each tool in the stack was chosen to optimize real capability with minimal setup friction. FastAPI provides fast iteration, clean type annotations, and simple REST endpoints without heavy framework overhead. Pandas is highly ergonomic for ad hoc CSV analytics, and GPT is strong at generating it. Matplotlib and seaborn handle server side chart rendering reliably without a browser or GUI. Next.js with TypeScript provides a clean component model and strong frontend developer experience. Together this stack delivers real analytical capability without adding unnecessary complexity from larger data platforms.",
        ],
      },
    ],
  },
  {
    groupTitle: "Infrastructure & Data",
    sections: [
      {
        title: "Data Limits and Session Scope",
        content: [
          "The application currently supports CSV files only. All data lives in memory for the duration of the session, and nothing is written to disk or persisted to a database. Analysis is scoped to the active session, meaning one uploaded file per conversation. There is no hard file size quota enforced in code at this stage, so practical limits are available server memory and CPU. For a portfolio project with controlled demo usage this is a reasonable tradeoff, though production should enforce explicit size limits and execution timeouts.",
        ],
      },
    ],
  },
  {
    groupTitle: "Application Design",
    sections: [
      {
        title: "Frontend-Backend Communication",
        content: [
          "The frontend communicates with the backend over REST using three endpoints, POST /upload for CSV ingestion, POST /analyze for question answering, and GET /health for availability checks. JSON is used for structured payloads and multipart form data is used for file upload. WebSockets were considered and deliberately skipped because request response latency is acceptable and synchronous architecture keeps debugging and demos simpler. The small API surface also makes extension easier without cascading changes.",
        ],
      },
      {
        title: "Code Execution Safety",
        content: [
          "All generated code runs in a restricted execution environment. The sandbox uses tightly scoped globals exposing only pandas, matplotlib, seaborn, the user DataFrame, and print. Python builtins are removed, and access to filesystem or process modules such as os, subprocess, and open is unavailable. An import hook further limits runtime imports. Before execution, generated code is normalized to remove markdown fences and validated with compile(). If execution fails, the error and original code are sent back to GPT for one corrected retry, which resolves most runtime failures automatically.",
        ],
      },
      {
        title: "Handling Ambiguous Questions and Context",
        content: [
          "Ambiguous questions are handled at the prompt layer. The system prompt instructs GPT to ask one concise clarification question when user intent is unclear, instead of guessing and producing an unreliable answer. For follow up questions that reference prior turns, recent conversation history is included in every GPT call so contextual phrases like compare those two or now show it as a chart resolve correctly. When generated code fails at runtime, the error and original code are automatically sent back for correction, keeping most execution failures invisible to the user.",
        ],
      },
      {
        title: "Making Data Conversations Feel Natural",
        content: [
          "A core UX challenge was preserving conversational context without hallucinating intent across turns. Early versions treated each question as standalone and broke follow ups that referenced prior answers. Passing bounded conversation history into each GPT call fixed this by keeping context continuity. Another challenge was distinguishing data answerable questions from subjective questions. The system prompt handles this explicitly by redirecting subjective prompts toward data driven comparisons the dataset can support.",
        ],
      },
    ],
  },
  {
    groupTitle: "Reflection",
    sections: [
      {
        title: "What I'd Change If Starting Over",
        content: [
          "Several architecture choices would be different with hindsight. Execution isolation would be containerized from day one, because restricted globals are acceptable for a portfolio demo but not for production reliability and hard resource control. An intent classification layer before code generation would improve routing and reduce failure cases. Conversation state would be modeled as a first class typed memory structure rather than appended as plain text. A prompt regression test harness would also be added early to reduce debugging time and preserve behavior across updates.",
        ],
      },
    ],
  },
];

type ProjectShowcasePageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectShowcasePage({ params }: ProjectShowcasePageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const showcaseStoryBySlug: Record<string, typeof askMyDocStory> = {
    askmydoc: askMyDocStory,
    askmydata: askMyDataStory,
  };

  const showcaseStory = showcaseStoryBySlug[project.slug] ?? null;

  return (
    <main className="px-6 pb-20 pt-28 md:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/#projects"
          className="terminal-btn inline-flex items-center px-4 py-2 text-sm"
        >
          cd ../projects
        </Link>

        <div className="terminal-panel mt-8 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl">{project.name}</h1>
          <p className="mt-3 text-lg text-foreground/90">{project.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="terminal-chip px-3 py-1 text-xs text-accent">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="terminal-btn px-4 py-2 text-sm text-foreground/90"
            >
              git clone
            </a>
          </div>
        </div>

        {showcaseStory ? (
          <div className="mt-8 space-y-6">
            {showcaseStory.map((group) => (
              <section key={group.groupTitle} className="terminal-panel p-6 md:p-8">
                <h2 className="font-display text-3xl text-foreground">{group.groupTitle}</h2>
                <div className="mt-6 space-y-8">
                  {group.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-display text-2xl text-foreground">{section.title}</h3>
                      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                        {section.content.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section className="terminal-panel mt-8 p-6 md:p-8">
            <h2 className="font-display text-2xl text-foreground">Showcase coming soon</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A detailed technical walkthrough for this project will be added here.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
