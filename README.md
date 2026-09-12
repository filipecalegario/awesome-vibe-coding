# 🚀 The Vibe Coding Handbook

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

The definitive handbook for the next era of software development. Vibe coding simplifies development through AI agents, enabling builders to ship highly complex products rapidly.

The term was [coined by Andrej Karpathy](https://x.com/karpathy/status/1886192184808149383) in February 2025:

> *"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."*

**If you find this useful, please star this repo - it helps others discover it!**

> **Note from the maintainer:** I built this handbook because I was drowning in AI coding tool launches and couldn't find a single place that had everything organized with honest, actionable advice. Whether you're a senior dev evaluating agents or a complete beginner who just heard about "vibe coding" - this is the resource I wish existed when I started. I personally test and verify tools before adding them. If something is missing or outdated, [open an issue](https://github.com/bluegalaxy111/awesome-vibe-coding/issues) or submit a PR.

---

## 🧭 What Should I Use? (The Complete 2026 Decision Guide)

The AI coding landscape shifted radically in early 2026 (the "Agentic Engineering" era). It's no longer about fancy autocomplete; it's about composing stacks of autonomous software agents. 

Don't just pick one tool. **Pick your workflow.**

### 🟢 Level 1: "I Have Zero Coding Experience"
*You want to describe an app in plain English and get a working product—without ever touching a terminal.*

- 🎯 **For Full-Stack Web Apps:** 👉 Use **[Lovable](https://lovable.dev)**
  - **Why it wins:** Lovable auto-generates your Next.js frontend, connects it to a real Supabase backend PostgreSQL database, and handles one-click deployments to platforms like Vercel.
  - **The "Vibe" Setup:** Create an account, connect GitHub, type: "Build a habit tracker with user auth."
  - **Limitations:** Struggles with complex, non-standard backend logic (e.g., custom webhooks or heavy cron jobs).
  - **Cost Thresholds:** Free to start, but you hit message limits quickly. Pro is $20/mo.

- 🎨 **For Landing Pages & UI Blocks:** 👉 Use **[v0](https://v0.dev)** or **[bolt.new](https://bolt.new)**
  - **Why it wins:** v0 is unmatched for generating pixel-perfect React + Tailwind designs. Bolt.new goes further by running a full Node.js environment in your browser via WebContainers.
  - **Quick Start:** Go to v0.dev. Prompt: "A dark-mode pricing table with glassmorphism."

---

### 🟡 Level 2: "I Want An AI-Native IDE"
*You are a developer who wants visual feedback, a rich ecosystem, and AI deeply integrated into every keystroke.*

- 👑 **The Industry Standard:** 👉 Use **[Cursor](https://cursor.sh)**
  - **Why it wins:** Cursor's "Composer" feature orchestrates parallel AI agents to handle massive multi-file refactors. It sits on top of VS Code, so all your extensions work flawlessly. 
  - **Setup:** Download app → Log in → (Optional) Add your own Anthropic API key to bypass Pro limits.
  - **Pro Tip (Composability):** Start your app in Lovable, push it to GitHub, then clone and open it in Cursor for advanced architectural changes.
  - **Cost Thresholds:** Free tier is very restrictive (slow requests). Pro ($20/mo) is essential for daily drivers.

- ⚡ **The Context-Aware Alternative:** 👉 Use **[Windsurf](https://codeium.com/windsurf)**
  - **Why it wins:** "Cascade" offers deeper, more persistent codebase awareness out of the box without needing extensive `.cursorrules` configurations. Features a generous free tier.

---

### 🔴 Level 3: "I'm a Power User. Give me Terminal Agents."
*You want maximum control, privacy, and the ability to pipe different AI models (like Claude, Gemini, or Local Models) into your workflow.*

- 🧠 **For Maximum Reasoning Power (API/CLI):** 👉 Use **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** or **[OpenAI Codex](https://openai.com/index/openai-codex/)**
  - **Why Claude wins:** Anthropic's terminal agent natively harnesses Claude's 1M+ token context window. Best-in-class for deeply complex debugging.
  - **Why Codex wins:** The pioneer in generative coding models, heavily updated for 2026. OpenAI's direct Codex CLI integrations offer unmatched latency and deep logical puzzle-solving via o1/Codex reasoning architectures.
  - **Performance Context:** As of April 2026, Claude Opus variants and OpenAI Codex (o1-tier) paired with agentic scaffolding dominate the SWE-bench Verified leaderboard (consistently hitting between 75% and 82%).
  - **Quick Start:** `npm install -g @anthropic-ai/claude-code` → `claude`
  - **Cost Thresholds:** Pay-per-token API pricing. **Warning:** Extensive context use can rack up a $10 bill in a few hours if you aren't careful.

- 🔧 **For TUI Workflows & Open Source:** 👉 Use **[OpenCode](https://opencode.ai)** or **[Aider](https://aider.chat)**
  - **Why OpenCode:** Exploded in popularity in 2026. A powerful Terminal UI (TUI) that supports 75+ LLMs natively (use whatever API key you want). 
  - **Why Aider:** The veteran open-source tool with the most battle-tested, git-aware, multi-file editing capabilities. 
  - **Quick Start (Aider):** `pip install aider-chat` → `aider --model claude-3-5-sonnet`

---

### 🟣 Level 4: "I Want an Autonomous AI Software Engineer"
*You want to assign a Jira ticket to an AI and go get coffee. Benchmark: Handling end-to-end multi-file implementations autonomously.*

- 🤖 **For Enterprise-Grade Autonomy:** 👉 Use **[Devin](https://devin.ai)**
  - **Why it wins:** The first fully sandboxed autonomous SWE. Incredible capabilities for handling full DevOps pipelines and deployments independently.
  - **Cost:** Enterprise pricing.

- ✨ **For Advanced Concurrent Agentic Power:** 👉 Use **[Google Antigravity](https://deepmind.google/technologies/antigravity)**
  - **Why it wins:** Designed by Google DeepMind, Antigravity introduces revolutionary "Planning Mode" paradigms combined with extreme parallel tool execution. It acts less like a simple code editor and more like a Chief Technology Officer managing a local multi-agent system.
  - **Performance Benchmark:** Antigravity excels in navigating massive monorepos by dynamically creating multi-step implementation plans and requesting human architectural feedback *before* mutating code.

- 🔓 **The Open Source Champion:** 👉 Use **[OpenHands](https://github.com/All-Hands-AI/OpenHands)**
  - **Why it wins:** The premier free, self-hosted alternative to Devin. Run it locally via Docker, hook it up to Claude's API, and let it resolve your GitHub PRs autonomously. 
  - **Performance Benchmark:** OpenHands + Claude scores incredibly high because the sophisticated agentic scaffolding allows the LLM to run bash commands and test its own code before submitting.
  - **Quick Start (Docker required):** 
    ```bash
    docker run -it --pull=always \
      -e WORKSPACE_BASE=$(pwd)/workspace \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -p 3000:3000 docker.all-hands.dev/all-hands-ai/openhands:0.8
    ```

---

## 🥊 Deep Dives & Architectural Comparisons
If you are evaluating tools for an engineering team, don't rely on generic feature matrices. We have built deep technical head-to-head comparisons detailing workflow philosophies, actual SWE-bench data, and vendor lock-in risks for April 2026:

1. **[The AI-Native IDE Battle: Cursor vs. Windsurf](comparisons/cursor-vs-windsurf.md)**
2. **[Terminal Agents: Claude Code vs. OpenCode (vs. Aider)](comparisons/claude-code-vs-opencode.md)**
3. **[App Builders: Lovable vs. Bolt.new vs. v0](comparisons/lovable-vs-bolt-vs-v0.md)**
4. **[Autonomous SWEs: Devin vs. OpenHands](comparisons/devin-vs-openhands.md)**
5. **[System Architectures: Google Antigravity vs. OpenAI Codex](comparisons/antigravity-vs-codex.md)**

---

## ⚡ Instant Value: Copy/Paste Templates
Don't start from scratch. Use our April 2026 standardized templates to instantly upgrade how your AI coding tools behave. Drop these into your repositories right now:

- 🛠️ **[Advanced `.cursorrules` Template](templates/cursorrules-advanced.md)** (TypeScript/Next.js focused system instructions)
- 🖥️ **[Terminal Agent `CLAUDE.md` Template](templates/claude-system-prompt.md)** (Safety and TDD rules for CLI tools like Claude Code and Aider)
- 📋 **[Internal Team "Vibe Guide"](templates/vibe-guide.md)** (An Engineering Manager's policy for teams using AI)

### 🍳 The Prompt Recipes Cookbook
Context Engineering is the hardest part of AI development. Don't write prompts from scratch; use our framework-agnostic snippets:
- 📝 **[01. The New Project Checklist](prompts/01-new-project-checklist.md)**
- 🏗️ **[02. Architecture Scaffolding Prompts](prompts/02-architecture-scaffolding.md)**
- 🐛 **[03. Debugging & Refactoring Prompts](prompts/03-debugging-and-refactoring.md)**

### 📦 Vibe Coding Starter Kits
Need to instantiate a perfect environment? Use our setup guides:
- ✨ **[Google Antigravity Elite Terminal Setup](starters/antigravity-terminal-stack.md)** (For massive concurrent logic tasks)
- 🌐 **[The Universal Web Stack](starters/universal-web-stack.md)** (For standard Cursor / Next.js web applications)

---

## 🚧 How to Not Fail: Common Mistakes
AI coding tools are force multipliers, meaning they multiply your mistakes just as fast as your successes. Read our Deep Dive guides so you don't fall into the same expensive traps as everyone else:

- ❌ **[5 Mistakes Everyone Makes with Cursor (and How to Fix Them)](guides/mistakes-cursor.md)**
- 💸 **[5 Mistakes Everyone Makes with Claude Code & Terminal Agents](guides/mistakes-claude-code.md)**

---

## Contents

- [AI Coding Agents](#ai-coding-agents)
  - [IDE-Based](#ide-based)
  - [Terminal / CLI](#terminal--cli)
  - [Browser-Based](#browser-based)
  - [Autonomous Software Engineers](#autonomous-software-engineers)
- [AI App Builders (No-Code)](#ai-app-builders-no-code)
- [AI Code Completion & Assistants](#ai-code-completion--assistants)
- [AI Code Review](#ai-code-review)
- [AI for Design → Code](#ai-for-design--code)
- [AI Debugging & Testing](#ai-debugging--testing)
- [AI Documentation Tools](#ai-documentation-tools)
- [Prompt Engineering for Code](#prompt-engineering-for-code)
  - [Guides & Techniques](#guides--techniques)
  - [Prompt Libraries & Templates](#prompt-libraries--templates)
  - [Rules Files & System Prompts](#rules-files--system-prompts)
- [Context Engineering](#context-engineering)
- [MCP Servers for Coding](#mcp-servers-for-coding)
  - [Official MCP Servers](#official-mcp-servers)
  - [Developer Tools](#developer-tools)
  - [Database](#database)
  - [Productivity & Business](#productivity--business)
  - [Web & Browser](#web--browser)
  - [Design](#design)
  - [Search](#search)
  - [MCP Directories & Aggregators](#mcp-directories--aggregators)
- [AI Workflow Automation](#ai-workflow-automation)
- [Multi-Agent Frameworks](#multi-agent-frameworks)
- [Local AI for Coding](#local-ai-for-coding)
  - [Local Inference Engines](#local-inference-engines)
  - [Open Source Code Models](#open-source-code-models)
- [AI-Powered DevOps & Infrastructure](#ai-powered-devops--infrastructure)
- [AI for Mobile Development](#ai-for-mobile-development)
- [AI for Game Development](#ai-for-game-development)
- [AI Git & Version Control](#ai-git--version-control)
- [AI Browser Extensions](#ai-browser-extensions)
- [AI for Data Science & Analytics](#ai-for-data-science--analytics)
- [AI-Powered Backend & APIs](#ai-powered-backend--apis)
- [AI Image Generation](#ai-image-generation)
- [AI Video Generation](#ai-video-generation)
- [AI Audio & Music](#ai-audio--music)
- [AI Writing Tools for Developers](#ai-writing-tools-for-developers)
- [AI Search & Research](#ai-search--research)
- [Benchmarks & Comparisons](#benchmarks--comparisons)
- [Learning Resources](#learning-resources)
  - [Articles & Blog Posts](#articles--blog-posts)
  - [YouTube Channels & Videos](#youtube-channels--videos)
  - [Courses](#courses)
  - [Books](#books)
  - [Newsletters](#newsletters)
  - [Podcasts](#podcasts)
- [Communities](#communities)
- [Case Studies & Showcases](#case-studies--showcases)
- [Best Practices & Workflows](#best-practices--workflows)
- [Opinions & Criticism](#opinions--criticism)
- [Related Awesome Lists](#related-awesome-lists)

---

## AI Coding Agents

### IDE-Based

Full-featured code editors with deeply integrated AI that can understand your entire codebase, edit multiple files, and execute commands autonomously.

- [Cursor](https://cursor.sh) - AI-first code editor built on VS Code. Industry benchmark for agentic IDE experience. Features Composer for multi-file editing, Tab for intelligent autocomplete, and deep codebase awareness. *Personal pick - the one most people should start with.* **[Freemium]** **[Pro $20/Mo]**
- **[Ivy Tendril](https://github.com/Ivy-Interactive/Ivy-Tendril)** - Open-source agentic software factory with an amazing UI that handles parallel Git worktrees for you, complete with programmatic verifications and fast review loops
- [Windsurf](https://codeium.com/windsurf) - AI coding IDE by Codeium (acquired by Cognition in 2025). Strong context awareness across large codebases at competitive pricing. Features Cascade for multi-step agentic flows. **[Freemium]**
- [Void](https://voideditor.com) - Open-source AI code editor. Privacy-first alternative that lets you bring your own model/API key. No vendor lock-in. **[Free]** **[Open Source]**
- [Zed](https://zed.dev) - High-performance editor written in Rust with built-in AI assistant. Known for blazing speed and multiplayer editing. **[Free]**
- [PearAI](https://trypear.ai) - Open-source AI code editor forked from VS Code with integrated AI chat and inline editing. Community-driven. **[Free]** **[Open Source]**
- [Melty](https://github.com/meltylabs/melty) - Open-source AI code editor that watches what you do and understands your codebase changes in real-time. **[Free]** **[Open Source]**
- [Trae](https://www.trae.ai) - AI-native IDE by ByteDance. Free access to Claude and GPT models with agentic Builder mode. **[Free]**
- [VS Code + Copilot](https://code.visualstudio.com) - Microsoft's editor with GitHub Copilot chat, inline suggestions, and agent mode deeply integrated. **[Copilot Free Tier Available]**
- [JetBrains IDEs + AI Assistant](https://www.jetbrains.com/ai/) - IntelliJ, PyCharm, WebStorm etc. with JetBrains' own AI assistant and Copilot support. **[Paid]**
- [Neovim + AI Plugins](https://neovim.io) - The hackable text editor with AI plugins like Copilot.vim, ChatGPT.nvim, and Avante.nvim for terminal purists. **[Free]** **[Open Source]**
- [Emacs + GPTel](https://github.com/karthink/gptel) - AI assistant for Emacs. Chat with LLMs, generate code, inline editing. For Emacs die-hards. **[Free]** **[Open Source]**
- [Fleet](https://www.jetbrains.com/fleet/) - JetBrains' lightweight editor with AI capabilities. Polyglot, fast, collaborative. **[Free]**
### Terminal / CLI

AI agents that operate from your terminal, reading, writing, and executing code with full system access.

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) - Anthropic's terminal-native agentic coding tool. Best-in-class reasoning with Claude Opus/Sonnet. Can read/write files, run commands, search codebases, and manage git. *Personal pick - best for complex, multi-file tasks.* **[Requires Claude Max Subscription]**
- [Codex CLI](https://github.com/openai/codex-cli) - OpenAI's open-source CLI coding agent. Lightweight, fast, runs locally with configurable autonomy levels. **[Free]** **[Open Source]**
- [Aider](https://aider.chat) - Open-source AI pair programming in your terminal. Git-aware, works with any LLM. One of the original CLI coding tools. Best-in-class for its edit format system. *Personal pick - best open-source option.* **[Free]** **[Open Source]**
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Google's open-source terminal AI agent. Integrates with Gemini models with 1M token context. **[Free]** **[Open Source]**
- [Amazon Q Developer CLI](https://aws.amazon.com/q/developer/) - AWS's AI coding assistant for terminal with deep AWS infrastructure integration. **[Free Tier Available]**
- [Mentat](https://github.com/AbanteAI/mentat) - Open-source AI coding agent that understands your entire repo and coordinates changes across multiple files. **[Free]** **[Open Source]**
- [GPT Engineer](https://github.com/gpt-engineer-org/gpt-engineer) - Specify what you want it to build in natural language. The AI asks clarifying questions, then generates the entire codebase. **[Free]** **[Open Source]**
- [Cline](https://github.com/cline/cline) - Autonomous coding agent for VS Code terminal that can create/edit files, run commands, use the browser, and ask for human approval at each step. **[Free]** **[Open Source]**
- [Roo Code](https://github.com/RooVetGit/Roo-Code) - Fork of Cline with additional features like multiple agent modes (Code, Architect, Ask) and custom instructions per-mode. **[Free]** **[Open Source]**
- [Goose](https://github.com/block/goose) - Open-source AI agent by Block (formerly Square) that automates coding tasks in your terminal. Extensible via MCP. **[Free]** **[Open Source]**
- [Plandex](https://github.com/plandex-ai/plandex) - Terminal-based AI coding agent designed for complex, multi-file tasks with built-in version control for AI changes. **[Free]** **[Open Source]**
- [Amp](https://amp.dev) - AI coding agent from Sourcegraph. Terminal and IDE modes with deep code intelligence integration. **[Free Tier Available]**
- [Blackbox AI](https://www.blackbox.ai) - Multi-model AI coding agent that uses a "Chairman" architecture - sends tasks to multiple models in parallel and picks the best result. **[Freemium]**
### Browser-Based

Full development environments that run in your browser - no local setup required.

- [Replit](https://replit.com) - Cloud IDE with AI Agent that can build, debug, and deploy full-stack apps from natural language. All-in-one: editor, hosting, database, auth. **[Freemium]**
- [GitHub Codespaces](https://github.com/features/codespaces) - Full VS Code environment in the browser with Copilot integration and configurable compute. **[Free Tier: 60 Hrs/Month]**
- [Gitpod](https://gitpod.io) - Cloud development environments with AI integration. Spins up pre-configured dev environments instantly. **[Free Tier Available]**
- [StackBlitz](https://stackblitz.com) - Browser-based IDE running Node.js natively via WebContainers technology. Zero-install, full npm support. **[Free Tier Available]**
- [Project IDX](https://idx.dev) - Google's AI-enabled browser-based IDE for full-stack and multi-platform app development including Flutter, Angular, and more. **[Free]**
- [CodeSandbox](https://codesandbox.io) - Instant cloud development environments with AI integration. Popular for frontend prototyping and sharing. **[Freemium]**
- [Glitch](https://glitch.com) - Build full-stack web apps in your browser with instant hosting. Great for learning and quick prototyping. **[Free]**
### Autonomous Software Engineers

AI agents designed to work as fully autonomous "junior developers" - they plan, code, test, and iterate with minimal human intervention.


---

- [Devin](https://devin.ai) - Cognition AI's autonomous software engineer. Has its own IDE, terminal, and browser in a sandboxed environment. Can plan, code, test, and deploy entire features. **[Paid]** **[From $500/Mo]**
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Open-source AI software development agent (formerly OpenDevin). Can browse the web, write code, execute commands. Free alternative to Devin. **[Free]** **[Open Source]**
- [SWE-agent](https://github.com/princeton-nlp/SWE-agent) - Princeton research project. Autonomous agent that solves real GitHub issues by reading code, making edits, and running tests. **[Free]** **[Open Source]**
- [Sweep](https://github.com/sweepai/sweep) - AI-powered junior developer that turns GitHub issues into pull requests automatically. **[Free]** **[Open Source]**
- [AutoCodeRover](https://github.com/nus-apr/auto-code-rover) - Autonomous program improvement agent from NUS. Combines LLMs with code search to fix bugs and add features. **[Free]** **[Open Source]**
- [Agentless](https://github.com/OpenAutoCoder/Agentless) - Simpler, agentless approach to solving coding tasks - no complex agent scaffolding needed. **[Free]** **[Open Source]**
- [Cosine Genie](https://cosine.sh) - AI software engineer trained on real-world codebases. Understands complex repos and makes changes autonomously. **[Paid]**
- [Factory AI](https://www.factory.ai) - Enterprise autonomous coding platform. Droids that handle refactoring, migrations, and code modernization. **[Enterprise]**
## AI App Builders (No-Code)

Platforms where you describe an app in plain English and get a working, deployable application - the purest form of vibe coding. **No coding knowledge needed.**


---

- [Lovable](https://lovable.dev) - Describe your app → get a full-stack web app with UI, backend, auth, and database (Supabase). The current leader for non-technical founders building MVPs. *Personal pick - closest to "describe and ship."* **[Freemium]**
- [bolt.new](https://bolt.new) - StackBlitz's AI app builder. Generates and runs full-stack apps in the browser with real-time preview and one-click deploy to Netlify. **[Freemium]**
- [v0](https://v0.dev) - Vercel's AI UI generator. Creates production-quality React + Tailwind CSS components from text prompts. Best for frontend/UI components. **[Freemium]**
- [Replit Agent](https://replit.com/agent) - Replit's app builder agent. Describe what you want, it builds the full app including frontend, backend, database, and deploys it. **[Paid]**
- [Vybe](https://vybe.build) - AI app builder that creates "living systems" - apps that include AI agents for ongoing monitoring, operation, and updates after build. **[Beta]**
- [Create](https://www.create.xyz) - Describe the tool you need in plain English → get a working web app. Focused on internal tools and utilities. **[Freemium]**
- [Durable](https://durable.co) - AI website builder that generates a complete business website with copy, images, and contact forms in 30 seconds. **[Paid]**
- [Tempo](https://www.tempo.new) - Visual AI editor for React apps. WYSIWYG editing where AI generates and modifies the code underneath. **[Beta]**
- [Softgen](https://softgen.ai) - AI full-stack app generator focused on Firebase-backed applications. Prompt → working app with database, auth, hosting. **[Freemium]**
- [Lazy AI](https://www.getlazy.ai) - Build and deploy web apps from prompts with built-in backend, database support, and API integration. **[Freemium]**
- [Marblism](https://www.marblism.com) - Generate SaaS boilerplate from descriptions. Outputs a deployable Next.js + Prisma + PostgreSQL codebase. **[Freemium]**
- [Base44](https://base44.com) - AI-powered app builder (acquired by Wix). Build web apps from natural language descriptions. **[Freemium]**
- [Bubble](https://bubble.io) - Visual no-code app builder with AI assistance. One of the most mature no-code platforms. **[Freemium]**
- [GPT Engineer (web)](https://gptengineer.app) - Web version of GPT Engineer. Describe → build → deploy with a visual interface. **[Freemium]**
- [Vercel AI Playground](https://vercel.com/ai) - Vercel's suite of AI tools for building and deploying AI-powered web applications. **[Freemium]**
- [Appy Pie](https://www.appypie.com) - No-code platform with AI for building mobile apps, websites, and chatbots. **[Freemium]**
- [Databutton](https://databutton.com) - AI-powered app builder focused on data apps and internal tools. Prompt → working data app. **[Freemium]**
- [Buzzy](https://www.buzzy.buzz) - Turn Figma designs into working apps with AI. Design-first approach to app building. **[Freemium]**
- [Pico](https://picoapps.xyz) - Build micro-apps with a single prompt. Fast, simple, shareable web apps in seconds. **[Free]**
- [Literally Anything](https://www.literallyanything.io) - Type anything → get a working web app. The simplest possible vibe coding interface. **[Freemium]**
## AI Code Completion & Assistants

Inline code suggestions, autocomplete, and chat-based coding assistants - the broadest category of AI coding tools.


---

- [GitHub Copilot](https://github.com/features/copilot) - The OG and most widely adopted AI coding assistant (90%+ developer awareness). Works in VS Code, JetBrains, Neovim, Xcode, and more. Now features agent mode. **[Free Tier Available]** **[Pro $10/Mo]**
- [Supermaven](https://supermaven.com) - Extremely fast code completion with the lowest latency in the industry (acquired by Cursor). 300K token context window. **[Freemium]**
- [Codeium](https://codeium.com) - Free AI code completion supporting 70+ languages and 40+ IDEs. Also powers Windsurf IDE. **[Free]**
- [Tabnine](https://www.tabnine.com) - AI assistant focused on code privacy and enterprise security. Can run models fully on-premises for air-gapped environments. **[Freemium]**
- [Continue](https://continue.dev) - Open-source AI code assistant for VS Code and JetBrains. Bring your own model - works with any LLM provider. **[Free]** **[Open Source]**
- [Tabby](https://tabby.tabbyml.com) - Open-source, self-hosted AI coding assistant. Full control over your data, models, and infrastructure. **[Free]** **[Open Source]**
- [Sourcegraph Cody](https://sourcegraph.com/cody) - AI assistant with unmatched codebase understanding via Sourcegraph's code graph. Best for navigating massive monorepos. **[Freemium]**
- [Augment Code](https://www.augmentcode.com) - Enterprise-focused AI assistant designed for massive codebases (400K+ files). Deep architectural reasoning and team-wide context. **[Paid]**
- [FittenCode](https://fittentech.com) - Free AI coding assistant supporting VS Code, JetBrains, Vim, and more. Multi-language support. **[Free]**
- [CodeGeeX](https://github.com/THUDM/CodeGeeX) - Open-source multilingual AI coding assistant. Supports 20+ programming languages with IDE plugins. **[Free]** **[Open Source]**
- [Blackbox AI Code](https://www.blackbox.ai) - AI code generation and search. Multi-model architecture for best results. **[Freemium]**
- [Bito](https://bito.ai) - AI assistant for code generation, explanation, and performance optimization. Enterprise-friendly with on-prem options. **[Freemium]**
- [Pieces](https://pieces.app) - AI coding assistant with a focus on workflow efficiency. Saves, organizes and contextualizes code snippets with AI. **[Freemium]**
- [Qodo (formerly CodiumAI)](https://www.qodo.ai) - AI that focuses on code integrity - generates meaningful tests, reviews logic, finds edge cases. **[Freemium]**
- [Morph](https://morphllm.com) - Fast AI coding assistant with competitive pricing. Focuses on code generation speed and accuracy. **[Paid]**
- [Poolside](https://poolside.ai) - Enterprise AI coding assistant trained on high-quality synthetic code data. Focus on security and privacy. **[Enterprise]**
- [Mintlify Writer](https://marketplace.visualstudio.com/items?itemName=mintlify.document) - VS Code extension that auto-generates docstrings when you highlight a function. **[Free]**
- [AI Commits (VS Code)](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) - Conventional commit message helper integrated into VS Code source control. **[Free]**
## AI Code Review

AI tools that automatically review pull requests, catch bugs, and enforce standards.


---

- [CodeRabbit](https://coderabbit.ai) - AI-powered code review for pull requests. Catches bugs, security vulnerabilities, style issues. Has Issue Planner for proactive architecture suggestions. **[Freemium   Free For Open Source]**
- [PR-Agent](https://github.com/Codium-ai/pr-agent) - Open-source AI tool for automated PR reviews, descriptions, and suggestions. By the makers of Qodo. **[Free]** **[Open Source]**
- [Ellipsis](https://www.ellipsis.dev) - AI code reviewer that runs on every PR. Catches bugs, suggests improvements, enforces coding standards. **[Freemium]**
- [Codacy](https://www.codacy.com) - Automated code quality and security platform with AI analysis. Supports 40+ languages. **[Freemium]**
- [Sourcery](https://sourcery.ai) - AI-powered code review focused on Python. Suggests refactorings and catches anti-patterns. **[Freemium]**
- [What The Diff](https://whatthediff.ai) - AI that writes PR descriptions and reviews your code changes in human-readable language. **[Freemium]**
- [GitHub Copilot Code Review](https://github.blog/changelog/2024-10-29-copilot-code-review-in-github-com) - GitHub's built-in AI code review in pull requests. **[Included With Copilot Subscription]**
## AI for Design → Code

Turn designs, mockups, screenshots, and wireframes into working code.


---

- [Screenshot to Code](https://github.com/abi/screenshot-to-code) - Upload a screenshot → get working HTML/Tailwind/React/Vue code. Supports video → app demos too. Open-source. **[Free]** **[Open Source]**
- [Uizard](https://uizard.io) - Hand-drawn wireframes → working UI designs → exportable code. Great for rapid prototyping ideas. **[Freemium]**
- [Galileo AI](https://www.usegalileo.ai) - Generate editable, high-fidelity UI designs from text descriptions. Produces clean, production-ready layouts. **[Paid]**
- [Locofy](https://www.locofy.ai) - Convert Figma/Adobe XD designs into production-ready frontend code (React, Next.js, React Native, etc.). **[Freemium]**
- [TeleportHQ](https://teleporthq.io) - AI-powered website builder with Figma import and code export. Visual editor + code generation. **[Freemium]**
- [Anima](https://www.animaapp.com) - Figma-to-code tool. Generates React, Vue, HTML, and CSS from Figma designs with AI assistance. **[Freemium]**
- [Builder.io](https://www.builder.io) - Visual editor with Figma-to-code functionality. Generate React, Vue, Svelte, Angular code from designs. **[Freemium]**
- [Relume](https://www.relume.io) - AI website builder that generates sitemaps and wireframes from text, then exports to Figma or Webflow. **[Paid]**
- [Visily](https://www.visily.ai) - AI-powered wireframing and prototyping tool. Convert screenshots, sketches, or text to editable wireframes. **[Freemium]**
- [Slicer](https://slicer.dev) - Capture interactive UI (animations, hover states) from live sites as AI-ready prompts. Pull components to a canvas for restyling, then export directly to Lovable, Claude Code, or Cursor. **[Design To Code]** **[Freemium]**
## AI Debugging & Testing

AI tools that help find bugs, generate tests, explain errors, and ensure code quality.


---

- [ChatGPT](https://chat.openai.com) - / [Claude](https://claude.ai) - Paste your error message or buggy code → get an explanation and fix. The simplest vibe debugging flow. **[Freemium]**
- [Jam](https://jam.dev) - AI-powered bug reporting that auto-captures reproduction steps, console logs, network requests, and suggests fixes. **[Freemium]**
- [Qodo (formerly CodiumAI)](https://www.qodo.ai) - Generates comprehensive test suites, finds edge cases, and validates code logic automatically. **[Freemium]**
- [Trunk](https://trunk.io) - AI-powered code quality platform: linting, formatting, security checks, merge queue management. **[Freemium]**
- [Snyk](https://snyk.io) - AI-assisted security scanning for dependencies, code, containers, and infrastructure-as-code. **[Freemium]**
- [Socket](https://socket.dev) - Detects supply chain attacks and malicious code in open source dependencies before they reach your project. **[Freemium]**
- [Sentry AI](https://sentry.io) - Error monitoring platform with AI-powered issue grouping, root cause analysis, and fix suggestions. **[Freemium]**
- [Codex by Machinet](https://machinet.net) - AI unit test generation for Java. Generates JUnit tests with high code coverage. **[Freemium]**
- [Diffblue Cover](https://www.diffblue.com) - Autonomous AI that writes Java unit tests at scale. Enterprise-focused. **[Paid]**
- [Meticulous](https://www.meticulous.ai) - AI-generated end-to-end tests. Records user sessions and auto-generates tests that catch visual and functional regressions. **[Paid]**
- [Playwright](https://playwright.dev) - Microsoft's end-to-end testing framework. AI agents generate Playwright tests for reliable cross-browser testing. **[Free]** **[Open Source]**
- [Cypress](https://www.cypress.io) - Modern web testing framework. Combine with AI to auto-generate test suites for your vibe coded apps. **[Freemium]** **[Open Source]**
- [Checkly](https://www.checklyhq.com) - Monitoring and testing for APIs and web apps. AI-assisted test creation with Playwright. **[Freemium]**
## AI Documentation Tools

AI that writes, maintains, and improves your documentation.


---

- [Mintlify](https://mintlify.com) - AI-native documentation platform. Docs-as-code workflow (Git + MDX). Auto-generates `llms.txt` files and MCP servers so AI agents can read your docs. **[Freemium]**
- [ReadMe](https://readme.com) - Interactive API documentation platform with AI-powered search, content auditing, and developer analytics. **[Freemium]**
- [Swimm](https://swimm.io) - Code-coupled documentation that stays in sync with your codebase. AI auto-detects when docs go stale. **[Freemium]**
- [Stenography](https://stenography.dev) - Passive, real-time code documentation. Generates explanations and docstrings as you code without you doing anything. **[Paid]**
- [Notion AI](https://www.notion.so/product/ai) - AI writing assistant built into Notion. Generate, summarize, and improve technical documentation. **[Add On To Notion]** **[$10/Mo]**
- [Scribe](https://scribehow.com) - Auto-generates step-by-step process documentation from screen captures. Great for SOPs and tutorials. **[Freemium]**
- [Theneo](https://www.theneo.io) - AI-powered API documentation generator. Import from Postman, Swagger, or GraphQL → get beautiful docs. **[Freemium]**
## Prompt Engineering for Code

### Guides & Techniques

How to write better prompts that produce better AI-generated code.

- [Anthropic's Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering) - Official guide from Claude's creators on crafting effective prompts. The gold standard.
- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering) - OpenAI's official best practices for GPT models.
- [Google's Prompting Guide](https://ai.google.dev/gemini-api/docs/prompting-strategies) - Google's official guide for prompting Gemini models.
- [Prompting Guide](https://www.promptingguide.ai) - Comprehensive community resource covering all major prompting techniques (CoT, few-shot, ReAct, etc.).
- [Learn Prompting](https://learnprompting.org) - Free, open-source guide to prompt engineering. Covers basics to advanced techniques.
- [Cursor Prompting Tips](https://docs.cursor.com/guides) - Cursor's official guide to getting the best results from Composer, Tab, and Chat.
- [Vibe Coding Academy](https://vibecodingacademy.ai) - Dedicated learning platform for vibe coding techniques and AI-assisted development workflows.
### Prompt Libraries & Templates

Pre-built prompts optimized for common coding tasks.

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Massive collection of curated prompts including many for coding. 100K+ stars.
- [Fabric](https://github.com/danielmiessler/fabric) - Open-source framework for augmenting humans using AI. Includes coding-specific "patterns" for code review, security analysis, and more.
- [Prompt Hub](https://www.prompthub.us) - Library of tested, production-ready prompts for various coding tasks.
- [FlowGPT](https://flowgpt.com) - Community platform for sharing and discovering effective AI prompts.
### Rules Files & System Prompts

Configuration files that tell AI coding agents how to behave in your specific project.


---

- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules) - Community collection of `.cursorrules` files for different frameworks and languages. Very high star count.
- [cursor.directory](https://cursor.directory) - Browse and share Cursor rules organized by framework and tech stack.
- [Claude Code CLAUDE.md Guide](https://docs.anthropic.com/en/docs/claude-code/memory) - How to configure Claude Code's behavior per-project using CLAUDE.md memory files.
- [Awesome AI Rules](https://github.com/sanjeed5/awesome-ai-rules) - Collection of system prompts and rules for various AI coding tools.
- [Awesome Copilot Instructions](https://github.com/alexchao26/awesome-copilot-instructions) - Curated `.github/copilot-instructions.md` files for customizing Copilot.
## Context Engineering

The emerging discipline of feeding AI the right context to improve output quality - arguably the most important skill in vibe coding.


---

- [Repomix](https://github.com/yamadashy/repomix) - Pack your entire repository into a single AI-friendly file for pasting into LLM chats. Smart token management. **[Free]** **[Open Source]**
- [code2prompt](https://github.com/mufeedvh/code2prompt) - Convert your codebase into an LLM-ready prompt with directory traversal, filtering, and token counting. **[Free]** **[Open Source]**
- [Agentic Context](https://github.com/punkpeye/agentic-context) - Tools for structuring and managing context in agentic coding workflows. **[Free]** **[Open Source]**
- [AI Context Files](https://github.com/nicholasgriffintn/ai-context-files) - Proposed standard for `.context` files that help AI tools understand your project structure and conventions. **[Free]** **[Open Source]**
- [Files to Prompt](https://github.com/simonw/files-to-prompt) - Simple CLI tool by Simon Willison to concatenate multiple files into a single prompt. **[Free]** **[Open Source]**
- [Codetex](https://codetex.io) - Convert your code into context-optimized formats for AI consumption. **[Free]**
- [llms.txt Standard](https://llmstxt.org) - Proposed standard for websites to provide LLM-friendly versions of their content (like robots.txt but for AI). **[Specification]**
- [CONTRIBUTING.md / CLAUDE.md patterns](https://docs.anthropic.com/en/docs/claude-code/memory) - Using project documentation files to give AI agents architectural context, coding standards, and project-specific instructions.
## MCP Servers for Coding

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard by Anthropic that lets AI agents securely connect to tools, databases, and services. Think of it as "plugins for AI."

### Official MCP Servers

From the official MCP repository maintained by Anthropic.

- [MCP Specification](https://spec.modelcontextprotocol.io) - The official protocol specification.
- [GitHub MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/github) - Interact with GitHub repos, issues, PRs, and code search.
- [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - Read/write access to local filesystem.
- [PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) - Query and manage PostgreSQL databases.
- [Puppeteer MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) - Browser automation - let AI navigate and interact with websites.
- [SQLite MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) - Read/write SQLite databases.
- [Memory MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - Give AI persistent memory via a knowledge graph.
- [Fetch MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) - HTTP requests - let AI fetch web content and APIs.
- [Git MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/git) - Git operations - let AI interact with git history and branches.
### Developer Tools

- [Docker MCP Server](https://github.com/ckreiling/mcp-server-docker) - Manage Docker containers, images, and compose services.
- [Vercel MCP Server](https://github.com/vercel/mcp-server-vercel) - Monitor deployments, manage environment variables, check builds.
- [Sentry MCP Server](https://github.com/getsentry/sentry-mcp) - Access error reports, stacktraces, and issue data from Sentry.
- [Kubernetes MCP Server](https://github.com/strowk/mcp-k8s-go) - Manage Kubernetes clusters, pods, and deployments.
- [AWS MCP Server](https://github.com/rishikavikondala/mcp-server-aws) - Interact with AWS services from your AI agent.
### Database

- [Supabase MCP Server](https://github.com/supabase-community/supabase-mcp) - Manage Supabase projects: database, auth, storage, edge functions.
- [MongoDB MCP Server](https://github.com/kiliczsh/mcp-mongo-server) - Connect AI agents to MongoDB Atlas and local instances.
- [Neo4j MCP Server](https://github.com/neo4j-contrib/mcp-neo4j) - Graph database queries and knowledge graph building.
- [MySQL MCP Server](https://github.com/benborla/mcp-server-mysql) - Connect to and query MySQL databases.
- [Redis MCP Server](https://github.com/redis/mcp-redis) - Interact with Redis for caching and data operations.
### Productivity & Business

- [Notion MCP Server](https://github.com/makenotion/notion-mcp-server) - Search, read, and create Notion pages and databases.
- [Slack MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) - Search conversations, read messages, post updates.
- [Linear MCP Server](https://github.com/jerhadf/linear-mcp-server) - Manage issues, sprints, and team workflows in Linear.
- [Jira MCP Server](https://github.com/sooperset/mcp-atlassian) - Create and manage Jira issues and Confluence pages.
- [Google Drive MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) - Search and read files in Google Drive.
- [Google Calendar MCP Server](https://github.com/nspady/google-calendar-mcp) - Read and manage calendar events.
### Web & Browser

- [Firecrawl](https://github.com/mendableai/firecrawl-mcp-server) - Industry-standard web scraping. Converts websites into clean, LLM-ready markdown.
- [Playwright MCP Server](https://github.com/executeautomation/mcp-playwright) - Browser automation with Playwright - let AI interact with complex web apps.
- [Browserbase MCP Server](https://github.com/browserbase/mcp-server-browserbase) - Cloud browser sessions for AI agents.
### Design

- [Figma MCP Server](https://github.com/nicobailon-figma/figma-mcp) - Inspect Figma designs: layout, tokens, components, variants. Bridges the design-to-code gap.
### Search

- [Brave Search MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) - Web search via Brave's API.
- [Tavily Search MCP Server](https://github.com/tavily-ai/tavily-mcp) - AI-optimized web search that returns clean, synthesized results.
- [Exa MCP Server](https://github.com/exa-labs/exa-mcp-server) - Semantic/neural search - finds content by meaning, not just keywords.
### MCP Directories & Aggregators

---

- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - The most comprehensive curated list of MCP servers.
- [MCP.so](https://mcp.so) - Directory of MCP servers with search and categories.
- [Smithery](https://smithery.ai) - MCP server registry and management platform.
- [Composio](https://composio.dev) - Meta-platform that exposes 250+ integrations through a single MCP endpoint.
- [Glama](https://glama.ai/mcp) - MCP server directory with quality ratings and reviews.
- [MCPHub](https://mcphub.io) - Community-driven MCP server registry with installation guides and reviews.
## AI Workflow Automation

Visual and code-based tools for connecting AI agents into automated pipelines.


---

- [n8n](https://n8n.io) - Open-source workflow automation with AI-native nodes. Visual drag-and-drop builder. Self-hostable. **[Freemium]** **[Open Source]**
- [Dify](https://dify.ai) - Open-source LLM app platform with visual workflow builder, RAG pipeline, agent orchestration, and observability. **[Freemium]** **[Open Source]**
- [Langflow](https://www.langflow.org) - Visual framework for building multi-agent RAG applications. Drag-and-drop LLM pipelines. **[Free]** **[Open Source]**
- [Flowise](https://flowiseai.com) - Open-source drag-and-drop UI to build LLM flows and chatbots. Low-code. **[Free]** **[Open Source]**
- [Zapier AI](https://zapier.com/ai) - Connect 6,000+ apps with AI-powered automation. Natural language → workflow builder. **[Freemium]**
- [Make (Integromat)](https://www.make.com) - Visual automation platform with AI integrations. More granular control than Zapier. **[Freemium]**
- [Pipedream](https://pipedream.com) - Developer-first automation platform. Write code + visual builder + AI. **[Freemium]**
- [Activepieces](https://www.activepieces.com) - Open-source alternative to Zapier with AI automation pieces. **[Free]** **[Open Source]**
## Multi-Agent Frameworks

Frameworks for orchestrating multiple AI agents working together on complex tasks.


---

- [LangChain](https://www.langchain.com) - The most popular framework for building LLM applications. Chains, agents, RAG, tool use. **[Free]** **[Open Source]**
- [LangGraph](https://langchain-ai.github.io/langgraph/) - Framework for building stateful, multi-actor applications with LLMs. Built on LangChain. **[Free]** **[Open Source]**
- [CrewAI](https://www.crewai.com) - Framework for orchestrating role-playing AI agents that collaborate on tasks. Easy to use. **[Free]** **[Open Source]**
- [AutoGen](https://github.com/microsoft/autogen) - Microsoft's multi-agent conversation framework. Agents debate, collaborate, and verify each other's work. **[Free]** **[Open Source]**
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Microsoft's SDK for integrating LLMs into apps with plugins and planners. **[Free]** **[Open Source]**
- [Haystack](https://haystack.deepset.ai) - Open-source framework for building production-ready LLM applications, RAG pipelines, and agents. **[Free]** **[Open Source]**
- [LlamaIndex](https://www.llamaindex.ai) - Data framework for connecting LLMs with external data sources. Best for RAG applications. **[Free]** **[Open Source]**
- [Smolagents](https://github.com/huggingface/smolagents) - Hugging Face's lightweight multi-agent framework. Simple, hackable. **[Free]** **[Open Source]**
## Local AI for Coding

Run AI coding assistants locally on your machine for privacy, speed, offline access, and zero API costs.

### Local Inference Engines

- [Ollama](https://ollama.com) - The easiest way to run LLMs locally. One command to download and run models. Supports coding models. **[Free]** **[Open Source]**
- [LM Studio](https://lmstudio.ai) - Beautiful desktop app for running local LLMs. Chat UI, model management, OpenAI-compatible server. **[Free]**
- [Jan](https://jan.ai) - Open-source, local-first ChatGPT alternative. Runs 100% offline on your machine. Privacy-focused. **[Free]** **[Open Source]**
- [GPT4All](https://gpt4all.io) - Free, local, privacy-aware chatbot by Nomic AI. Runs on CPU, no GPU required. **[Free]** **[Open Source]**
- [LocalAI](https://localai.io) - Open-source drop-in replacement for the OpenAI API. Run any model locally. **[Free]** **[Open Source]**
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - High-performance C/C++ inference for LLMs. The engine powering most local AI tools. **[Free]** **[Open Source]**
- [vLLM](https://github.com/vllm-project/vllm) - High-throughput LLM serving engine. Best for production-grade local deployments. **[Free]** **[Open Source]**
- [Llamafile](https://github.com/Mozilla-Ocho/llamafile) - Mozilla's single-file LLM distribution. Download one file, run it - no installation needed. **[Free]** **[Open Source]**
- [Open WebUI](https://github.com/open-webui/open-webui) - Self-hosted ChatGPT-like UI for Ollama and other local LLMs. **[Free]** **[Open Source]**
### Open Source Code Models

Models specifically trained or fine-tuned for code generation.


---

- [DeepSeek Coder V2](https://github.com/deepseek-ai/DeepSeek-Coder-V2) - State-of-the-art open-source code model. Competitive with GPT-4 on coding benchmarks. **[Free]** **[Open Source]**
- [Qwen 2.5 Coder](https://github.com/QwenLM/Qwen2.5-Coder) - Alibaba's code-specialized LLM. Strong multi-language support with variants from 1.5B to 32B parameters. **[Free]** **[Open Source]**
- [StarCoder 2](https://github.com/bigcode-project/starcoder2) - Open-source code LLM trained on The Stack v2 (permissively licensed code). 3B, 7B, 15B sizes. **[Free]** **[Open Source]**
- [CodeLlama](https://github.com/meta-llama/codellama) - Meta's code-specialized Llama model. Available in 7B, 13B, 34B, and 70B sizes. **[Free]** **[Open Source]**
- [CodeGemma](https://ai.google.dev/gemma/docs/codegemma) - Google's lightweight code model. 2B and 7B sizes optimized for code completion and generation. **[Free]** **[Open Source]**
- [Codestral](https://mistral.ai/news/codestral) - Mistral AI's code model. Strong performance on code generation and fill-in-the-middle tasks. **[Free For Research]**
- [Granite Code](https://github.com/ibm-granite/granite-code-models) - IBM's enterprise-grade code models. 3B, 8B, 20B, 34B sizes. Trained on 116 programming languages. **[Free]** **[Open Source]**
- [Stable Code](https://stability.ai/stable-code) - Stability AI's code completion model. 3B parameters, optimized for speed. **[Free]** **[Open Source]**
## AI-Powered DevOps & Infrastructure

AI tools for deployment, CI/CD, cloud management, and infrastructure.


---

- [Vercel](https://vercel.com) - The go-to platform for deploying frontend apps and full-stack Next.js projects. One-click deploy from GitHub. **[Freemium]**
- [Netlify](https://www.netlify.com) - Instant deploys for web projects with CI/CD, serverless functions, and edge computing. **[Freemium]**
- [Railway](https://railway.app) - Deploy anything: databases, backends, full-stack apps. Simple pricing, instant provisioning. **[Freemium]**
- [Render](https://render.com) - Cloud platform for deploying web services, databases, cron jobs, and static sites. **[Freemium]**
- [Fly.io](https://fly.io) - Deploy apps globally close to your users. Full-stack hosting with built-in Postgres. **[Freemium]**
- [Supabase](https://supabase.com) - Open-source Firebase alternative. Postgres database, auth, storage, edge functions, realtime. **[Freemium]** **[Open Source]**
- [PlanetScale](https://planetscale.com) - Serverless MySQL database platform with branching (like git for databases). **[Freemium]**
- [Neon](https://neon.tech) - Serverless Postgres with branching, autoscaling, and a generous free tier. **[Freemium]**
- [Terraform AI](https://www.hashicorp.com/blog/introducing-ai-assisted-terraform-development) - Infrastructure as code with AI assistance for generating cloud configurations. **[Freemium]**
- [Pulumi AI](https://www.pulumi.com/ai/) - Generate infrastructure as code from natural language descriptions. **[Freemium]**
- [Codex Infinity](https://codex-infinity.com) - Infinite coding agent that lets you run your OpenAI Codex or Claude Max plans on bare metal VPS. Full root access, no cloud timeouts. **[Paid]**
## AI for Mobile Development

Build mobile apps with AI assistance.


---

- [FlutterFlow](https://flutterflow.io) - Visual app builder for Flutter. Drag-and-drop UI + AI features for generating screens and logic. **[Freemium]**
- [Expo + AI](https://expo.dev) - React Native framework with AI-assisted development tools. Build for iOS/Android/web from one codebase. **[Freemium]**
- [Flutterflow AI](https://flutterflow.io/ai) - AI-powered Flutter app generation from prompts. Visual editor with code export. **[Freemium]**
- [DhiWise](https://www.dhiwise.com) - AI-powered app development platform for Flutter and React apps. Design-to-code automation. **[Freemium]**
- [Adalo](https://www.adalo.com) - No-code app builder for native mobile apps with AI assistance. **[Freemium]**
- [Retool Mobile](https://retool.com/products/mobile) - Build mobile internal tools with drag-and-drop and AI assistance. **[Freemium]**
- [Glide](https://www.glideapps.com) - Build mobile apps from Google Sheets and Airtable data. No coding needed. **[Freemium]**
## AI for Game Development

AI tools specifically for game creation and game assets.


---

- [Unity Muse](https://unity.com/products/muse) - Unity's AI suite: generate textures, animations, and code directly within the Unity editor. **[Paid]**
- [Scenario](https://www.scenario.com) - AI-powered game art generation. Create consistent game assets (characters, items, environments). **[Freemium]**
- [Inworld AI](https://inworld.ai) - Create AI-powered NPCs with personality, memory, and dynamic dialogue for games. **[Freemium]**
- [Ludo.ai](https://ludo.ai) - AI-powered game design tool. Generate game concepts, mechanics, themes, and market analysis. **[Freemium]**
- [Meshy](https://www.meshy.ai) - Text/image-to-3D model generation. Create game-ready 3D assets from prompts. **[Freemium]**
- [Blockade Labs](https://www.blockadelabs.com) - AI-generated 360° skyboxes and environments for games and VR. **[Freemium]**
- [Convai](https://convai.com) - AI-powered conversation engine for game characters. Create NPCs that talk naturally. **[Freemium]**
- [Promethean AI](https://www.prometheanai.com) - AI assistant for 3D world building and virtual environment creation. **[Paid]**
- [Rosebud AI](https://www.rosebud.ai) - Build games from text descriptions with AI. Generates game mechanics, levels, and assets. **[Freemium]**
## AI Git & Version Control

AI tools for commit messages, changelogs, release notes, and git workflows.


---

- [aicommits](https://github.com/Nutlope/aicommits) - CLI tool that writes your git commit messages for you with AI. Supports OpenAI, Ollama, and more. **[Free]** **[Open Source]**
- [GitLens AI](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - VS Code extension with AI-powered commit message generation, git blame, and history visualization. **[Freemium]**
- [AutoCommit](https://autocommit.top) - Generate git commit messages from staged changes with a single command. **[Free]** **[Open Source]**
- [Commitizen](https://github.com/commitizen/cz-cli) - CLI tool for generating standardized Conventional Commits. Pairs perfectly with AI workflows. **[Free]** **[Open Source]**
- [commitlint](https://commitlint.js.org) - Lint commit messages to enforce Conventional Commits format. Essential for automated changelogs. **[Free]** **[Open Source]**
- [release-please](https://github.com/googleapis/release-please) - Google's automated release tool. Parses Conventional Commits → generates changelogs and version bumps. **[Free]** **[Open Source]**
- [git-cliff](https://git-cliff.org) - Highly customizable changelog generator from git history. Regex-powered templates. **[Free]** **[Open Source]**
- [Semantic Release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing based on commit messages. **[Free]** **[Open Source]**
- [Release Drafter](https://github.com/release-drafter/release-drafter) - GitHub Action that auto-drafts release notes from PR labels. **[Free]** **[Open Source]**
- [GitSaga](https://gitsaga.com) - AI-powered tool that generates audience-appropriate changelogs and feature digests from your commits and PRs. **[Freemium]**
- [Gitbutler](https://gitbutler.com) - Git client built for modern workflows with AI-assisted branch management and conflict resolution. **[Freemium]**
- [LazyGit](https://github.com/jesseduffield/lazygit) - Terminal UI for git that makes complex git operations simple. Pairs great with AI agents. **[Free]** **[Open Source]**
- [git-absorb](https://github.com/tummychow/git-absorb) - Automatically absorb staged changes into existing commits. Reduces messy git history. **[Free]** **[Open Source]**
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) - Generate changelogs from Conventional Commits git history. **[Free]** **[Open Source]**
## AI Browser Extensions

Browser extensions that bring AI assistance to your web browsing and development workflow.


---

- [Sider](https://sider.ai) - Multi-model AI sidebar for Chrome/Edge. Chat, summarize pages, analyze PDFs, translate - without switching tabs. **[Freemium]**
- [Merlin AI](https://www.getmerlin.in) - All-in-one AI extension. Summarize YouTube videos, research, write emails, generate code on any webpage. **[Freemium]**
- [Monica AI](https://monica.im) - Universal AI assistant for Chrome. Context-aware help on any webpage, content analysis, writing assistance. **[Freemium]**
- [Wappalyzer](https://www.wappalyzer.com) - Identify technologies used on any website. Essential for understanding tech stacks when vibe coding. **[Freemium]**
- [Vimium](https://vimium.github.io) - Keyboard-driven browsing. Navigate the web without a mouse - pairs well with terminal-first AI workflows. **[Free]** **[Open Source]**
- [Refined GitHub](https://github.com/refined-github/refined-github) - Browser extension that adds useful features to GitHub's interface. **[Free]** **[Open Source]**
- [OctoTree](https://www.octotree.io) - GitHub code tree navigation. Browse repos like an IDE in your browser. **[Freemium]**
- [Perplexity Extension](https://www.perplexity.ai) - AI-powered search directly in your browser. Get cited, accurate answers while coding. **[Freemium]**
- [ChatGPT for Chrome](https://chrome.google.com/webstore/detail/chatgpt-for-google) - Display ChatGPT responses alongside Google search results. **[Free]**
- [daily.dev](https://daily.dev) - Developer news aggregator extension. Stay updated on AI coding tools and tech trends. **[Free]**
- [React DevTools](https://react.dev/learn/react-developer-tools) - Essential for debugging React apps built with AI. Inspect component hierarchy and state. **[Free]**
- [Vue DevTools](https://devtools.vuejs.org) - Debug Vue.js applications. Inspect components, state, and events. **[Free]**
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - Time-travel debugging for Redux state management. **[Free]** **[Open Source]**
## AI for Data Science & Analytics

AI tools that make data analysis accessible to everyone - the data equivalent of vibe coding.


---

- [Julius AI](https://julius.ai) - Upload data (CSV, Excel, SQL) → ask questions in plain English → get analysis, charts, and insights. No coding needed. **[Freemium]**
- [Google NotebookLM](https://notebooklm.google.com) - AI research assistant by Google. Upload documents → get AI-powered summaries, Q&A, and even podcast-style audio overviews. **[Free]**
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Brings generative AI directly into JupyterLab. Chat, code generation, and data analysis within notebooks. **[Free]** **[Open Source]**
- [PandasAI](https://github.com/gventuri/pandas-ai) - Talk to your pandas DataFrames in natural language. AI generates the Python code to answer data questions. **[Free]** **[Open Source]**
- [Hex](https://hex.tech) - Collaborative data workspace with AI-powered SQL and Python generation. Beautiful notebook-style interface. **[Freemium]**
- [Observable](https://observablehq.com) - Reactive notebooks for data exploration and visualization with AI assistance. **[Freemium]**
- [Streamlit](https://streamlit.io) - Build data apps in Python with minimal code. AI-generated dashboards and ML demos. **[Free]** **[Open Source]**
- [Gradio](https://www.gradio.app) - Create ML/AI demos and web UIs in Python with a few lines of code. **[Free]** **[Open Source]**
- [Databricks AI](https://www.databricks.com) - Enterprise data + AI platform with natural language data querying. **[Paid]**
- [Mode](https://mode.com) - Analytics platform with AI-assisted SQL queries and automated insights. **[Freemium]**
- [Evidence](https://evidence.dev) - Code-driven BI tool. Write SQL → get beautiful reports and dashboards. Open-source. **[Free]** **[Open Source]**
- [Metabase](https://www.metabase.com) - Open-source BI tool with natural language querying. Ask data questions in plain English. **[Freemium]** **[Open Source]**
- [Apache Superset](https://superset.apache.org) - Open-source data visualization and exploration platform. **[Free]** **[Open Source]**
- [Retool](https://retool.com) - Build internal tools with AI-assisted component generation and database queries. **[Freemium]**
## AI-Powered Backend & APIs

AI-native backend platforms and tools for building APIs and server-side infrastructure.


---

- [Supabase](https://supabase.com) - Open-source Firebase alternative with Postgres, auth, storage, edge functions, and vector embeddings for AI. **[Freemium]** **[Open Source]**
- [Convex](https://www.convex.dev) - Reactive backend with end-to-end TypeScript. AI-friendly because queries are code, not SQL. Built-in agentic components. **[Freemium]**
- [Firebase](https://firebase.google.com) - Google's app development platform. Auth, database, hosting, functions - all managed. **[Freemium]**
- [Hasura](https://hasura.io) - Instant GraphQL/REST APIs from your database. Metadata-driven, no boilerplate code needed. **[Freemium]**
- [Appwrite](https://appwrite.io) - Open-source backend-as-a-service. Auth, databases, storage, functions, messaging. Self-hostable. **[Free]** **[Open Source]**
- [PocketBase](https://pocketbase.io) - Open-source backend in a single file. SQLite database, auth, file storage. Perfect for vibe coded apps. **[Free]** **[Open Source]**
- [Xata](https://xata.io) - Serverless Postgres with AI-ready features: vector search, branching, automatic PII anonymization. **[Freemium]**
- [Directus](https://directus.io) - Open-source headless CMS and data platform. Instant REST + GraphQL APIs from any SQL database. **[Free]** **[Open Source]**
- [Strapi](https://strapi.io) - Open-source headless CMS. Build APIs in minutes, not days. **[Free]** **[Open Source]**
- [PostHog](https://posthog.com) - Open-source product analytics with AI-powered insights, session recording, and feature flags. Has MCP server integration. **[Freemium]** **[Open Source]**
- [Hono](https://hono.dev) - Ultra-fast web framework for edge computing. Works with Cloudflare Workers, Deno, Bun, and Node.js. **[Free]** **[Open Source]**
- [tRPC](https://trpc.io) - End-to-end typesafe APIs for TypeScript. No code generation, no schema - just types. AI-friendly. **[Free]** **[Open Source]**
- [Drizzle ORM](https://orm.drizzle.team) - TypeScript ORM that is lightweight and SQL-like. AI generates better SQL when using Drizzle. **[Free]** **[Open Source]**
- [Prisma](https://www.prisma.io) - Next-generation ORM for Node.js and TypeScript. Schema-first approach that AI tools understand well. **[Freemium]** **[Open Source]**
## AI Image Generation

AI tools for creating images, graphics, icons, and visual assets for your projects.


---

- [Midjourney](https://www.midjourney.com) - The aesthetic benchmark. Best for cinematic, artistic, and high-impact visuals. V7 is photorealistic. **[Paid]** **[From $10/Mo]**
- [DALL·E / GPT Image](https://openai.com/dall-e) - OpenAI's image generator, now integrated into ChatGPT. Best semantic understanding of complex prompts. **[Via Chatgpt Subscription]**
- [Stable Diffusion](https://stability.ai) - Open-source image generation. Run locally for free. Infinite customization via LoRAs and fine-tuning. **[Free]** **[Open Source]**
- [FLUX](https://blackforestlabs.ai) - By Black Forest Labs. State-of-the-art photorealism and prompt adherence. The professional's choice. **[Freemium]**
- [Ideogram](https://ideogram.ai) - The best text-in-image AI. Perfect for logos, posters, signs, and any design requiring readable typography. **[Freemium]**
- [Leonardo AI](https://leonardo.ai) - Versatile image generator with strong photorealism, character consistency, and a generous free tier. **[Freemium]**
- [Adobe Firefly](https://firefly.adobe.com) - Adobe's generative AI. Designed for commercial safety - trained on licensed content. Integrated into Photoshop. **[Freemium]**
- [Canva AI](https://www.canva.com) - Design platform with AI image generation, background removal, magic resize, and more. **[Freemium]**
- [Recraft](https://www.recraft.ai) - AI image generation focused on designers. Vector graphics, icons, illustrations, and brand-consistent imagery. **[Freemium]**
- [Krea AI](https://www.krea.ai) - Real-time AI image generation and enhancement. Generate and refine images interactively. **[Freemium]**
- [Playground AI](https://playground.com) - Free AI image generation with a social community. Mix models and styles. **[Freemium]**
- [Remove.bg](https://www.remove.bg) - AI background removal in seconds. Essential for app assets and product images. **[Freemium]**
- [Clipdrop](https://clipdrop.co) - Suite of AI image tools: remove background, upscale, reimagine, cleanup. By Stability AI. **[Freemium]**
- [Favicon.io](https://favicon.io) - Generate favicons for your web projects. Pair with AI image generators for custom app icons. **[Free]**
- [Shields.io](https://shields.io) - Generate badges for your GitHub README. Essential for the awesome list aesthetic. **[Free]**
- [Carbon](https://carbon.now.sh) - Create beautiful images of your source code. Great for social media posts about your projects. **[Free]**
- [ray.so](https://ray.so) - Create beautiful code snippets for sharing. By Raycast. **[Free]**
## AI Video Generation

Create videos, demos, and tutorials with AI - useful for product showcases and developer content.


---

- [Runway](https://runwayml.com) - Professional AI video generation and editing. Gen-4 for cinematic quality. Also does image-to-video. **[Freemium]**
- [Kling AI](https://klingai.com) - Photorealistic AI video with industry-leading motion physics. 1080p/4K output. **[Freemium]**
- [HeyGen](https://www.heygen.com) - AI avatar videos. Create talking-head videos from scripts. 175+ languages for localization. **[Freemium]**
- [Synthesia](https://www.synthesia.io) - Enterprise AI video platform. Create professional training and explainer videos with AI avatars. **[Paid]**
- [Pika](https://pika.art) - Creative AI video generation. Short-form content, special effects, and lip-sync. **[Freemium]**
- [Loom AI](https://www.loom.com) - Screen recording with AI-powered summaries, chapter generation, and auto-titles. Essential for async dev communication. **[Freemium]**
- [Descript](https://www.descript.com) - Video/audio editing by editing text. AI transcription, filler word removal, eye contact correction. **[Freemium]**
- [ScreenStudio](https://www.screen.studio) - Beautiful screen recordings for product demos. Automatic zoom, cursor effects. **[Paid]**
- [tldraw](https://tldraw.com) - Infinite canvas whiteboard with AI. Draw ideas → generate code, diagrams, or explanations. **[Free]** **[Open Source]**
- [Excalidraw](https://excalidraw.com) - Virtual whiteboard with hand-drawn feel. Great for architecture diagrams and brainstorming. **[Free]** **[Open Source]**
- [Mermaid](https://mermaid.js.org) - Generate diagrams and charts from markdown-like text. Flowcharts, sequence diagrams, ERDs. **[Free]** **[Open Source]**
- [D2](https://d2lang.com) - Modern diagram scripting language. Text-to-diagram for architecture docs. **[Free]** **[Open Source]**
## AI Audio & Music

AI tools for generating audio, music, sound effects, and voice for your applications.


---

- [ElevenLabs](https://elevenlabs.io) - Industry-leading AI voice generation and text-to-speech. Clone voices, generate realistic narration. **[Freemium]**
- [Suno](https://suno.com) - Generate full songs (lyrics, vocals, instruments) from text prompts. Great for app background music. **[Freemium]**
- [Udio](https://www.udio.com) - AI music generation with high-quality output across genres. **[Freemium]**
- [Mubert](https://mubert.com) - AI-generated royalty-free music for apps, videos, and content. API available for developers. **[Freemium]**
- [Soundraw](https://soundraw.io) - AI music generator for creators. Generate royalty-free background music with customizable parameters. **[Paid]**
- [Play.ht](https://play.ht) - AI text-to-speech with ultra-realistic voices. API for developers. **[Freemium]**
- [Resemble AI](https://www.resemble.ai) - Voice cloning and text-to-speech API for developers. Real-time voice generation. **[Freemium]**
- [Bark](https://github.com/suno-ai/bark) - Open-source text-to-audio model by Suno. Generates realistic speech, music, and sound effects. **[Free]** **[Open Source]**
- [AudioCraft](https://github.com/facebookresearch/audiocraft) - Meta's open-source audio generation framework. MusicGen for music, AudioGen for sound effects. **[Free]** **[Open Source]**
- [Freesound](https://freesound.org) - Collaborative database of Creative Commons licensed sounds. Essential for app sound effects. **[Free]**
## AI Writing Tools for Developers

AI tools for writing documentation, READMEs, marketing copy, and technical content.


---

- [ReadmeAI](https://github.com/eli64s/readme-ai) - AI-powered README generator. Scan your repo → get a professional, structured README.md. **[Free]** **[Open Source]**
- [Grammarly](https://www.grammarly.com) - AI writing assistant for grammar, clarity, and tone. Essential for documentation and blog posts. **[Freemium]**
- [Hemingway](https://hemingwayapp.com) - Makes your writing bold and clear. Highlights complex sentences and passive voice. **[Free]**
- [Jasper AI](https://www.jasper.ai) - Enterprise AI writing. Brand voice training, long-form content, and marketing copy generation. **[Paid]**
- [Copy.ai](https://www.copy.ai) - AI-powered copywriting. Generate landing page copy, product descriptions, and social media posts. **[Freemium]**
- [Writesonic](https://writesonic.com) - AI writing and SEO tool. Generate blog posts, ads, and product descriptions. **[Freemium]**
- [Hashnode](https://hashnode.com) - Developer blogging platform with AI writing tools. Publish technical articles with custom domains. **[Free]**
- [Dev.to](https://dev.to) - Community-driven developer blogging. Write about your vibe coding journey to build audience. **[Free]**
- [Notion AI](https://www.notion.so/product/ai) - AI writing within Notion. Draft docs, summarize notes, translate, brainstorm. **[Add On]** **[$10/Mo]**
- [Markdoc](https://markdoc.dev) - Stripe's markdown-based authoring framework. Great foundation for AI-generated documentation. **[Free]** **[Open Source]**
- [MDX](https://mdxjs.com) - Markdown + JSX. Write content with embedded React components. The standard for modern docs. **[Free]** **[Open Source]**
- [Docusaurus](https://docusaurus.io) - Meta's documentation framework. Build beautiful docs sites with markdown. **[Free]** **[Open Source]**
## AI Search & Research

AI-powered search engines and research tools for finding code, packages, and technical information.


---

- [Perplexity AI](https://www.perplexity.ai) - AI-powered search engine with cited sources. Better than Google for technical research questions. **[Freemium]**
- [Phind](https://www.phind.com) - AI search engine built for developers. **[Note: Service Shut Down Jan 2026]** **[But Alternatives Exist]**
- [You.com](https://you.com) - AI search with coding assistant. Code explanations, debugging, and multi-source research. **[Freemium]**
- [Kagi](https://kagi.com) - Premium search engine (no ads, no tracking) with AI summarization. Great for focused research. **[Paid]** **[$10/Mo]**
- [Devdocs.io](https://devdocs.io) - Fast, searchable documentation aggregator for 400+ APIs and programming languages. **[Free]**
- [grep.app](https://grep.app) - Search across half a million Git repos. Find real-world code examples instantly. **[Free]**
- [Sourcegraph](https://sourcegraph.com) - Universal code search across all your repositories. Find anything in any repo. **[Freemium]**
- [SearchCode](https://searchcode.com) - Search 75 billion lines of code from 40 million projects. **[Free]**
- [npm trends](https://npmtrends.com) - Compare npm package downloads over time. Essential for choosing the right libraries. **[Free]**
- [Bundlephobia](https://bundlephobia.com) - Find the cost of adding an npm package to your bundle. **[Free]**
- [Can I Use](https://caniuse.com) - Browser compatibility tables for web technologies. **[Free]**
- [Stack Overflow](https://stackoverflow.com) - The classic Q&A platform. Still essential, now with AI-powered search. **[Free]**
- [Google AI Studio](https://aistudio.google.com) - Prototype with Gemini models for free. Test prompts, build with AI. **[Free]**
- [OpenRouter](https://openrouter.ai) - Unified API for accessing 100+ AI models. One API key for GPT-4, Claude, Gemini, Llama, etc. **[Pay Per Use]**
- [LiteLLM](https://github.com/BerriAI/litellm) - Open-source proxy for 100+ LLMs. Use any model with a unified OpenAI-compatible API. **[Free]** **[Open Source]**
## Benchmarks & Comparisons

Tools and resources for comparing AI coding assistants and measuring performance.


---

- [SWE-bench](https://www.swebench.com) - The industry-standard benchmark for evaluating AI coding agents on real-world GitHub issues. **[Free]**
- [Aider Leaderboard](https://aider.chat/docs/leaderboards/) - Performance comparison of LLMs on coding tasks, measured by Aider's edit format benchmarks. **[Free]**
- [LiveBench](https://livebench.ai) - Contamination-free LLM benchmark with regularly updated questions. **[Free]**
- [BigCode Leaderboard](https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard) - Hugging Face leaderboard for open-source code models. **[Free]**
- [Chatbot Arena](https://chat.lmsys.org) - LMSYS's crowdsourced LLM comparison via blind voting. Real human preferences. **[Free]**
- [Artificial Analysis](https://artificialanalysis.ai) - Independent LLM quality, speed, and pricing comparisons. **[Free]**
- [LLM Pricing Tracker](https://llmpricecheck.com) - Compare pricing across AI model providers. **[Free]**
- [Cursor vs Copilot vs Windsurf](https://www.reddit.com/r/cursor/) - Community comparisons on Reddit (search in r/cursor, r/programming). **[Free]**
- [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar) - Industry-respected assessment of tools, techniques, and platforms including AI coding tools. **[Free]**
## Learning Resources

### Articles & Blog Posts

- [Andrej Karpathy's Original "Vibe Coding" Post](https://x.com/karpathy/status/1886192184808149383) - The tweet that started it all (Feb 2025).
- [Vibe Coding on Wikipedia](https://en.wikipedia.org/wiki/Vibe_coding) - Overview and history of the concept.
- [The Art of AI-Assisted Programming](https://roadmap.sh/articles/vibe-coding) - Roadmap.sh's comprehensive guide to vibe coding workflows.
- [AI Tools for Software Engineers but Honest](https://newsletter.pragmaticengineer.com/) - The Pragmatic Engineer's balanced take on AI coding tools.
- [Simon Willison's Blog](https://simonwillison.net) - One of the most insightful voices on practical AI tool usage. LLM, prompt engineering, and tool reviews.
- [Swyx's AI Engineering Posts](https://www.latent.space/about) - Deep technical content at the intersection of AI and software engineering.
- [An Opinionated Guide to Vibe Coding](https://roadmap.sh/articles/vibe-coding) - How to do vibe coding well without accumulating technical debt.
### YouTube Channels & Videos

- [Fireship](https://www.youtube.com/@Fireship) - Fast-paced tech explainers (100-second format). Excellent coverage of AI coding tools.
- [Theo (t3.gg)](https://www.youtube.com/@t3dotgg) - Deep coverage of developer tools, AI assistants, and web dev ecosystem.
- [Web Dev Cody](https://www.youtube.com/@WebDevCody) - AI-assisted web development tutorials and live builds.
- [AI Jason](https://www.youtube.com/@AIJason) - AI tool reviews, agentic coding tutorials, and workflow optimization.
- [Greg Isenberg](https://www.youtube.com/@GregIsenberg) - AI-powered business building and no-code development.
- [Matt Wolfe](https://www.youtube.com/@maboroshi) - AI tools roundups, demos, and weekly news.
- [Network Chuck](https://www.youtube.com/@NetworkChuck) - Beginner-friendly AI and coding tutorials.
- [ByteByteGo](https://www.youtube.com/@ByteByteGo) - System design + AI tool deep dives.
- [Traversy Media](https://www.youtube.com/@TraversyMedia) - Web development tutorials with AI coding tool integration.
- [Dave Ebbelaar](https://www.youtube.com/@daveebbelaar) - AI engineering tutorials, RAG, agents, and practical LLM usage.
- [IndyDevDan](https://www.youtube.com/@indydevdan) - Agentic coding workflows, Claude Code tutorials, and dev tools.
- [Cole Medin](https://www.youtube.com/@ColeMedin) - Local AI, open-source AI tools, and DIY AI agent tutorials.
- [The AI Advantage](https://www.youtube.com/@aiadvantage) - AI tool reviews and practical tutorials for productivity and coding.
- [All About AI](https://www.youtube.com/@AllAboutAI) - Comprehensive AI tool demos, comparisons, and coding walkthroughs.
- [Matt Shumer](https://www.youtube.com/@mattshumer) - AI founder building in public. Deep dives into AI agent development.
- [Kevin Powell](https://www.youtube.com/@KevinPowell) - CSS expert. Useful for understanding and fixing AI-generated frontend code.
- [Tech With Tim](https://www.youtube.com/@TechWithTim) - Python tutorials and AI project walkthroughs for beginners.
### Courses

- [DeepLearning.AI - Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Free course by Andrew Ng on effective prompting. A must-take for anyone using AI to code.
- [DeepLearning.AI - Building Systems with ChatGPT](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) - Build complete systems using LLMs.
- [Vibe Coding Academy](https://vibecodingacademy.ai) - Dedicated platform for learning to build with AI.
- [Replit 100 Days of Code](https://replit.com/learn) - Free coding curriculum with AI assistance.
- [freeCodeCamp](https://www.freecodecamp.org) - Free full coding curriculum. Use with AI assistants for the ultimate learning combo.
- [CS50 by Harvard](https://cs50.harvard.edu) - Harvard's intro to CS. Includes an AI assistant (CS50 Duck Debugger) for help.
- [Scrimba](https://scrimba.com) - Interactive coding courses with AI tutor. Learn frontend development with hands-on practice. **[Freemium]**
- [Frontend Masters](https://frontendmasters.com) - Expert-led web development courses. AI and tools coverage. **[Paid]**
- [The Odin Project](https://www.theodinproject.com) - Free full-stack web development curriculum. Pair with AI for accelerated learning. **[Free]**
- [Codecademy](https://www.codecademy.com) - Interactive coding courses with AI features for personalized learning paths. **[Freemium]**
### Books

- *"Prompt Engineering for Generative AI"* by James Phoenix & Mike Taylor - O'Reilly guide to writing effective prompts for code generation and more.
- *"AI-Assisted Programming"* by Tom Taulli - Comprehensive guide to coding with AI assistants and copilots.
- *"The Pragmatic Programmer"* by David Thomas & Andrew Hunt - Timeless software craft principles that make vibe coding output much better.
- *"Building LLM Apps"* by Valentina Alto - O'Reilly guide to building applications powered by large language models.

### Newsletters

- [TLDR](https://tldr.tech) - Daily tech newsletter covering AI, dev tools, and startups. Free.
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) - Gergely Orosz's deep dives into engineering practices and AI tools.
- [Latent Space](https://www.latent.space) - The AI engineer newsletter by Swyx + Alessio. Technical deep dives.
- [ByteByteGo](https://blog.bytebytego.com) - System design + AI infrastructure insights by Alex Xu.
- [The Neuron](https://www.theneurondaily.com) - Daily AI news for non-technical readers.
- [Ben's Bites](https://bensbites.beehiiv.com) - Daily AI tools and news roundup.
- [AI Valley](https://www.theaivalley.com) - Curated AI tools, news, and tutorials.
- [Superhuman AI](https://www.superhuman.ai) - Daily AI news and tool discoveries.
- [The Rundown AI](https://www.therundown.ai) - Daily AI newsletter with 600K+ subscribers.
### Podcasts

---

- [Latent Space](https://www.latent.space/podcast) - The technical AI engineering podcast by Swyx + Alessio. Deep dives into AI infra, agents, and coding.
- [Practical AI](https://practicalai.fm) - Making AI practical, productive, and accessible for all developers.
- [The Changelog](https://changelog.com/podcast) - Open source and developer culture. Frequent AI tool episodes.
- [Lex Fridman Podcast](https://lexfridman.com/podcast/) - Long-form interviews with AI researchers, engineers, and founders.
- [AI Engineering Podcast](https://www.aiengineeringpodcast.com) - Focused on building production AI systems.
- [Software Engineering Daily](https://softwareengineeringdaily.com) - Daily episodes covering AI, infrastructure, and developer tools.
- [Hard Fork](https://www.nytimes.com/column/hard-fork) - NYT's accessible tech podcast with regular AI coverage.
- [No Priors](https://www.nopriors.com) - AI podcast with top founders and researchers. Covers the future of AI-assisted development.
- [Gradient Dissent](https://wandb.ai/podcast) - Weights & Biases podcast featuring ML practitioners and AI engineers.
- [Cognitive Revolution](https://www.cognitiverevolution.ai) - Deep interviews on AI capabilities and societal impact with industry leaders.
- [ThursdAI](https://thursdai.news) - Weekly AI news podcast covering the latest in open-source AI, models, and tools.
- [AI Explained](https://www.youtube.com/@aiexplained-official) - Clear, well-researched explanations of AI developments and capabilities.
- [Machine Learning Street Talk](https://www.youtube.com/@MachineLearningStreetTalk) - Deep technical AI discussions with researchers.
- [The TWIML AI Podcast](https://twimlai.com) - This Week in Machine Learning & AI. Enterprise AI use cases and research.
## Communities

Places to learn, share, and discuss vibe coding with others.

### Reddit

- [r/vibecoding](https://www.reddit.com/r/vibecoding/) - The main subreddit for vibe coding discussion, tool sharing, and project showcases.
- [r/ChatGPTCoding](https://www.reddit.com/r/ChatGPTCoding/) - Active community for AI-assisted coding tips, tricks, and projects.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) - Claude-specific community with coding discussion, prompts, and use cases.
- [r/cursor](https://www.reddit.com/r/cursor/) - Cursor IDE community. Tips, rules files, and feature discussions.
- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) - Community for running AI locally. Great for local coding AI setups.
- [r/programming](https://www.reddit.com/r/programming/) - General programming community with frequent AI tool discussions.
- [r/SideProject](https://www.reddit.com/r/SideProject/) - Share projects you've built (great for showcasing vibe coded apps).
### Discord

- [Cursor Discord](https://discord.com/invite/cursor) - Official Cursor community. Rules sharing, tips, feature requests.
- [Anthropic Discord](https://discord.gg/anthropic) - Official Anthropic community for Claude and Claude Code users.
- [Replit Discord](https://discord.com/invite/replit) - Replit community for AI-assisted development.
- [Vercel Discord](https://discord.com/invite/vercel) - v0 and Vercel community.
- [AI Engineer Discord](https://discord.gg/aiengineer) - Community for AI engineers building with LLMs.
- [VIBECORD](https://discord.gg/vibecord) - Community specifically for vibe coders sharing tools, workflows, and prompts.
- [OpenAI Discord](https://discord.gg/openai) - Official OpenAI community for ChatGPT, Codex, and API discussions.
- [Midjourney Discord](https://discord.gg/midjourney) - Massive AI art community. Learn prompt engineering visually.
- [Hugging Face Discord](https://discord.gg/huggingface) - Open-source AI model community. Great for local AI coding setups.
- [LangChain Discord](https://discord.gg/langchain) - Community for building LLM applications, agents, and RAG systems.
- [n8n Discord](https://discord.gg/n8n) - Automation community for AI workflow building.
### Other

---

- [Hacker News](https://news.ycombinator.com) - The tech community where AI coding discussions and tool launches happen.
- [Dev.to](https://dev.to/t/ai) - Developer blogging platform with active AI coding tag.
- [Indie Hackers](https://www.indiehackers.com) - Community of indie makers, many using AI to build and ship products.
- [Product Hunt](https://www.producthunt.com) - Where new AI coding tools launch daily.
- [X/Twitter AI Dev Community](https://x.com) - Follow #vibecoding, #aitools, @karpathy, @AnthropicAI, @cursor_ai, @OpenAI.
- [GitHub Discussions](https://github.com/features/discussions) - Many AI tool repos have active discussion forums. Engage directly with maintainers.
- [Lobsters](https://lobste.rs) - Invite-only tech community like Hacker News. High-quality AI and dev tool discussions.
## Case Studies & Showcases

Real projects built entirely or primarily through vibe coding.


---

- [Built with Cursor](https://www.builtwithcursor.com) - Collection of production apps and projects built using Cursor IDE.
- [Made with Lovable](https://lovable.dev/showcase) - Apps created using Lovable's AI app builder.
- [Built with Replit](https://replit.com/community) - Gallery of apps built with Replit's AI Agent.
- [v0 Gallery](https://v0.dev/gallery) - Community-generated UI components, templates, and full pages.
- [vibe.coder.party](https://vibecode.party) - Community showcase of apps built through vibe coding.
- [bolt.new Examples](https://bolt.new) - Example projects and templates built with bolt.new.
- [Product Hunt AI Category](https://www.producthunt.com/topics/artificial-intelligence) - Daily launches of apps built with vibe coding workflows.
## Best Practices & Workflows

Proven strategies for effective vibe coding, avoiding common traps.

### The "Think First, Code Second" Workflow

1. **Define requirements** in a document before starting any AI session
2. **Create an architecture plan** (AI can help with this too)
3. **Break work into small tasks** - one feature or component at a time
4. **Use AI to implement** each small task
5. **Test and verify** after each task (don't let AI changes pile up)
6. **Commit frequently** to git - create checkpoints you can revert to

### Golden Rules

-  **Use rules/config files** (`.cursorrules`, `CLAUDE.md`) to give AI your project's conventions
-  **Give AI maximum context** - paste relevant files, types, error logs
-  **Be specific** in prompts - "Add a login form with email/password using React Hook Form and Zod validation" beats "Add login"
-  **Review every change** - Treat AI output like an unreviewed pull request
-  **Use version control** - Git commit before asking AI to make changes, so you can revert
-  **Decompose complex tasks** - Break big features into 3-5 smaller prompts
-  **Don't blindly accept** code you don't understand for production
-  **Don't give vague instructions** - Ambiguity leads to hallucination
-  **Don't skip testing** - AI-generated code needs testing like any other code
-  **Don't use AI for security-critical code** without expert review

### The Two-AI Approach (Advanced)

Many experienced vibe coders use **two tools** together:
1. **Cursor** for fast, iterative UI/UX work and inline editing
2. **Claude Code** for deep architectural reasoning, complex refactors, and comprehensive code reviews

This combination leverages each tool's strengths for maximum productivity.

---

## Opinions & Criticism

Balanced perspectives on the vibe coding movement.

### In Favor

- *"There's a new kind of coding I call 'vibe coding'..."* - **Andrej Karpathy**, AI researcher, former OpenAI/Tesla
- *"AI tools have legitimately changed how I ship software."* - Developer testimonials across Twitter/X
- *"90% of developers now use AI coding assistants in their workflow."* - GitHub/Stack Overflow surveys, 2025-2026
- Non-technical founders are building and shipping real products for the first time
- Experienced developers report 3-10x productivity increases on routine tasks

### Concerns

- **Maintainability** - Code you don't understand is code you can't debug when it breaks at 2 AM
- **Security** - AI-generated code may contain vulnerabilities that a non-coder can't identify
- **Over-reliance** - Teams that skip understanding fundamentals face scaling challenges
- **Hallucination** - AI can confidently write plausible-looking code that is subtly wrong
- **Technical Debt** - Fast iteration without understanding creates massive debt later
- **Job Market Disruption** - What happens to junior developer roles if AI handles entry-level tasks?
- Full discussion: [Vibe Coding: The Risks](https://en.wikipedia.org/wiki/Vibe_coding#Criticism)

---

## Related Awesome Lists

Other curated lists that complement this one.


---

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Massive prompt collection (100K+ stars)
- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules) - Cursor configuration files
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - MCP server directory
- [Awesome LLM](https://github.com/Hannibal046/Awesome-LLM) - Large Language Model papers and resources
- [Awesome AI Agents](https://github.com/slavakurilyak/awesome-ai-agents) - AI agent frameworks and tools
- [Awesome Local AI](https://github.com/janhq/awesome-local-ai) - Resources for running AI locally
- [Awesome Generative AI](https://github.com/steven2358/awesome-generative-ai) - Generative AI tools and research
- [Awesome No-Code](https://github.com/kairichard/awesome-nocode-lowcode) - No-code and low-code tools
- [Public APIs](https://github.com/public-apis/public-apis) - Free APIs for building projects (pair with AI to build faster)
- [Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap) - Learning paths for developers (use with AI for accelerated learning)
- [Awesome React](https://github.com/enaqx/awesome-react) - React ecosystem resources (most AI app builders output React)
- [Awesome Next.js](https://github.com/unicodeveloper/awesome-nextjs) - Next.js resources (the default framework for AI-generated web apps)
- [Awesome Tailwind CSS](https://github.com/aniftyco/awesome-tailwindcss) - Tailwind resources (the default CSS framework AI tools generate)
- [Awesome TypeScript](https://github.com/dzharii/awesome-typescript) - TypeScript resources (the language AI understands best)
- [Free for Dev](https://github.com/ripienaar/free-for-dev) - List of free SaaS, PaaS, IaaS offerings for developers
## Contributing

This list is community-maintained and I actively review every PR and issue. Please read the [contribution guidelines](CONTRIBUTING.md) first.

Ways to contribute:
-  **Add a missing tool** - Open a PR with the tool name, link, and a one-line description
-  **Report a dead link** - Open an issue
-  **Suggest a new category** - Open an issue to discuss
-  **Star the repo** - Helps others discover this list

I aim to review all PRs within 24 hours.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.

