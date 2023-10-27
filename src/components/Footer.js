const FooterImg = (props) => {
    return <img src="#" alt="Logo vertical" />
}


const VerticalNavigation = (props) => {
    return (
        <div>
            <h3>Doormat Navigation</h3>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

const VerticalNavigationContact = (props) => {
    return (
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Adress</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </div>
    )
}

const VerticalNavigationSocial = (props) => {
    return (
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Adress</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <FooterImg />
            <VerticalNavigation />
            <VerticalNavigationContact />
            <VerticalNavigationSocial />
        </>
    )
}

export { Footer };