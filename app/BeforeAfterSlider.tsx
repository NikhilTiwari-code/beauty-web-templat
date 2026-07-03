"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  // Prevent divide-by-zero or infinite scaling when sliderPosition is near 0
  const imageScaleFactor = sliderPosition > 0 ? (100 / sliderPosition) * 100 : 10000;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white slider-container bg-brand-pink-light"
      >
        {/* After Image (Glamour/Bridal Makeup) - Bottom Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/bridal_makeup.png"
            alt="After Bridal Makeup"
            className="w-full h-full object-cover pointer-events-none select-none"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute bottom-4 right-4 bg-brand-charcoal/80 text-white text-[11px] px-3 py-1.5 rounded-md font-bold tracking-widest backdrop-blur-sm z-20 uppercase">
            GLAMOUR LOOK
          </div>
        </div>

        {/* Before Image (Natural Skin) - Top Layer (Width-based clipping for mobile compatibility) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden select-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="/images/before_makeup.png"
            alt="Before Makeup"
            className="absolute inset-y-0 left-0 h-full object-cover pointer-events-none"
            style={{
              width: `${imageScaleFactor}%`,
              maxWidth: "none",
              objectPosition: "center 20%"
            }}
          />
          <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 text-white text-[11px] px-3 py-1.5 rounded-md font-bold tracking-widest backdrop-blur-sm z-20 uppercase whitespace-nowrap">
            NATURAL SKIN
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Slider Handle Button */}
          <div className="slider-button select-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <p className="text-xs text-brand-charcoal/50 italic tracking-wide mt-2">
        ← Drag the slider handle to see the transformation details →
      </p>
    </div>
  );
}
