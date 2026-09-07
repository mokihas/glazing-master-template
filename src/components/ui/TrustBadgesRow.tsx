import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function TrustBadgesRow() {
  const { trustBadges } = siteConfig;

  if (!trustBadges || trustBadges.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
            Accredited & Trusted By
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center relative h-12 w-32">
                <Image
                  src={badge.image}
                  alt={badge.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
