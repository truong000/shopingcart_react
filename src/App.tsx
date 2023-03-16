import React from 'react';
import { useReducer } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { ctx } from './context';
import { StateInterface } from './globalTypes';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';


import { initialState, reducer } from './reducer';

function App(): JSX.Element {

  const [state, dispatch] = useReducer(reducer, initialState())

  React.useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
    } catch (err) {
      dispatch({ type: "ERROR" })
    }
  }, [])

  console.log("state", state);

  return (
    <ctx.Provider value={state}>
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
                dispatch={dispatch}
                state={state as StateInterface}
              />}
            />
            <Route path='products/:title' element={
              <ProductDetail
                dispatch={dispatch}
                state={state as StateInterface}
              />}
            />
            <Route path='/shopping-cart' element={
              <Cart
                state={state as StateInterface}
                dispatch={dispatch}
              />
            } />
          </Routes>
        </main>
      </div>
    </ctx.Provider>
  );
}

export default App;
