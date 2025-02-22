import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Sobre() {
  return (
    <>
      <Nav />
      <div className="flex flex-col  justify-center items-center m-12 w-screen">
        <section className="flex flex-col  justify-center items-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Sobre Nós</h1>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Somos uma equipe apaixonada por tecnologia, criando soluções
            inovadoras para facilitar a vida das pessoas.
          </p>
        </section>

        {/* História */}
        <div className="mt-12 max-w-4xl text-center flex items-center flex-col">
          <h2 className="text-2xl font-semibold text-gray-700">
            Nossa História
          </h2>
          <img
            src="https://picsum.photos/300/200"
            alt=""
            className="bg-cover w-4/5"
          />
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            corporis voluptatem possimus odit nemo nam eum ipsam aliquid.
            Expedita odio tenetur officia eveniet neque ad libero dolorem
            quisquam sit dolores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt id dolore totam inventore vero necessitatibus
            dolorem porro, quis pariatur voluptatem repudiandae ab blanditiis
            expedita, harum dolor! Quae earum maiores consequatur.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-500">Missão</h3>
            <p className="text-gray-600 mt-2">
              Tornar o aprendizado de programação acessível para todos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-500">Visão</h3>
            <p className="text-gray-600 mt-2">
              Criar uma plataforma global de ensino interativo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-500">Valores</h3>
            <p className="text-gray-600 mt-2">
              Transparência, Inovação, Inclusão.
            </p>
          </div>
        </div>

        {/* Equipe */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-semibold text-orange-400 text-center">
            Nossa Equipe
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-64">
              <img
                src="https://picsum.photos/150"
                alt="Membro da equipe"
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">João Silva</h3>
              <p className="text-gray-600">
                CEO | Apaixonado por tecnologia e liderança.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-64">
              <img
                src="https://picsum.photos/150"
                alt="Membro da equipe"
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">João Silva</h3>
              <p className="text-gray-600">
                CFO | Apaixonado por tecnologia e liderança.
              </p>
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-64">
              <img
                src="https://picsum.photos/150"
                alt="Membro da equipe"
                className="rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">João Silva</h3>
              <p className="text-gray-600">
                Vendedor | Apaixonado por tecnologia e liderança.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
