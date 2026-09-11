import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: \ | Finance,
  description: Learn more about Finance at \ in \.,
};

export default function Page() {
  return (
    <div className="wrap" style={{ paddingBlock: "80px", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Finance</h1>
      <p style={{ fontSize: "1.25rem", color: "var(--ink)", opacity: 0.8, marginBottom: "2rem" }}>
        Discover our tailored solutions and commitments. We pride ourselves on offering transparent {siteConfig.businessName} services in {siteConfig.city}.
      </p>
      
      <div style={{ marginBottom: "2rem", position: "relative", height: "300px", background: "#f3f4f6", borderRadius: "12px", overflow: "hidden" }}>
        <img src={siteConfig.heroImage} alt="Placeholder for Finance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <div style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        <h2>Our Approach to Finance</h2>
        <p>
          [Extensive Placeholder Content for Finance]. This section can be populated with your specific service descriptions, terms, and detailed processes. Our team ensures that every aspect of your project is handled with the utmost professional care.
        </p>
        <p>
          Whether you are looking for new windows, secure doors, or a complete conservatory, we guarantee the highest standards in {siteConfig.city} and surrounding areas.
        </p>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Link href="/" style={{ color: "var(--brand)", textDecoration: "none", fontWeight: 600 }}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
