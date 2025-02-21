import { InstagramEmbed } from "react-social-media-embed";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contato() {
  return (
    <>
      <Nav />
      <div className="w-full flex items-center justify-center ">
        <div className="w-5/6 flex items-center justify-evenly p-10 bg-orange-500 m-10 rounded-3xl">
          <InstagramEmbed
            url="https://www.instagram.com/p/C4BQKGXgKHW/"
            width={400}
          />
          <div className="h-full bg-red-900">
            {/* E-mails */}
            <div className="mb-4 h-5/6">
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

            <div className="mb-4 flex items-center">
              <FaWhatsapp className="text-green-500 text-xl mr-2" />
              <a
                href="https://wa.me/5548991069025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                +55 (48) 99106-9025
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center">
              <FaInstagram className="text-pink-500 text-xl mr-2" />
              <a
                href="https://instagram.com/assessoria_comercialotholuz"
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

      <Footer />
    </>
  );
}
