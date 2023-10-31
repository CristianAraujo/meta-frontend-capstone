import heroimg from '../assets/images/restauranfood.jpg';

const HeroFigure = () => {
    return (
        <figure className="hero-figure">
            <img src={heroimg} className="hero-img" alt="Our restaurant food" />
        </figure>
    )
}

export default HeroFigure;