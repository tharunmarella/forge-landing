"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install -g codeforge-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-mono flex flex-col items-center justify-center px-4">
      {/* ASCII Art Logo */}
      <pre className="text-[#ff8c00] text-[10px] sm:text-xs md:text-sm leading-tight select-none">
{` ███████╗ ██████╗ ██████╗  ██████╗ ███████╗         ⠀⢱⣆⠀
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝        ⠀⠈⣿⣷⡀
 █████╗  ██║   ██║██████╔╝██║  ███╗█████╗         ⢀⣠⣿⣿⣿⣧
 ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝        ⢰⣿⣿⡟⢸⣿⣿
 ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗      ⢸⣿⣿⡏⠀⣾⣿⡿
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝  cli ⠈⠛⠿⠃⠀⠈⠛⠃`}
      </pre>

      {/* Tagline */}
      <p className="text-[#888] text-sm mt-6 mb-8 text-center max-w-md leading-relaxed">
        terminal-first AI coding agent<br />
        <span className="text-[#555]">high-performance context assembly · your code stays local</span>
      </p>

      {/* Install Command */}
      <div
        onClick={copyCommand}
        className="group flex items-center gap-3 bg-[#1a1a1a] border border-[#333] rounded px-4 py-3 cursor-pointer hover:border-[#ff8c00] transition-colors"
      >
        <span className="text-[#666]">$</span>
        <code className="text-[#d4d4d4]">npm install -g codeforge-cli</code>
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-[#666] group-hover:text-[#ff8c00] transition-colors" />
        )}
      </div>
      <p className="text-[#555] text-xs mt-3">
        then just run <code className="text-[#ff8c00]">forge</code> to get started
      </p>

      {/* Features as terminal output */}
      <div className="mt-12 text-[#666] text-xs sm:text-sm space-y-2 text-left max-w-md">
        <p><span className="text-[#ff8c00]">→</span> auto documentation fetching <span className="text-[#444]">— knows react, supabase, stripe docs</span></p>
        <p><span className="text-[#ff8c00]">→</span> smart model routing <span className="text-[#444]">— fast model for tools, flagship for reasoning</span></p>
        <p><span className="text-[#ff8c00]">→</span> lsp integration <span className="text-[#444]">— real type errors, not guessing</span></p>
        <p><span className="text-[#ff8c00]">→</span> semantic code search <span className="text-[#444]">— finds code by meaning, not text</span></p>
        <p><span className="text-[#ff8c00]">→</span> mcp server support <span className="text-[#444]">— extend with external tools</span></p>
        <p><span className="text-[#ff8c00]">→</span> works with any llm <span className="text-[#444]">— openai, anthropic, ollama, etc</span></p>
        <p><span className="text-[#ff8c00]">→</span> async git checkpoints <span className="text-[#444]">— undo changes without blocking</span></p>
      </div>

      {/* Comparison Table */}
      <div className="mt-16 w-full max-w-md text-xs sm:text-sm">
        <div className="grid grid-cols-4 gap-2 mb-2 text-[#666] border-b border-[#333] pb-2">
          <div className="font-bold text-[#d4d4d4]">FEATURE</div>
          <div className="text-center font-bold text-[#ff8c00]">FORGE</div>
          <div className="text-center">CURSOR</div>
          <div className="text-center">AIDER</div>
        </div>
        
        <div className="space-y-2 text-[#888]">
          <div className="grid grid-cols-4 gap-2">
            <div>Terminal</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#444]">❌</div>
            <div className="text-center text-[#666]">✅</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>Auto Docs</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#444]">❌</div>
            <div className="text-center text-[#444]">❌</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>LSP Integ.</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#666]">✅</div>
            <div className="text-center text-[#444]">❌</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>Semantic Search</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#666]">✅</div>
            <div className="text-center text-[#444]">❌</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>Local Code</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#444]">❌</div>
            <div className="text-center text-[#666]">✅</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>No Sub.</div>
            <div className="text-center text-[#d4d4d4]">✅</div>
            <div className="text-center text-[#444]">❌</div>
            <div className="text-center text-[#666]">✅</div>
          </div>
        </div>
      </div>
    </main>
  );
}
