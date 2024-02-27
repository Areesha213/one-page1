import Nav from './components/Nav';
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Cards1 from './components/Cards1';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Nav />
     <Header />
     <Cards />
     <Cards1 />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
