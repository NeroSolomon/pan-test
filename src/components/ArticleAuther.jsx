import React from "react";
import style from "../containers/css/content.module.scss";

function ArticleAuther() {
  return (
    <div className={style["article__auther"] + " item--clear-float"}>
      <div className={style["article__auther-pic"]} />
      <div className={style["article__auther-name"]}>Animals Lover</div>
    </div>
  );
}

export default ArticleAuther;
