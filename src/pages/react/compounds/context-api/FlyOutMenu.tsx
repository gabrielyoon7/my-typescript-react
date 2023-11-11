import React from "react";
import "./styles.css";
import {FlyOut} from "./FlyOut.tsx";

export default function FlyOutMenu() {
  return (
    <FlyOut>
      <FlyOut.Toggle/>
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
}
