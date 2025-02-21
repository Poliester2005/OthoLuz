import { CarouselDefault } from "./Components/Carossel";
import Nav from "./Components/Nav";
import ProductCarousel from "./Components/Produtos";
import Footer from "./Components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <CarouselDefault />
      <ProductCarousel />
      <Footer />
    </>
  );
}

export default Home;
