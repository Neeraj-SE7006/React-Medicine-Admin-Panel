import React from "react";
import classes from "./Modal.module.css";
const modalRoot = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      ReactDOM.createPortal(
      <div className={classes.backdrop} onClick={props.onClose}></div>
      ,modalRoot) ReactDom.createPortal(
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
      ,modalRoot)
    </>
  );
};

export default Modal;
