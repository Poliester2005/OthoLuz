import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import ProdutosAll from "./pages/ProdutosAll";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";

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
