import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import "./productCard.css";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>
        <div>
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div className="item-info">
                <div>
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">{item.price}</div>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
