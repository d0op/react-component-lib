import React from "react";

interface Button2Props {
  label: string;
}

const Button2 = (props: Button2Props) => {
  return <div style={{ color: "red" }}>{props.label}!</div>;
};

export default Button2;
