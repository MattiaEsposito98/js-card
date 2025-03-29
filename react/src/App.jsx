import { useState } from "react"
import Products from "./components/products";
const prodotti = [
  { id: 1, nome: "Laptop", prezzo: 1200, quantità: 3 },
  { id: 2, nome: "Smartphone", prezzo: 800, quantità: 5 },
  { id: 3, nome: "Tablet", prezzo: 400, quantità: 2 },
  { id: 4, nome: "Cuffie", prezzo: 150, quantità: 10 },
  { id: 5, nome: "Caricatore", prezzo: 25, quantità: 15 }
];

export default function App() {
  const [count, setCount] = useState(0)

  function incremento() {
    return setCount(count + 1)
  }

  function decremento() {
    return setCount(count - 1)
  }
  return (
    <>
      <div className="container">
        <h1>Ciao</h1>
        <p>
          <button onClick={incremento}>Aumenta</button>
          {count}
          <button onClick={decremento}>Diminuisci</button>
        </p>
        <h3>Lista prodotti <Products prodotti={prodotti} /></h3>
      </div>

    </>
  )
}