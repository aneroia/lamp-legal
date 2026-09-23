"use client";

import { useEffect, useRef } from "react";

export default function SitePatterns() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const patterns = [...host.querySelectorAll<HTMLElement>("[data-flow-pattern]")];
    const moving = [...document.querySelectorAll<HTMLElement>("[data-scroll-move]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      patterns.forEach((pattern) => pattern.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "60px 0px 60px 0px" });
    patterns.forEach((pattern) => observer.observe(pattern));

    let frame = 0;
    function update() {
      frame = 0;
      for (const pattern of patterns) {
        const rect = pattern.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) continue;
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        pattern.style.setProperty("--flow-shift", Math.round((progress - 0.5) * 90) + "px");
      }
      for (const element of moving) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) continue;
        const distance = Number(element.dataset.scrollMove) || 0;
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        element.style.setProperty("--decor-shift", Math.round((progress - 0.5) * distance * 2) + "px");
      }
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="story-patterns" ref={root} aria-hidden="true">
      <div className="flow-pattern flow-pattern-a" data-flow-pattern>
        <div className="flow-pattern-inner">
          <svg viewBox="0 0 1000 950" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path d="M 1020 -80 C 770 40 660 116 598 295 C 535 475 658 565 538 724 C 458 830 240 841 -65 1040" fill="none" stroke="#DDEFF6" strokeWidth="156" opacity=".68" />
            <path className="flow-draw" pathLength="1" d="M 1020 -80 C 770 40 660 116 598 295 C 535 475 658 565 538 724 C 458 830 240 841 -65 1040" fill="none" stroke="#78AEC9" strokeWidth="2" opacity=".8" />
            <path className="flow-accent" pathLength="1" d="M 664 195 C 620 248 592 299 585 364" fill="none" stroke="#F28C28" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="flow-pattern flow-pattern-b" data-flow-pattern>
        <div className="flow-pattern-inner">
          <svg viewBox="0 0 980 980" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path d="M -120 -50 C 160 45 350 118 420 322 C 515 592 261 620 300 803 C 318 891 440 925 646 1020" fill="none" stroke="#EDEBE6" strokeWidth="170" opacity=".8" />
            <path className="flow-draw" pathLength="1" d="M -120 -50 C 160 45 350 118 420 322 C 515 592 261 620 300 803 C 318 891 440 925 646 1020" fill="none" stroke="#91BCD0" strokeWidth="2" opacity=".77" />
            <path className="flow-accent" pathLength="1" d="M 445 388 C 458 455 444 505 420 551" fill="none" stroke="#F28C28" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}



