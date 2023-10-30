import Bruchetta from '../assets/images/bruchetta.svg';
import Basket from '../assets/icons/basket.svg';

const Main = (props) => {
    return (
        <main className="main">
            <header className="main-header section-header">
                <h2 className="section-title">This weeks specials</h2>
                <button className="cto-button">Online Menu</button>
            </header>
            <section className="main-menu">
                <article className="menu-card">
                    <figure className="menu-card__figure">
                        <img src={require('../assets/images/greek_salad.jpg')} className='menu-card__img' alt="menu card" />
                        <figcaption className="menu-card__caption">
                            <div className="caption-header">
                                <h3 className="caption-title">Greek Salad</h3>
                                <p className="caption-price">$12.95</p>
                            </div>
                            <div className="caption-body">
                                <p className="caption-description">
                                    The famous greek salad of crispy lettuce, peppers, olives and our 
                                    Chicago style feta cheese, garnished with crunchy garlic 
                                    and rosemary croutons. 
                                </p>
                            </div>
                            <div className="caption-footer">
                                <p className="caption-footer__text">
                                    Order a delivery 
                                </p>
                                <img src={Basket} alt="delivery icon" className='delivery-icon' />
                            </div>
                        </figcaption>
                    </figure>                    
                </article>

                <article className="menu-card">
                    <figure className="menu-card__figure">
                        <img src={Bruchetta} className='menu-card__img' alt="menu card" />
                        <figcaption className="menu-card__caption">
                            <div className="caption-header">
                                <h3 className="caption-title">Greek Salad</h3>
                                <p className="caption-price">$12.95</p>
                            </div>
                            <div className="caption-body">
                                <p className="caption-description">
                                    Our Bruschetta is made from grilled bread that has been smeared with 
                                    garlic and seasoned with salt and olive oil. 
                                </p>
                            </div>
                            <div className="caption-footer">
                                <p className="caption-footer__text">
                                    Order a delivery 
                                </p>
                                <img src={Basket} alt="delivery icon" className='delivery-icon' />
                            </div>
                        </figcaption>
                    </figure>                    
                </article>

                <article className="menu-card">
                    <figure className="menu-card__figure">
                        <img src={require('../assets/images/lemon_dessert.jpg')} className='menu-card__img' alt="menu card" />
                        <figcaption className="menu-card__caption">
                            <div className="caption-header">
                                <h3 className="caption-title">Greek Salad</h3>
                                <p className="caption-price">$12.95</p>
                            </div>
                            <div className="caption-body">
                                <p className="caption-description">
                                This comes straight from grandma’s recipe book, every last ingredient 
                                has been sourced and is as authentic as can be imagined.
                                </p>
                            </div>
                            <div className="caption-footer">
                                <p className="caption-footer__text">
                                    Order a delivery 
                                </p>
                                <img src={Basket} alt="delivery icon" className='delivery-icon' />
                            </div>
                        </figcaption>
                    </figure>                    
                </article>
            </section>
        </main>
    ) 
}

export { Main };