import { useEffect } from "react";
import styles from "../styles/GraphicArea.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { setBoxPosition } from "../app/slices/boxPosition.slice";
import { changeRangeValue } from "../app/slices/rangeValue.slice";
const GraphicArea = () => {
  // const boxPosition = useSelector((state) => state.boxPosition);
  const rangeValue = useSelector((state) => state.rangeValue.value);

  const dispatch = useDispatch();

  // change box width and height when range value changes
  useEffect(() => {
    const box = document.getElementById("box");
    box.style.width = `${rangeValue * 3}px`;
    box.style.height = `${rangeValue * 3}px`;
  }, [rangeValue]);


  return (
    <div className={styles.main}>
      <div className={styles.box} id="box"></div>
    </div>
  );
};

export default GraphicArea;
