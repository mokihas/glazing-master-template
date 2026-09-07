import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function TrustBadgesRow() {
  const { trustBadges, reviews } = siteConfig;

  // Render if we have either badges OR a google rating
  if ((!trustBadges || trustBadges.length === 0) && !reviews?.aggregateRating) {
    return null;
  }

  return (
    <div className="w-full relative z-20 -mt-12 mb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card text-card-foreground rounded-2xl shadow-2xl shadow-black/5 border border-border p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side - Rating */}
          {reviews?.aggregateRating && (
            <div className="flex flex-col items-center lg:items-start space-y-2 lg:pr-8 lg:border-r border-border">
              <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">Rated Excellent On Google</span>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-foreground">{reviews.aggregateRating}</span>
                <div className="flex text-[#FBBC04]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-xs font-bold text-muted-foreground">Based on {reviews.totalReviews}+ reviews</span>
            </div>
          )}

          {/* Right Side - Trust Badges */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-col items-center lg:items-end space-y-4 flex-1">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Accredited & Trusted By
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 md:gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center justify-center relative h-10 w-28">
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      fill
                      className="object-contain"
                      sizes="112px"
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
