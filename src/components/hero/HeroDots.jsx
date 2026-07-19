function HeroDots({ slides, current, setCurrent }) {
  return (
    <div className="hero-dots">
      {slides.map((_, index) => (
        <span
          key={index}
          className={current === index ? "dot active" : "dot"}
          onClick={() => setCurrent(index)}
        ></span>
      ))}
    </div>
  );
}

export default HeroDots;