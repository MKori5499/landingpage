import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PricingSection from './components/PricingSection/PricingSection';
import CallToAction from './components/CallToAction/CallToAction';
import SponsorsSection from './components/Sponsor/SponsorsSection';
import Whitepace from './components/WhiteSpace/Whitepace';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="App">
      <Header />
      <Banner />
      <div className='Pricing-section'>
      <PricingSection />
      </div>
      <CallToAction />
      <SponsorsSection />
      <Whitepace/>
      <Footer/>
    </div>
    
  );
}

export default App;
