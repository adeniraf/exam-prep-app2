"use client";
import React, { useState, useEffect, useRef } from "react";
import { reviews } from "@/lib/data";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviewsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          What Our Customers Say
        </h2>
        <div ref={reviewsRef} className="relative h-[200px] overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentReview ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">{review.content}</p>
                <p className="font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
