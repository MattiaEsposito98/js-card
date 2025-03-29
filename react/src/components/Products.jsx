export default function ({ prodotti }) {
  return (
    <>
      <ul>
        {prodotti.map(prodotto => (
          <li key={prodotto.id}>{prodotto.nome}
            <p>Prezzo: {prodotto.prezzo}</p>
            <p>Quantità: {prodotto.quantità}</p>
          </li>

        )

        )}
      </ul>
    </>
  )
}