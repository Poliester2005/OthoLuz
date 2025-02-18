import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "./assets/logo.png";
import calling from "./assets/calling.png";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-orange-500 py-10">
      <div className="container mx-auto px-6 flex justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-96">
          {/* Lado Esquerdo - Imagens */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Imagem 1"
              className="w-2/3 h-auto rounded-lg"
            />
            <img
              src={calling}
              alt="Imagem 2"
              className="w-2/3 h-auto rounded-lg"
            />
          </div>

          {/* Lado Direito - Contatos */}
          <div className="">
            <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>

            {/* E-mails */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <SiGmail className="text-red-500 text-xl mr-2" />
                <a
                  href="mailto:othovendascomercial@gmail.com"
                  className="hover:text-orange-400"
                >
                  othovendascomercial@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <SiGmail className="text-red-500 text-xl mr-2" />
                <a
                  href="mailto:comercial.othovendas@gmail.com"
                  className="hover:text-orange-400"
                >
                  comercial.othovendas@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-4 flex items-center">
              <FaWhatsapp className="text-green-500 text-xl mr-2" />
              <a
                href="https://wa.me/55489983601000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                +55 (48) 99836-0100 
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center">
              <FaInstagram className="text-pink-500 text-xl mr-2" />
              <a
                href="https://instagram.com/acessoria_comercialotholuz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                @assessoria_comercialotholuz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
