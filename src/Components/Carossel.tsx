import { Carousel } from "@material-tailwind/react";
import imagem1 from "../assets/imagem1.jpeg";
import imagem2 from "../assets/imagem2.jpeg";
import imagem3 from "../assets/imagem3.jpeg";
import imagem4 from "../assets/imagem4.jpeg";

export function CarouselDefault() {
  return (
    <div className="w-full h-[88vh] bg-gray-300">
      {/* Definindo um tamanho menor */}
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl h-full w-full max-w-screen overflow-hidden"
        navigation={false}
        loop={true}
        autoplay={true}
      >
        <div className="h-full flex justify-center items-center">
          <img
            src={imagem1}
            alt="Imagem 1"
            className="h-full object-cover"
          />
        </div>

        <div className="h-full flex justify-center items-center">
          <img
            src={imagem2}
            alt="Imagem 2"
            className="h-full object-cover"
          />
        </div>

        <div className="h-full flex justify-center items-center">
          <img
            src={imagem3}
            alt="Imagem 3"
            className="h-full object-cover"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <img
            src={imagem4}
            alt="Imagem 4"
            className="h-full object-cover"
          />
        </div>

      </Carousel >
    </div >
  );
}