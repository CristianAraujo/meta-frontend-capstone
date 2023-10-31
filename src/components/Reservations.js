import { navegationLinks, contactLinks, socialLinks } from './LinksData';
import Navegation  from './Navigation';
import Hero from './Hero';
import Logo from './Logo';
import DoormatNav from './DoormatNav';
import MidleSection from './MidleSection';

import BookForm from './BookFrom';


const Reservations = () => {
    return (
        <>
          <header className="header">
            <Navegation />
            <Hero />
          </header>
          <main className="main">
            <MidleSection 
                sectionTitle={"Reservations"} 
                classHeader="midle-header__reservations"
                classBody="midle-section__reservations" 
                ctoObjecto={null}
            >
                <BookForm />
            </MidleSection>
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

export default Reservations;