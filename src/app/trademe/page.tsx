import { fetchLiveListings, MEMBER_ID, SEARCH_URL } from "@/lib/trademe";
import { ExternalLink, RefreshCw } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function TradeMePage() {
  const { listings, source, fetchedAt, error } = await fetchLiveListings();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl tracking-wide">TradeMe</h2>
          <p className="mt-1 text-sm text-muted">
            Live listings for member #{MEMBER_ID} · fetched{" "}
            {new Date(fetchedAt).toLocaleString("en-NZ")}
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm hover:bg-raised"
          >
            <ExternalLink className="h-4 w-4" />
            Official page
          </a>
          <Link
            href="/trademe"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-fg"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-200">
          Could not load live data: {error}. Use the Official page link
          instead.
        </div>
      )}

      {listings.length === 0 && !error && (
        <div className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
          <p>No live listings parsed from TradeMe right now.</p>
          <p className="mt-2 text-sm">
            Open the official member page or add TradeMe API credentials for
            more reliable results.
          </p>
          <a
            href={SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary underline"
          >
            {SEARCH_URL}
          </a>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-border bg-surface p-4 transition hover:border-primary hover:bg-raised"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-medium leading-snug text-white">
                {item.title}
              </h3>
              <span className="shrink-0 rounded-full bg-emerald-900/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                {item.status}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted">
              #{item.id} · {item.price}
            </p>
          </a>
        ))}
      </div>

      <p className="text-xs text-faint">
        Source: {source}. Data is read-only from TradeMe. Nothing is invented.
      </p>
    </div>
  );
}
