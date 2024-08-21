import Category from "./components/Category";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
    </div>
  );
};

export default Home;
