// import React from 'react';
import GraphicArea from './GraphicArea';
import Toolbox from './Toolbox';
// import '../styles/Main.css';
// css modules
import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <GraphicArea />
      <Toolbox />
    </div>
  )
}

export default Main