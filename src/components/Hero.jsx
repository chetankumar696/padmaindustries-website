import "../styles/hero.css";
import hero from "../assets/images/hero/hero.png";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="overlay"></div>

      <div className="container hero-content">

        <h5 className="section-title">
          ENGINEERED REFRACTORY SOLUTIONS
        </h5>

        <h1>
          High Performance
          <br />
          Refractory Products
        </h1>

        <p>
          Manufacturing premium High Alumina Bricks,
          Fire Clay Bricks, Special Shapes,
          Castables and Mortars since 1986.
        </p>

        <div className="mt-4">

          <a href="#products" className="btn btn-warning btn-lg me-3">
            Explore Products
          </a>

          <a href="#contact" className="btn btn-outline-light btn-lg">
            Request Quote
          </a>

        </div>

      </div>

      <img src={hero} alt="Hero" className="hero-image" />

    </section>
  );
}

export default Hero;