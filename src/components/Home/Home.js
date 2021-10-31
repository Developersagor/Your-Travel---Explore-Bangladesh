import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import travelImg from "../../images/travelimg.jpg";
import Gallary from "./Gallary/Gallary";

const Home = () => {
  const [services, setServices] = useState([]);

  // feth add services
  useEffect(() => {
    fetch("https://pacific-wildwood-89146.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="banner">
        <div>
          <h1 className="banner-title">Lets Explore Bangladesh</h1>
          <h1>With</h1>
          <h1 className="com-name">Your Travel</h1>
          <p className="banner-desc">
            Discover your next great adventure, become an explorer to get
            started!
          </p>
        </div>
      </div>
      <div className="container mt-3">
        <div className="service-container">
          <div className="text-center">
            <h2 className="text-success">OUR PACKAGES</h2>
          </div>
          <div className="row mt-3 ">
            {services?.map((service) => (
              <div key={service._id} className="col-lg-3 ">
                <div className="p-3 m-2 border">
                  <img
                    src={service.image}
                    className="img-fluid"
                    alt="service"
                  />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="text-center">
                    <Link to={`/placeOrder/${service._id}`}>
                      <button className="btn btn-danger">Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="side-bar mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img src={travelImg} className="sidebarImg" alt="" />
            </div>
            <div className="col-lg-6 sidebar-content mt-2">
              <div>
                <h2>Your travel journey starts here</h2>
                <p>
                  Sign up now for travel tips, personalized itineraries, and
                  vacation inspiration straight to your inbox.
                </p>
                <div className="side-btn">
                  <button className="share-btn">Share Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* gallary start */}
        <Gallary></Gallary>
        {/* gallary end */}
      </div>
    </>
  );
};

export default Home;
