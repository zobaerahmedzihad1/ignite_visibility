import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAllServices from "../../../hooks/useAllServices";
import HomeServiceCard from "../HomeServiceCard/HomeServiceCard";
import style from "./HomeServices.module.css";

const HomeServices = () => {
  const [services] = useAllServices();
  return (
    <div className={style.service__container}>
      <Container>
        <Row>
          <div className={style.service__title}>
            <h2>
              ignite visibility is a creative marketing agency <br /> with a
              refreshingly different approach
            </h2>
            <h5>
              We provide strategic guidance and clarity to our clients and work
              closely with them <br /> from the planning stage through tactical
              execution, and success analysis.
            </h5>
          </div>
        </Row>

        <Row className="g-4">
          {services.map((service) => (
            <HomeServiceCard
              key={service._id}
              service={service}
            ></HomeServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
