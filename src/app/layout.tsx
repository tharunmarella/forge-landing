import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Forge CLI - Terminal-first AI Coding Agent",
  description: "AI coding agent for your terminal. Auto documentation fetching, smart model routing, LSP integration, and semantic code search. Works with any LLM provider. Your code stays local.",
  keywords: [
    "ai coding agent",
    "terminal ai",
    "cli coding assistant", 
    "llm coding",
    "code generation",
    "agentic coding",
    "cursor alternative",
    "aider alternative",
    "claude cli",
    "gpt cli",
    "mcp server",
    "lsp integration"
  ],
  authors: [{ name: "Forge Team" }],
  creator: "Forge Team",
  metadataBase: new URL("https://forge.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forge.dev",
    title: "Forge CLI - Terminal-first AI Coding Agent",
    description: "AI coding agent for your terminal. Auto documentation fetching, smart model routing, and semantic code search. Your code stays local.",
    siteName: "Forge CLI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge CLI - Terminal-first AI Coding Agent",
    description: "AI coding agent for your terminal. Works with any LLM provider. Your code stays local.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ff8c00" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={mono.className}>{children}</body>
    </html>
  );
}
