import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // 引入样式文件

const App = () => {
  const [products, setProducts] = useState([
    { name: "商品1", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品2", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品3", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品4", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品5", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品6", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品7", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品8", img: "https://via.placeholder.com/150", quantity: 0 },
    { name: "商品9", img: "https://via.placeholder.com/150", quantity: 0 },
  ]);

  const toggleCart = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };

  return (
    <div className="container">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.img} alt={product.name} />
          <div>{product.name}</div>
          <button onClick={() => toggleCart(index)}>
            {product.quantity > 0 ? `- ${product.quantity}` : "加入购物车"}
          </button>
          {product.quantity > 0 && (
            <div className="quantity">数量: {product.quantity}</div>
          )}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
