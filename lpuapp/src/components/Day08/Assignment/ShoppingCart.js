import React, { useState, useEffect } from "react";

function ShoppingCart() {

  const products = [
    { id: 1, name: "Laptop", price: 1200, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 },
    { id: 4, name: "Headphones", price: 150, quantity: 15 },
    { id: 5, name: "Smartwatch", price: 250, quantity: 8 },
    { id: 6, name: "Keyboard", price: 100, quantity: 20 },
    { id: 7, name: "Mouse", price: 50, quantity: 25 },
  ];

  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    console.log("hello");
    setCount(items.length);
    setPrice(items.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [items]);

  const addToCart = (item) => {
    const result = items.findIndex((it) => it.id === item.id);

    if (result !== -1) {
      setItems((state) => {
        return state.map((it, index) =>
          index === result ? { ...it, quantity: it.quantity + 1 } : it
        );
      });
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h3>Items in Cart</h3>
      {products.map((item) => (
        <div key={item.id}>
          <p>Item Id : {item.id}</p>
          <p>Item Name : {item.name}</p>
          <p>Item Price : {item.price}</p>
          <p>Item Quantity : {item.quantity}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
      <h3>You Cart</h3>
      {items.length > 0 &&
        items.map((item) => (
          <div
            key={item.id}
            style={{ border: "2px solid black", background: "aliceblue" }}
          >
            <p>Item Id : {item.id}</p>
            <p>Item Name : {item.name}</p>
            <p>Item Price : {item.price}</p>
            <p>Item Quantity : {item.quantity}</p>
          </div>
        ))}
      <h4>Total Items in Cart: {count}</h4>
      <h4>Total Price: {price}</h4>
    </div>
  );
}

export default ShoppingCart;
