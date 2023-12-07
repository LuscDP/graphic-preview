// import React from 'react'
// import css modules
import styles from "../styles/Toolbox.module.css";
import Tool from "./Tool";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { GiPulleyHook } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { changeRangeValue } from "../app/slices/rangeValue.slice";

const Toolbox = () => {

  const dispatch = useDispatch();
  const rangeValue = useSelector((state) => state.rangeValue.value);

  return (
    <div className={styles.main}>
      <Tool name="Polea">
        <GiPulleyHook className={styles.icon} />
      </Tool>
      <Tool name="Cable">
        <MdOutlineHorizontalRule className={styles.icon} />
      </Tool>
      <Tool name="Peso">
        <TbWeight className={styles.icon} />
      </Tool>
      {/* <Tool name="#1: ">
        <input type="range" min="0" max="100" />
      </Tool>
      <Tool name="#2: ">
        <input type="range" min="0" max="100" />
        <p>50kg</p>
      </Tool> */}
      <Tool name="#1: ">
        <div className={styles.PBrangesliderdiv}>
          <input
            type="range"
            min="0"
            max="50"
            value={rangeValue}
            onChange={(e) => dispatch(changeRangeValue(e.target.value))}
            className={styles.PBrangeslider}
            id="myRange"
          ></input>
          <p className={styles.PBrangeslidervalue}>{rangeValue}</p>
        </div>
      </Tool>
    </div>
  );
};

export default Toolbox;
