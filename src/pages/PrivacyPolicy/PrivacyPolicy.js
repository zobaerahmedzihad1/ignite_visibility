import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={style.privacyPolicy__container}>
      <Container>
        <Row>
          <Col>
            <div className={style.privacy__title}>
              <h2>Our Privacy Policy</h2>
              <p>
                This Privacy Policy was last updated on June 27, 2022. If there
                will be any update, <br /> amendment, or changes to our Privacy
                Policy then these will be posted on this page.
              </p>
            </div>
          </Col>
        </Row>
        <div className={style.privacy__rules}>
          <div className={style.general__information}>
            <h2 className={style.rules__title}>General Information</h2>
            <p className={style.rules__description}>
              One of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by KeyDesign and how we use it. If you have
              additional questions or require more information about our Privacy
              Policy, do not hesitate to contact us through email at Incubator.
              An example of a privacy policy can be found at buyproxies.io.
            </p>
          </div>
          <div className={style.cookie__policy}>
            <h2 className={style.rules__title}>Cookie Policy</h2>
            <p className={style.rules__description}>
              Like many websites, we use “cookies” to collect information.
              Cookies are small data files that are placed on your computer or
              mobile device when visiting a website. They are widely used by
              website owners in order to make their websites work, or work more
              efficiently, as well as to provide reporting information.{" "}
            </p>
            <p className={style.rules__description}>
              Cookies set by our Site (Marketable Connections LLC) are called
              “first party cookies”. Cookies set by parties other than the
              website owner are called “third party cookies”. Third party
              cookies enable third party features or functionality to be
              provided on or through the website.
            </p>
            <p className={style.rules__description}>
              We utilize cookies to save your username and password when
              registering for future logins to the Site.
            </p>
            <p className={style.rules__description}>
              You may choose to reject cookies on your browser. While you may
              still be able to use our Site, your access to certain
              functionality may be restricted.
            </p>
            <p className={style.rules__description}>
              We may also use advertising-related cookies to understand the
              performance of our advertising activity.
            </p>
          </div>
          <div className={style.log__files}>
            <h2 className={style.rules__title}>Contact Us</h2>
            <p className={style.rules__description}>
              If you have any questions about this Privacy Policy, please
              contact us by email at{" "}
              <span>
                <a
                  target="_blank."
                  href="https://mail.google.com/mail/u/0/?fs=1&to=zobaerahmedzihad01@gmail.com&tf=cm"
                >
                  zobaerahmedzihad01@gmail
                </a>
              </span>{" "}
              or by the contact page provided on our website at 
              <span style={{margin:'5px'}}>
                <a
                  target="_blank."
                  href="https://zobaerahmedzihad.netlify.app/"
                >
                  zobaerahmedzihad.
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
