import Head from "./head/Head";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./service/Services";
import Tours from "./tours/tours";
import Foot from "./foot/Foot";
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Foot />
    </div>
  );
}
export default App;
