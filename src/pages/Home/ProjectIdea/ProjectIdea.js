import React from "react";
import style from "./ProjectIdea.module.css";

const ProjectIdea = () => {
  return (
    <div className={style.projectIdea__container}>
      <div className={style.text__wrapper}>
        <h1>Have a new project in mind ? </h1>
        <div className={style.words}>
          <span>Let's Talk !</span>
          <span>Start Today !</span>
          <span>We Can Help.</span>
          <span>Start Today !</span>
          <span>Let's Talk ! </span>
        </div>
        {/* <h3>Developer</h3> */}
      </div>
    </div>
  );
};

export default ProjectIdea;
