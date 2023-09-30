import Store from '../api/products.json'

export function Products () {
  const randomInt = Math.round(Math.random() * 10)
  const limit =
    randomInt < 3 || randomInt > Store.products.length ? 3 : randomInt
  return (
    <main className='page'>
      {Store.products.slice(0, limit).map(product => (
        <article className='card' key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} />
          <p className='price'>${product.price}</p>
          <p>{product.category}</p>
        </article>
      ))}
    </main>
  )
}
