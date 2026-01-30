import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, animation = "fade-up" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Element is visible:", ref.current);
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${animation}`}>
      {children}
    </div>
  );
};
