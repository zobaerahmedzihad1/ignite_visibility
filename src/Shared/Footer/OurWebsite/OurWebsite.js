import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhone,FaPassport } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import style from "./OurWebsite.module.css";

const OurWebsite = () => {
  return (
    <div>
      <Row>
        <Col xs={4} sm={4} md={4}>
          <div className={style.company}>
            <h4>Company</h4>
            <hr />
            <div>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/privacy__policy">Privacy policy</Link>
            </div>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <div className={style.company}>
            <h4>My Account</h4>
            <hr />
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/dashboard/profile">Profile</Link>
              <Link to="/dashboard/my-orders">My Orders</Link>
              <Link to="/dashboard/add-review">Review</Link>
              <Link to="/dashboard/payment-history">Payment History</Link>
            </div>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <div className={style.contract__container}>
            <h4>Contract Us</h4>
            <hr />
            <div>
              <span>
                <FaPhone
                  style={{
                    fontSize: "22px",
                    color: "#777AF2",
                    marginRight: "10px",
                  }}
                />
                Phone
              </span>
              <a href="tel:01623171474">+880 1623171474</a>
            </div>
            <div>
              <span>
                <MdEmail
                  style={{
                    fontSize: "25px",
                    color: "#777AF2",
                    marginRight: "10px",
                  }}
                />
                Email
              </span>
              <a
                target="_blank."
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=zobaerahmedzihad01@gmail.com"
              >
                zobaerahmedzihad02@gmail.com
              </a>
            </div>
            <div>
              <span>
                <HiLocationMarker
                  style={{
                    fontSize: "25px",
                    color: "#777AF2",
                    marginRight: "10px",
                  }}
                />
                Address
              </span>
              <a target="_blank." href="https://goo.gl/maps/C1p2dxtz8SfceQ3B9">
                Mohammadpur,Dhaka
              </a>
            </div>
            <div>
              <span>
                <FaPassport
                  style={{
                    fontSize: "25px",
                    color: "#777AF2",
                    marginRight: "10px",
                  }}
                />
                Portfolio
              </span>
              <a style={{fontSize:'17px', fontWeight:'600'}} target="_blank." href="https://zobaerahmedzihad.netlify.app/">
                Zobaer Ahmed Zihad
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurWebsite;
