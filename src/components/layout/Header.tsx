"use client";

import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  // The homepage has a transparent header integrated into the hero section
  if (pathname === "/") return null;

  return (
    <header style={{ background: "var(--ink)", color: "white" }}>
      <div className="ec-announce">The only {siteConfig.city} installer offering a 10-year guarantee</div>
      <div className="ec-navrow" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="wrap">
          <Link className="ec-brand" href="/">
            <span className="ec-brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M12 3v18M4 12h16" />
              </svg>
            </span>
            {siteConfig.businessName}
          </Link>
          <ul className="ec-nav-links">
            <li><Link href="/services/windows">Windows</Link></li>
            <li><Link href="/services/doors">Doors</Link></li>
            <li><Link href="/areas">Areas</Link></li>
            <li><Link href="/prices">Prices</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          <div className="ec-navright">
            <a className="ec-navphone" href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>{siteConfig.phone}</a>
            <Link className="ec-btn-solid-ec" href="/request-a-quote">Book a survey</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
