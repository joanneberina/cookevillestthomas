import React, { Fragment } from "react";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import STACLogo from "~/resources/images/STAC-logo.svg";

//style
const Header = styled("header")`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 20% 80%;
    grid-template-areas: 
        ". . logo logo . fb"
        ". . logo logo . .";
    }
    .social {
        grid-area: fb;
        color: #404077;
        margin: 0 auto;
        font-size: 1.2rem;
    }
    .logo {
        grid-area: logo;
        width: 100%;
        max-width: 20rem;
        margin: 0 auto;
    }
`;
const Nav = styled("nav")`
  display: flex;
  background-color: #404077;
  padding: 0.7rem;
  .burgermenu {
    display: none;
  }
  .desktop {
    display: flex;
    list-style: none;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  li {
    font-size: 1.1rem;
    letter-spacing: 0.025rem;
    text-align: center;
    padding: 0 1.5rem;
    a {
      text-decoration: none;
      color: white;
      position: relative;
      transition: ease-in 0.4s;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 0%;
        border-bottom: 2px solid #f2b350;
        transition: ease-in 0.5s;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
`;

//component
export default () => {
  return (
    <div>
      <Header>
        <div className="social">
          <p>
            Follow us on <FontAwesomeIcon icon={faFacebook} />
          </p>
        </div>
        <div className="logo">
          <img src={STACLogo} alt="St. Thomas Aquinas Church logo" />
        </div>
      </Header>
      <Nav>
        <ul className="desktop">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a href="#ministries">Ministries</a>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <a href="#growth">Spiritual Growth</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="burgermenu">
          <a className="menu">
            <i className="fa fa-bars" /> Menu
          </a>
          <a>
            Follow us on <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </Nav>
    </div>
  );
};
