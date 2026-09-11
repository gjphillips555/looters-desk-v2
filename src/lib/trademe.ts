/**
 * Live TradeMe data for member 9233545 only.
 * Never invent listings.
 */

export const MEMBER_ID = 9233545;
export const MEMBER_NAME = "LootersComputas";
export const SEARCH_URL = `https://www.trademe.co.nz/a/search?member_listing=${MEMBER_ID}`;

export type LiveListing = {
  id: number | string;
  title: string;
  price: string;
  status: string;
  href: string;
  image?: string;
  ends?: string;
};

/**
 * Server-side fetch of current live listings from the public member search page.
 * Conservative parser — better to return fewer real items than invent any.
 */
export async function fetchLiveListings(): Promise<{
  listings: LiveListing[];
  source: string;
  fetchedAt: string;
  error?: string;
}> {
  const fetchedAt = new Date().toISOString();

  try {
    const res = await fetch(SEARCH_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LootersDesk/2.0; +https://looterscomputas.online)",
        Accept: "text/html",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return {
        listings: [],
        source: SEARCH_URL,
        fetchedAt,
        error: `TradeMe returned ${res.status}`,
      };
    }

    const html = await res.text();
    const listings: LiveListing[] = [];
    const seen = new Set<string>();

    // Conservative extraction of listing IDs and nearby titles
    const regex =
      /\/listing\/(\d+)[^"]*"[^>]*>[\s\S]{0,400}?>([^<]{8,140})</gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const id = match[1];
      let title = match[2].trim().replace(/\s+/g, " ");
      if (seen.has(id) || title.length < 8) continue;
      // skip obvious non-titles
      if (/^(Buy Now|Watchlist|Add to|\$|Reserve)/i.test(title)) continue;
      seen.add(id);
      listings.push({
        id,
        title,
        price: "See TradeMe",
        status: "live",
        href: `https://www.trademe.co.nz/a/listing/${id}`,
      });
    }

    return { listings, source: SEARCH_URL, fetchedAt };
  } catch (err) {
    return {
      listings: [],
      source: SEARCH_URL,
      fetchedAt,
      error: err instanceof Error ? err.message : "Fetch failed",
    };
  }
}
