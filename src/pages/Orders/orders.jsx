import React, { useState } from "react";
import "./orders.css";
import imgOne from "../../images/order-Img-1.png";
import imgTwo from "../../images/order-Img-2.png";

const Orders = () => {
  const [count, setcount] = useState(1);
  const [plus, setplus] = useState(1);
  const [price, setprice] = useState(5);
  const [prices, setprices] = useState(12.5);
  function min() {
    if (count > 1) {
      setcount(count - 1);
    }
  }
  function minus() {
    if (plus > 1) {
      setplus(plus - 1);
    }
  }
  return (
    <section id="orders">
      <div className="container">
        <div className="orders">
          <div className="ordersOne">
            <h1>MY ORDERS</h1>
          </div>
          <div className="ordersTwo">
            <img src={imgOne} alt="" />
            <div className="text">
              <h3>cappuccino</h3>
              <p>{price * count}$</p>
            </div>
            <div className="delete">
              <button className="delBtn">delete order</button>
              <div className="pulus">
                <button
                  className="min"
                  onClick={() => {
                    min();
                  }}
                >
                  -
                </button>
                <h1>{count + "x"}</h1>
                <button
                  className="pul"
                  onClick={() => {
                    setcount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="ordersTwo">
            <img src={imgTwo} alt="" />
            <div className="text">
              <h3>sushi and rolls</h3>
              <p>{prices * plus}$</p>
            </div>
            <div className="delete">
              <button className="delBtn">delete order</button>
              <div className="pulus">
                <button
                  className="min"
                  onClick={() => {
                    minus();
                  }}
                >
                  -
                </button>
                <h1>{plus}x</h1>
                <button
                  className="pul"
                  onClick={() => {
                    setplus(plus + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
