import heroimg from '../assets/images/restauranfood.jpg';

const Header = (props) => {
    return (
        <header className="header">
            <section className="hero">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <p className="hero-description">
                    We are a family owned Mediterranean restaurant, focused on 
                    traditional recipes served with a modern twist.
                </p>
                <button className="hero-button">Reserve a Table</button>
            </section>
            <figure className="hero-figure">
                <img src={heroimg} className="hero-img" alt="Our restaurant food" />
            </figure>
        </header>
    )
}

export { Header };