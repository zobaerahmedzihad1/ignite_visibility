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

          <h2 className={style.rules__title}>Do we use 'cookies' ?</h2>
          <p className={style.rules__description}>
            You can choose to have your computer warn you each time a cookie is
            being sent, or you can choose to turn off all cookies. You do this
            through your browser (like Internet Explorer) settings. Each browser
            is a little different, so look at your browser’s Help menu to learn
            the correct way to modify your cookies. <br />
            <p>
              If you disable cookies off, some features will be disabled that
              make your site experience more efficient and some of our services
              will not function properly.
            </p>{" "}
            However, you can still place orders . We use cookies and other
            similar technologies to distinguish you from other users of our
            websites and apps (including when you browse third party websites).
            This helps us to provide you with a good experience when you use our
            services (for example, to remember your login details and improve
            our services). We also use cookies and similar technologies to show
            you more personalized advertising, including ads for us on other
            websites. You may adjust the settings on your browser to refuse
            cookies but some of our services may not work if you do so.
          </p>

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
          <div>
            <h2 className={style.rules__title}>
              When do we collect information ?
            </h2>
            <p className={style.rules__description}>
              We collect information (including personal data) from you when you
              fill out a form on our site or app, enter information on our site,
              communicate with us over the phone, email us, or otherwise enter
              into a transaction with us.
            </p>
          </div>
          <div>
            <h2 className={style.rules__title}>
              Do you have to provide personal data to us?
            </h2>
            <p className={style.rules__description}>
              Where we need to collect personal data by law, or under the terms
              of a contract we have with you and you fail to provide that data
              when requested, we may not be able to perform the contract we have
              or are trying to enter into with you (for example, to provide you
              with goods or services). In this case, we may have to cancel a
              product or service you have with us but we will notify you if this
              is the case at the time.
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
              <span style={{ margin: "5px" }}>
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
