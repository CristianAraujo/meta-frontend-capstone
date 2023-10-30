import './App.css';

import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';

function App() {
  return (
    <>
      <Nav className="nav" />
      <Header  />
      <Main className="main" />
      <Testimonials />
      <About />
      <Footer className="footer" />
    </>
  );
}

export default App;
