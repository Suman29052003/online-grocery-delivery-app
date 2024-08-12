import { useState } from "react";
import { EmblaCarousel } from "../components/EmblaCarousel";
import Items from "../components/Items";
import Footer from "../components/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="home" className="w-full  min-h-[100vh]">
      <EmblaCarousel />
      <Items/>
      <Footer/>
    </section>
  );
};

export default Home;
