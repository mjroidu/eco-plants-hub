import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Eco Plants Hub</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/sigin">Sign In</a>
        </div>

    </header>
    <main>
        
        <div className="row center">

            {
              data.products.map(product => (

                <Product key={product._id} product={product}></Product>

              ))

            }

           

        </div>

    </main>
    <footer className="row center">
        © Copyright 2021 - Eco Plants Hub
    </footer>
</div>
  );
}

export default App;
