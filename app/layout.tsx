import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { ScrollProgress } from "@/components/shared/ScrollProgress";

export const metadata: Metadata = {
  title: "zed-forge | Web Development Studio in Lusaka, Zambia",
  description:
    "zed-forge builds modern websites, web applications, and SaaS platforms for businesses in Lusaka, Zambia. Get a quote today.",
  keywords: ["web developer Lusaka", "website design Zambia", "zed-forge", "web development Lusaka"],
  openGraph: {
    title: "zed-forge — Web Development Studio in Lusaka, Zambia",
    description: "Modern websites and web apps for Lusaka businesses.",
    url: "https://zed-forge.vercel.app",
    siteName: "zed-forge",
    images: [{ url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('ff-theme') || 'dark';
                document.documentElement.classList.toggle('dark', t === 'dark');
                document.documentElement.classList.toggle('light', t === 'light');
                document.documentElement.setAttribute('data-theme', t);
              })();
            `
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-body antialiased`}>
        <a
          href="#main"
          className="focus-ring sr-only z-[100] rounded-md bg-ff-blue px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
