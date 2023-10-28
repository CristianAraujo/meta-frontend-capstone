import Logo from '../assets/brand/Logo.svg'

const MenuBar = (props) => {
    return  (
        <nav className="nav">
            <ul className='nav-list'>
                <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
                <li className='nav-item'><a href='#' className='nav-link'>About</a></li>
                <li className='nav-item'><a href='#' className='nav-link'>Menu</a></li>
                <li className='nav-item'><a href='#' className='nav-link'>Reservations</a></li>
                <li className='nav-item'><a href='#' className='nav-link'>Order Online</a></li>
                <li className='nav-item'><a href='#' className='nav-link'>Login</a></li>
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