// import React from 'react'
// import css modules
import styles from "../styles/Toolbox.module.css";
import Tool from "./Tool";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { GiPulleyHook } from "react-icons/gi";

const Toolbox = () => {
  return (
    <div className={styles.main}>
      <Tool name="Polea">
        <GiPulleyHook />
      </Tool>
      <Tool name="Cable">
        <MdOutlineHorizontalRule />
      </Tool>
      <Tool name="Peso">
        <TbWeight />
      </Tool>
    </div>
  );
};

export default Toolbox;
