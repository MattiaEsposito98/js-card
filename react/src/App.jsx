import { useState } from "react"
import Products from "./components/products"
import { Link } from "react-router-dom"
const prodotti = [
  { id: 1, nome: "Laptop", prezzo: 1200, quantità: 3 },
  { id: 2, nome: "Smartphone", prezzo: 800, quantità: 5 },
  { id: 3, nome: "Tablet", prezzo: 400, quantità: 2 },
  { id: 4, nome: "Cuffie", prezzo: 150, quantità: 10 },
  { id: 5, nome: "Caricatore", prezzo: 25, quantità: 15 }
];

const initialFormData = {
  nome: "",
  email: "",
}

export default function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [change, setChange] = useState(false)

  function incremento() {
    return setCount(count + 1)
  }

  function decremento() {
    return setCount(count - 1)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dati inviati:", formData);
  }


  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <>
      <div className="container">
        {/* <Link to={'./form'}>Form</Link> */}
        <h1>Ciao</h1>
        <p>
          <button onClick={incremento}>Aumenta</button>
          {count}
          <button onClick={decremento}>Diminuisci</button>
        </p>
        {/* <h3>Lista prodotti <Products prodotti={prodotti} /></h3> */}
        <form onSubmit={handleSubmit}>
          <input type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange} />
          <label htmlFor="name">Nome</label>

          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}

          />
          <button type="submit">Invia</button>
        </form>
      </div>

      <p className={change ? 'color' : ''}> Testo che cambierà colore <button onClick={() => setChange(!change)}>Clicca</button></p >


    </>
  )
}