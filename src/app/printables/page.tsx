import { Download, FileText } from "lucide-react";

export default function PrintablesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl tracking-wide">Printables</h2>
        <p className="mt-1 text-muted">
          Ready-to-print assets for the shop. Logos only — no generated
          content.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-border bg-raised">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl tracking-wide">
              Looters Computas Logo Sheet (A4)
            </h3>
            <p className="mt-1 text-sm text-muted">
              Grid of LOOTERS COMPUTAS logos with website URL. Black outline on
              white — perfect for stickers, letterhead, packing slips, or
              stamps.
            </p>
            <p className="mt-2 font-mono text-xs text-faint">
              File: looters-logos-a4.pdf · A4 · 1 page
            </p>
            <a
              href="/looters-logos-a4.pdf"
              download="LootersComputers_logos_A4.pdf"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-fg hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-surface/50 p-6 text-center text-sm text-muted">
        More printables (packing slips, thank-you cards, letterhead) can be
        added here later. Only real assets — nothing generated on the fly.
      </div>
    </div>
  );
}
