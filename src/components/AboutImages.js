import frontImage from '../assets/images/restaurant.jpg';
import backImage from '../assets/images/restaurant_chef.jpg';

const AboutImages = () => {
    return (
        <div className="about-img-container">
            <img src={frontImage} className="about-img about-img__front" alt="Restuarant" />
            <img src={backImage} className="about-img about-img__back" alt="Restuarant" />
        </div>
    )
}

export default AboutImages;