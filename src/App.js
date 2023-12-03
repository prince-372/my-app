import logo from './logo.svg';
import "./App.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import What from './components/What'
import Why from './components/Why'
import Contact from './components/Contact'
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import Footer from './components/Footer';


function App() {
  return (
    <div>
     <div className='bg-img'>
     <Navbar/>
     <Hero/>
     </div>
     <What/>
       <Why/>
       <Modules/>
       <Pricing/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
