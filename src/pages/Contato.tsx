import { InstagramEmbed } from "react-social-media-embed";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contato() {
  return (
    <>
      <Nav />
      <div className="w-full flex justify-center p-10">
        <div className="w-full max-w-7xl flex items-center justify-center p-6 m-0 rounded-3xl shadow-2xl">
          
          {/* Instagram Embed Section */}
          <div className="w-full max-w-[30%] bg-white border-2 border-gray-300 rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
            <InstagramEmbed
              url="https://www.instagram.com/p/C4BQKGXgKHW/"
              maxWidth={300}  
              hideCaption={false}
            />
          </div>

          {/* Contact Information Section */}
          <div className="h-full min-w-[50%] max-w-[70%] bg-white p-6 rounded-lg space-y-6 flex justify-center flex-col items-center">
            <p className="text-5xl text-orange-500 ">
              Fale conosco
            </p>
            {/* E-mails */}
            <div>
              <div className="flex items-center mb-4">
                <SiGmail className="text-red-500 text-xl mr-2" />
                <a
                  href="mailto:othovendascomercial@gmail.com"
                  className="text-gray-800 hover:text-orange-400 transition-colors duration-300"
                >
                  othovendascomercial@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <SiGmail className="text-red-500 text-xl mr-2" />
                <a
                  href="mailto:comercial.othovendas@gmail.com"
                  className="text-gray-800 hover:text-orange-400 transition-colors duration-300"
                >
                  comercial.othovendas@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="space-y-4">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 text-xl mr-2" />
                <a
                  href="https://wa.me/5548998360100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-400 transition-colors duration-300"
                >
                  +55 (48) 99836-0100
                </a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 text-xl mr-2" />
                <a
                  href="https://wa.me/5548991069025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-400 transition-colors duration-300"
                >
                  +55 (48) 99106-9025
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center">
              <FaInstagram className="text-pink-500 text-xl mr-2" />
              <a
                href="https://instagram.com/assessoria_comercialotholuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-400 transition-colors duration-300"
              >
                @assessoria_comercialotholuz
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
