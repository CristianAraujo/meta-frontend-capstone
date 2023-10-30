const About = (props) => {
    return (
        <section className="about">
            <article className="about-content">
                <h2 className="section-title about-title">Little Lemon</h2>
                <h3 className="section-subtitle about-subtitle">Chicago</h3>
                <p className="about-description">
                Little Lemmon is a renowned Mediterranean restaurant in Chicago, serving up 
                exquisite flavors inspired by the Mediterranean coast. With a rich 
                history dating back over two decades, we've delighted the palates of 
                countless patrons. Our commitment to excellence has earned us numerous 
                awards, making us a cherished culinary destination in the Windy City.
                </p>
            </article>
            <div className="about-img-container">
                <img src={require("../assets/images/restaurant.jpg")} className="about-img about-img__front" alt="Restuarant" />
                <img src={require("../assets/images/restaurant_chef_b.jpg")} className="about-img about-img__back" alt="Restuarant" />
            </div>
        </section>
    )
}

export { About };