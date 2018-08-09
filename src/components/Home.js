import React from "react";
import styled from "react-emotion";

//style
const Home = styled("div")`
  // Hero image
  .main-top {
    width: 100%;
    height: calc(100vw / 3);
    background-image: url("../images/inside-church.jpg");
    background-size: cover;
    background-position: center;
  }
  // Section Headers
  .heading {
    margin: 2rem auto;
    color: #565656;
    border-top: 1px solid #f2b350;
    border-bottom: 1px solid #f2b350;
    width: 23rem;
    h2 {
      font-size: 1.25rem;
      text-align: center;
    }
    i {
      color: #f2b350;
      text-align: center;
    }
  }
  // Upcoming Events
  .events-container {
    padding: 2rem 2rem;
    .event-grid-wrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      .event-card {
        img {
          width: 100%;
          margin: 0 auto;
          object-fit: cover;
        }
        background-color: #fffaf2;
        padding: 1rem;
        border: solid 1px #fffaf2;
        position: relative;
        &:hover {
          box-shadow: 0 5px 5px 0 #f2b350;
          transition: linear 0.4s;
        }
      }
      .article-title {
        h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        h5 {
          font-size: 0.75rem;
          margin-top: 0;
          font-weight: 300;
        }
      }
      .readmore {
        font-size: 0.8rem;
        color: #f2b350;
      }
    }
  }
  // Support Our Church
  .support-container {
    background-image: url("../images/support-back.jpg");
    background-size: cover;
    margin-top: 2rem;
    padding: 3rem;
    position: relative;
    transition: linear 3s;
    color: #2f2f2f;

    h1 {
      color: white;
      font-size: 1.5rem;
      text-align: center;
    }
    .support-buttons {
      display: grid;
      grid-template-columns: 10% repeat(2, 1fr) 10%;
      grid-column-gap: 2rem;
    }
    .join {
      grid-column-start: 2;
    }
    .join,
    .give {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: solid 1px white;
      color: white;
      text-align: center;
      padding: 1em;
      background-color: rgba(255, 253, 249, 0.2);
      &:hover {
        background-color: rgba(255, 253, 249, 0.5);
        color: @heading-text;
      }
      i {
        font-size: 1.5rem;
      }
      p {
        margin: 1em 0 0 0;
        font-family: Raleway, sans-serif;
        font-size: 0.9rem;
        letter-spacing: 0.02rem;
      }
    }
  }
  // Readings for the week
  .readings-container {
    padding: 3rem;
    background-color: rgba(255, 255, 255, 0.9);
    background-image: url("../images/reading.jpg");
    background-size: cover;
    .readings {
      display: flex;
      width: 70%;
      margin: 0 auto;
      .card {
        margin: 0 auto;
        padding: 1rem 0;
        h4 {
          font-weight: 600;
          color: @blue;
          margin: 0;
        }
      }
    }
  }
  // Mass Schedule
  .sched-container {
    margin: 2rem auto;
    .schedule {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
      background-color: #fffaf2;
      .img-mass {
        width: 100%;
        height: calc(100vh / 3);
        background-image: url("../images/masstimes.jpg");
        background-size: cover;
        background-position: center;
      }
      .mass-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem;
        h4 {
          color: #f2b350;
          margin: 1.5rem 0 0.25rem 0;
        }
        p {
          margin: 0;
          padding-bottom: 0.5rem;
        }
      }
    }
  }
`;

//component
export default () => {
  return (
    <Home>
      <section className="main-top" />
      <section className="events-container">
        <div className="heading">
          <h2>
            <i className="fas fa-bell">UPCOMING EVENTS</i>
          </h2>
        </div>
        <div className="event-grid-wrap">
          <article className="event-card">
            <div className="img-event">
              <img src="./resources/images/communion.jpg" alt="" />
            </div>
            <div className="article-title">
              <h3>First Holy Communion</h3>
              <h5>Posted May 31, Sunday | 10:30 AM</h5>
            </div>
            <div className="article-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut, nobis, nulla inventore error accusantium tempora
                illo ut commodi iste alias neque at minus distinctio ad in cum
                non quis
              </p>
            </div>
            <div className="readmore">
              <h4>
                <i className="fas fa-arrow-circle-right"> READ MORE</i>
              </h4>
            </div>
          </article>
          <article className="event-card">
            <div className="img-event">
              <img src="./resources/images/communion.jpg" alt="" />
            </div>
            <div className="article-title">
              <h3>First Holy Communion</h3>
              <h5>Posted May 31, Sunday | 10:30 AM</h5>
            </div>
            <div className="article-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut, nobis, nulla inventore error accusantium tempora
                illo ut commodi iste alias neque at minus distinctio ad in cum
                non quis
              </p>
            </div>
            <div className="readmore">
              <h4>
                <i className="fas fa-arrow-circle-right"> READ MORE</i>
              </h4>
            </div>
          </article>
          <article className="event-card">
            <div className="img-event">
              <img src="./resources/images/communion.jpg" alt="" />
            </div>
            <div className="article-title">
              <h3>First Holy Communion</h3>
              <h5>Posted May 31, Sunday | 10:30 AM</h5>
            </div>
            <div className="article-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut, nobis, nulla inventore error accusantium tempora
                illo ut commodi iste alias neque at minus distinctio ad in cum
                non quis
              </p>
            </div>
            <div className="readmore">
              <h4>
                <i className="fas fa-arrow-circle-right">READ MORE</i>
              </h4>
            </div>
          </article>
        </div>
      </section>
      <section className="support-container">
        <h1>SUPPORT OUR CHURCH</h1>
        <div className="support-buttons">
          <div className="join">
            <i className="fas fa-hands-helping" />
            <p>Join and voluunteer in our Ministries</p>
          </div>
          <div className="give">
            <i className="fas fa-hand-holding-heart" />
            <p>
              Give your weekly mass offering, monthly tithes or one time love
              offering.
            </p>
          </div>
        </div>
      </section>
      <section className="readings-container">
        <div className="heading">
          <h2>
            {" "}
            <i className="fas fa-book-open">READINGS FOR THE WEEK</i>
          </h2>
        </div>
        <div className="readings">
          <div className="card">
            <h4>MON, May 22, 2018</h4>
            <p>
              Reading 1: James 4:1-10
              <br />
              Responsorial Psalm:
              <br />
              Psalms 55:7-8, 9-10, 10-11, 23
              <br />
              Gospel: Mark 9:30-37
            </p>
          </div>
          <div className="card">
            <h4>TUES, May 22, 2018</h4>
            <p>
              Reading 1: James 4:1-10
              <br />
              Responsorial Psalm:
              <br />
              Psalms 55:7-8, 9-10, 10-11, 23
              <br />
              Gospel: Mark 9:30-37
            </p>
          </div>
          <div className="card">
            <h4>WEDS, May 22, 2018</h4>
            <p>
              Reading 1: James 4:1-10
              <br />
              Responsorial Psalm:
              <br />
              Psalms 55:7-8, 9-10, 10-11, 23
              <br />
              Gospel: Mark 9:30-37
            </p>
          </div>
        </div>
      </section>
      <section className="sched-container">
        <div className="heading">
          <h2>
            {" "}
            <i className="fas fa-church" /> MASS &AMP; CONFESSION SCHEDULE
          </h2>
        </div>
        <div className="schedule">
          <div className="img-mass" />
          <div className="mass-text">
            <p>Daily Masses at 8:00 AM and Saturday Masses at 5:00 AM</p>
            <h4>SUNDAY MASSES</h4>
            <p>
              8:00 AM &amp; 10:45 AM - English
              <br />
              12:30 PM - Spanish
            </p>
            <h4>CONFESSION</h4>
            <p>Saturday at 8:00 AM</p>
            <p>All are invited to pray the Rosary every Saturday at 4:30 PM</p>
          </div>
        </div>
      </section>
    </Home>
  );
};
