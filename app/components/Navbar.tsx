"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const capabilities = [
  { label: "Strategic Communications", href: "/capabilities/strategic-communications" },
  { label: "Military Intelligence", href: "/capabilities/military-intelligence" },
  { label: "Cyber Security & Infrastructure Defence", href: "/capabilities/cyber-security" },
  { label: "Artificial Intelligence for Defence & Security", href: "/capabilities/artificial-intelligence" },
  { label: "Emerging Technologies in Modern Warfare", href: "/capabilities/emerging-technologies" },
];

const training = [
  { label: "Advanced Capability Program", href: "/training/advanced-capability-program", featured: true },
  { label: "Strategic Communications", href: "/training/strategic-communications" },
  { label: "Military Intelligence", href: "/training/military-intelligence" },
  { label: "Cyber Security & Infrastructure Defence", href: "/training/cyber-security" },
  { label: "Artificial Intelligence for Defence & Security", href: "/training/artificial-intelligence" },
  { label: "Emerging Technologies in Modern Warfare", href: "/training/emerging-technologies" },
];

function MegaMenu({ items }: { items: typeof capabilities }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 z-50">
      <div
        className="border py-2"
        style={{
          background: "rgba(10,26,47,0.98)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(242,239,233,0.1)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between px-5 py-3 group"
            style={{ color: "inherit" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(184,148,90,0.06)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "")
            }
          >
            <span
              className="text-[13px] leading-snug transition-colors duration-150"
              style={{
                color: "featured" in item && item.featured ? "#B8945A" : "rgba(242,239,233,0.8)",
                fontFamily: "var(--font-display)",
              }}
            >
              {item.label}
            </span>
            <ArrowUpRight
              size={11}
              style={{ color: "rgba(242,239,233,0.25)" }}
              className="group-hover:text-qi-gold transition-colors duration-150"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled ? "rgba(8,20,38,0.97)" : "rgba(8,20,38,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(242,239,233,0.07)"
          : "1px solid rgba(242,239,233,0.04)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/QILogoWhite.png"
            alt="Quantum Intel"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {(
            [
              { label: "About", href: "/about" },
              { label: "Capabilities", key: "capabilities" },
              { label: "Training", key: "training" },
              { label: "Sectors", href: "/sectors" },
              { label: "Programmes", href: "/programmes" },
              { label: "Insights", href: "/insights" },
              { label: "Contact", href: "/contact" },
            ] as Array<{ label: string; href?: string; key?: string }>
          ).map((item) =>
            item.key ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => openMenu(item.key!)}
                onMouseLeave={closeMenu}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-2.5 text-[11.5px] tracking-[0.09em] uppercase font-medium"
                  style={{
                    color: activeMenu === item.key ? "#F2EFE9" : "rgba(242,239,233,0.65)",
                    fontFamily: "var(--font-display)",
                    transition: "color 0.15s ease",
                  }}
                >
                  {item.label}
                  <ChevronDown
                    size={10}
                    style={{
                      transform: activeMenu === item.key ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.15s ease",
                    }}
                  />
                </button>
                {activeMenu === item.key && (
                  <MegaMenu items={item.key === "capabilities" ? capabilities : training} />
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="px-3.5 py-2.5 text-[11.5px] tracking-[0.09em] uppercase font-medium"
                style={{ color: "rgba(242,239,233,0.65)", fontFamily: "var(--font-display)", transition: "color 0.15s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F2EFE9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,239,233,0.65)")}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact/request-proposal"
            className="qi-btn-gold-outline text-[11px] tracking-[0.13em] uppercase font-semibold px-5 py-2.5 inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Request a Proposal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: "#F2EFE9" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-6 flex flex-col gap-1"
          style={{
            background: "rgba(8,20,38,0.98)",
            borderColor: "rgba(242,239,233,0.08)",
          }}
        >
          {["About", "Capabilities", "Training", "Sectors", "Programmes", "Insights", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="py-3.5 text-[13px] tracking-[0.08em] uppercase font-medium border-b"
              style={{
                color: "rgba(242,239,233,0.7)",
                borderColor: "rgba(242,239,233,0.07)",
                fontFamily: "var(--font-display)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact/request-proposal"
            className="qi-btn-gold-outline mt-5 py-3.5 text-center text-[12px] tracking-[0.12em] uppercase font-semibold block"
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => setMobileOpen(false)}
          >
            Request a Proposal
          </Link>
        </div>
      )}
    </header>
  );
}
