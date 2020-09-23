import React, { useState } from "react";
import style from "../containers/css/content.module.scss";

function Comment(props) {
  const [isActive, setIsActive] = useState(false);
  function toggleLike(props) {
    setIsActive(!isActive);
  }

  return (
    <div
      className={style["comment__container"] + " " + style["item--clear-float"]}
    >
      <div className={style["comment__auther-pic"]} />
      <div className={style["comment__auther-name"]}>Animals Lover</div>
      <div
        className={
          style["comment__like"] +
          " " +
          (isActive ? style["comment__like--active"] : "")
        }
        onClick={toggleLike}
      ></div>
    </div>
  );
}

export default Comment;
