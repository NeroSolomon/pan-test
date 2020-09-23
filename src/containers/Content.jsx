import React from "react";
import { Card } from "antd";
import img from "./img/cute-dog.jpg";
import style from "./css/content.module.scss";
import ArticleAuther from "../components/ArticleAuther.jsx";
import ArticleComment from "../components/ArticleComment.jsx";
import CommentEditor from "../components/CommentEditor.jsx";

function Content() {
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
              <ArticleComment />
            </div>
            <CommentEditor />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
