export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  github: string;
  evidence: string;
  stack: string[];
  highlights: string[];
  problem: string;
  functional: string[];
  nonFunctional: string[];
  architecture: string;
  architectureDiagram: string;
  flow: string[];
  decisions: { title: string; why: string; tradeoff: string }[];
  hardest: { problem: string; naive: string; solution: string; edgeCases: string };
  database: string;
  entities: string[];
  apis: { method: string; endpoint: string; purpose: string; auth: string }[];
  security: { implemented: string[]; improvements: string[] };
  failure: { implemented: string[]; remaining: string[] };
  performance: string[];
  testing: string[];
  deployment: string[];
  observability: string[];
  tradeoffs: string[];
  roadmap: { short: string[]; medium: string[]; scale: string[] };
  learnings: string[];
  questions: string[];
  matters: string;
};

const sharedUnknown = 'No formal benchmark was included in the repository evidence reviewed for this case study.';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'distributed-job-scheduler',
    title: 'Distributed Job Scheduler',
    eyebrow: 'Backend / Distributed Systems',
    summary: 'A Spring Boot service for scheduling and executing background jobs with durable PostgreSQL state, Redis coordination, worker heartbeats, retries, and failure tracking.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/Distributed-Job-Scheduler',
    evidence: 'Repository evidence: pom.xml, schema.sql, controllers, repositories, worker services, tests, Docker Compose, Micrometer, and Spring Security.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Spring Data JPA', 'Docker Compose', 'JUnit 5', 'Mockito', 'Testcontainers'],
    highlights: ['Durable job and execution records', 'Redis queue and coordination services', 'Worker polling, heartbeats, retry, and permanent-failure paths', 'JWT authentication, BCrypt, roles, and audit logs', 'Micrometer counters, gauges, timers, and Actuator exposure'],
    problem: 'A background-job system cannot rely on a process-local timer once more than one worker can execute jobs. It needs durable job state, a way to claim due work, worker liveness signals, and explicit handling for retryable versus permanent failure. The repository implements those concerns without claiming a measured production SLA.',
    functional: ['Register and authenticate users.', 'Create, list, inspect, update, and delete jobs.', 'Poll and execute scheduled jobs.', 'Track executions, worker nodes, failed jobs, and retry actions.', 'Expose job status and metrics endpoints.'],
    nonFunctional: ['Durable state through PostgreSQL.', 'Coordination and queue support through Redis.', 'Stateless JWT-based request authentication.', 'Recoverable worker execution with heartbeat and retry behavior.', 'Testable service boundaries and observable counters/timers.'],
    architecture: 'The repository contains a Spring Boot API, JPA repositories over PostgreSQL, Redis queue/lock services, scheduled polling, worker execution, and security/observability infrastructure. The source does not surface Kubernetes manifests or a GitHub Actions workflow, so those are not shown as implemented here.',
    architectureDiagram: `flowchart TD\n    Client --> API[Spring Boot API]\n    API --> DB[(PostgreSQL)]\n    API --> Redis[Redis queue and coordination]\n    Redis --> Worker[Worker services]\n    Worker --> DB\n    API --> Metrics[Actuator and Micrometer]`,
    flow: ['A client authenticates through the auth controller and receives a JWT.', 'The client creates or inspects a job through the job controller.', 'Job state is persisted through JPA repositories and the SQL schema.', 'Polling/worker services identify executable work and coordinate access through Redis and repository locking.', 'The worker emits heartbeat and execution state, then records success, retry, or permanent failure.', 'Metrics and audit records expose operational state to API consumers.'],
    decisions: [
      { title: 'PostgreSQL for durable job state', why: 'Jobs, executions, workers, and audit records have relational relationships and need durable queries.', tradeoff: 'Relational durability adds schema and transaction management compared with keeping all state in Redis.' },
      { title: 'Redis for coordination and queue support', why: 'Shared worker coordination cannot depend on local process memory when multiple workers participate.', tradeoff: 'Correctness now depends on explicit Redis availability and lock/queue boundaries.' },
      { title: 'Repository locking plus worker coordination', why: 'Due-job selection and ownership need protection from concurrent workers.', tradeoff: 'Pessimistic locking can reduce contention at the cost of blocking and transaction complexity.' },
      { title: 'JWT and stateless Spring Security', why: 'Requests can be authenticated without server-side session storage.', tradeoff: 'Token revocation and rotation require deliberate policy beyond basic token verification.' },
    ],
    hardest: { problem: 'The hardest problem is separating durable job ownership from execution so a worker can fail without silently losing the job.', naive: 'A naive implementation would poll rows and immediately execute them in memory. Two workers could select the same row, or a crashed worker could leave no durable indication of what happened.', solution: 'The repository combines PostgreSQL job/execution state, repository locking, Redis coordination, worker heartbeats, retry paths, and permanent-failure tracking. The exact lock lifecycle should still be verified against a live deployment before promising exactly-once execution.', edgeCases: 'Redis outage, a worker dying after claiming work, heartbeat expiry during a long task, duplicate retry requests, and database transaction failure remain important scenarios to test.' },
    database: 'The repository includes an explicit SQL schema and JPA entities for User, Job, JobExecution, WorkerNode, and AuditLog. JobRepository exposes due-job and locking-oriented queries. Redis is used for transient coordination rather than replacing the durable relational model.',
    entities: ['User', 'Job', 'JobExecution', 'WorkerNode', 'AuditLog'],
    apis: [
      { method: 'POST', endpoint: '/auth/register', purpose: 'Create a user account.', auth: 'Public' },
      { method: 'POST', endpoint: '/auth/login', purpose: 'Authenticate and issue a JWT.', auth: 'Public' },
      { method: 'POST', endpoint: '/jobs', purpose: 'Create a scheduled job.', auth: 'JWT' },
      { method: 'GET', endpoint: '/jobs/status', purpose: 'Inspect job status.', auth: 'JWT' },
      { method: 'GET', endpoint: '/jobs/metrics', purpose: 'Read job metrics.', auth: 'JWT' },
      { method: 'POST', endpoint: '/jobs/retry/{jobId}', purpose: 'Request retry of a failed job.', auth: 'JWT / role checks' },
    ],
    security: { implemented: ['JWT authentication and a JWT filter/provider.', 'BCrypt password hashing.', 'Stateless Spring Security configuration and role checks.', 'Audit log entity and service paths.'], improvements: ['Document token expiry/revocation policy.', 'Add explicit rate limiting and abuse controls if the API is exposed publicly.', 'Run integration security tests with Docker-enabled dependencies.'] },
    failure: { implemented: ['Worker success, retry, and permanent-failure paths.', 'Heartbeat and worker status tracking.', 'Failed-job listing and retry endpoint.', 'Conditional Testcontainers integration coverage when Docker is available.'], remaining: ['Redis/database outage behavior is not demonstrated by a deployed failure test.', 'Exactly-once versus at-least-once execution semantics should be documented.', 'Stale lock cleanup and long-running job timeout policy need explicit verification.'] },
    performance: ['Repository queries include due-job and locking-oriented access paths.', 'Micrometer counters, gauges, and timers provide instrumentation points.', 'No formal benchmark was included in the repository evidence reviewed.', 'Horizontal worker scaling is a design consideration, not a measured deployment result.'],
    testing: ['JUnit 5 and Mockito unit tests cover JWT, polling, and worker success/retry/permanent-failure behavior.', 'A Testcontainers test provisions PostgreSQL and Redis; it conditionally skips when Docker is unavailable.', 'The repository walkthrough reports a Maven test run, but skipped integration tests should not be presented as full integration coverage.'],
    deployment: ['Docker Compose is present for local multi-service setup.', 'No Kubernetes manifests or GitHub Actions workflow were surfaced in the audited repository.', 'Environment-specific production deployment should be treated as future work unless separately verified.'],
    observability: ['Micrometer counters, gauges, and timers.', 'Spring Actuator/Prometheus exposure.', 'Audit logs and worker state.', 'Future: add dashboards, trace correlation, and alert thresholds around queue depth, stale workers, and retry rate.'],
    tradeoffs: ['Redis coordination versus database-only polling: faster shared coordination, but another dependency.', 'Pessimistic locking versus optimistic updates: simpler ownership semantics, but possible contention.', 'JWT statelessness versus server sessions: easier horizontal request routing, harder revocation.', 'Docker Compose versus a managed orchestrator: reproducible local setup, but limited production evidence.'],
    roadmap: { short: ['Document execution semantics and lock lifecycle.', 'Add failure-injection tests for Redis, database, and worker crashes.', 'Add a reproducible Docker-enabled integration test command.'], medium: ['Add CI workflow for unit and integration tests.', 'Add dashboards and alerts for worker liveness, retries, and queue depth.', 'Define idempotency behavior for job handlers.'], scale: ['Evaluate durable queue semantics and backpressure.', 'Separate scheduler and worker scaling policies.', 'Add distributed tracing and deployment runbooks.'] },
    learnings: ['Durable scheduling state must be separate from the process that executes work.', 'Worker liveness is a data model concern, not only a logging concern.', 'Retry behavior needs a terminal state so failures do not become infinite loops.', 'Integration tests are only evidence when the external dependencies actually run.'],
    questions: ['How does the system prevent two workers from claiming the same job?', 'What happens if a worker crashes after claiming work?', 'Why keep job state in PostgreSQL and coordination in Redis?', 'What execution guarantee does the implementation provide?', 'How would you test a stale heartbeat?', 'How would you scale workers independently from the API?', 'What metrics indicate retry storms?', 'How would you make job handlers idempotent?'],
    matters: 'This project gives a hiring manager concrete evidence of backend fundamentals around durable state, concurrency, worker coordination, security, testing, and operational instrumentation. Its strongest story is not a claimed throughput number; it is the explicit treatment of failure and ownership in a background-work system.',
  },
  {
    slug: 'real-time-multiplayer-backend',
    title: 'Real-Time Multiplayer Backend System',
    eyebrow: 'Realtime / Distributed Backend',
    summary: 'A Node.js and Socket.IO backend for multiplayer rooms, social features, and realtime state with Redis coordination and PostgreSQL persistence.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/Ludo',
    evidence: 'Repository evidence: src routes/config/services/socket handlers, database initialization, tests, and deployment scripts. README benchmark figures are intentionally excluded.',
    stack: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'PostgreSQL', 'JWT', 'bcrypt', 'Winston', 'Docker'],
    highlights: ['Room-scoped Socket.IO events', 'Redis-backed active state and locking service', 'PostgreSQL persistence for users, clubs, history, and stats', 'JWT/bcrypt authentication and rate limiting', 'Reconnect and WebRTC signaling handlers'],
    problem: 'Realtime multiplayer systems must keep multiple clients synchronized while connections appear and disappear. A plain request/response API does not provide targeted event delivery, and process-local state breaks when requests or sockets reach another instance.',
    functional: ['Authenticate users and expose profile routes.', 'Join and manage game rooms.', 'Broadcast game events through Socket.IO rooms.', 'Support club/chat and WebRTC signaling namespaces.', 'Persist user, club, game-history, statistics, and friendship data.'],
    nonFunctional: ['Room-scoped event delivery.', 'Shared active state through Redis.', 'Persistent relational records in PostgreSQL.', 'Input validation, rate limiting, security headers, and structured logging.', 'Reconnect handling and graceful server lifecycle behavior.'],
    architecture: 'Clients connect to Node.js/Express and Socket.IO handlers. Redis stores active state and provides a locking service; PostgreSQL stores durable user and game-related records. The repository includes deployment scripts, but a verified production topology is not treated as runtime evidence.',
    architectureDiagram: `flowchart TD\n    Client --> API[Express REST API]\n    Client <--> Socket[Socket.IO rooms and namespaces]\n    API --> Auth[JWT middleware]\n    Socket --> Redis[(Redis state and locks)]\n    API --> DB[(PostgreSQL)]\n    Socket --> Redis\n    Socket --> DB`,
    flow: ['A client authenticates through the REST API and receives a JWT.', 'The client opens a Socket.IO connection and joins a room or namespace.', 'The server validates the event and obtains shared state from Redis when needed.', 'Room-scoped events are emitted only to relevant participants.', 'Durable user, history, club, and statistics changes are written to PostgreSQL.', 'A disconnect marks the player state and the reconnect path restores state from Redis.'],
    decisions: [
      { title: 'Socket.IO rooms instead of global broadcast', why: 'Game updates only matter to players in the same room.', tradeoff: 'Room membership and lifecycle state must be kept correct during disconnects and reconnects.' },
      { title: 'Redis for active state and locks', why: 'All server instances need access to short-lived room state and critical-section coordination.', tradeoff: 'Redis availability becomes part of realtime correctness.' },
      { title: 'JWT instead of server sessions', why: 'Stateless authentication allows requests to reach different Node.js instances.', tradeoff: 'Token expiry and revocation must be handled explicitly.' },
      { title: 'Namespaces for game, clubs, and WebRTC', why: 'Separate event domains reduce accidental coupling between realtime features.', tradeoff: 'More connection paths and handlers must be tested independently.' },
    ],
    hardest: { problem: 'The hardest problem is maintaining consistent room state when two players attempt a critical operation at the same time or a client disconnects mid-game.', naive: 'A process-local room map can race across instances and disappears on restart. Broadcasting every update globally also creates unnecessary traffic and leaks unrelated room state.', solution: 'The code uses Redis service logic, room-scoped Socket.IO broadcasts, server-side turn/game handling, and reconnect state restoration paths. The README documents a lock helper and TTL, while exact production contention behavior should be validated with the repository tests and runtime.', edgeCases: 'Duplicate joins, reconnect after the grace period, Redis loss, socket namespace mismatch, invalid turn events, and a PostgreSQL write failing after a realtime event are important remaining scenarios.' },
    database: 'The repository initializes PostgreSQL tables for users, clubs, club_members, club_messages, game_history, user_stats, and friend_requests. Redis holds active game state and transient coordination. The audited source did not establish a complete ORM relationship map.',
    entities: ['users', 'clubs', 'club_members', 'club_messages', 'game_history', 'user_stats', 'friend_requests'],
    apis: [
      { method: 'POST', endpoint: '/api/auth/register', purpose: 'Register a player.', auth: 'Public' },
      { method: 'POST', endpoint: '/api/auth/login', purpose: 'Authenticate a player.', auth: 'Public' },
      { method: 'GET', endpoint: '/api/auth/profile', purpose: 'Read the authenticated profile.', auth: 'JWT' },
      { method: 'GET', endpoint: '/api/health', purpose: 'Health check for service monitoring.', auth: 'Public' },
      { method: 'WS', endpoint: '/game namespace', purpose: 'Room and game events.', auth: 'JWT/event validation' },
      { method: 'WS', endpoint: '/clubs and /webrtc', purpose: 'Social and voice signaling events.', auth: 'Connection/event validation' },
    ],
    security: { implemented: ['JWT verification.', 'bcrypt password hashing.', 'Helmet security headers and CORS configuration.', 'Rate limiting, input validation, and sanitization paths.'], improvements: ['Verify all WebSocket events enforce authorization, not only REST routes.', 'Move all secrets to environment configuration and rotate deployment credentials.', 'Add automated security tests for room ownership and event spoofing.'] },
    failure: { implemented: ['Reconnect state restoration path.', 'Graceful shutdown handlers.', 'Health endpoint.', 'Redis-backed transient state and lock TTL patterns documented in the repository.'], remaining: ['The audited repository does not prove behavior during Redis or PostgreSQL outage.', 'A disconnected client may still produce stale events unless event ordering is guarded.', 'Load-test harnesses are not equivalent to a production reliability result.'] },
    performance: ['Room-scoped broadcasting limits event fan-out.', 'Redis is used for active state and batch/shared access.', 'Database connection pooling and indexed queries are documented in the repository.', 'README performance numbers are excluded because they are not independently recorded results.'],
    testing: ['The repository includes load-test and quick-metrics scripts.', 'No conventional unit-test suite was surfaced in the audit.', 'The test harness should be run against a controlled environment before using any measured values in a resume or case study.'],
    deployment: ['Deployment scripts for EC2/SSM and service validation are present.', 'Docker and PM2/AWS deployment are documented.', 'Kubernetes and CI workflows were not confirmed in the surfaced tree.'],
    observability: ['Winston structured/file logging.', 'Health endpoint.', 'Quick metrics/load-test scripts.', 'Future: add socket connection gauges, room occupancy, event error rates, and trace IDs.'],
    tradeoffs: ['WebSockets versus polling: lower event overhead, but more lifecycle complexity.', 'Redis active state versus PostgreSQL-only state: faster transient access, but another failure domain.', 'Room-scoped events versus global broadcast: better isolation, but more membership bookkeeping.', 'JWT versus sessions: easier horizontal routing, harder immediate revocation.'],
    roadmap: { short: ['Add deterministic tests for duplicate joins and reconnect expiry.', 'Document event authorization and ordering guarantees.', 'Add Redis/database failure simulations.'], medium: ['Add WebSocket observability and per-room capacity controls.', 'Separate durable game-history writes from realtime event delivery.', 'Add CI for REST, socket, and load-test smoke paths.'], scale: ['Validate multi-instance Socket.IO adapter behavior.', 'Introduce backpressure for high-frequency events.', 'Define regional/session routing and recovery strategy.'] },
    learnings: ['Realtime correctness depends on state ownership and event scope.', 'Reconnect behavior must be designed as part of the game protocol.', 'Stateless application servers still require shared state infrastructure.', 'A benchmark harness is evidence of measurement capability, not proof of a production SLA.'],
    questions: ['How are room events isolated?', 'What happens when a client disconnects during a turn?', 'Why is Redis needed alongside PostgreSQL?', 'How would you prevent duplicate room joins?', 'How would multiple Socket.IO instances share room state?', 'How would you order conflicting game events?', 'What should happen when Redis is unavailable?', 'How would you test reconnect and stale client behavior?'],
    matters: 'This project demonstrates practical realtime backend concerns: event-driven APIs, room isolation, shared state, authentication, persistence, and disconnection handling. It is strongest when presented as a systems exercise with explicit reliability questions rather than unverified connection or latency numbers.',
  },
  {
    slug: 'autonomous-codebase-engineer',
    title: 'Autonomous Codebase Engineer',
    eyebrow: 'Applied AI / Code Intelligence',
    summary: 'A FastAPI and LangGraph workflow that clones and analyzes repositories, indexes code context in Qdrant, builds dependency graphs, detects issues, and produces fix/PR previews.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/Autonomous_Codebase_Engineer',
    evidence: 'Repository evidence: backend routes, workflow, vector store, repository scanner, graph builder, Docker Compose, and frontend. No tests directory was surfaced.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Qdrant', 'GitPython', 'NetworkX', 'Next.js', 'TypeScript'],
    highlights: ['Repository cloning and file scanning', 'Code chunking and Qdrant indexing', 'Dependency graph construction with NetworkX', 'AST/generic issue detection and fix suggestions', 'Stage telemetry and warning responses'],
    problem: 'Codebase-level assistance needs more context than a single prompt can provide. The system must ingest files, preserve useful code boundaries, retrieve relevant context, and make analysis stages visible enough for a developer to review rather than treating the model as an opaque command.',
    functional: ['Health-check the backend.', 'Analyze a repository through POST /api/analyze.', 'Clone and scan repository files.', 'Index chunks in Qdrant with embeddings or deterministic fallback.', 'Build a dependency graph and produce issue/fix/PR-preview output.'],
    nonFunctional: ['Bounded analysis stages.', 'Deterministic fallback when external embeddings are unavailable.', 'Visible warnings and stage telemetry.', 'Configurable CORS and containerized local Qdrant setup.'],
    architecture: 'A frontend submits analysis to FastAPI. The workflow clones/scans the repository, chunks files, indexes them in Qdrant, builds a NetworkX dependency graph, runs issue detection, and generates suggestions/previews. No relational database or authentication subsystem was surfaced.',
    architectureDiagram: `flowchart TD\n    Client[Next.js frontend] --> API[FastAPI]\n    API --> Clone[Repository clone and scan]\n    Clone --> Chunks[Code chunks]\n    Chunks --> Vector[(Qdrant)]\n    Clone --> Graph[NetworkX dependency graph]\n    Vector --> Workflow[Analysis workflow]\n    Graph --> Workflow\n    Workflow --> Findings[Findings and previews]`,
    flow: ['The client submits a repository target to POST /api/analyze.', 'The backend clones or reads the repository and scans supported files.', 'Code is chunked and sent to the vector-store service.', 'Embeddings use the configured provider or a deterministic fallback.', 'The workflow builds a dependency graph and runs issue detection.', 'The API returns findings, warnings, telemetry, and preview-oriented output to the frontend.'],
    decisions: [
      { title: 'Qdrant for vector retrieval', why: 'Repository chunks need a persistent vector collection for semantic lookup.', tradeoff: 'The system adds a service dependency and still needs indexing lifecycle management.' },
      { title: 'Deterministic embedding fallback', why: 'Analysis can continue when a remote embedding provider is not configured.', tradeoff: 'Fallback vectors do not provide the same semantic quality as a trained embedding model.' },
      { title: 'NetworkX dependency graph', why: 'Graph structure makes repository relationships inspectable alongside text retrieval.', tradeoff: 'Graph quality depends on the parser and supported language patterns.' },
      { title: 'Stage telemetry in responses', why: 'Long-running analysis needs visible progress and warnings.', tradeoff: 'Returning telemetry is not a substitute for durable job orchestration or external monitoring.' },
    ],
    hardest: { problem: 'The hardest problem is assembling enough repository context for analysis without sending the entire codebase into one model context.', naive: 'A naive implementation would concatenate all files and ask one model to make changes. Large repositories exceed context limits and obscure file relationships.', solution: 'The implemented workflow scans and chunks code, indexes it in Qdrant, builds a dependency graph, and runs bounded analysis stages. The repository currently produces suggestions and previews; it does not prove safe autonomous patch application or one-click PR creation.', edgeCases: 'Large repositories, binary/generated files, unsupported languages, stale vector collections, embedding-provider failure, and graph extraction errors need explicit handling.' },
    database: 'No relational database or ORM schema was surfaced. Qdrant is used as the vector store, with collection/indexing logic in backend/app/services/vector_store.py. NetworkX holds the in-memory dependency graph for the analysis run.',
    entities: ['Repository analysis request', 'Code chunks', 'Qdrant collection', 'Dependency graph nodes/edges', 'Findings and preview output'],
    apis: [
      { method: 'GET', endpoint: '/', purpose: 'Backend root/status response.', auth: 'Public' },
      { method: 'GET', endpoint: '/api/health', purpose: 'Health check.', auth: 'Public' },
      { method: 'POST', endpoint: '/api/analyze', purpose: 'Run repository analysis workflow.', auth: 'Public in surfaced route code' },
    ],
    security: { implemented: ['Configurable CORS.', 'Repository operations are exposed through a bounded analysis route.', 'Warnings and stage results are returned for review.'], improvements: ['Add authentication and authorization before accepting arbitrary repository targets.', 'Sandbox cloning and file processing.', 'Restrict outbound network access and validate repository URLs.', 'Add secret scanning before returning or persisting findings.'] },
    failure: { implemented: ['Embedding fallback when the external provider is unavailable.', 'Warnings and telemetry returned from workflow stages.', 'Health route.'], remaining: ['No durable job state was surfaced for interrupted analysis.', 'Large repository timeouts and cancellation need explicit treatment.', 'Qdrant failure and malformed repository inputs need failure-injection tests.'] },
    performance: ['Chunking and vector indexing bound the context passed to later stages.', 'NetworkX graph construction adds a second representation of repository relationships.', sharedUnknown, 'No formal benchmark or repository-size limit was verified.'],
    testing: ['No tests directory or test files were surfaced in the audit.', 'The repository should not claim test coverage until an executable suite is added and run.'],
    deployment: ['Docker Compose is present for Qdrant.', 'Frontend and backend setup are represented in the repository.', 'No Kubernetes or CI workflow was surfaced.', 'Live deployment and demo were marked incomplete in project documentation.'],
    observability: ['Stage telemetry and warnings in API responses.', 'Standard Python logging.', 'Future: persist analysis runs, add tracing, vector-store health metrics, and cancellation visibility.'],
    tradeoffs: ['Vector retrieval versus full-file context: better context bounds, but chunk quality matters.', 'Provider embeddings versus deterministic fallback: richer semantics versus local continuity.', 'Graph plus text retrieval: complementary signals, but more processing and parser edge cases.', 'Preview output versus automatic patching: safer review boundary, less automation.'],
    roadmap: { short: ['Add tests around scanning, chunking, fallback embeddings, and route validation.', 'Add repository URL validation and authentication.', 'Add analysis cancellation and timeout handling.'], medium: ['Persist analysis runs and vector collection metadata.', 'Add language-aware parsing and incremental indexing.', 'Add evaluation fixtures for retrieval and issue detection.'], scale: ['Move long analyses to a durable job queue.', 'Add sandboxed execution for proposed changes.', 'Add human approval workflow before patch or PR creation.'] },
    learnings: ['Repository understanding needs both semantic retrieval and structural relationships.', 'Fallback behavior should preserve inspectability without pretending semantic equivalence.', 'Previewing a change is a safer boundary than silently applying it.', 'AI workflows need explicit stage telemetry to remain debuggable.'],
    questions: ['How do you bound context for a large repository?', 'Why combine vector retrieval with a dependency graph?', 'What happens when embeddings are unavailable?', 'How would you prevent untrusted repository code from executing?', 'How would you evaluate retrieval quality?', 'How would you make indexing incremental?', 'Why is a durable job queue useful here?', 'How would you add human approval before a PR?'],
    matters: 'This project demonstrates applied AI engineering through a concrete code-intelligence pipeline: ingestion, retrieval, graph analysis, deterministic checks, and reviewable output. Its credibility comes from clearly separating implemented analysis from future autonomous execution.',
  },
  {
    slug: 'ai-powered-code-review-system',
    title: 'AI-Powered Code Review System',
    eyebrow: 'Applied AI / Developer Tooling',
    summary: 'A FastAPI platform with repository and pull-request routes, analysis services, persistence, security tooling, background workers, tests, and deployment configuration for AI-assisted review workflows.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/AI_Code_PR_Reviewer',
    evidence: 'Repository evidence: app routes/models/services, tests, Docker/Kubernetes/Terraform, Prometheus/Grafana, and GitHub Actions. README scale and benchmark claims are excluded unless independently verified.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    highlights: ['Versioned API router with review/repository/health modules', 'SQLAlchemy models and Alembic migrations', 'AI, RAG, code-analysis, security-scan, and complexity services', 'Pytest modules across auth, API, AI, integration, performance, and security', 'Container, Kubernetes, Terraform, monitoring, and CI configuration'],
    problem: 'Pull-request review combines external repository data, code context, static checks, model reasoning, persistence, and user feedback. The system needs clear boundaries so model output can be stored, reviewed, secured, and tested rather than returned as an unstructured prompt response.',
    functional: ['Authenticate users and organizations.', 'Fetch and analyze repositories and pull requests.', 'Persist review and feedback records.', 'Expose review, repository, analytics, webhook, security, plugin, and metrics routes.', 'Run background work and return health/readiness information.'],
    nonFunctional: ['Async API and worker-oriented processing.', 'Relational persistence and migrations.', 'Security controls including JWT/RBAC/API-key paths and audit models.', 'Metrics and deployment configuration.', 'Testable analysis and API modules.'],
    architecture: 'The repository contains a FastAPI application, versioned routers, SQLAlchemy/Alembic persistence, AI/RAG and analysis services, Redis/Celery-related infrastructure, frontend code, and operational configuration. The README describes more capabilities than can safely be treated as measured production behavior.',
    architectureDiagram: `flowchart TD\n    Client --> API[FastAPI versioned API]\n    API --> Repo[GitHub and repository services]\n    API --> AI[AI and RAG services]\n    API --> Analysis[Code, security, and complexity analysis]\n    API --> DB[(PostgreSQL and Alembic)]\n    API --> Queue[Redis and worker infrastructure]\n    Queue --> Analysis`,
    flow: ['A client authenticates and submits a repository or pull-request review request.', 'The API validates the request and routes it to review/repository services.', 'Repository data and changed files are passed into analysis and AI/RAG services.', 'Review results and feedback are persisted through SQLAlchemy models/migrations.', 'Long-running work can be handled through worker-oriented infrastructure.', 'Metrics, health endpoints, logs, and dashboards provide operational hooks.'],
    decisions: [
      { title: 'FastAPI for the API boundary', why: 'The repository uses async-capable route modules and generated API documentation.', tradeoff: 'Async route code does not automatically make every downstream provider or database operation non-blocking.' },
      { title: 'PostgreSQL with SQLAlchemy/Alembic', why: 'Reviews, organizations, feedback, keys, and audit records have relational lifecycle and migrations.', tradeoff: 'Schema evolution and transaction boundaries require operational discipline.' },
      { title: 'Separate analysis services', why: 'GitHub access, AI calls, RAG, complexity, and security scanning have different responsibilities.', tradeoff: 'More service boundaries mean more failure and test combinations.' },
      { title: 'Operational configuration in repo', why: 'Docker, Kubernetes, Terraform, Prometheus, Grafana, and CI make deployment concerns inspectable.', tradeoff: 'Configuration presence is not proof that the full topology is deployed or healthy.' },
    ],
    hardest: { problem: 'The hardest problem is controlling the boundary between repository context and model-generated review so findings remain attributable and actionable.', naive: 'A naive implementation would send a PR diff directly to a model and display the response. It would lack durable review history, context retrieval, structured findings, and deterministic checks.', solution: 'The repository separates GitHub/repository services, AI/RAG services, code/security/complexity analyzers, persistence models, and API routers. The tests and deployment files provide a broader engineering surface, while exact model quality must be measured with evaluation fixtures.', edgeCases: 'Provider timeout, GitHub rate limiting, malformed model output, oversized diffs, partial repository fetches, duplicate webhook delivery, and failed background tasks remain important scenarios.' },
    database: 'SQLAlchemy models surfaced in app/db/models.py include User, Repository, PullRequest, Review, Feedback, ApiKey, AuditLog, Organization, OrganizationMember, and ReviewFeedback. Alembic is present for schema migration. Redis/Celery infrastructure is also present in configuration.',
    entities: ['User', 'Organization', 'OrganizationMember', 'Repository', 'PullRequest', 'Review', 'ReviewFeedback', 'Feedback', 'ApiKey', 'AuditLog'],
    apis: [
      { method: 'POST', endpoint: '/api/v1/review/analyze', purpose: 'Start pull-request analysis.', auth: 'Auth/API key path in application' },
      { method: 'GET', endpoint: '/api/v1/review/{review_id}', purpose: 'Read a review result.', auth: 'Protected route' },
      { method: 'GET', endpoint: '/api/v1/health', purpose: 'Health/readiness/liveness checks.', auth: 'Public/operational' },
      { method: 'POST', endpoint: '/api/v1/webhooks/*', purpose: 'Receive repository events.', auth: 'Webhook verification path' },
      { method: 'GET', endpoint: '/metrics', purpose: 'Expose Prometheus-oriented metrics.', auth: 'Operational' },
    ],
    security: { implemented: ['JWT/password/API-key-related security modules.', 'RBAC and organization models.', 'Audit log model.', 'Security scanner, dependency scanner, SBOM, CodeQL, and pre-commit configuration surfaced.'], improvements: ['Verify every route has consistent authorization tests.', 'Treat provider and GitHub tokens as runtime secrets only.', 'Add adversarial tests for prompt injection and malicious repository content.', 'Document webhook signature and replay protection.'] },
    failure: { implemented: ['Health/readiness/liveness route modules.', 'Test modules for auth, integration, AI, and security.', 'Worker/deployment configuration for background processing.', 'Metrics and logging configuration.'], remaining: ['README failure-recovery numbers are not verified runtime evidence.', 'Model fallback, circuit-breaker, and queue semantics should be confirmed in executable code before claiming them.', 'Duplicate webhook/idempotency behavior needs explicit documentation.'] },
    performance: ['Async route and worker-oriented components are present.', 'Redis, Celery, database indexes/configuration, and Prometheus files provide scalability hooks.', sharedUnknown, 'README throughput, uptime, and coverage figures are intentionally not repeated as verified metrics.'],
    testing: ['Pytest modules cover auth, review API, AI service, complexity, integration, performance, language detection, helpers, and security scanner areas.', 'CI workflow and security checks are present.', 'Measured coverage should be reported only from an executed current test run.'],
    deployment: ['Docker and Docker Compose files.', 'Kubernetes manifests and HPA/configuration.', 'Nginx, Prometheus, Grafana, Terraform, and GitHub Actions/CodeQL configuration.', 'These files establish deployment intent and configuration, not proof of a live production deployment.'],
    observability: ['Prometheus metrics and Grafana provisioning.', 'Health/readiness/liveness endpoints.', 'Structured logging and audit model paths.', 'Future: connect alert policies to tested SLOs and trace review IDs across workers/providers.'],
    tradeoffs: ['Model reasoning versus deterministic analyzers: richer context versus reproducibility and cost.', 'PostgreSQL versus document storage: relational review history and organization relationships versus schema rigidity.', 'Background workers versus synchronous review: responsiveness versus queue/retry complexity.', 'Configuration-rich deployment versus simpler local setup: operational flexibility versus maintenance surface.'],
    roadmap: { short: ['Run the current suite and publish measured coverage only.', 'Add fixtures for malformed model output and duplicate webhooks.', 'Document route authentication and idempotency.'], medium: ['Build retrieval and review-quality evaluation datasets.', 'Add provider timeout/circuit-breaker tests.', 'Trace a review from webhook/request through worker and persistence.'], scale: ['Tune queue backpressure and provider cost controls.', 'Partition or archive review history based on measured growth.', 'Harden sandboxing and tenant isolation for untrusted repository content.'] },
    learnings: ['AI developer tooling needs deterministic analyzers alongside model reasoning.', 'Structured persistence makes model output reviewable and auditable.', 'Operational files are valuable only when they are exercised by CI and deployment tests.', 'Unverified README numbers should not become portfolio claims.'],
    questions: ['How would you control hallucinated review findings?', 'Why combine static analysis and RAG?', 'How should duplicate webhooks be handled?', 'What belongs in PostgreSQL versus Redis?', 'How would you test provider failure?', 'How would you secure untrusted repository content?', 'How would you evaluate review quality?', 'How would you scale worker queues without losing auditability?'],
    matters: 'This is the strongest AI/backend case study because it connects API design, persistence, security, asynchronous processing, model workflows, testing, and deployment configuration. The right presentation emphasizes the breadth of the implementation while separating repository evidence from aspirational README metrics.',
  },
  {
    slug: 'eduintel-ai-career-platform',
    title: 'EduIntel AI Career Intelligence Platform',
    eyebrow: 'Applied AI / Career Intelligence',
    summary: 'An AI career-intelligence project presented in the portfolio as a Python/FastAPI, LangChain/LangGraph, RAG, embeddings, MongoDB, and Redis system.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/Resume_Scorer',
    evidence: 'Verification status: the linked Resume_Scorer repository returned 404 during the audit. The claims below are limited to surfaced search-index evidence and portfolio-provided stack information.',
    stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'RAG', 'Embeddings', 'MongoDB', 'Redis'],
    highlights: ['Resume parsing and comparison workflow', 'Career recommendation and roadmap-oriented output', 'FastAPI route surface surfaced in search evidence', 'MongoDB access references surfaced in search evidence', 'Repository availability currently needs confirmation'],
    problem: 'Career intelligence requires transforming unstructured resume and role information into structured recommendations. The system must separate extraction, scoring, retrieval, and generation so users can understand where an output came from.',
    functional: ['Resume upload/parsing and comparison are surfaced in search evidence.', 'Career recommendation and roadmap routes are surfaced in search evidence.', 'Analytics and feedback routes are surfaced in search evidence.', 'Exact current API behavior requires repository access to verify.'],
    nonFunctional: ['Maintainable API/service boundaries.', 'Traceable recommendation inputs.', 'Safe handling of uploaded documents and user data.', 'No unverified latency, accuracy, or user-scale claims.'],
    architecture: 'The available evidence suggests a FastAPI backend, React/Vite frontend, MongoDB access, JWT/auth modules, and ML/NLP helpers. Because the public repository returned 404 during audit, this page does not claim a verified live schema, deployment topology, or exact LangGraph/RAG execution path.',
    architectureDiagram: `flowchart TD\n    Client[React client] --> API[FastAPI routes - evidence partial]\n    API --> Parse[Resume parsing - evidence partial]\n    Parse --> Recommend[Recommendation and roadmap logic - evidence partial]\n    API --> Mongo[(MongoDB - evidence partial)]\n    API --> Auth[JWT/auth modules - evidence partial]`,
    flow: ['A user submits resume or career input through the client.', 'The backend parses and structures the input according to surfaced route evidence.', 'Recommendation/roadmap logic produces career-oriented output.', 'Analytics or feedback may be recorded according to surfaced search evidence.', 'Exact persistence and model stages must be confirmed after the repository is restored or made accessible.'],
    decisions: [
      { title: 'FastAPI for API delivery', why: 'FastAPI route modules were surfaced in search evidence.', tradeoff: 'The current public repository state prevents verification of the complete service boundary.' },
      { title: 'MongoDB for document-shaped career data', why: 'MongoDB access and Users/Resumes/Analytics references were surfaced.', tradeoff: 'Schema flexibility needs validation and migration discipline.' },
      { title: 'AI recommendation pipeline', why: 'Career recommendation and roadmap code references were surfaced.', tradeoff: 'Recommendation quality needs evaluation data and explainability.' },
    ],
    hardest: { problem: 'The hardest verified theme is converting resume content into useful, structured career guidance without hiding uncertainty.', naive: 'A naive system would send an entire resume to a model and return generic advice.', solution: 'The surfaced evidence indicates dedicated parsing, ML/recommendation, and roadmap-oriented modules, but the current repository access does not allow the implementation path to be verified in detail.', edgeCases: 'Malformed documents, missing skills, contradictory job requirements, privacy-sensitive resume content, and unsupported model output require direct source review.' },
    database: 'Search-index evidence references MongoDB, enhanced_mongodb.py, and Users, Resumes, and Analytics collections. These entities and indexes are not independently verified because the repository currently returns 404.',
    entities: ['Users (search evidence)', 'Resumes (search evidence)', 'Analytics (search evidence)'],
    apis: [
      { method: 'Various', endpoint: 'Auth, resume, recommendation, roadmap, analytics, feedback routes', purpose: 'Surfaced in search-index evidence.', auth: 'Not safely verifiable' },
    ],
    security: { implemented: ['JWT/auth modules were surfaced in search evidence.', 'bcrypt references were surfaced.'], improvements: ['Restore repository access and audit secret handling before publishing security claims.', 'Ensure uploaded documents are isolated and access-controlled.', 'Verify fallback secrets are absent from the public branch.', 'Add privacy/deletion controls for resume data.'] },
    failure: { implemented: ['Not sufficiently verifiable from the current public repository state.'], remaining: ['Document parsing failures.', 'Model/provider failures.', 'Missing or malformed MongoDB records.', 'Unauthorized access to uploaded resumes.', 'Recommendation uncertainty and stale analytics.'] },
    performance: ['No benchmark was verified.', 'No user-scale or uptime claim is included.', 'Performance analysis should follow a restored source audit of parsing, database access, and model calls.'],
    testing: ['A test_ml_integration.py reference was surfaced for career recommendations and roadmap generation.', 'A complete test suite and coverage were not verified.'],
    deployment: ['No Docker, Kubernetes, CI, or infrastructure tree was confirmed.', 'Cloud deployment claims are omitted.'],
    observability: ['No verified observability implementation was available.', 'Future: request IDs, model/provider latency, parsing failure counts, recommendation feedback, and privacy-safe audit events.'],
    tradeoffs: ['Document database versus relational schema: flexible resume structures versus validation discipline.', 'Generated recommendations versus deterministic rules: broader guidance versus explainability.', 'RAG/embeddings versus direct prompting: potentially better grounding versus indexing and evaluation complexity.'],
    roadmap: { short: ['Restore or share the repository so source, schema, and routes can be audited.', 'Remove any fallback credential literals and rotate exposed secrets if present.', 'Add document privacy and deletion tests.'], medium: ['Create evaluation fixtures for parsing, recommendation relevance, and roadmap quality.', 'Document retrieval and model stages.', 'Add API and persistence integration tests.'], scale: ['Add background processing for large documents.', 'Version recommendation inputs/models.', 'Add feedback-driven evaluation and explainability.'] },
    learnings: ['AI career systems need evidence and explainability, not only generated prose.', 'Repository accessibility is part of engineering credibility.', 'Sensitive resume data requires explicit storage and deletion policies.', 'Unverified accuracy claims should not appear in a portfolio.'],
    questions: ['How is resume text structured?', 'What data is retrieved for a recommendation?', 'How is recommendation quality evaluated?', 'How are uploaded documents protected?', 'What happens when parsing fails?', 'Why MongoDB for these entities?', 'How would you version model outputs?', 'How would you prevent generic recommendations?'],
    matters: 'This project can demonstrate applied AI and backend thinking, but its public evidence needs repair before a stronger implementation claim is appropriate. The case study deliberately makes that gap visible instead of turning unverified search snippets into promises.',
  },
  {
    slug: 'monetized-link-shortener',
    title: 'Monetized Link Shortener SaaS',
    eyebrow: 'Backend / Data / Cloud',
    summary: 'A Node.js and Express URL-shortening service with PostgreSQL persistence, Redis caching and rate limiting, analytics, container setup, and AWS infrastructure configuration.',
    github: 'https://github.com/Vishwajeet-Kumar-Patel/URL_Shortener',
    evidence: 'Repository evidence: src, database, Docker Compose, Dockerfile, AWS/IaC directories, API README, monitoring/security sections, and performance-test tooling. README sample metrics are excluded as results.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'React', 'Docker', 'Docker Compose', 'AWS', 'Nanoid'],
    highlights: ['Short-code generation and collision handling', 'Redis cache for redirect lookups and rate limiting', 'PostgreSQL URL and analytics persistence', 'Analytics, health, and metrics endpoints', 'Container and AWS deployment configuration'],
    problem: 'A link shortener is read-heavy: redirects must be quick, short codes must be safe to generate, and analytics should not make the redirect path depend on a slow write. The repository separates cached redirect lookup, durable URL data, analytics, and management APIs.',
    functional: ['Create short URLs with optional expiration.', 'Redirect from a short code.', 'Read analytics for a short code.', 'Soft-delete a short URL.', 'Expose health and metrics endpoints.'],
    nonFunctional: ['Cache-aware redirect path.', 'Collision-safe short-code generation.', 'Rate limiting and input validation.', 'Containerized local setup and AWS/IaC configuration.', 'Operational metrics and health checks.'],
    architecture: 'A client/frontend reaches the Node.js/Express backend. Redis stores short-code mappings and rate-limit counters; PostgreSQL stores durable URL and analytics data. Docker Compose supports local services, while AWS and IaC directories document deployment configuration.',
    architectureDiagram: `flowchart TD\n    Client --> API[Node.js and Express]\n    API --> Redis[(Redis cache and rate limits)]\n    API --> DB[(PostgreSQL URLs and analytics)]\n    API --> Redirect[Redirect path]\n    API --> Metrics[Health and metrics]\n    API --> AWS[AWS and IaC configuration]`,
    flow: ['A client sends POST /api/shorten with a URL and optional expiry.', 'The service generates a Nanoid short code and checks collision behavior.', 'The URL is written to PostgreSQL and cache state is updated according to the service strategy.', 'A redirect request looks up the short code through Redis before falling back to PostgreSQL.', 'Analytics are tracked and exposed through the analytics endpoint.', 'Rate limits, validation, health, and metrics routes support the surrounding API.'],
    decisions: [
      { title: 'Redis for redirect caching', why: 'Redirects are read-heavy and benefit from avoiding a database read on every request.', tradeoff: 'Cache invalidation and Redis failure behavior must remain correct.' },
      { title: 'PostgreSQL as source of truth', why: 'URLs, expiration, soft deletion, and analytics need durable relational storage.', tradeoff: 'Writes and schema management are more involved than a cache-only design.' },
      { title: 'Nanoid over sequential IDs', why: 'URL-safe random codes reduce simple enumeration and expose a bounded public identifier.', tradeoff: 'Collisions remain possible and must be checked/retried.' },
      { title: 'Asynchronous analytics path', why: 'Redirect delivery should not be coupled tightly to analytics persistence.', tradeoff: 'Analytics may be eventually consistent or lost during failure unless buffered durably.' },
    ],
    hardest: { problem: 'The hardest problem is keeping the redirect path fast while preserving correct expiration, deletion, caching, and analytics behavior.', naive: 'A naive implementation would query PostgreSQL for every redirect and update analytics synchronously before returning the redirect.', solution: 'The repository uses Redis mappings, PostgreSQL persistence, cache TTL/invalidation guidance, and an analytics path. The exact write-through and failure semantics should be verified in the source before promising a particular consistency guarantee.', edgeCases: 'Cache miss, stale cache after soft delete, short-code collision, expired URL, analytics write failure, malicious destination URL, and rate-limit exhaustion are key cases.' },
    database: 'The repository includes database/schema.sql and documents URL persistence and analytics data. README evidence calls out indexes on short_code/original_url and soft deletion via is_active. Exact schema details should be checked against the SQL file when maintaining the case study.',
    entities: ['URL records', 'Analytics/click records', 'Rate-limit counters in Redis', 'Cached short-code mappings'],
    apis: [
      { method: 'POST', endpoint: '/api/shorten', purpose: 'Create a short URL.', auth: 'Not stated in verified README route docs' },
      { method: 'GET', endpoint: '/:shortCode', purpose: 'Redirect to the original URL.', auth: 'Public' },
      { method: 'GET', endpoint: '/api/analytics/:shortCode', purpose: 'Read click and visitor analytics.', auth: 'Not stated in verified README route docs' },
      { method: 'DELETE', endpoint: '/api/:shortCode', purpose: 'Soft-delete a URL.', auth: 'Not stated in verified README route docs' },
      { method: 'GET', endpoint: '/api/health', purpose: 'Check service/database/Redis health.', auth: 'Public/operational' },
      { method: 'GET', endpoint: '/metrics', purpose: 'Read performance metrics.', auth: 'Operational' },
    ],
    security: { implemented: ['Rate limiting.', 'Input validation.', 'Helmet security headers.', 'CORS configuration.', 'Abuse detection.', 'Parameterized SQL queries.'], improvements: ['Verify destination URL allow/deny policy and SSRF implications.', 'Protect analytics and metrics endpoints if they expose sensitive data.', 'Add authentication/authorization policy documentation for management endpoints.', 'Rotate and isolate AWS/database/Redis secrets.'] },
    failure: { implemented: ['Health checks for database and Redis.', 'Cache fallback concept through database source of truth.', 'Soft-delete state.', 'Collision detection and retry guidance.', 'Metrics and logging paths.'], remaining: ['Analytics durability when Redis/database writes fail.', 'Stale cache after expiration or deletion.', 'Redis outage behavior under rate limiting.', 'Abuse patterns that bypass simple URL validation.'] },
    performance: ['Redis caching and indexed lookup paths are implemented/documented.', 'Performance-test scripts measure redirect latency, cache hit ratio, load, query execution, and rate limiting.', 'Sample README figures are not treated as measured results without a run artifact.', 'Connection pooling and horizontal stateless scaling are described in the repository.'],
    testing: ['The repository exposes npm test and coverage commands.', 'Dedicated database/load/metrics test scripts are documented.', 'The audit did not verify a current test report or coverage percentage.'],
    deployment: ['Dockerfile and docker-compose.yml.', 'AWS directories with deployment/IaC configuration.', 'README documents ECS, RDS, ElastiCache, CloudFormation/Terraform paths.', 'These artifacts show deployment intent; runtime deployment is not independently verified.'],
    observability: ['Health endpoint.', 'Metrics endpoints and export/reset paths.', 'Morgan/CloudWatch/container logging documented.', 'Future: add trace IDs, cache-miss alerts, redirect error budgets, and analytics lag monitoring.'],
    tradeoffs: ['Cache versus database redirect reads: lower repeated-read cost, but invalidation complexity.', 'Nanoid versus sequential IDs: less enumeration, but collision retry needed.', 'Async analytics versus synchronous write: faster redirect response, but weaker immediate analytics durability.', 'Availability versus strong consistency: the README chooses a cache-friendly model, which should be tested around delete/expiry races.'],
    roadmap: { short: ['Run and archive the database/load test results.', 'Add tests for stale cache, expiry, deletion, collision, and analytics failure.', 'Clarify authentication for management and analytics routes.'], medium: ['Add durable analytics buffering.', 'Add destination validation/SSRF protection.', 'Add CI for backend, database, and container smoke tests.'], scale: ['Validate Redis Cluster and multi-instance invalidation.', 'Partition/archive analytics based on measured growth.', 'Add tracing across redirect, cache, database, and analytics paths.'] },
    learnings: ['A redirect service should keep its hot path small and explicit.', 'Cache invalidation is part of correctness, not only performance.', 'Short-code generation needs collision handling even with large keyspace.', 'Performance claims should come from reproducible test artifacts.'],
    questions: ['What happens on a Redis cache miss?', 'How is a deleted URL removed from cache?', 'Why use Nanoid?', 'How are analytics decoupled from redirects?', 'How would you prevent malicious destination URLs?', 'What indexes support redirect and analytics queries?', 'How would you scale Redis and invalidate multiple instances?', 'What would you measure in a load test?'],
    matters: 'This project demonstrates practical backend trade-offs around a read-heavy service: cache design, relational persistence, identifier safety, rate limiting, analytics, containers, and cloud configuration. It offers a clear interview story without requiring unverified latency or uptime claims.',
  },
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
