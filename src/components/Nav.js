import Logo from '../assets/brand/Logo.svg'

const MenuBar = (props) => {
    return  (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
    
}

const Logotype = (props) => {
    return (
        <img src={Logo} alt="logo" />
    )
}

const Nav = (props) => {
    return (
        <div className="navegation">
            <Logotype />
            <MenuBar />
        </div>
    )
}

export { Nav };