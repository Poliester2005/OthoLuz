import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Sobre() {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center m-12">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Sobre Nós</h1>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Somos uma empresa Catarinense, atuamos com as melhores marcas e produtos, em todo território nacional, especializada em consultoria comercial, fornecendo estratégias para estimular negócios e consolidar alianças. Com uma compreensão aprofundada do mercado e um compromisso com a excelência, auxiliamos empresas a ampliar suas possibilidades, aprimorar processos e obter resultados superiores.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl text-center mt-4">
            Nossa vantagem reside na proximidade com nossos clientes, compreendendo suas demandas e criando estratégias customizadas para cada obstáculo. Trabalhamos com clareza, inovação e um firme compromisso com o desenvolvimento sustentável, sempre em busca das melhores oportunidades no âmbito comercial.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl text-center mt-4">
            Seja para ampliar sua presença, aprimorar sua performance comercial ou consolidar sua rede de relacionamentos, estamos preparados para auxiliar sua empresa a atingir novos níveis.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl text-center mt-4 font-semibold">
            Entre em contato e descubra como podemos converter obstáculos em chances!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
