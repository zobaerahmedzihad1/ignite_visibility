import React from "react";
import style from "./OfficeLocation.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const OfficeLocation = () => {
  return (
    <div>
      <div className={style.location__container}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>Map</h2>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={style.address__container}>
                <div className={style.address}>
                  <span className={style.location__icon}>
                    <HiOutlineLocationMarker className={style.icon} />
                  </span>
                  <div>
                    <a
                      href="https://goo.gl/maps/LWdcZmQU4z22XctL8"
                      target="_blank."
                    >
                      Road 27, House : 46, Mohammadpur, Dhaka.
                    </a>
                    <p>
                      Find the addresses, directions, hours of operation, staff
                      and more for each of our locations and affiliates.
                    </p>
                  </div>
                </div>
                <div className={style.address}>
                  <span className={style.tel__icon}>
                    <BiMessageRoundedCheck className={style.icon} />
                  </span>
                  <div>
                    <a href="tel:" target="_blank.">
                      (+880) 1623171474 / 1630704167
                    </a>
                    <p>
                      Call us today or visit our appointment request page to
                      find a time that is convenient for you.
                    </p>
                  </div>
                </div>
                <div className={style.address}>
                  <span className={style.gmail__icon}>
                    <HiOutlineMail className={style.icon} />
                  </span>
                  <div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=zobaerahmedzihad02@gmail.com"
                      target="_blank."
                    >
                      zobaerahmedzihad02@gmail.com
                    </a>
                    <p>
                      Before you drop us a line or pick up the phone, you might
                      find your answer by searching on our list of questions.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OfficeLocation;
