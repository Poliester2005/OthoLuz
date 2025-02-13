import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Tênis Esportivo",
    description: "Confortável e ideal para corridas.",
    price: "R$ 299,90",
    image: "https://source.unsplash.com/300x200/?sneakers",
  },
  {
    id: 2,
    name: "Fone de Ouvido",
    description: "Som de alta qualidade e cancelamento de ruído.",
    price: "R$ 199,90",
    image: "https://source.unsplash.com/300x200/?headphones",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Monitore sua saúde com estilo.",
    price: "R$ 499,90",
    image: "https://source.unsplash.com/300x200/?smartwatch",
  },
  {
    id: 4,
    name: "Notebook Gamer",
    description: "Desempenho incrível para jogos.",
    price: "R$ 5.999,90",
    image: "https://source.unsplash.com/300x200/?laptop",
  },
  {
    id: 5,
    name: "Mochila Executiva",
    description: "Ideal para viagens e trabalho.",
    price: "R$ 179,90",
    image: "https://source.unsplash.com/300x200/?backpack",
  },
  {
    id: 6,
    name: "Câmera Profissional",
    description: "Capture momentos com alta qualidade.",
    price: "R$ 2.999,90",
    image: "https://source.unsplash.com/300x200/?camera",
  },
];

export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibe 3 produtos por vez
    slidesToScroll: 1, // Rola um por vez
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Mantém as setas visíveis
    responsive: [
      {
        breakpoint: 1024, // Tablets e notebooks pequenos
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Celulares
        settings: {
          slidesToShow: 1,
          arrows: false, // Remove setas no mobile
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8 overflow-hidden">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-600">
                  {product.price}
                </span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
