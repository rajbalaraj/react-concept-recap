import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products = [
  //   { name: 'laptopoo', price: 153000 },
  //   { name: 'phoneee', price: 93000 },
  //   { name: 'watchuu', price: 33000 },
  //   { name: 'tabletoo', price: 5000 },
  // ]
  return (

    <div className="App">

      <Counter></Counter>
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name="laptop" price=" 50000"></Product> */}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55)
  // const increaseCopunt = () => {
  //   const newCount = count + 1;
  //   setacount(newCount);
  // }

  // shortcut
  const increaseCopunt = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1)



  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCopunt}>Increase</button>
      <button onClick={decreaseCount}>Decerease</button>
    </div>
  )
}

function Product(props) {

  return (
    <div>
      {/* <h3>Name:{props.name}</h3> */}
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
