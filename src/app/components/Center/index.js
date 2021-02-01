import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Center.scss";

function Center() {
  return (
    <div className="center">
      <div className="container grid-container">
        <TestItems />
        <TestItems />
        <TestItems />
        <TestItems />
        <TestItems />
        <TestItems />
        <TestItems />
        <TestItems />
      </div>
    </div>
  );
}
function TestItems() {
  return (
    <div className="item shadow column">
      <h2>
        <Link to="/trade">Placeholder</Link>
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint optio
        earum perferendis, iste, laboriosam fuga atque fugit placeat similique,
        officia suscipit quas quis porro. Autem repudiandae eveniet eum, sunt
        illo voluptatibus ea ex maiores laudantium corrupti debitis, voluptate
        fugit recusandae optio, dolorem minus. Itaque quae tempora magni
        assumenda dignissimos!
      </p>
    </div>
  );
}
export default Center;
