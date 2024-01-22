
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <AboutUs />
     <Footer />
    </div>
  );
}

export default App;
