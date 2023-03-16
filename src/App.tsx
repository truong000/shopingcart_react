import React from 'react';
import { useReducer } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { ctx } from './context';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { getProduct } from './redux/productSlice';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store';


function App(): JSX.Element {

  const cart = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch()
  React.useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch(getProduct(data)))
    } catch (err) {
      dispatch({ type: "ERROR" })
    }
  }, [])


  return (
    <div className="App">
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shopping-cart">Cart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={
            <Home
            />}
          />
          <Route path='products/:id' element={
            <ProductDetail />}
          />
          {/* <Route path='/shopping-cart' element={
                <Cart                />
            }/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
