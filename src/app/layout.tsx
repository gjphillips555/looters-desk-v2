import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Looters Desk",
  description:
    "Shop ops for Looters Computas — live TradeMe data only (member 9233545). Zero hallucination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-bg text-[#f4ece3]">
        <div className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                L
              </div>
              <div>
                <h1 className="font-display text-xl tracking-wide text-white">
                  LOOTERS DESK
                </h1>
                <p className="text-xs text-muted">
                  Shop ops for Looters Computas · Member #9233545
                </p>
              </div>
            </div>
            <Nav />
          </div>
        </div>
        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
        <footer className="mt-12 border-t border-border py-6 text-center text-xs text-faint">
          looterscomputas.online · TradeMe LootersComputas · Upper Hutt · Live
          data only
        </footer>
      </body>
    </html>
  );
}
