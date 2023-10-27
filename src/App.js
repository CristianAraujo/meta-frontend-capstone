import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav className="nav" />
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </>
  );
}

export default App;
