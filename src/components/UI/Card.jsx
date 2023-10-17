import React from "react";

const Card = (props) => {
  const classes =
    "shadow-[0_1px_8px_0_rgba(0,0,0,0.5)] rounded-xl " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
