import React from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaChevronDown, FaVolumeDown } from "react-icons/fa";
import { HiOutlineArrowsExpand } from "react-icons/hi";

import "./TopNav.scss";

function index() {
  return (
    <div className="top-nav flex relative">
      <div className="left flex">
        <span className="items flex">
          <img className="lang-img" src="/img/language/en.png" alt="english" />{" "}
          <p>English</p>
        </span>
        <span className="items flex">
          <div className="flex">
            <a href="#" className="flex">
              <HiOutlineArrowsExpand className="icon" /> <p></p>
            </a>
            <a href="#" className="flex">
              <IoMdHelpCircle className="icon" />
              <p></p>
            </a>
            <a href="#" className="flex">
              <FaVolumeDown className="icon" />
              <p></p>
            </a>
            <a href="#" className="flex">
              <BiSupport className="icon" /> <p>Live Chat</p>
            </a>
          </div>
        </span>
      </div>
      <div className="right flex">
        <span className="items profile right-items flex">
          <img
            className="profile-photo"
            src="/img/profile.jpg"
            alt="profile photo"
          />{" "}
          <div className="column">
            <p>User Name</p>
            <button>New</button>
          </div>
        </span>
        <span className="items right-items flex">
          <div className="column">
            <p>Demo Account</p>
            <p>$1000</p>
          </div>
          <FaChevronDown style={{ marginLeft: "6px", cursor: "pointer" }} />
        </span>
        <span className="items right-items flex">
          <button className="deposit-btn">Deposit</button>
        </span>
      </div>
    </div>
  );
}

export default index;
