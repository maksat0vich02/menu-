import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <div className="adminOne">
            <h3>CREATE PRODUCT</h3>
          </div>
          <div className="adminTwo">
            <input type="text" placeholder="image URL" />
            <input type="text" placeholder="food name" />
            <input type="text" placeholder="price" />
            <button className="creBtn">create</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
