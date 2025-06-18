import { useRef } from "react";
import Home from "./sections/home";
import About from "./sections/about";
import Products from "./sections/products";

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
