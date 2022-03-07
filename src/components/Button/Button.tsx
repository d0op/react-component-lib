import React from "react";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{ color: "red" }}>{props.label}</button>;
};

export default Button;
