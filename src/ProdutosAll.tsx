import Footer from "./Components/Footer";
import Nav from "./Components/Nav";


import DropdownProducts from "./Components/DropdownProdutos"


export default function ProdutosAll() {
  {
    /* Listagem de produtos */
  }

  return (
    <>
      <Nav />
      <div className="mt-10 flex items-center justify-center">
        <p className="text-5xl text-orange-500 ">
          Nossos Produtos
        </p>
      </div>
      <DropdownProducts title="Elétrica" jsonPath="../public/produtos.json" />
      <DropdownProducts title="Construção" jsonPath="../public/produtos.json" />
      <Footer />
    </>
  );
}
