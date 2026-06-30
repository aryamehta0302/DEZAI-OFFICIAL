'use client';

import { ReviewItem } from '@/lib/reviews';

interface ReviewsMarqueeProps {
  reviews: ReviewItem[];
  speed?: 'slow' | 'medium' | 'fast';
  reverse?: boolean;
}

export default function ReviewsMarquee({
  reviews,
  speed = 'medium',
  reverse = false,
}: ReviewsMarqueeProps) {
  // Determine duration based on speed
  const duration = speed === 'slow' ? '65s' : speed === 'fast' ? '30s' : '48s';

  // Duplicate the list so it can scroll seamlessly
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Soft gradient fade on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div 
        className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubledReviews.map((review, i) => (
          <div
            key={`${review.id}-${i}`}
            className="w-[320px] md:w-[380px] shrink-0 card-elevated rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 text-tertiary">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="material-symbols-outlined text-xs md:text-sm select-none"
                    style={{ fontVariationSettings: idx < review.rating ? '"FILL" 1' : '"FILL" 0' }}
                  >
                    star
                  </span>
                ))}
              </div>
              {/* Text */}
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-6 font-medium">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* User details */}
            <div className="flex items-center gap-3.5 border-t border-border pt-5 mt-auto">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shrink-0 ${review.avatarColor}`}>
                {review.initials}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs md:text-sm text-on-surface leading-tight truncate">{review.name}</h4>
                <p className="text-on-surface-variant text-[10px] md:text-xs mt-0.5 leading-none truncate">
                  {review.companyOrPath}
                </p>
                <p className="text-tertiary text-[9px] md:text-[10px] label-caps mt-1.5 leading-none truncate">
                  {review.location.split(',').pop()?.trim() || review.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
