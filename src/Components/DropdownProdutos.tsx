import { useState, useEffect } from "react";

// Definindo o tipo do produto
interface Product {
  id: number;
  nome: string;
  descricao: string;
  imagem?: string;
}

// Definindo o tipo das props do componente
interface DropdownProductsProps {
  title: string;
  jsonPath: string;
}

const DropdownProducts = ({ title, jsonPath }: DropdownProductsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  // Carregar produtos do JSON
  useEffect(() => {
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => {
        const categoriaEncontrada = data.Materiais.find(
          (cat: any) => cat.Categoria === title
        );
        if (categoriaEncontrada) {
          const formattedProducts = categoriaEncontrada.Produtos.map(
            (product: any, index: number) => ({
              id: index,
              nome: product.Nome,
              descricao: product.Descrição,
              imagem: product.Imagem,
            })
          );
          setProducts(formattedProducts);
        }
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, [jsonPath, title]);

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {/* Botão Dropdown */}
      <div
        className="w-5/6 flex items-center justify-between h-24 text-center text-4xl bg-orange-100 rounded-lg px-6 cursor-pointer transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="flex-1 text-center">{title}</p>
        <span className="text-2xl">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Produtos (Dropdown Content) */}
      <div
        className={`w-4/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 transition-all duration-300 h-fit ${
          isOpen ? " opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center text-center m-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
            <img
              src={product.imagem}
              alt={product.nome}
              className="w-64 h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.nome}</h3>
            <p className="text-gray-600">{product.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownProducts;