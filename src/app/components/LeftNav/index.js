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
        <div className="logo">
          <img
            src="/img/brand/logo.png"
            alt="brand-logo"
            className="logo-img"
          />
        </div>
        <div className="links upper column">
          <a href="#">
            <span className="flex">
              <GrLineChart className="icon" style={{ color: "#fe72e4" }} />
              <p>Trade</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <FaMoneyBillAlt className="icon" style={{ color: "#5e72e4" }} />
              <p>Finances</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <BsPersonFill className="icon" style={{ color: "#fb6340" }} />
              <p>Profile</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <AiFillAppstore className="icon" style={{ color: "#f5365c" }} />
              <p>Apps</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <BsPieChartFill className="icon" style={{ color: "#ffd600" }} />
              <p>Analytics</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <FaGraduationCap className="icon" style={{ color: "#11cdef" }} />
              <p>Education</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
              <AiFillInfoCircle className="icon" style={{ color: "#f3a4b5" }} />
              <p>Help</p>{" "}
            </span>
          </a>
        </div>
        <div className="links column lower">
          <a href="#">
            <span className="flex">
              <FaCog className="icon" />
              <p>Settings</p>{" "}
            </span>
          </a>
          <a href="#">
            <span className="flex">
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
