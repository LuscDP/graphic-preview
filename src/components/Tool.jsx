// import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Tool.module.css";

const Tool = ({ name, children }) => {
  return (
    <a className={styles.main}>
      <div className={styles.name}>{name}</div>
      <div className={styles.icon}>{children}</div>
    </a>
  );
};

Tool.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tool;
