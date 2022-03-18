import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const[count , setCount] = useState(0);
  const addToCart = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const removeCart = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts addToCart={addToCart} removeCart={removeCart}></AllProducts>
    </div>
  );
}

export default App;
