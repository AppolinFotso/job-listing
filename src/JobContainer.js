import React from "react";

function JobContainer(props) {
  const skills = [props.job.role, props.job.level].concat(props.job.languages);
  console.log(skills);
}

export default JobContainer;
