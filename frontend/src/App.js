// import React, { useState } from 'react';
// import './App.css';
// import Airpods from './images1/Airpods.jpg';
// import Sandal from './images1/Sandal.jpg';
// import Wildcraft_bag from './images1/Wildcraft_bag.jpg';
// import Wrist_Watch from './images1/Wrist_Watch.jpg';



// function App() {
//   const [cart, setCart] = useState([]);

//   // Dummy data for products
//   const products = [
//     { id: 1, name: 'Airpods', price: 22000, rating: 4.9,image:Airpods },
//     { id: 3, name: 'Sandal', price: 4059, rating: 4.4, image:Sandal },
//     { id: 4, name: 'Wildcraft_bag', price: 2000, rating: 4.9, image: Wildcraft_bag},
//     { id: 5, name: 'Wrist_Watch', price: 1200, rating: 4.6, image:Wrist_Watch },
//     // Add other products here
//   ];

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="App">
//       <header>
//         <div className="navbar">
//           <input type="search" placeholder="Search" id="search-bar" />
//         </div>
//         <div className="filter-options">
//           <button>All</button>
//           <button>Men</button>
//           <button>Women</button>
//           <button>Watch</button>
//         </div>
//       </header>

//       <main>
//         <ProductList products={products}  addToCart={addToCart} />
//         <ShoppingCart cart={cart} />
//       </main>
//     </div>
//   );
// }

// function ProductList({ products, addToCart }) {
//   return (
//     <section className="product-listing">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} addToCart={addToCart} />
//       ))}
//     </section>
//   );
// }

// function ProductCard({ product, addToCart }) {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>Rs. {product.price}</p>
//       <p>({product.rating})</p>
//       <button onClick={() => addToCart(product)}>Add to cart</button>
//     </div>
//   );
// }

// function ShoppingCart({ cart }) {
//   // Calculate total
//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <aside className="shopping-cart">
//       <h2>Shopping Cart</h2>
//       {cart.map((item, index) => (
//         <div key={index} className="cart-item">
//           <h3>{item.name}</h3>
//           {/* Quantity controls would go here */}
//           <p>${item.price}</p>
//         </div>
//       ))}
//       <div className="cart-summary">
//         <p>Sub-Total</p>
//         <p>${total.toFixed(2)}</p>
//         <button>Checkout</button>
//       </div>
//     </aside>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Airpods from './images1/Airpods.jpg';
import Sandal from './images1/Sandal.jpg';
import Wildcraft_bag from './images1/Wildcraft_bag.jpg';
import Wrist_Watch from './images1/Wrist_Watch.jpg';
import cologne from './images1/cologne.jpg';
import headphones from './images1/headphones.jpg';
import kitchen_products from './images1/kitchen_products.jpg';
import nailpolish from './images1/nailpolish.jpg';
import shoes from './images1/shoes.jpg';
import bracelet from './images1/bracelet.jpg';



function App() {
  const [cart, setCart] = useState([]);

  // Dummy data for products
  const products = [
    { id: 1, name: 'Airpods', price: 22000, rating: 4.9, image: Airpods },
    { id: 3, name: 'Sandal', price: 4059, rating: 4.4, image: Sandal },
    { id: 4, name: 'Wildcraft_bag', price: 2000, rating: 4.9, image: Wildcraft_bag },
    { id: 5, name: 'Wrist_Watch', price: 1200, rating: 4.6, image: Wrist_Watch },
    { id: 5, name: 'cologne', price: 1300, rating: 4.6, image: cologne },
    { id: 6, name: 'headphones', price: 3500, rating: 4.6, image: headphones },
    { id: 7, name: 'kitchen_products', price: 2500, rating: 4.6, image: kitchen_products },
    { id: 8, name: 'nailpolish', price: 250, rating: 4.6, image: nailpolish },
    { id: 9, name: 'shoes', price: 3000, rating: 4.6, image: shoes },
    { id: 10, name: 'bracelet', price: 800, rating: 4.6, image: bracelet },

    // Add other products here
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <input type="search" placeholder="Search" id="search-bar" />
        </div>
        <div className="filter-options">
          <button>All</button>
          <button>Men</button>
          <button>Women</button>
          <button>Watch</button>
        </div>
      </header>

      <main>
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart cart={cart} />
      </main>
    </div>
  );
}

function ProductList({ products, addToCart }) {
  return (
    <section className="product-listing">
      {chunkArray(products, 5).map((rowProducts, index) => (
        <div key={index} className="product-row">
          {rowProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ))}
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <p>({product.rating})</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

function ShoppingCart({ cart }) {
  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          {/* Quantity controls would go here */}
          <p>${item.price}</p>
        </div>
      ))}
      <div className="cart-summary">
        <p>Sub-Total</p>
        <p>${total.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </aside>
  );
}

function chunkArray(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export default App;