import { CarouselDefault } from "./Carossel";
import Nav from "./Nav";
import ProductCarousel from "./Produtos";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <CarouselDefault />
      <ProductCarousel />
      <Footer />
    </div>
  );
}

export default App;
