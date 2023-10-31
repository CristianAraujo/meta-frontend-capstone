import { navegationLinks, contactLinks, socialLinks } from './LinksData';
import Navegation  from './Navigation';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Logo from './Logo';
import DoormatNav from './DoormatNav';

const Homepage = () => {
    return (
        <>
          <header className="header">
            <Navegation />
            <Hero />
          </header>
          <main className="main">
            <Specials />
            <Testimonials />
            <About />
          </main>
          <footer className="footer">
            <Logo horientation="v" />
            <DoormatNav linksData={navegationLinks.links} title={navegationLinks.title} />
            <DoormatNav linksData={contactLinks.links} title={contactLinks.title} />
            <DoormatNav linksData={socialLinks.links} title={socialLinks.title} />
          </footer>
        </>
    )
}

export default Homepage;