import React from "react";
import { BsPersonFill, BsPieChartFill } from "react-icons/bs";
import { AiFillAppstore, AiFillInfoCircle } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { FaGraduationCap, FaCog, FaMoneyBillAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./LeftNav.scss";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="left-nav">
      <div className="container links column">
        <div className="column logo">
          <h1>
            <Link to="/">
              <h1>LOGO</h1>
            </Link>
          </h1>
        </div>
        <div className="links upper column">
          <Link to="/trade">
            <span className="link-content">
              <GrLineChart className="icon" style={{ color: "#fe72e4" }} />
              <p>Trade</p>{" "}
            </span>
          </Link>
          <Link to="/finances">
            <span className="link-content">
              <FaMoneyBillAlt className="icon" style={{ color: "#5e72e4" }} />
              <p>Finances</p>{" "}
            </span>
          </Link>
          <Link to="profile">
            <span className="link-content">
              <BsPersonFill className="icon" style={{ color: "#fb6340" }} />
              <p>Profile</p>{" "}
            </span>
          </Link>
          <Link to="apps">
            <span className="link-content">
              <AiFillAppstore className="icon" style={{ color: "magenta" }} />
              <p>Apps</p>{" "}
            </span>
          </Link>
          <Link to="analytics">
            <span className="link-content">
              <BsPieChartFill className="icon" style={{ color: "#ffd600" }} />
              <p>Analytics</p>{" "}
            </span>
          </Link>
          <Link to="/education">
            <span className="link-content">
              <FaGraduationCap className="icon" style={{ color: "#11cdef" }} />
              <p>Education</p>{" "}
            </span>
          </Link>
          <Link to="/info">
            <span className="link-content">
              <AiFillInfoCircle className="icon" style={{ color: "#ce043a" }} />
              <p>Help</p>{" "}
            </span>
          </Link>
        </div>

        <div className="divider"></div>
        <div className="links column lower">
          <a href="#">
            <span className="link-content">
              <FaCog className="icon" />
              <p>Settings</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <FiLogOut className="icon" />
              <p>Log out</p>{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default index;
