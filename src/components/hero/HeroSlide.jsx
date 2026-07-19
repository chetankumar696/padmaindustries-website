import Button from "../ui/Button";

function HeroSlide({ slide, active }) {
    return (
        <div
            className={`hero-slide ${active ? "active" : ""}`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url(${slide.image})`,
            }}
        >
            <div className="container hero-content">

                <h5>{slide.subtitle}</h5>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <div className="mt-4">

                    <Button href="#products">
                        {slide.button1}
                    </Button>

                    <Button href="#contact" variant="secondary">
                        {slide.button2}
                    </Button>

                </div>

            </div>
        </div>
    );
}

export default HeroSlide;