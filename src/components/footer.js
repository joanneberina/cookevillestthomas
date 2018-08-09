import React from "react";
import styled from "react-emotion";

//style
const Footer = styled("footer")`
  font-size: 0.9rem;
  .footer-top {
    display: grid;
    grid-template-columns: 10% repeat(2, 1fr) 10%;
    padding: 4em 0;
    background-color: #404077;
    color: white;
    .contact {
      grid-column-start: 2;
      margin: 0 auto;
    }
    .button-footer {
      margin: 0 auto;
      .button {
        font-size: 1rem;
        text-align: center;
        padding: 0 3rem;
        margin: 1rem 0;
        border: solid 1px white;
        border-radius: 0.5rem;
        background-color: rgba(255, 253, 249, 0.2);
        &:hover {
          background-color: #ff8229;
        }
      }
    }
  }
  .poweredby,
  .copyright {
    background-color: rgb(180, 180, 180);
    text-align: center;
    font-size: 0.6rem;
    .img-container {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-column-gap: 2rem;
      margin: 0 auto;
      .netlify {
        grid-column-start: 4;
      }
      img {
        height: 2rem;
        vertical-align: middle;
      }
    }
    p {
      margin: 0 auto;
      padding: 0.5rem;
    }
  }
`;

//component
export default () => {
  return (
    <Footer>
      <div className="footer-top">
        <div className="contact">
          <p>
            St. Thomas Aquinas Catholic Church
            <br />
            421 North Washington Avenue
            <br />
            Cookeville, Tennessee 38501
          </p>
          <p>
            Phone: 931-526-2575
            <br />
            Fax: 931-526-5869
            <br />
            Email: stthomasaquianas@citlink.net
          </p>
        </div>
        <div className="button-footer">
          <div className="button">
            <p>
              SUPPORT OUR &nbsp;
              <i className="fas fa-church" />
            </p>
          </div>
          <div className="button">
            <p>
              FOLLOW US ON &nbsp;
              <i className="fab fa-facebook" />
            </p>
          </div>
        </div>
      </div>
      <div className="poweredby">
        <p>POWERED BY:</p>
        <div className="img-container">
          <div className="netlify">
            <img
              src="./resources/images/netlify-light.svg"
              alt="Netlify logo"
            />
          </div>
          <div className="react">
            <img src="./resources/images/react-icon.svg" alt="React JS logo" />
          </div>
          <div className="netlifycms">
            <img
              src="./resources/images/netlify-cms-logo.svg"
              alt="Netlify logo"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright 2018 - St. Thomas Aquinas Cookeville. All rights reserved.
        </p>
      </div>
    </Footer>
  );
};
