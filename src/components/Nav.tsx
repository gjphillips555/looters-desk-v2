"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Desk" },
  { href: "/trademe", label: "TradeMe" },
  { href: "/printables", label: "Printables" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 rounded-full border border-border p-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium transition",
            pathname === link.href
              ? "bg-primary text-primary-fg"
              : "text-muted hover:bg-raised hover:text-white"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
