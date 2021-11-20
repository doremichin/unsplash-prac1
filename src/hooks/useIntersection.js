import { useEffect, useRef, useState } from 'react';

export const useIntersection = () => {
  const [isInView, setInView] = useState(false);
  const ref = useRef();

  const options = {
    threshold: 0,
    rootMargin: '0px 0px 800px 0px',
  };

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
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
