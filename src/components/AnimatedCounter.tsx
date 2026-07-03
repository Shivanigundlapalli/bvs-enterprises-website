import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 4000,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease-out cubic: f(t) = 1 - (1 - t)^3
      const easePercentage = 1 - Math.pow(1 - percentage, 3);
      const currentValue = Math.floor(startValue + easePercentage * (value - startValue));

      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className={`inline-block transition-all duration-300 ${className}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
