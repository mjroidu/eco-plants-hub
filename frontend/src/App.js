import React from 'react';
import data from './data';

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

                 /* <!-- CARD BODY STRTS HERE--> */
            <div key ={product.id} className="card"> 
            <a href= {`/product/${product._id}`}>
                {/* <!-- image size: 680px by 830 px--> */}
                <img 
                className= "medium" 
                src={product.image} 
                alt={product.name} />
            </a>
            <div className="card-body">
            <a href= {`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price"> 
                    ₹ {product.price}
                </div>
            </div>
        </div>
        /* <!-- CARD BODY ENDS HERE--> */

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
