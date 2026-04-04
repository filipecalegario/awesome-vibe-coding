#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

// Initialize markdown-it with options
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// Read the README.md
const readmeContent = fs.readFileSync('README.md', 'utf-8');

// Convert markdown to HTML
const htmlContent = md.render(readmeContent);

// Create the HTML template
const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Vibe Coding - Curated List of AI Coding Tools</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary-color: #6366f1;
            --secondary-color: #8b5cf6;
            --text-color: #1f2937;
            --light-bg: #f9fafb;
            --border-color: #e5e7eb;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .navbar {
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .navbar-content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .navbar h1 {
            font-size: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .navbar-links a {
            margin-left: 2rem;
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .navbar-links a:hover {
            color: var(--primary-color);
        }
        
        .container {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 0 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        
        .content {
            padding: 3rem;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 2rem 0 1rem 0;
            color: var(--text-color);
        }
        
        h1 {
            font-size: 2.5rem;
            border-bottom: 3px solid var(--primary-color);
            padding-bottom: 1rem;
        }
        
        h2 {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-top: 2.5rem;
        }
        
        h3 {
            font-size: 1.3rem;
            color: var(--secondary-color);
        }
        
        p {
            margin: 1rem 0;
            line-height: 1.8;
        }
        
        ul, ol {
            margin-left: 2rem;
            margin: 1rem 0 1rem 2rem;
        }
        
        li {
            margin: 0.5rem 0;
        }
        
        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        a:hover {
            color: var(--secondary-color);
            text-decoration: underline;
        }
        
        code {
            background: var(--light-bg);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
            color: #d63384;
        }
        
        pre {
            background: var(--light-bg);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
            border-left: 4px solid var(--primary-color);
        }
        
        .badge-awesome {
            display: inline-block;
            margin-left: 1rem;
        }
        
        .badge-awesome img {
            height: 20px;
            vertical-align: middle;
        }
        
        .toc {
            background: var(--light-bg);
            padding: 2rem;
            border-radius: 8px;
            margin: 2rem 0;
            border-left: 4px solid var(--primary-color);
        }
        
        .toc ul {
            list-style: none;
            margin-left: 0;
        }
        
        .toc li {
            margin: 0.5rem 0;
            margin-left: 1rem;
        }
        
        .toc a {
            color: var(--primary-color);
        }
        
        .tools-section {
            margin: 2rem 0;
        }
        
        .tool-item {
            padding: 1rem;
            margin: 0.5rem 0;
            background: var(--light-bg);
            border-radius: 6px;
            border-left: 3px solid var(--primary-color);
            transition: all 0.3s;
        }
        
        .tool-item:hover {
            background: #f3f4f6;
            transform: translateX(4px);
        }
        
        .tool-item strong {
            color: var(--primary-color);
        }
        
        .footer {
            background: var(--text-color);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
        }
        
        .footer a {
            color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
            .navbar-content {
                flex-direction: column;
                gap: 1rem;
            }
            
            .navbar-links {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .navbar-links a {
                margin-left: 0;
            }
            
            .container {
                margin: 1rem;
                border-radius: 8px;
            }
            
            .content {
                padding: 1.5rem;
            }
            
            h1 {
                font-size: 1.8rem;
            }
            
            h2 {
                font-size: 1.3rem;
            }
        }
        
        /* Highlight fire emoji tools */
        .fire-tool {
            color: #ff6b6b;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-content">
            <h1>🔥 Awesome Vibe Coding</h1>
            <div class="navbar-links">
                <a href="#about">About</a>
                <a href="https://github.com/filipecalegario/awesome-vibe-coding">GitHub</a>
                <a href="https://github.com/filipecalegario/awesome-vibe-coding/blob/main/contributing.md">Contribute</a>
            </div>
        </div>
    </nav>
    
    <div class="container">
        <div class="content">
            ${htmlContent}
        </div>
    </div>
    
    <div class="footer">
        <p>Made with ❤️ by the awesome vibe coding community</p>
        <p><small>&copy; 2024-2026 All rights reserved | <a href="https://github.com/filipecalegario/awesome-vibe-coding">View on GitHub</a></small></p>
    </div>
</body>
</html>`;

// Ensure dist directory exists
const distDir = path.join(__dirname, '../../dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Write the HTML file
fs.writeFileSync(path.join(distDir, 'index.html'), template);

console.log('✅ Build complete! Generated dist/index.html');
