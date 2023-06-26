import { nanoid } from "nanoid";
import React from "react";
import Skills from "./Skills";
//
function JobContainer(props) {
  const skill = [props.job.role, props.job.level].concat(props.job.languages);
  const skills = skill.map((el) => {
    return <Skills key={nanoid()} skill={el} />;
  });
  console.log(props.job.logo);
  //
  return (
    <div className="container">
      <div className="left">
        <div className="image">
          <img src={props.job.logo} alt="logo" />
        </div>
        <div className="company-info">
          <p>
            <span>{props.job.company}</span>
            <span className={props.job.new === true ? "new" : "none"}>
              {props.job.new ? "NEW!" : null}
            </span>
            <span className={props.job.featured === true ? "featured" : "none"}>
              {props.job.featured ? "FEATURED" : null}
            </span>
          </p>
          <h3>{props.job.position}</h3>
          <p>
            {props.job.postedAt} <span>.</span>
            {props.job.contract}
            <span>.</span>
            {props.job.location}
          </p>
        </div>
      </div>
      <div className="right">{skills}</div>
    </div>
  );
}

export default JobContainer;
