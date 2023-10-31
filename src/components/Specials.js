import GreekSalad from '../assets/images/greek_salad.jpg';
import Bruchetta from '../assets/images/bruchetta.svg';
import Dessert from '../assets/images/lemon_dessert.jpg';

import MenuCard from './MenuCard';

const Specials = (props) => {
    return (
        <section className="specials">
            <header className="specials-header section-header">
                <h2 className="section-title">This weeks specials</h2>
                <button className="cto-button">Online Menu</button>
            </header>
            <section className="main-menu">
                <MenuCard 
                    image={GreekSalad}
                    dish="Greek Salad"
                    price="$12.95"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />

                <MenuCard
                    image={Bruchetta}
                    dish="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic anditate with salt and olive oil."
                    />
                    
                <MenuCard
                    image={Dessert}
                    dish="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
            </section>
        </section>
    ) 
}

export default Specials;