import React, { useEffect, useRef, useState } from 'react';

export const useIntersection = () : [boolean, React.RefObject<HTMLDivElement>] => {
  const [isInView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = {
    threshold: 0,
    rootMargin: '0px 0px 800px 0px',
  };

  useEffect(() => {
    const callback = (entries :any, observer :any) => {
      entries.forEach((entry :any) => {
        setInView(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [isInView, ref];
};
