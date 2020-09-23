import React, { useState } from "react";
import style from "../containers/css/content.module.scss";

function ArticleComment() {
  const [isActive, setIsActive] = useState(false);
  function toggleLike() {
    setIsActive(!isActive);
  }

  return (
    <div className={style["comment__container"]}>
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
      <div className={style["comment__detail"]}>
        <div className={style["comment__detail-info"]}>
          <div>
            <span>6 天</span>
            <span>200 次赞</span>
            <span style={{ cursor: "pointer", fontWeight: "bold" }}>回复</span>
          </div>
          <div
            style={{ cursor: "pointer", fontWeight: "bold", marginTop: "10px" }}
          >
            查看回复（12）
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleComment;
