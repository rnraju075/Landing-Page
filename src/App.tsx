import "./App.css";
import Client from "./components/clients/Client";
import CompanyLogos from "./components/companylogs/CompanyLogos";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Monitor from "./components/monitor/Monitor";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Price from "./components/price/Price";
import Purpose from "./components/purpose/Purpose";
import Schedule from "./components/schedule/Schedule";
import Service from "./components/service/Service";

function App() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogos />
        <Purpose />
        <Features />
        <Schedule />
        <Monitor />
        <Price />
        <Service />
        <Client />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

export default App;
