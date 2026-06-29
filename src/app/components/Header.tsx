"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mainNavLinks = [
  { label: "Enterprise", href: "#enterprise" },
  { label: "Business", href: "#business" },
  { label: "Personal", href: "#personal" },
  { label: "About", href: "#about" },
] as const;

const navLinkClassName =
  "rounded-3xl px-3 py-2 font-medium text-text-02 transition-colors duration-200 ease-in-out hover:bg-gray";

const ctaClassName =
  "rounded-3xl px-4 py-2 font-medium text-white bg-accent transition-colors duration-200 ease-in-out hover:bg-accent-hover";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      {open ? (
        <path
          d="M6 18L18 6M6 6l12 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function MobileMenuToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const buttonClassName =
    "rounded p-2 text-text-02 transition-colors duration-200 ease-in-out hover:bg-gray md:hidden";

  if (open) {
    return (
      <button
        type="button"
        aria-controls="mobile-menu"
        aria-expanded="true"
        aria-label="Close menu"
        className={buttonClassName}
        onClick={onToggle}
      >
        <MenuIcon open />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-controls="mobile-menu"
      aria-expanded="false"
      aria-label="Open menu"
      className={buttonClassName}
      onClick={onToggle}
    >
      <MenuIcon open={false} />
    </button>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray/80 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="w-auto h-9 font-bold tracking-tight text-foreground transition-opacity duration-200 ease-in-out hover:opacity-80"
            >
              <Image src="/kairo-assets/kairo-logo.svg" loading="eager" alt="Kairo" width={100} height={100} />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-4 md:flex"
            >
              {mainNavLinks.map(({ label, href }) => (
                <Link key={href} href={href} className={navLinkClassName}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <nav
            aria-label="Account navigation"
            className="hidden items-center gap-4 md:flex"
          >
            <Link href="#login" className={navLinkClassName}>
              Login
            </Link>
            <Link href="#get-started" className={ctaClassName}>
              Get started
            </Link>
          </nav>

          <MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen((open) => !open)}
          />
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`overflow-hidden border-t border-gray/80 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 border-t-transparent"
            }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {mainNavLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClassName}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-4 border-t border-gray/80 pt-4">
              <Link
                href="#login"
                className={navLinkClassName}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#get-started"
                className={`${ctaClassName} text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
