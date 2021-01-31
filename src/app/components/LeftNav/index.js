import React from "react";
import { BsPersonFill, BsPieChartFill } from "react-icons/bs";
import { AiFillAppstore, AiFillInfoCircle } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { FaGraduationCap, FaCog, FaMoneyBillAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./LeftNav.scss";

function index() {
  return (
    <div className="left-nav">
      <div className="container links column">
        <div className="column logo">
          <h1>LOGO</h1>
        </div>
        <div className="links upper column">
          <a href="#">
            <span className="link-content">
              <GrLineChart className="icon" style={{ color: "#fe72e4" }} />
              <p>Trade</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <FaMoneyBillAlt className="icon" style={{ color: "#5e72e4" }} />
              <p>Finances</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <BsPersonFill className="icon" style={{ color: "#fb6340" }} />
              <p>Profile</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <AiFillAppstore className="icon" style={{ color: "#f5365c" }} />
              <p>Apps</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <BsPieChartFill className="icon" style={{ color: "#ffd600" }} />
              <p>Analytics</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <FaGraduationCap className="icon" style={{ color: "#11cdef" }} />
              <p>Education</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="link-content">
              <AiFillInfoCircle className="icon" style={{ color: "#f3a4b5" }} />
              <p>Help</p>{" "}
            </span>
          </a>
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
