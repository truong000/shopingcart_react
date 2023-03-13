import { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ctx } from './context';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { initialState, reducerFn } from './reducer';

function App(): JSX.Element {

  const [state, dispatch] = useReducer(reducerFn, initialState)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_PRODUCTS", payload: data })
      })
  }, [])

  return (
    <ctx.Provider value={state}>
      <div className="App">
        <div>
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="Cart">Cart</a></li>
          </ul>
        </div>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='products/:title' element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ctx.Provider>
  );
}

export default App;
