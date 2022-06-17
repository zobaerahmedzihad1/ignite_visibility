import React from "react";
import style from "./OfficeLocation.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
                  <span>
                    <HiOutlineLocationMarker className={style.icon} />
                  </span>
                  <div>
                    <h5>Road 27, House : 46, Dhanmondi, Dhaka.</h5>
                    <p>
                      Find the addresses, directions, hours of operation, staff
                      and more for each of our locations and affiliates.
                    </p>
                  </div>
                </div>
                <div className={style.address}>
                  <span>
                    <BiMessageRoundedCheck className={style.icon} />
                  </span>
                  <div>
                    <h5>(+880) 1623171474 / 1630704167</h5>
                    <p>
                      Call us today or visit our appointment request page to
                      find a time that is convenient for you.
                    </p>
                  </div>
                </div>
                <div className={style.address}>
                  <span>
                    <IoMdMail className={style.icon} />
                  </span>
                  <div>
                    <h5>zobaerahmedzihad02@gmail.com</h5>
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
