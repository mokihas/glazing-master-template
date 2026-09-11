import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export const metadata = {
  title: `${siteConfig.businessName} | Prices`,
  description: `Learn more about Prices at ${siteConfig.businessName} in ${siteConfig.city}.`,
};

export default function Page() {
  return (
    <div className="wrap" style={{ paddingBlock: "80px", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Prices</h1>
      <p style={{ fontSize: "1.25rem", color: "var(--ink)", opacity: 0.8, marginBottom: "2rem" }}>
        This is a placeholder page for Prices. Update this content with specific details for {siteConfig.businessName}.
      </p>
      <div>
        <p>[Placeholder Content for Prices]</p>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Link href="/" style={{ color: "var(--brand)", textDecoration: "none", fontWeight: 600 }}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
