import Link from "next/link";
import { Package, Printer, ExternalLink } from "lucide-react";
import { MEMBER_ID, SEARCH_URL } from "@/lib/trademe";

export default function DeskPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl tracking-wide">Desk</h2>
        <p className="mt-1 text-muted">
          Single source of truth: TradeMe member{" "}
          <span className="font-mono text-primary">#{MEMBER_ID}</span>. No
          invented listings or descriptions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/trademe"
          className="group rounded-xl border border-border bg-surface p-5 transition hover:border-primary hover:bg-raised"
        >
          <Package className="mb-3 h-8 w-8 text-primary" />
          <h3 className="font-display text-lg tracking-wide">TradeMe</h3>
          <p className="mt-1 text-sm text-muted">
            Live listings pulled from member #{MEMBER_ID}. Grounded in real
            data only.
          </p>
        </Link>

        <Link
          href="/printables"
          className="group rounded-xl border border-border bg-surface p-5 transition hover:border-primary hover:bg-raised"
        >
          <Printer className="mb-3 h-8 w-8 text-primary" />
          <h3 className="font-display text-lg tracking-wide">Printables</h3>
          <p className="mt-1 text-sm text-muted">
            Logo sheets and ready-to-print assets (A4 logo grid PDF).
          </p>
        </Link>

        <a
          href={SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-border bg-surface p-5 transition hover:border-primary hover:bg-raised"
        >
          <ExternalLink className="mb-3 h-8 w-8 text-primary" />
          <h3 className="font-display text-lg tracking-wide">
            Open on TradeMe
          </h3>
          <p className="mt-1 text-sm text-muted">
            Official member listings page — always the ground truth.
          </p>
        </a>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-display text-lg tracking-wide">Rules</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            • All listings come from TradeMe member{" "}
            <strong className="text-white">9233545</strong> only.
          </li>
          <li>
            • Descriptions and answers must be based on the live listing text —
            never invented.
          </li>
          <li>
            • If a field is missing on TradeMe, leave it blank or mark “not on
            TradeMe”.
          </li>
          <li>
            • Prefer the official API with your own OAuth keys for production
            reliability.
          </li>
        </ul>
      </div>
    </div>
  );
}
