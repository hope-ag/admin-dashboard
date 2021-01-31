import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { BsLightningFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

import "./RightNav.scss";

function index() {
  return (
    <div className="right-nav">
      <div className="column  container">
        <div className="column item first">
          <GiHamburgerMenu className="icon" />
          <p></p>
        </div>
        <div className="column item">
          <HiOutlineSwitchVertical className="icon" />
          <p>Deals</p>
        </div>
        <div className="column item">
          <BsLightningFill className="icon" />
          <p>Trends</p>
        </div>
        <div className="column item">
          <FaUserPlus className="icon" />
          <p>Social</p>
        </div>
      </div>
    </div>
  );
}

export default index;
