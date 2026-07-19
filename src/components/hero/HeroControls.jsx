function HeroControls({ previous, next }) {
  return (
    <>
      <button className="hero-prev" onClick={previous}>
        ❮
      </button>

      <button className="hero-next" onClick={next}>
        ❯
      </button>
    </>
  );
}

export default HeroControls;