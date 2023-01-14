import React from "react";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";

const Page = () => {
  const sectionStyle = {
    marginLeft: "250px",
    marginTop: "30px",
  };

  const headerStyle = {
    padding: "25px",
    position: "sticky" as "sticky",
    top: "0",
    background: "black",
    textAlign: "center" as "center",
    display: "flex",
    justifyContent: "center",
    fontSize: "36px",
  };

  const headerLinkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div id="page">
      <header style={headerStyle}>
        <Link to="/" style={headerLinkStyle}>
          Music Albums
        </Link>
      </header>
      <NavBar />
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </div>
  );
};

export default Page;
