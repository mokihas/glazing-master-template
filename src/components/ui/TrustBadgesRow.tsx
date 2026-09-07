import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function TrustBadgesRow() {
  const { trustBadges, reviews } = siteConfig;

  if ((!trustBadges || trustBadges.length === 0) && !reviews?.aggregateRating) {
    return null;
  }

  // Duplicate badges so the marquee can scroll seamlessly
  const marqueeBadges = trustBadges && trustBadges.length > 0 
    ? [...trustBadges, ...trustBadges, ...trustBadges, ...trustBadges] 
    : [];

  return (
    <div className="w-full bg-muted border-b border-border py-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Left Side - Google Rating (Static) */}
          {reviews?.aggregateRating && (
            <div className="flex items-center gap-4 pr-6 md:border-r border-border shrink-0 z-10 bg-muted">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                  Google Reviews
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-foreground leading-none">{reviews.aggregateRating}</span>
                  <div className="flex text-[#FBBC04]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Side - Scrolling Marquee of Trust Badges */}
          {marqueeBadges.length > 0 && (
            <div className="flex-1 overflow-hidden relative flex items-center">
              {/* Fade masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-muted to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted to-transparent z-10" />
              
              <div className="flex items-center gap-8 animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500 w-max">
                {marqueeBadges.map((badge, index) => (
                  <div key={index} className="flex items-center justify-center relative h-8 w-24 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
