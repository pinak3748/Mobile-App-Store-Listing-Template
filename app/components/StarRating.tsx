import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // 0-5, supports 0.5 increments (e.g., 2.5, 3.5)
  size?: "sm" | "md" | "lg";
  className?: string;
  filledColor?: string;
  emptyColor?: string;
}

export default function StarRating({
  rating,
  size = "md",
  className = "",
  filledColor = "text-yellow-500 fill-yellow-500",
  emptyColor = "text-gray-300",
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3 sm:w-4 sm:h-4",
    lg: "w-4 h-4 sm:w-5 sm:h-5",
  };

  const starSize = sizeClasses[size];

  return (
    <div className={`flex ${className}`}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const isFullStar = starValue <= fullStars;
        const isHalfStar = starValue === fullStars + 1 && hasHalfStar;

        if (isFullStar) {
          return <Star key={index} className={`${starSize} ${filledColor}`} />;
        } else if (isHalfStar) {
          return (
            <div
              key={index}
              className={`${starSize} relative inline-block`}
              style={{ width: "fit-content" }}
            >
              {/* Empty star background */}
              <Star className={`${starSize} ${emptyColor}`} />
              {/* Half-filled star overlay */}
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: "50%", height: "100%" }}
              >
                <Star className={`${starSize} ${filledColor}`} />
              </div>
            </div>
          );
        } else {
          return <Star key={index} className={`${starSize} ${emptyColor}`} />;
        }
      })}
    </div>
  );
}
