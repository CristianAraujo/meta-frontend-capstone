const FooterImg = (props) => {
    return <img src={require('../assets/brand/logo-vertical.png')} className="footer-img" alt="Logo vertical" />
}


const VerticalNavigation = (props) => {
    return (
        <div className="vertical-nav" role="navigation">
            <h3 className="vertical-nav__title">Navigation</h3>
            <ul className="vertical-nav__list">
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Home</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">about</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Menu</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Reservations</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Order Online</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Login</a></li>
            </ul>
        </div>
    )
}

const VerticalNavigationContact = (props) => {
    return (
        <div className="vertical-nav" role="navigation">
            <h3 className="vertical-nav__title">Contact</h3>
            <ul className="vertical-nav__list">
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Adress</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Phone number</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Email</a></li>
            </ul>
        </div>
    )
}

const VerticalNavigationSocial = (props) => {
    return (
        <div className="vertical-nav" role="navigation">
            <h3 className="vertical-nav__title">Social media links</h3>
            <ul className="vertical-nav__list">
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Adress</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Phone number</a></li>
                <li className="vertical-nav__item"><a href="./" className="vertical-nav__link">Email</a></li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <FooterImg />
            <VerticalNavigation />
            <VerticalNavigationContact />
            <VerticalNavigationSocial />
        </footer>
    )
}

export { Footer };