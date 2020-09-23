import React, { useRef } from "react";
import { Card, Input } from "antd";
import img from "./img/cute-dog.jpg";
import style from "./css/content.module.scss";
import ArticleAuther from "../components/ArticleAuther.jsx";
import ArticleComment from "../components/ArticleComment.jsx";
const { TextArea } = Input;

function Content() {
  const inputEl = useRef(null);

  function onReply() {
    inputEl.current.focus();
  }

  return (
    <div className="App-content">
      <div className="site-card-border-less-wrapper">
        <Card
          bordered={false}
          bodyStyle={{ padding: "0" }}
          style={{ width: "100%" }}
        >
          <div className="item--float-left" style={{ width: "600px" }}>
            <img src={img} alt="内容" />
          </div>
          <div
            className="item--float-left"
            style={{ width: "335px", overflow: "hidden" }}
          >
            <ArticleAuther />
            <div className={style["article__comment"]}>
              <ArticleComment onReply={onReply} />
            </div>
            <div style={{ height: "99px", position: "relative" }}>
              <TextArea
                ref={inputEl}
                bordered={false}
                style={{ height: "100%", resize: "none" }}
              />
              <span className={style["editor__send-btn"]}>发布</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
