import { useRef } from "react";
import Home from "./sections/home";
import About from "./sections/about";
import Products from "./sections/products";
import Contacts from "./sections/contacts";

function App() {

  const about = useRef(null);
  const products = useRef(null);
  const contacts = useRef(null);

  return (
    <div className="">
      <Home about={about} products={products} contacts={contacts}/>
      <About about={about}/>
      <Products products={products}/>
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
