import React, { useRef, useEffect, useState } from 'react';

const FadeInSection = ({ children, delay = 0, threshold = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        } else if (!entry.isIntersecting && isVisible) {
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [isVisible, threshold]);

  const tailwindClasses = `
    transition-all
    ${delay > 0 ? `delay-${delay}` : ''}
    duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
  `;

  return (
    <div ref={sectionRef} className={tailwindClasses}>
      {children}
    </div>
  );
};

export default FadeInSection;