import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Conector Perfurante",
    description: "Conexões de derivação por perfuração em condutores isolados.",
    image: "https://i.imgur.com/WrqlsG3.png",
  },
  {
    name: "Eletroduto",
    description: "Dutos que protegem cabos e condutores elétricos.",
    image: "https://i.imgur.com/eu6jhbu.png",
  },
  {
    name: "Conector para Haste",
    description:
      "Conectores para Haste ideais para conexões em sistemas de aterramento.",
    image: "https://i.imgur.com/qRsHmBG.png",
  },
  {
    name: "Haste de Aterramento",
    description: "Componente que direciona corrente elétrica para o solo.",
    image: "https://i.imgur.com/3E2ugOT.png",
  },
  {
    name: "Base para Relé Fotoelétrico",
    description: "Permite a colocação segura do relé fotoelétrico.",
    image: "https://i.imgur.com/NAFcNgC.png",
  },
  {
    name: "Caixa de Aterramento",
    description:
      "Protege contra descargas atmosféricas, transferindo-as para a terra.",
    image: "https://i.imgur.com/LxYCOFM.png",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
  >
    <ChevronLeft size={30} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
  >
    <ChevronRight size={30} />
  </button>
);

export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="w-screen max-w-screen-xl mx-auto px-4 py-8 min-h-[600px] relative bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Nossos Produtos
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => {
          const whatsappMessage = encodeURIComponent(
            `Olá, gostaria de saber mais sobre o produto: ${product.name}.`
          );
          const whatsappLink = `https://wa.me/5548998360100?text=${whatsappMessage}`;

          return (
            <div key={index} className="p-4">
              <div className="bg-white shadow-xl rounded-lg p-6 transition-transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex justify-center items-center mt-4 text-center">
                  <a
                    href={whatsappLink}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-1/2 px-5 py-2 rounded-md transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}