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
  // useEffect(() => {
  //   const box = document.getElementById("box");
  //   box.style.width = `${rangeValue * 3}px`;
  //   box.style.height = `${rangeValue * 3}px`;
  // }, [ rangeValue ]);

  return (
    <div className={styles.main}>
      {/* elemento */}
      <div className={styles.box} id="box">
        <h4>b1</h4>
        <p>50kg</p>
        {/* masa */}
        {/* normal */}
        {/* friccion  */}
        {/* si es estatico o sin movimiento */}
      </div>
      {/* elemento 2*/}
      <div className={styles.box2} id="box2">
        <h4>b2</h4>
        <p>40kg</p>
      </div>
      {/* elemento 3*/}
      <div className={styles.box3} id="box3">
        <h4>polea</h4>
      </div>
      {/* elemento superficie*/}
      <div className={styles.box4} id="box4">
        <h4>superficie</h4>
      </div>
    </div>
  );
};

export default GraphicArea;
