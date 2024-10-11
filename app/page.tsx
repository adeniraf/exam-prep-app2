"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Reviews from "./components/Reviews";

export default function LandingPage() {
  const [animatedCounters, setAnimatedCounters] = useState({
    users: 0,
    countries: 0,
    reviews: 0,
  });

  const counterRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftDivRef.current) observer.observe(leftDivRef.current);
    if (rightDivRef.current) observer.observe(rightDivRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedCounters({
        users: Math.round(progress * 10000),
        countries: Math.round(progress * 50),
        reviews: Math.round(progress * 5000),
      });

      if (currentStep === steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to ACME Inc.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide cutting-edge solutions for all your needs. Discover
                  how we can help you today.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Products
            </h2>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white dark:bg-gray-950"
                >
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
                    <svg
                      className=" text-gray-500 dark:text-gray-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="18" rx="2" width="18" x="3" y="3" />
                      <path d="M7 7h.01" />
                      <path d="m7 3-.496 4.962L11 12l-4.496 4.038L7 21" />
                      <path d="m17 3 .496 4.962L13 12l4.496 4.038L17 21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Product {i}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center md:grid-cols-2">
              <div
                ref={leftDivRef}
                className="opacity-0 transform -translate-x-full transition-all duration-1000 ease-in-out"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  At ACME Inc., we strive to revolutionize the industry with
                  innovative solutions that empower businesses and individuals
                  alike. Our commitment to excellence drives us to constantly
                  push the boundaries of what is possible.
                </p>
              </div>
              <div
                ref={rightDivRef}
                className="opacity-0 transform translate-x-full transition-all duration-1000 ease-in-out"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our team at work"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <Reviews />
        <section ref={counterRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center md:grid-cols-2">
              <div className="grid gap-4 md:gap-8 grid-cols-3">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">
                    {animatedCounters.users.toLocaleString()}+
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Active Users
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">
                    {animatedCounters.countries.toLocaleString()}+
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Countries Served
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">
                    {animatedCounters.reviews.toLocaleString()}+
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    5-Star Reviews
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                  Our Impact
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Students who use Studyclix get 127 more CAO points in their
                  Leaving Certificate
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 ACME Inc. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-4">
              <Link
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
