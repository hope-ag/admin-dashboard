import React from "react";

function InnerNav(props) {
  return (
    <header
      style={{
        margin: "0",
        width: "100%",
        height: "4rem",
        color: "#fff",
        background: "#5e72e4",
      }}
    >
      <nav style={{ height: "100%", width: "100%", margin: "0" }}>
        <ul
          className="flex"
          style={{ height: "100%", width: "100%", margin: "0" }}
        >
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

export default InnerNav;
