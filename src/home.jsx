import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import MostSearchCar from "./components/MostSearchCar";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Category */}
      <Category />
      {/* Most Searched Car Componect */}
      <MostSearchCar />
      {/* Info Section */}
      <InfoSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
