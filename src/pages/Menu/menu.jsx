import React from "react";
import "./menu.css";
import shaurma from "../../images/shaurma.png";
import salat from "../../images/salat.png";
import sushi from "../../images/sushi.png";
import cappuccino from "../../images/cappuccino.png";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidBasket } from "react-icons/bi";

function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          <div className="menuOne">
            <h1>Menu</h1>
          </div>
          <div className="box">
            <div className="menuTwo">
              <img src={shaurma} alt="" />
              <div className="block">
                <h3>shawarma</h3>
                <div className="icons">
                  <p>5$</p>
                  <div className="divOne">
                    <span>
                      <FaRegEdit />
                    </span>
                  </div>
                  <div className="divTwo">
                    <span>
                      <MdDeleteOutline />
                    </span>
                  </div>
                  <div className="divThree">
                    <span>
                      <BiSolidBasket />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={salat} alt="" />
              <div className="block">
                <h3>salat</h3>
                <div className="icons">
                  <p>10$</p>
                  <div className="divOne">
                    <span>
                      <FaRegEdit />
                    </span>
                  </div>
                  <div className="divTwo">
                    <span>
                      <MdDeleteOutline />
                    </span>
                  </div>
                  <div className="divThree">
                    <span>
                      <BiSolidBasket />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={sushi} alt="" />
              <div className="block">
                <h3>sushi and rolls</h3>
                <div className="menuBtn">
                  <p>12.5$</p>
                  <button className="BtnOrders"> to order</button>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={cappuccino} alt="" />
              <div className="block">
                <h3>cappuccino</h3>
                <div className="menuBtn">
                  <p>3.5$</p>
                  <button className="BtnOrders"> to order</button>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={shaurma} alt="" />
              <div className="block">
                <h3>shawarma</h3>
                <div className="menuBtn">
                  <p>5$</p>
                  <button className="BtnOrders"> to order</button>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={shaurma} alt="" />
              <div className="block">
                <h3>shawarma</h3>
                <div className="menuBtn">
                  <p>5$</p>
                  <button className="BtnOrders"> to order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
