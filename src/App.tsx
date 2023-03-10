import { Fragment, useEffect, useReducer } from 'react';
import './App.css';
import { Product } from './containers/Product/Index';
import { ctx } from './context';
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

  console.log("State", state);

  return (
    <ctx.Provider value={state}>
      <div className="App">
        <div className='TableList'>
        {
          state.products.length ? (
            <Fragment>
              {state.products.map(product => (
                <Product 
                  key={product.id}
                  image={product.image}
                  title={product.title}
                />
              ))}
            </Fragment>
          ) : (
            <h2>Loading...</h2>
          )
        }
        </div>
      </div>
    </ctx.Provider>
  );
}

export default App;
