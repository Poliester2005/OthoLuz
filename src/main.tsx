import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { CarouselDefault } from "./Carossel";


ReactDOM.createRoot(document.getElementById("root") as HTMLDataElement).render(
  <ThemeProvider>
    <App></App>
  </ThemeProvider>
);
