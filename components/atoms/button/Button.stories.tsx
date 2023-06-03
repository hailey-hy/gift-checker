import React from "react";
import Button from "./Button";

export default {
  title: "component: Button",
  component: Button,
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: "Default",
};

export const mediumButton = () => {
  return <Button size="medium">MEDIUM</Button>;
};

export const smallButton = () => {
  return <Button size="small">SMALL</Button>;
};