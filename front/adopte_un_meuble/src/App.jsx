import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./Components/ProductCard.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="cards_section">
        <ProductCard
          image='src/assets/cat(1).jpg'
          title='Baby Cat'
          price='2$'
          divers='this is a cat'
          seller='Amy'
        />
        <ProductCard
          image='src/assets/cat(2).jpg'
          title='Unhappy Cat'
          price='5$'
          divers='this is a cat'
          seller='Ames'
        />
        <ProductCard
          image='src/assets/cat(3).jpg'
          title='Anxious Cat'
          price='3$'
          divers='this is a cat'
          seller='Anna'
        />
        <ProductCard
          image='src/assets/cat(4).jpg'
          title='Trying his best Cat'
          price='1 candy'
          divers='this is a cat'
          seller='Marie'
        />
        <ProductCard
          image='src/assets/cat(5).jpg'
          title='gen Z Cat'
          price='for free'
          divers='this is a cat'
          seller='Yuna'
        />
      </div>
    </>
  );
}

export default App;
