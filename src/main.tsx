import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Sobre from "./Sobre";
import ProdutosAll from "./ProdutosAll";
import NotFound from "./NotFound";
import Contato from "./Contato";

ReactDOM.createRoot(document.getElementById("root") as HTMLDataElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<ProdutosAll />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
