import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Tênis Esportivo",
    description: "Confortável e ideal para corridas.",
    price: "R$ 299,90",
    image: "https://source.unsplash.com/400x300/?sneakers",
  },
  {
    id: 2,
    name: "Fone de Ouvido",
    description: "Som de alta qualidade e cancelamento de ruído.",
    price: "R$ 199,90",
    image: "https://source.unsplash.com/400x300/?headphones",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Monitore sua saúde com estilo.",
    price: "R$ 499,90",
    image: "https://source.unsplash.com/400x300/?smartwatch",
  },
  {
    id: 4,
    name: "Notebook Gamer",
    description: "Desempenho incrível para jogos.",
    price: "R$ 5.999,90",
    image: "https://source.unsplash.com/400x300/?laptop",
  },
  {
    id: 5,
    name: "Mochila Executiva",
    description: "Ideal para viagens e trabalho.",
    price: "R$ 179,90",
    image: "https://source.unsplash.com/400x300/?backpack",
  },
  {
    id: 6,
    name: "Câmera Profissional",
    description: "Capture momentos com alta qualidade.",
    price: "R$ 2.999,90",
    image: "https://source.unsplash.com/400x300/?camera",
  },
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
    >
      <ChevronLeft size={30} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10"
    >
      <ChevronRight size={30} />
    </button>
  );
};

export default function ProductCarousel({ darkMode }: { darkMode: boolean }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Setas personalizadas
    nextArrow: <CustomNextArrow />, // Setas personalizadas
    responsive: [
      {
        breakpoint: 1024, // Tablets e notebooks pequenos
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets menores
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className={`w-screen max-w-screen-xl mx-auto px-4 py-8 min-h-[600px] relative ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-gray-800"}`}>
        Nossos Produtos
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div
              className={`bg-white shadow-xl rounded-lg p-6 transition-transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3
                className={`text-xl font-semibold mt-4 ${darkMode ? "text-white" : "text-gray-800"}`}
              >
                {product.name}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {product.description}
              </p>
              <div className="flex justify-center items-center mt-4">
                <button
                  className={`${
                    darkMode ? "bg-orange-400 hover:bg-orange-500" : "bg-orange-500 hover:bg-orange-600"
                  } text-white w-1/2 px-5 py-2 rounded-md transition`}
                >
                  Cotar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
