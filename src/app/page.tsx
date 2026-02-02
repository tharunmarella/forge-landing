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
      <div className="mt-16 text-[#666] text-xs sm:text-sm space-y-1 text-left">
        <p><span className="text-[#ff8c00]">→</span> auto documentation fetching</p>
        <p><span className="text-[#ff8c00]">→</span> smart model routing</p>
        <p><span className="text-[#ff8c00]">→</span> async git checkpoints</p>
        <p><span className="text-[#ff8c00]">→</span> works with any llm provider</p>
        <p><span className="text-[#ff8c00]">→</span> mcp server support</p>
        <p><span className="text-[#ff8c00]">→</span> agentic code editing</p>
        <p><span className="text-[#ff8c00]">→</span> lsp integration</p>
        <p><span className="text-[#ff8c00]">→</span> semantic code search</p>
        <p><span className="text-[#ff8c00]">→</span> browser automation</p>
      </div>
    </main>
  );
}
