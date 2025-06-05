import './Product.css'

function Product({ name, price ,watch}) {
  let style={backgroundColor:price>50000 ? "yellow" :""}
  return (
    <div className='Product' style={style}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{price > 50000  && <li>5 % discount </li>}</p>
    </div>
  );
}

export default Product;



