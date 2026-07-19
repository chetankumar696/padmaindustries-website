import { useState, useEffect } from "react";

import HeroSlide from "./HeroSlide";
import HeroDots from "./HeroDots";
import HeroControls from "./HeroControls";

import { heroSlides } from "../../data/heroSlides";

import "../../styles/hero.css";

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <section id="hero" className="hero">

      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          active={index === current}
        />
      ))}

      <HeroControls
        previous={previous}
        next={next}
      />

      <HeroDots
        slides={heroSlides}
        current={current}
        setCurrent={setCurrent}
      />

    </section>
  );
}

export default Hero;