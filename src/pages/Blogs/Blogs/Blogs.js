import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogsCard from "../BlogsCard/BlogsCard";
import OurNewsletter from "../OurNewsletter/OurNewsletter";
import style from "./Blogs.module.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className={style.blogs__banner}>
      <Container>
        <Row>
          <Col>
            <div className={style.blogs__title}>
              <h2>Latest news and ideas from our team</h2>
              <p>
                This is where you can find the latest news and insights about
                Sway — new products, <br /> in-depth interviews and successfully
                finished projects. Never miss a beat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={style.blogs__card}>
        <Container>
          <Row className="g-4">
            {blogs.map((blog) => (
              <BlogsCard key={blog._id} blog={blog}></BlogsCard>
            ))}
          </Row>
        </Container>
      </div>
      <OurNewsletter />
    </div>
  );
};

export default Blogs;
