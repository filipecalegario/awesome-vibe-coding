# Awesome-Vibe-Coding

[![Website](https://img.shields.io/website?url=https%3A%2F%2F0xWelt.github.io%2FAwesome-Vibe-Coding%2F&label=Live%20Site)](https://0xWelt.github.io/Awesome-Vibe-Coding/)
[![GitHub stars](https://img.shields.io/github/stars/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding)
[![GitHub forks](https://img.shields.io/github/forks/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding/fork)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A Curated List of Vibe Coding Open-Source Projects, Tools, and Learning Resources

🌐 **Live Website**: [https://0xWelt.github.io/Awesome-Vibe-Coding/](https://0xWelt.github.io/Awesome-Vibe-Coding/)

![Awesome-Vibe-Coding](docs/Awesome-Vibe-Coding.png)

## Table of Contents

- [Awesome-Vibe-Coding](#awesome-vibe-coding)
  - [Table of Contents](#table-of-contents)
  - [Development Toolkits](#development-toolkits)
    - [CLI Tools](#cli-tools)
      - [Claude Code](#claude-code)
      - [Gemini CLI](#gemini-cli)
      - [Kimi CLI](#kimi-cli)
      - [Crush](#crush)
      - [OpenCode](#opencode)
      - [Cursor CLI](#cursor-cli)
      - [Goose](#goose)
      - [MyCoder.ai](#mycoderai)
      - [RA.Aid](#raaid)
      - [CodeSelect](#codeselect)
      - [OpenAI Codex](#openai-codex)
      - [Qwen Code](#qwen-code)
      - [Amp](#amp)
      - [Aider](#aider)
    - [Standalone IDEs](#standalone-ides)
      - [Cursor](#cursor)
      - [Trae](#trae)
      - [Qoder](#qoder)
      - [Windsurf Editor](#windsurf-editor)
      - [Void](#void)
      - [Dyad](#dyad)
      - [Kiro](#kiro)
      - [Zed](#zed)
    - [IDE Extensions](#ide-extensions)
      - [Github Copilot](#github-copilot)
      - [Continue](#continue)
      - [Windsurf Plugins](#windsurf-plugins)
      - [Amazon Q Developer](#amazon-q-developer)
      - [Superdesign.dev](#superdesigndev)
      - [Roo Code](#roo-code)
      - [Avante.nvim](#avantenvim)
      - [Prompt Tower](#prompt-tower)
      - [Augment Code](#augment-code)
    - [Web-based IDEs](#web-based-ides)
      - [Replit](#replit)
      - [Bolt.new](#boltnew)
      - [Firebase Studio](#firebase-studio)
      - [Capacity](#capacity)
      - [Command.new](#commandnew)
      - [Create.xyz](#createxyz)
      - [Tempo.new](#temponew)
      - [Softgen](#softgen)
      - [HeyBoss](#heyboss)
      - [Creatr](#creatr)
      - [Rork](#rork)
      - [Napkins.dev](#napkinsdev)
      - [Rocket.new](#rocketnew)
      - [Supabase](#supabase)
      - [HeroUI Chat](#heroui-chat)
      - [Open Lovable](#open-lovable)
      - [Lazy AI](#lazy-ai)
      - [Phoenix.new](#phoenixnew)
    - [Cloud-based Agents](#cloud-based-agents)
      - [Devin](#devin)
      - [Cursor Background Agents](#cursor-background-agents)
      - [Replit Ghostwriter](#replit-ghostwriter)
      - [Jules](#jules)
      - [Factory](#factory)
      - [Ona](#ona)
    - [Task Management](#task-management)
      - [Boomerang Tasks](#boomerang-tasks)
      - [Taskmaster AI](#taskmaster-ai)
    - [Vibe Coding Community](#vibe-coding-community)
      - [v0](#v0)
      - [Lovable](#lovable)
      - [YouWare](#youware)
      - [Trickle](#trickle)
    - [Mobile-first tools](#mobile-first-tools)
      - [vibecode](#vibecode)
  - [Development Standards](#development-standards)
    - [AGENTS.md](#agentsmd)
    - [Model Context Protocol (MCP)](#model-context-protocol-mcp)
    - [Agent Communication Protocol (ACP)](#agent-communication-protocol-acp)
    - [Claude Agent Skills](#claude-agent-skills)
  - [MCP Servers](#mcp-servers)
    - [MCP Server Hub](#mcp-server-hub)
      - [Glama MCP Servers](#glama-mcp-servers)
      - [ModelScope MCP](#modelscope-mcp)
    - [GitHub MCP Server](#github-mcp-server)
    - [ArXiv MCP Server](#arxiv-mcp-server)
    - [Zotero MCP](#zotero-mcp)
    - [Notion MCP Server](#notion-mcp-server)
  - [Agents](#agents)
    - [Agent SDKs](#agent-sdks)
      - [Claude Agent SDK](#claude-agent-sdk)
      - [Google ADK](#google-adk)
      - [OpenAI Agents SDK](#openai-agents-sdk)
      - [Vercel AI SDK](#vercel-ai-sdk)
      - [Kosong](#kosong)
  - [Supporting Tools](#supporting-tools)
    - [Vercel](#vercel)
    - [Netlify](#netlify)
    - [Railway](#railway)
    - [Render](#render)
    - [Semgrep](#semgrep)
    - [Warp](#warp)
    - [UiPath Python](#uipath-python)
  - [Vibe Coding Projects](#vibe-coding-projects)
    - [yaal](#yaal)
    - [Awesome-Vibe-Coding](#awesome-vibe-coding-1)
    - [Awesome-LLM-RL](#awesome-llm-rl)
    - [TradeMasterOnline](#trademasteronline)
    - [VibeRL](#viberl)
    - [taxi\_calculator](#taxi_calculator)
  - [Learning Resources](#learning-resources)
    - [DeepLearning.AI](#deeplearningai)
      - [Vibe Coding 101 with Replit](#vibe-coding-101-with-replit)
      - [MCP: Build Rich Context AI Apps with Anthropic](#mcp-build-rich-context-ai-apps-with-anthropic)
  - [Repo Status](#repo-status)
  - [Contributors](#contributors)
  - [Star History](#star-history)
  - [License](#license)

## Development Toolkits

> Comprehensive collection of AI-powered development tools, IDEs, extensions, and platforms for modern software development.

### CLI Tools

> Integrate AI directly into your terminal.

#### [Claude Code](https://www.anthropic.com/claude-code)

Unleash Claude's raw power directly in your terminal. Search million-line
codebases instantly. Turn hours-long workflows into a single command. Your
tools. Your workflow. Your codebase, evolving at thought speed.

#### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

Gemini CLI empowers developers to query and edit large codebases beyond the 1M
token context window, generate apps from PDFs/sketches using multimodal
capabilities, automate operational tasks, integrate with MCP servers for media
generation, and ground queries with built-in Google Search.

#### [Kimi CLI](https://github.com/MoonshotAI/kimi-cli)

Kimi CLI is your next CLI agent that can help you with your software development tasks and terminal operations. Features include shell-like UI and shell command execution, Zsh integration for empowering your shell experience with AI agent capabilities, Agent Client Protocol (ACP) support for use with any ACP-compatible editor or IDE, MCP support following the well-established MCP config convention, and seamless terminal workflow integration. Kimi CLI provides a powerful AI coding assistant directly in your terminal.

#### [Crush](https://github.com/charmbracelet/crush)

The glamorous AI coding agent for your favourite terminal. Crush is your new
coding bestie that brings AI-powered development directly to your terminal. It
supports multiple AI providers including Anthropic, OpenAI, Groq, and
OpenRouter, with features like LSP integration, MCP server support, and
intelligent code assistance.

#### [OpenCode](https://github.com/sst/opencode)

OpenCode is a powerful AI coding agent built specifically for the terminal. It
provides developers with an intelligent coding assistant that can help with code
generation, debugging, refactoring, and more, all from the command line. With
over 18,000 stars on GitHub, OpenCode has become a popular alternative to Claude
Code, offering seamless integration with your existing development workflow and
terminal environment.

#### [Cursor CLI](https://docs.cursor.com/en/cli/overview)

Cursor CLI lets you interact with AI agents directly from your terminal to write, review, and modify code. Whether you prefer an interactive terminal interface or non-interactive automation for scripts and CI pipelines, the CLI provides powerful coding assistance right where you work. Features include interactive conversational sessions, non-interactive mode for automation, and session management to resume previous conversations with maintained context.

#### [Goose](https://block.github.io/goose/)

Goose is your local AI agent that automates engineering tasks seamlessly. Built with transparency and collaboration in mind, Goose runs locally to execute tasks efficiently while keeping control in your hands. It's extensible with any LLM and MCP servers, handles complex tasks autonomously from debugging to deployment, and is loved by engineers worldwide for its ability to turn hours-long workflows into simple commands.

#### [MyCoder.ai](https://github.com/drivecore/mycoder)

MyCoder is a powerful command-line AI agent system for coding tasks that leverages Anthropic's Claude, OpenAI models, and Ollama for intelligent assistance. It features an extensible tool system with modular architecture, parallel execution with sub-agents, self-modification capabilities, GitHub integration for issues and PRs, MCP server support, and interactive corrections during execution. With comprehensive browser automation and system browser detection, MyCoder provides a complete AI coding assistant experience directly from your terminal.

#### [RA.Aid](https://github.com/ai-christianson/RA.Aid)

RA.Aid (pronounced "raid") is a standalone coding agent built on LangGraph's agent-based task execution framework that helps you develop software autonomously. It provides an intelligent assistant for research, planning, and implementation of multi-step development tasks through a three-stage architecture: Research (analyzing codebases and gathering context), Planning (breaking down tasks into actionable steps), and Implementation (executing each planned step sequentially). RA.Aid can optionally integrate with aider for specialized code editing capabilities and features web research via Tavily API, human-in-the-loop interaction, chat mode, and a modern web interface with real-time streaming.

#### [CodeSelect](https://github.com/maynetee/codeselect)

CodeSelect is a lightweight CLI tool that helps developers share code with AI assistants like Claude or ChatGPT. It provides a simple interactive interface to select files from a project and exports them in an AI-friendly format with intelligent context about project structure and relationships between files. Features include visual file selection with checkboxes, intelligent code analysis that detects imports and file relationships, multi-language support, zero dependencies, clipboard integration, and AI-optimized output formats including LLM, Markdown, and plain text.

#### [OpenAI Codex](https://github.com/openai/codex)

OpenAI Codex CLI is a lightweight coding agent that runs locally in your terminal. It provides intelligent coding assistance with features like autonomous code generation, debugging, refactoring, and testing. Codex offers three levels of autonomy from read-only to full write access, runs in a secure sandbox environment, supports both interactive and non-interactive modes, integrates with ChatGPT plans for usage-based billing, and can work with open-source models via Ollama. With 34.5k+ stars, it's one of the most popular AI coding agents available.

#### [Qwen Code](https://github.com/QwenLM/qwen-code)

Qwen Code is a powerful command-line AI workflow tool adapted from Google Gemini CLI and optimized for Qwen3-Coder models. It provides intelligent coding assistance with features like code understanding and editing beyond traditional context windows, workflow automation for operational tasks, enhanced parser specifically optimized for Qwen-Coder models, and multiple free usage options including Qwen OAuth with 2,000 requests/day, Alibaba Cloud Bailian, ModelScope, and OpenRouter. With 9.2k+ stars, it offers comprehensive development acceleration capabilities including codebase exploration, refactoring, testing, and documentation generation.

#### [Amp](https://ampcode.com/)

Amp is the frontier coding agent that lets you wield the full power of leading models. Available in the terminal and in editors including VS Code, Cursor, Windsurf, JetBrains, and Neovim, Amp provides a premium coding experience with agentic capabilities. Features include multi-model support with Claude Opus 4.5, Gemini 3 Pro, and other frontier models, TUI and CLI interfaces for terminal workflows, editor extensions that integrate seamlessly into your IDE, Rush Mode for faster and cheaper execution of small, well-defined tasks, workspace settings for per-workspace configuration, and a community showcase of real coding projects built with Amp.

#### [Aider](https://aider.chat/)

Aider is an AI pair programming assistant that lets you write code, chat with your codebase, and commit changes using natural language. It runs directly in your terminal, supports multiple LLM providers including OpenAI, Anthropic, Gemini, and Ollama, and can work with any git repository. Features include natural language code editing with automatic file operations, git integration that automatically commits changes with clear messages, support for coding conventions via CONVENTIONS.md files, voice-to-code capabilities, image and web page context for multimodal coding, prompt caching for faster responses, linting and testing integration, and IDE notifications. Aider respects your workflow and enhances it with AI assistance.

### Standalone IDEs

> IDEs build for AI native experiences.

#### [Cursor](https://www.cursor.com/)

Cursor is the AI code editor used by millions of engineers worldwide, built to make you extraordinarily productive. Powered by a mix of purpose-built and frontier models, Cursor features intelligent tab completion that predicts your next edit, natural language code editing for updating entire classes or functions with simple prompts, and deep codebase understanding that lets you get answers from your codebase or refer to files and docs instantly. With seamless VS Code compatibility (import all extensions, themes, and keybindings in one click), privacy options including SOC 2 certification, and trusted by engineers at Samsung, Stripe, OpenAI, and other world-class companies, Cursor represents the best way to code with AI.

#### [Trae](https://www.trae.com.cn/home)

Trae is ByteDance's AI-native integrated development environment (IDE) launched on January 19, 2025, developed by its Singapore subsidiary SPRING (SG) PTE.LTD. As China's first AI IDE, Trae embodies the core philosophy of "Intelligent Infinity, Seamless Collaboration" by deeply integrating AI models with development workflows to achieve full-process automation from code generation to project deployment. Key features include dual development modes (Builder mode for natural language to complete project generation, Chat mode for real-time AI interaction), multimodal support for image/file/directory uploads with intelligent parsing, agent-driven programming with customizable multi-agent systems, comprehensive IDE functionality including code editing and version control, and powerful AI assistance with real-time code suggestions, code snippet generation, and intelligent context understanding. Trae supports macOS 10.15+ and Windows 10/11 (Linux version coming soon) and is currently completely free with support for multiple AI models.

#### [Qoder](https://qoder.com/)

Qoder is an intelligent coding platform designed for real software development, featuring enhanced context engineering and intelligent agents that deeply understand your codebase and systematically handle development tasks. It goes beyond code completion by automating complex workflows, maintaining project context, and supporting seamless AI-assisted development. Key features include dual chat modes (Ask and Agent) for flexible development workflows, automatic environment awareness that detects project frameworks and tech stacks, built-in tools for file operations and code queries with MCP support, autonomous command execution capabilities, project-level modifications across multiple files, and memory-based learning that builds context from each conversation. Qoder supports WSL and provides a comprehensive development environment for building higher-quality software through intelligent coding assistance.

#### [Windsurf Editor](https://windsurf.com/)

Windsurf Editor is a purpose-built AI code editor designed to keep developers in flow state. It features Cascade, an agentic AI that remembers your codebase structure and workflow patterns, automatically fixes lint errors, supports MCP servers for enhanced capabilities, and offers Turbo mode for autonomous terminal command execution. With drag-and-drop image support for instant design implementation, sequential thinking for complex tasks, and seamless GitHub integration, Windsurf provides a truly magical coding experience trusted by over 1 million developers and 4,000+ enterprises worldwide.

#### [Void](https://github.com/voideditor/void)

Void is an open-source AI code editor built on Visual Studio Code that prioritizes data privacy and flexible AI model integration. As a Cursor alternative, Void provides complete data privacy and control by supporting local self-hosted AI models or direct connections to cloud LLMs without data retention. Key features include multi-model compatibility with open-source models (Llama, Gemini) and commercial models (GPT-4, Claude, Grok), seamless VS Code migration for themes and settings, advanced AI programming assistance with intelligent autocomplete and inline editing, context-aware chat modes (Agent and Gather) for large files, file system awareness that automatically indexes and understands entire codebases, and community-driven open-source development. Void sends messages directly to AI providers without retaining your data, making it ideal for privacy-sensitive development projects.

#### [Dyad](https://www.dyad.sh/)

Dyad is a free, local, open-source AI app builder that serves as an alternative to cloud-based tools like Lovable and Bolt.new. It provides a visual interface for building full-stack applications with AI assistance while keeping all source code and data on your local machine. Features include drag-and-drop interface building, support for any AI model with your own API keys, Supabase integration for backend functionality, and complete freedom from vendor lock-in. Runs on macOS and Windows with no sign-up required.

#### [Kiro](https://kiro.dev)

Kiro is an AI IDE designed for taking projects from prototype to production through spec-driven development. It transforms prompts into clear requirements, system design, and discrete tasks while enabling collaboration on specifications and architecture. Features include agent hooks for automated task execution on events like file saves, multimodal chat support, native MCP integration for connecting to docs, databases, and APIs, autopilot mode for autonomous large task execution, VS Code compatibility with Open VSX plugins and themes, and enterprise-grade security. Currently in beta with waitlist access, Kiro helps structure AI coding with mature engineering practices.

#### [Zed](https://zed.dev/)

Zed is a high-performance, multiplayer code editor built in Rust with a focus on speed and collaboration. While primarily a code editor, Zed includes AI capabilities through its rules system that allows you to configure AI behavior for code generation, completions, and assistance. Features include blazing-fast performance with low latency, real-time multiplayer collaboration, AI rules configuration for consistent code generation patterns, built-in AI assistant integration, and a modern editor experience with features like vim mode, search, and project management. Zed is designed for teams that need both performance and AI assistance.

### IDE Extensions

> Integrate AI into your existing IDEs.

#### [Github Copilot](https://code.visualstudio.com/docs/copilot/overview)

Copilot is your AI pair programmer tool in Visual Studio Code. Get code
suggestions as you type in the editor, or use natural language chat to ask about
your code or start an editing session for implementing new feature and fixing
bugs.

#### [Continue](https://github.com/continuedev/continue)

Continue enables developers to create, share, and use custom AI code assistants
with our open-source
[VS Code](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
and [JetBrains](https://plugins.jetbrains.com/plugin/22707-continue-extension)
extensions and hub of models, rules, prompts, docs, and other building blocks。

#### [Windsurf Plugins](https://windsurf.com/plugins)

Windsurf Plugins bring AI-powered coding assistance to JetBrains, VS Code, and 40+ other editors. Features intelligent autocomplete, Cascade agent for multi-file editing, and support for 70+ programming languages. Trusted by 5.5M+ developers worldwide.

#### [Amazon Q Developer](https://aws.amazon.com/q/developer)

Amazon Q Developer is the most capable generative AI-powered assistant for software development. It provides real-time code suggestions, vulnerability scanning, and agentic capabilities that can autonomously perform tasks like implementing features, documenting code, testing, and refactoring. Available for JetBrains, VS Code, Visual Studio, Eclipse, and command line with 50 free agentic chat interactions per month.

#### [Superdesign.dev](https://www.superdesign.dev/)

The first open-source design agent that lives inside your IDE. Generate multiple UI mocks, components, and wireframes in parallel. Seamlessly integrates with Cursor, Windsurf, VS Code, and Claude Code. Features include product mock generation, UI component design, wireframing, and easy forking for design iterations.

Windsurf Plugins autocompletes your code with AI in all major IDEs. We
[launched](https://www.windsurf.com/blog/codeium-copilot-alternative-in-vim)
this implementation of the Windsurf plugin for Vim and Neovim to bring this
modern coding superpower to more developers. Check out our
[playground](https://www.windsurf.com/playground) if you want to quickly try out
Windsurf online.

#### [Roo Code](https://github.com/RooVetGit/Roo-Code)

Roo Code gives you a whole dev team of AI agents in your code editor. It's an AI-powered autonomous coding agent that lives in VS Code, capable of communicating in natural language, reading and writing files directly in your workspace, running terminal commands, automating browser actions, and integrating with any OpenAI-compatible or custom API/model. Features include multiple specialized modes (Code, Architect, Ask, Debug), custom modes for specialized tasks, smart tools for file operations and terminal commands, MCP (Model Context Protocol) integration for unlimited custom tools, and extensive customization options. With 18.4k+ stars, it's one of the most popular AI coding extensions available.

#### [Avante.nvim](https://github.com/yetone/avante.nvim)

Avante.nvim is a Neovim plugin designed to emulate the behavior of the Cursor AI IDE, providing AI-driven code suggestions and the ability to apply recommendations directly to source files. Features include AI-powered code assistance with natural language interaction, one-click application of AI suggestions, support for multiple AI providers (Claude, OpenAI, Gemini, etc.), Fast Apply functionality for instant code edits with 96-98% accuracy, RAG (Retrieval-Augmented Generation) service for enhanced context, web search integration, custom tools support, and comprehensive key bindings. With 15.5k+ stars, it's the most popular AI coding plugin for Neovim.

#### [Prompt Tower](https://github.com/backnotprop/prompt-tower)

Prompt Tower is a VS Code extension for context management with long-context LLMs, agents, and vibe coding. It instantly builds context for entire repositories, selected files, folders, and GitHub issues to generate structured AI-XML context with real-time token counting. Features include visual file selection with checkboxes, smart context packaging with project structure, context control with `.towerignore` files, GitHub issues integration, token intelligence for model limits, and one-click context copying. Perfect for developers using Gemini's 1M context, Cursor's agent, Claude Code, or any AI assistant.

#### [Augment Code](https://www.augmentcode.com/)

Augment Code is the most powerful AI software development platform backed by an industry-leading context engine. It provides autonomous software agents that can plan, build, and open PRs end-to-end, both locally and in the cloud. Features include cutting-edge context retrieval that understands codebases of any size, support for VS Code, JetBrains IDEs, Vim and Neovim, native integrations with essential development tools, terminal command execution with approval controls, MCP support for 100+ external tools, CLI and TUI interfaces, smart apply functionality for one-click code changes, enterprise-grade security and privacy, and leading performance on SWE-Bench Verified. Trusted by engineers at major companies worldwide.

### Web-based IDEs

> Create APPs directly in the browser.

#### [Replit](https://replit.com/)

Replit is a browser-based platform where you can effortlessly create and share
apps without installation or setup. The platform provides all the tools you must
create amazing applications from one browser tab—no installation required.
Replit includes AI coding tools, real-time collaboration, and project sharing to
give you a head start on your app creation journey.

#### [Bolt.new](https://bolt.new)

Bolt.new is an in-browser AI web development agent that leverages StackBlitz’s
WebContainers to allow for full stack application development. The application
presents users with a simple, chat-based environment in which one prompts an
agent to make code changes that are updated in real time in the WebContainers
dev environment. Bolt supports many of the most popular web languages and
frameworks, as well as integration with Netlify for deployment and hosting;
Supabase for database, auth, and file storage; and Expo for mobile application
development.

#### [Firebase Studio](https://studio.firebase.google.com)

Firebase Studio is an agentic cloud-based development environment that helps you
build and ship production-quality full-stack AI apps, including APIs, backends,
frontends, mobile, and more. Firebase Studio unifies Project IDX with
specialized AI agents and assistance from Gemini in Firebase to provide a
collaborative workspace accessible from anywhere, containing everything you need
to develop an application. You can import your existing projects or start
something new with templates supporting variety of languages and frameworks.

#### [Capacity](https://capacity.so/)

Capacity is an AI-powered platform that turns any idea into a working web app using agentic coding. Features true agentic coding with global codebase understanding, multi-file refactoring, 90% fewer errors, and adaptive pricing. Build 20x faster than traditional methods with full-stack Next.js, Tailwind CSS, and TypeScript applications ready for deployment.

#### [Command.new](https://chai.new)

Command.new (formerly chai.new) is a platform for vibe coding any AI agent. Turn prompts into production-ready agents with support for email agents, support agents, research agents, and more. Features a community hub with 36K+ developers sharing pre-built agents for various use cases including cold email writing, resume generation, social media management, and productivity automation.

#### [Create.xyz](https://www.create.xyz)

Create is a free-to-use AI app builder that turns your words into sites, tools, apps and products built with code. Add GPT-4o and 40+ integrations instantly. Build AI tools and automations without writing any code using latest AI models like Claude 3.5 Sonnet, GPT-4o, and Stable Diffusion.

#### [Tempo.new](https://www.tempo.new)

Tempo is where designers and developers collaborate on React apps 10x faster with AI. Features a drag-and-drop visual editor for editing React code, works with any existing React codebase, includes hundreds of components and templates, and offers GitHub integration. Backed by Y Combinator with plans from free to $4,000/month for agent-driven development.

#### [Softgen](https://softgen.ai)

Softgen is an AI web app builder that turns your ideas into stunning web applications with no coding required. Features AI-powered code generation, full-stack development with modern tech stack, built-in integrations for emails, payments, authentication, database, and cloud storage. Users report 800% productivity increase and can go from concept to revenue-generating product in days.

#### [HeyBoss](https://www.heyboss.xyz)

HeyBoss AI is the easiest no-code AI builder for sites and apps where everyone can vibe code. Create apps and websites by simply chatting with AI. Features include built-in database, AI app store, payment acceptance, visual editor, and SEO optimization. Free plan available with community support.

#### [Creatr](https://getcreatr.com)

Creatr is a deep build platform that goes beyond vibe coding to create real apps for real users. Features one-prompt development that asks the right questions and builds exactly what you meant in one go. Used by 1000+ teams and 40k+ happy builders to go from idea to fully-functional web apps in 12-14 hours with zero bugs and no errors.

#### [Rork](https://rork.app)

Rork builds complete, cross-platform mobile apps using AI and React Native. Create native mobile apps in minutes with full cross-platform compatibility, leveraging React Native for iOS and Android deployment.

#### [Napkins.dev](https://www.napkins.dev)

Napkins.dev turns your wireframes into working apps by uploading an image of your website design. Uses AI to build React + Tailwind applications from screenshots or design images, powered by Together AI and Llama 4.

#### [Rocket.new](https://www.rocket.new)

Rocket.new helps build web and mobile apps 10x faster without code. Create applications quickly using AI-powered development tools for both web and mobile platforms.

#### [Supabase](https://supabase.com)

Supabase is an open source Firebase alternative. Start your project with a
Postgres database, Authentication, instant APIs, Edge Functions, Realtime
subscriptions, Storage, and Vector embeddings.

#### [HeroUI Chat](https://heroui.chat/)

HeroUI Chat is an AI-powered web development platform that creates beautiful, responsive web applications using natural language. Built specifically for modern React and Next.js development, it generates production-ready code with HeroUI components, Tailwind CSS styling, and best practices. Features include instant app generation from text prompts, built-in HeroUI component library integration, automatic responsive design, real-time preview and editing, and seamless deployment options.

#### [Open Lovable](https://github.com/mendableai/open-lovable)

Open Lovable is an open-source AI-powered React app builder that lets you chat with AI to build modern web applications instantly. Created by the Firecrawl team, it provides a complete local development environment for AI-assisted app creation. Features include real-time AI chat interface for app building, React/Next.js code generation, integration with multiple AI providers (Anthropic, OpenAI, Gemini, Groq), sandboxed code execution with E2B, web scraping capabilities with Firecrawl, and full TypeScript support. Perfect for developers who want the power of Lovable.dev in an open-source, self-hosted solution.

#### [Lazy AI](https://getlazy.ai/)

Lazy AI is a prompt-to-app platform that enables users to create full-stack web applications and prototypes for various purposes, including SaaS apps, APIs, and internal tools. It leverages advanced AI models to facilitate the development process, making it accessible for product managers, developers, and marketers. Features include instant full-stack app generation from natural language prompts, support for complex SaaS applications and APIs, built-in database and authentication systems, deployment-ready code generation, and collaborative tools for teams.

#### [Phoenix.new](https://phoenix.new/)

Phoenix.new is the Remote AI Runtime for Phoenix that lets you describe your app and watch it take shape. Prototype quickly, experiment freely, and share instantly. Built on top of the Phoenix framework, it starts with a fully designed mockup and builds all the way to a working real-time app. Features include real-time Phoenix app building in minutes, fully designed mockup to working app workflow, dev server with shareable URL for showing off in-progress work, integration with Phoenix's strengths in clustering, pubsub, and presence, and ideal for building simple multiplayer games and collaborative apps. Phoenix's real-time capabilities pair well with LLM-generated code, making it fun to build interactive applications.

### Cloud-based Agents

> AI software engineers that work autonomously in the cloud.

#### [Devin](https://www.cognition-labs.com/introducing-devin)

Devin is the world's first fully autonomous AI software engineer developed by Cognition Labs that can plan, execute, and complete complex engineering tasks independently, from building and deploying applications to debugging code and training AI models. Devin operates in a sandboxed cloud environment with access to standard developer tools including a shell, code editor, and browser, allowing it to work just like a human engineer but with superhuman speed and accuracy. Key capabilities include autonomous planning that breaks down complex tasks into manageable steps, code generation that writes, tests, and debugs code across multiple languages, deployment that builds and deploys applications to production, learning that adapts and learns from new technologies and frameworks, and collaboration that works alongside human developers as a teammate.

#### [Cursor Background Agents](https://docs.cursor.com/en/background-agent)

Cursor Background Agents are asynchronous remote agents that run in isolated Ubuntu-based cloud environments and can edit and run code autonomously while you continue working on other tasks, providing a true background coding experience. These agents feature asynchronous operation that spawns agents working independently while you focus on other tasks, remote environment execution in isolated VMs with internet access and package installation capabilities, GitHub integration that automatically clones repos, works on separate branches, and pushes changes, environment customization via `.cursor/environment.json` with custom Docker setups, terminal management with persistent tmux sessions for running background processes, and privacy mode availability to ensure code isn't used for training. Background agents support Max Mode-compatible models and can be accessed via the sidebar or `Ctrl+E` shortcut, requiring GitHub read-write access and storing encrypted secrets for development environments.

#### [Replit Ghostwriter](https://replit.com/learn/intro-to-ghostwriter)

Ghostwriter is Replit's AI-powered coding assistant that serves as your partner in code. Features complete code completion, explain code functionality in plain English, transform and refactor code between languages and styles, and generate complete programs from simple prompts. Includes a 5-day beginner-friendly course to master AI-assisted programming.

#### [Jules](https://jules.google/)

Jules is Google's coding agent that does coding tasks you don't want to do, from bug fixing and version bumps to tests and feature building. It integrates directly with GitHub, allowing you to assign tasks by using the "jules" label in an issue or writing a detailed prompt. Jules fetches your repository, clones it to a Cloud VM, develops a plan utilizing the latest Gemini 3 Pro model, provides a diff of the changes for review, and creates a PR ready for approval and merging. With plans ranging from 15 tasks per day (Jules) to 300 tasks per day (Jules in Ultra), it scales with your workflow from quick fixes to fully async, multi-agent development.

#### [Factory](https://factory.ai/)

Factory is the only agent-native software development platform that works everywhere you do. Droids embed directly into your workflow - IDE, Web, CLI, Slack, Linear - allowing you to delegate tasks as they come to mind, wherever you are. Features include IDE integration for VS Code, JetBrains, Vim, and more without forcing a switch, web browser interface for instant task delegation, command line interface for scripting and parallelizing at massive scale for CI/CD, Slack/Teams integration for incident triage and bug fixes, and project manager integration that automatically triggers agents from issue assignment. Factory is designed for modern enterprise teams with industry-grade security, vendor agnostic architecture, and full integration across your development stack.

#### [Ona](https://ona.com/)

Ona is the AI software engineer you can rely on, working with and for your teams across the entire development lifecycle. It automatically sets up with your code, secrets, and policies, providing enterprise-grade AI development capabilities. Features include Ona Agents for keeping momentum across any device with your personal team of professional software engineering agents, Ona Environments with API-first, sandboxed development environments with full OS-level isolation, Ona Guardrails for fine-grained organizational permissions and policies with detailed audit trails, seamless integration with VS Code Web, desktop IDEs, and mobile devices, enterprise-grade integrations with GitHub, GitLab, MongoDB, AWS, Redis, and more, and complete compliance with GDPR, SOC2 certification, and Fortune 500 trust. Ona is deployed across America's biggest banks and Europe's leading pharmaceutical companies.

### Task Management

> AI-powered project management tools for breaking down complex development tasks.

#### [Boomerang Tasks](https://github.com/RooCodeInc/Roo-Code)

Boomerang Tasks is Roo Code's built-in orchestration system that breaks complex projects into manageable subtasks using specialized AI modes. It features an Orchestrator mode that automatically delegates work to appropriate specialized modes (Code, Architect, Debug), maintains isolated contexts for each subtask, and provides seamless workflow coordination. Each subtask runs independently with its own conversation history, preventing context overload while enabling complex multi-step development workflows.

#### [Taskmaster AI](https://github.com/eyaltoledano/claude-task-master)

Taskmaster AI is a free, open-source project management system that acts as a PM for your AI agent. It breaks down complex projects into manageable tasks that AI can complete in single shots, eliminating context overload and preventing good code from being broken. Features include intelligent task decomposition, progress tracking, and seamless integration with existing AI coding workflows while keeping your API keys and remaining completely free to use.

#### [Mantra](https://mantra.gonewx.com)

**[Mantra](https://mantra.gonewx.com)** - AI coding session time machine. Save, restore, and time-travel through your Claude Code, Cursor, and Windsurf sessions. Never lose context again. Mantra automatically captures AI coding sessions as navigable timelines, letting you replay and restore any past state, recover from context compaction events, and switch between parallel development branches. Desktop app for macOS, Windows, and Linux.

### Vibe Coding Community

> Create APPs with AI and share with the community.

#### [v0](https://v0.dev/)

v0 is a web-based platform provided by Vercel that allows users to quickly
build, prototype, and share web projects. It provides a variety of project
templates and examples, supports modern web development frameworks, and
integrates with other services. The platform is designed to be user-friendly and
encourages community contributions and collaboration.

#### [Lovable](https://lovable.dev/)

Lovable is an AI-powered platform that enables users of any skill level to
create full-stack web applications without requiring coding expertise by simply
describing what they want in plain English. Instead of hiring developers, users
can generate web apps or websites instantly. - taking you from idea to app as
fast as possible.

#### [YouWare](https://www.youware.com/)

YouWare is an innovative coding community specifically designed for AI creators.
It offers a platform where users can create, upload, and share their code
projects. Users also have the ability to remix existing projects, building on
the work of others to enhance collaboration and creativity.

#### [Trickle](https://trickle.so/)

Trickle is an AI-powered platform that transforms your ideas into production-ready web applications through natural language. Simply describe what you want to build, and Trickle generates complete full-stack applications with modern frameworks, responsive design, and deployment-ready code. Features include instant app generation from text prompts, support for complex multi-page applications, built-in database integration, automatic responsive design, and one-click deployment to the cloud.

### Mobile-first tools

> Create Apps directly on your phone

#### [vibecode](https://www.vibecodeapp.com)

Vibecode is the mobile app that builds mobile apps. You can simply download
Vibecode from the App Store, enter your idea, and within minutes you'll have
your fully native iOS app running on your phone. You can then share this app
with your friends in 1 click, and they can use the app without downloading
anything.

## Development Standards

> Open standards and formats for building interoperable AI coding agents and applications.

### [AGENTS.md](https://agents.md/)

AGENTS.md is a simple, open format for guiding coding agents, used by over 20k open-source projects. Think of AGENTS.md as a **README for agents**: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project. It complements README.md by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren't relevant to human contributors. AGENTS.md works across many agents including OpenAI Codex, Jules from Google, Factory, Aider, Kilo Code, Phoenix, Semgrep, GitHub Copilot, Ona, UiPath, Amp, Cursor, Roo Code, Gemini CLI, OpenCode, Zed, Warp, VS Code, and Devin. Features include project overview sections, build and test commands, code style guidelines, testing instructions, security considerations, and support for nested AGENTS.md files in monorepos where agents automatically read the nearest file in the directory tree. AGENTS.md is just standard Markdown with no required fields, allowing you to use any headings you like.

### [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

The Model Context Protocol (MCP) is an open-source standard for connecting AI applications to external systems. Think of MCP like a USB-C port for AI applications—it provides a standardized way to connect AI applications to data sources (e.g. local files, databases), tools (e.g. search engines, calculators) and workflows (e.g. specialized prompts). Using MCP, AI applications like Claude or ChatGPT can access key information and perform tasks. MCP enables agents to access Google Calendar and Notion for personalized assistance, Claude Code can generate web apps using Figma designs, enterprise chatbots can connect to multiple databases for data analysis, and AI models can create 3D designs and print them using 3D printers. The protocol benefits developers by reducing development time and complexity when building or integrating with AI applications, provides AI applications access to an ecosystem of data sources and tools, and results in more capable AI applications that can access user data and take actions when necessary. MCP is designed to work across different platforms and AI applications, creating a universal foundation for AI integration.

### [Agent Communication Protocol (ACP)](https://agentcommunicationprotocol.dev/)

The Agent Communication Protocol (ACP) is an open protocol for agent interoperability that solves the growing challenge of connecting AI agents, applications, and humans. Developed as an open standard under the Linux Foundation, ACP enables agents to communicate through a standardized RESTful API that supports all forms of modality, synchronous and asynchronous communication, streaming interactions, both stateful and stateless operation patterns, online and offline agent discovery, and long running tasks. The protocol remains agnostic to internal implementations, requiring only minimal specifications for compatibility, whether your agent is built with BeeAI framework, LangChain, CrewAI, or custom code. Key features include REST-based communication using simple, well-defined REST endpoints, support for all message types using MimeTypes for content identification, no SDK required (but available for Python and TypeScript), offline discovery by embedding metadata in distribution packages, and async-first design with sync support. ACP addresses integration barriers, duplicated effort, scalability challenges, and inconsistent developer experience by providing a shared communication standard that works across any technology stack. Use cases include flexible agent replacement, multi-agent collaboration, cross-platform integration, and inter-company partnerships for secure agent collaboration between organizations.

### [Claude Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

Claude Agent Skills are modular capabilities that extend Claude's functionality. Each Skill packages instructions, metadata, and optional resources (scripts, templates) that Claude uses automatically when relevant. Skills are reusable, filesystem-based resources that provide Claude with domain-specific expertise: workflows, context, and best practices that transform general-purpose agents into specialists. Unlike prompts (conversation-level instructions for one-off tasks), Skills load on-demand and eliminate the need to repeatedly provide the same guidance across multiple conversations. Key benefits include specializing Claude for domain-specific tasks, reducing repetition by creating once and using automatically, and composing capabilities by combining Skills to build complex workflows. Skills can include project-specific context, workflow instructions, tool usage guidelines, and structured data that Claude references automatically. Anthropic provides pre-built Agent Skills for common document formats, and developers can create custom Skills tailored to their specific needs. Skills work seamlessly with Claude Code, Claude API, and the Agent SDK, providing a consistent way to extend Claude's capabilities across different interfaces.

## MCP Servers

> Model Context Protocol (MCP) servers that extend AI capabilities with external
> data and tools.

### MCP Server Hub

> Discover and explore MCP servers from various platforms and communities.

#### [Glama MCP Servers](https://glama.ai/mcp/servers)

Glama provides a comprehensive collection of production-ready MCP servers that
extend AI capabilities through file access, database connections, API
integrations, and other contextual services. The platform features over 7,700
servers across various categories including Remote, Python, TypeScript,
Developer Tools, Databases, RAG Systems, and more. Each server is rated for
security, license, and quality, making it easy to find reliable MCP solutions
for your AI applications.

#### [ModelScope MCP](https://modelscope.cn/mcp)

ModelScope offers a curated selection of MCP servers designed to enhance AI
model capabilities with specialized tools and integrations. The platform
provides access to various MCP servers that can extend the functionality of AI
assistants and applications through standardized protocols.

### [GitHub MCP Server](https://github.com/github/github-mcp-server)

GitHub's official MCP server that provides comprehensive access to GitHub
repositories, issues, pull requests, actions, code security, and more. Features
include repository management, issue tracking, pull request operations, workflow
automation, and Copilot coding agent integration. Supports both GitHub.com and
GitHub Enterprise Server with configurable toolsets and read-only mode.

### [ArXiv MCP Server](https://github.com/blazickjp/arxiv-mcp-server)

A specialized MCP server for searching and analyzing arXiv papers, providing AI
assistants with direct access to academic research. Features include paper
search with date and category filters, paper download and storage, content
reading, and specialized research prompts for deep paper analysis. Includes
local storage for faster access and comprehensive paper analysis workflows.

### [Zotero MCP](https://github.com/54yyyu/zotero-mcp)

A powerful MCP server that seamlessly connects your Zotero research library with
Claude and other AI assistants. Features include AI-powered semantic search with
vector-based similarity matching, comprehensive library search, PDF annotation
extraction, metadata retrieval, and BibTeX export. Supports both local Zotero
API and web API with configurable embedding models (OpenAI, Gemini, or default).

### [Notion MCP Server](https://github.com/makenotion/notion-mcp-server)

The official Notion MCP server from MakeNotion that provides comprehensive access to Notion workspaces through the Model Context Protocol. Features include seamless integration with Notion databases, pages, and blocks, OAuth-based authentication for easy setup, optimized token consumption for AI agents, support for both STDIO and Streamable HTTP transport modes, Docker support for containerized deployments, and comprehensive CRUD operations for Notion content. Includes tools for searching, creating, updating, and managing Notion pages, databases, comments, and more with built-in security controls and read-only integration options.

## Agents

> Development frameworks and SDKs for building AI agents and autonomous coding assistants.

### Agent SDKs

> Software development kits for building AI agents and integrating with AI coding assistants.

#### [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-python)

Anthropic's official Python SDK for building AI agents with Claude Code capabilities. Features include programmatic access to Claude Code through both simple `query()` function and advanced `ClaudeSDKClient` for bidirectional conversations, custom tools as in-process MCP servers that run directly within your Python application, hooks for deterministic processing and automated feedback, support for streaming responses, and comprehensive error handling. The SDK eliminates subprocess management overhead and provides better performance with direct Python function calls, making it ideal for building production-ready AI agent applications.

#### [Google ADK](https://github.com/google/adk-python)

Google's Agent Development Kit (ADK) for Python that helps developers build and manage AI agents. Provides comprehensive tools and frameworks for creating intelligent agents with Google's AI models, supporting various agent architectures and deployment scenarios.

#### [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)

OpenAI's lightweight Python SDK for building intelligent agent applications powered by large language models. The SDK provides essential components with minimal abstraction, making it easy to create agentic AI systems. Features include Agent instances configured with instructions and tools for executing specific tasks, Handoffs that allow agents to delegate tasks to other agents for multi-agent collaboration, Guardrails for input and output validation to ensure system safety and reliability, Session management that automatically maintains conversation history across multiple runs with persistent storage support (e.g., SQLite), Tools that convert any Python function into callable tools for agents, and built-in Tracing functionality for visualizing, debugging, and monitoring agent workflows. The SDK is designed for developers who want a lightweight, easy-to-use framework for building multi-agent systems, conversational agents, and other agentic AI applications.

#### [Vercel AI SDK](https://github.com/vercel/ai)

Vercel's unified AI SDK that provides a consistent interface for working with multiple AI providers including OpenAI, Anthropic, and more. Features include text generation, embeddings, function calling, streaming responses, and React hooks for building AI-powered applications. Supports both server-side and client-side usage with TypeScript-first design and comprehensive framework integrations.

#### [Kosong](https://github.com/MoonshotAI/kosong)

MoonshotAI's agent development framework (Kosong means "empty" or "void" in Malay and Indonesian, representing a flexible and lightweight foundation) for building sophisticated AI agent systems. The framework provides comprehensive tools and abstractions for creating, managing, and deploying AI agents with support for various agent architectures and integration patterns. Features include flexible agent composition that allows developers to build complex multi-agent systems, seamless integration with MoonshotAI's models and services, extensible architecture supporting custom agent behaviors and workflows, deployment tools for production-ready agent applications, and comprehensive abstractions that simplify agent development while maintaining flexibility. Designed for developers building enterprise-grade AI agent solutions with MoonshotAI's technology stack.

## Supporting Tools

> Essential tools that enhance your vibe coding workflow.

### [Vercel](https://vercel.com)

Vercel is a cloud platform for static sites and Serverless Functions that fits
perfectly with vibe coding. It offers seamless deployment, automatic HTTPS,
continuous deployment from Git, and preview deployments for all your changes.
Perfect for deploying your AI-generated applications quickly and efficiently.

### [Netlify](https://www.netlify.com)

Netlify is a platform that automates your code to create high-performant,
easily-maintainable sites and web applications. It provides continuous
deployment from Git, serverless functions, and edge functions. Ideal for
deploying and hosting your vibe-coded web applications.

### [Railway](https://railway.app)

Railway is a modern platform that makes it easy to deploy your applications. It
provides a simple way to deploy your applications with automatic deployments,
preview environments, and easy scaling. Perfect for deploying your vibe-coded
applications with minimal configuration.

### [Render](https://render.com)

Render is a unified cloud platform that makes it easy to build and run all your apps and websites. It offers built-in preview environments, autoscaling, private networking, and infrastructure as code - no Kubernetes required. Features include automatic scaling for 100× burst traffic, point-in-time recovery for Postgres databases, zero-downtime deploys, and enterprise-grade security with SOC 2 Type 2, HIPAA, ISO 27001, and GDPR compliance. Render supports static sites, web services, background workers, cron jobs, and managed PostgreSQL databases, making it perfect for deploying vibe-coded applications from prototype to production.

### [Semgrep](https://semgrep.dev/)

Semgrep is a fast, open-source static analysis tool for finding bugs and enforcing code standards. While not exclusively an AI tool, Semgrep can be integrated into vibe coding workflows to ensure AI-generated code meets security and quality standards. Features include pattern-based code analysis that can catch bugs and security issues in AI-generated code, support for 30+ languages including Python, JavaScript, TypeScript, and more, CI/CD integration for automated code review, custom rules for enforcing coding standards, and free tier for open-source projects. Semgrep helps maintain code quality when using AI-assisted development by catching issues before they reach production.

### [Warp](https://www.warp.dev/)

Warp is a modern, Rust-based terminal with AI-powered features that enhance the developer workflow. It integrates AI assistance directly into the terminal experience, making it easier to work with AI coding agents and tools. Features include AI command suggestions and completion, project-scoped rules for consistent AI behavior across teams, knowledge base integration for team collaboration, modern UI with blocks instead of traditional scrollback, workflow sharing and collaboration, and seamless integration with existing tools. Warp enhances the vibe coding experience by providing an intelligent terminal interface that works alongside AI coding agents.

### [UiPath Python](https://uipath.github.io/uipath-python/)

UiPath Python SDK allows developers to build custom automations and agents using Python, extending the capabilities of the UiPath automation platform. While primarily an RPA tool, it can be used to create AI-powered automation workflows for software development tasks. Features include Python SDK for interacting with UiPath robots and orchestrators, automation of repetitive development tasks, integration with AI models for intelligent automation, workflow orchestration for complex development processes, and enterprise-grade automation capabilities. UiPath Python enables developers to automate coding workflows and integrate AI agents into enterprise automation pipelines.

## Vibe Coding Projects

> Projects created through vibe coding.

### [yaal](https://github.com/0xWelt/yaal)

Yet Another Awesome List (YAAL) - a meta awesome list generator that creates curated collections of awesome lists. Built with Next.js, TypeScript, and Tailwind CSS, yaal automatically parses README files to generate beautiful, organized awesome list websites. Features automated README parsing, GitHub Actions CI/CD integration, GitHub Pages deployment, and a modern web interface for browsing and discovering awesome lists across various categories including AI, development tools, and learning resources.

### [Awesome-Vibe-Coding](https://github.com/0xWelt/Awesome-Vibe-Coding)

This very project - a comprehensive directory of vibe coding tools and resources built entirely through vibe coding practices using Next.js 14 with TypeScript, Tailwind CSS, automated README parsing, GitHub Actions CI/CD and GitHub Pages deployment, covering Development Toolkits, Web-based IDEs, Cloud Agents, Community Tools, MCP Servers, Deployment Platforms, Vibe Coding Projects and Learning Resources.

### [Awesome-LLM-RL](https://github.com/0xWelt/Awesome-LLM-RL)

A curated list of open-source projects, tools, and learning resources about Reinforcement Learning with Large Language Models (LLMs). Features comprehensive coverage of RLHF (Reinforcement Learning from Human Feedback) frameworks, training infrastructure, evaluation tools, and research papers. Includes popular frameworks like OpenRLHF built on Ray, vLLM, ZeRO-3, and HuggingFace Transformers, as well as distributed training solutions like DeepSpeed and PyTorch FSDP for training billion-parameter models.

### [TradeMasterOnline](https://github.com/0xWelt/TradeMasterOnline)

A multi-agent trading simulation game built almost entirely using Vibe Coding and Kimi K2. Provides an interactive trading environment for users to experience and research trading behaviors in multi-agent systems. Features realistic trading mechanics, agent-based simulation, and comprehensive game mechanics that demonstrate the power of vibe coding in building complex interactive applications.

### [VibeRL](https://github.com/0xWelt/VibeRL)

A modern reinforcement learning framework built through vibe coding with Kimi K2 and Claude Code. Features REINFORCE, PPO, and DQN algorithms with Gymnasium integration, async vector environments for parallel training, comprehensive testing with 50+ unit tests, and modern Python tooling including UV package management, Ruff linting, and Weights & Biases integration. Includes Snake Game environment and supports TensorBoard visualization for educational RL research.

### [taxi_calculator](https://github.com/0xWelt/taxi_calculator)

A Japanese taxi fare calculator web application created entirely with Cursor AI using vibe coding principles. Features interactive OpenStreetMap integration, real-time route planning with OSRM, intelligent location search supporting Chinese/Japanese/English, and accurate fare calculations based on Tokyo taxi rates (410 yen base + 80 yen per 237m + night surcharge). Built with Python Flask backend and responsive frontend, deployed on Vercel with one-click setup.

## Learning Resources

> Essential courses and educational resources to master vibe coding and AI-assisted development.

### DeepLearning.AI

> The premier AI education platform founded by Andrew Ng, offering comprehensive courses that bridge the gap between AI theory and practical application.

#### [Vibe Coding 101 with Replit](https://learn.deeplearning.ai/courses/vibe-coding-101-with-replit)

Master the art of vibe coding with this hands-on course created in partnership with Replit. Learn how to leverage AI coding agents to build and deploy web applications without traditional programming barriers. This 1-hour intensive covers agentic code development principles, practical SEO analyzer creation, and voting app implementation using Replit's cloud environment.

#### [MCP: Build Rich Context AI Apps with Anthropic](https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic)

Dive deep into the Model Context Protocol (MCP) with this comprehensive 1-hour 38-minute course developed with Anthropic. Learn to build standardized AI applications that seamlessly connect to external tools and data sources. Master MCP server creation, client implementation, and deployment strategies for building rich-context AI applications with minimal integration overhead.

## Repo Status

![Alt](https://repobeats.axiom.co/api/embed/4b9660ab5b37e6ebaa2f2e036eea18e08787410d.svg "Repobeats analytics image")

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/0xWelt/Awesome-Vibe-Coding/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=0xWelt/Awesome-Vibe-Coding" />
</a>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=0xWelt/Awesome-Vibe-Coding&type=Date)](https://star-history.com/#0xWelt/Awesome-Vibe-Coding&Date)

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a
[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[OSS Icon]: https://jaywcjlove.github.io/sb/ico/min-oss.svg 'Open Source Software'
[Freeware Icon]: https://jaywcjlove.github.io/sb/ico/min-free.svg 'Freeware'
[app-store Icon]: https://jaywcjlove.github.io/sb/ico/min-app-store.svg 'App Store Software'
[awesome-list Icon]: https://jaywcjlove.github.io/sb/ico/min-awesome.svg 'Awesome List'
