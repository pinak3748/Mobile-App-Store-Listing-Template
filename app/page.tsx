"use client";

import { ArrowRight, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import StarRating from "./components/StarRating";
import appData from "./data.json";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const checkTextOverflow = () => {
    if (descriptionRef.current) {
      // Temporarily remove line-clamp to measure full height
      const originalClasses = descriptionRef.current.className;
      descriptionRef.current.classList.remove("line-clamp-2");

      const lineHeight = parseFloat(
        getComputedStyle(descriptionRef.current).lineHeight
      );
      const maxHeight = lineHeight * 2; // 2 lines
      const actualHeight = descriptionRef.current.scrollHeight;

      // Restore original classes
      descriptionRef.current.className = originalClasses;

      setShouldShowMore(actualHeight > maxHeight);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkTextOverflow();
    }, 100);
    window.addEventListener("resize", checkTextOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkTextOverflow);
    };
  }, []);

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(appData.app.liveAppLink);
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <main className="max-w-4xl mx-auto p-5 pt-10 pb-20">
        <section className="flex gap-4 sm:gap-6 mb-8">
          <div className="shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[22px] overflow-hidden shadow-sm border border-gray-100 relative">
              <Image
                src={appData.app.icon}
                alt="App Icon"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 ">
            <div className="flex flex-col flex-1 pt-1">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight">
                {appData.app.name}
                <span className="inline-block ml-2 border border-gray-300 text-gray-500 text-[10px] px-1 rounded align-middle font-normal">
                  {appData.app.ageRating}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-primary/80 font-normal">
                {appData.app.developer}
              </p>
              <p className="text-primary/80 text-xs sm:text-[12px] font-light">
                {appData.app.priceType}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <StarRating rating={appData.app.overallRating} />
                <span className="text-xs text-gray-400">
                  {appData.app.totalRatings >= 1000
                    ? `${(appData.app.totalRatings / 1000).toFixed(1)}K`
                    : appData.app.totalRatings}{" "}
                  Ratings
                </span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-full px-6 py-1 text-sm transition-colors w-fit mt-4">
                {appData.app.buttonText}
              </button>
            </div>
            <div className="hidden sm:flex mt-2 items-start gap-2 relative">
              <button
                onClick={handleShareClick}
                className="relative"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4 text-blue-500 cursor-pointer" />
                {showCopied && (
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10"
                    role="tooltip"
                    aria-live="polite"
                  >
                    Copied
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 mb-6" />

        {/* Screenshots Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 tracking-tight">
            iPhone Screenshots
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide snap-x">
            {appData.screenshots.map((screenshot, i) => (
              <div
                key={i}
                className="shrink-0 w-[240px] h-[520px] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm relative bg-gray-100 snap-center"
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-6" />

        <section className="mb-6">
          <div>
            {!isExpanded && shouldShowMore ? (
              <>
                <p
                  ref={descriptionRef}
                  className="text-sm leading-relaxed text-primary/80 line-clamp-2 font-normal"
                >
                  {appData.description}
                </p>
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-500 text-sm font-medium mt-1"
                >
                  more
                </button>
              </>
            ) : (
              <>
                <p
                  ref={descriptionRef}
                  className="text-sm leading-relaxed text-primary/80"
                >
                  {appData.description}
                </p>
                {shouldShowMore && (
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-blue-500 text-sm font-medium mt-1"
                  >
                    show less
                  </button>
                )}
              </>
            )}
          </div>
        </section>

        <hr className="border-gray-200 mb-6" />

        {/* What's New Section */}
        <section className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-lg font-bold tracking-tight text-primary text-pretty">
              What&apos;s New
            </h2>
            <span className="text-sm text-secondary">
              Version {appData.whatsNew.version}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-primary/80">
            {appData.whatsNew.content}
          </p>
        </section>

        <hr className="border-gray-200 mb-6" />

        {/* Ratings & Reviews Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold tracking-tight">
              Ratings and Reviews
            </h2>
            <button className="text-blue-500 text-xs font-medium">
              See All
            </button>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold tracking-tighter">
                {appData.ratings.overall}
              </span>
              <span className="text-sm font-bold text-gray-400 mt-1">
                out of 5
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-1">
              {[5, 4, 3, 2, 1].map((rating) => {
                const ratingKey = String(rating) as "5" | "4" | "3" | "2" | "1";
                const percentage = appData.ratings.distribution[ratingKey] || 0;
                return (
                  <div key={rating} className="flex items-center gap-2 h-2">
                    <div className="flex justify-end w-4">
                      <Star className="w-2 h-2 text-gray-400 fill-gray-400" />
                    </div>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-500 rounded-full"
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              <div className="text-right text-xs text-gray-400 mt-1">
                {appData.ratings.totalRatings >= 1000
                  ? `${(appData.ratings.totalRatings / 1000).toFixed(1)}K`
                  : appData.ratings.totalRatings}{" "}
                Ratings
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide snap-x">
            {appData.reviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 p-5 rounded-[20px] w-[300px] shrink-0 snap-center"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm line-clamp-1">
                    {review.title}
                  </h3>
                  <span className="text-xs text-gray-400 shrink-0">
                    {review.date}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <StarRating
                    rating={review.rating}
                    size="sm"
                    filledColor="text-orange-400 fill-orange-400"
                    emptyColor="text-gray-300"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">{review.user}</span>
                </div>
                <p className="text-sm text-gray-600 leading-normal line-clamp-6">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-6" />

        {/* Information Section */}
        <section className="mb-8" aria-label="App Information">
          <h2 className="text-xl font-bold mb-4 tracking-tight">Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            <div>
              <h3 className="info-title">Seller</h3>
              <p className="info-value">{appData.information.seller}</p>
            </div>
            <div>
              <h3 className="info-title">Category</h3>
              <p className="info-value">{appData.information.category}</p>
            </div>
            <div>
              <h3 className="info-title">Size</h3>
              <p className="info-value">{appData.information.size}</p>
            </div>
            <div>
              <h3 className="info-title">Language</h3>
              <p className="info-value">{appData.information.language}</p>
            </div>
            <div>
              <h3 className="info-title">Compatibility</h3>
              <p className="info-value">{appData.information.compatibility}</p>
            </div>
            <div>
              <h3 className="info-title">Age Rating</h3>
              <p className="info-value">{appData.information.ageRating}</p>
            </div>
            <div>
              <h3 className="info-title">In-App Purchases</h3>
              {/* <p className="info-value flex items-center gap-0.5">
                {appData.information.inAppPurchases && "Yes"}
                <ArrowDown className="info-value h-[14px] w-fit stroke-1.5 stroke-primary/60" />
              </p> */}
              {appData.information.inAppPurchases &&
                appData.information.pricing.length > 0 && (
                  <ul className="w-full list-none">
                    {appData.information.pricing.map((price, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <p className="info-value">{price.name}</p>
                        <p className="info-value">{price.price}</p>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="/privacy-policy"
            className="text-blue-500/80 text-sm font-medium flex items-center gap-1"
          >
            Privacy Policy
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </Link>
          <Link
            href="/terms-of-service"
            className="text-blue-500/80 text-sm font-medium flex items-center gap-1"
          >
            Terms of Service
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </Link>
        </div>
      </main>
    </div>
  );
}
