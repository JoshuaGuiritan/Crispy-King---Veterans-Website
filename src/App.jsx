import { useRef } from "react";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";

function App() {

  const about = useRef(null);
  const products = useRef(null);

  return (
    <div className="overflow-x-hidden">
      <Home about={about} products={products}/>
      <About about={about}/>
      <Products products={products}/>
    </div>
  );
}

export default App;
