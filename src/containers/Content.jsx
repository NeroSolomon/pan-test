import React from "react";
import { Card } from "antd";
import img from "./img/cute-dog.jpg";
import style from "./css/content.module.scss";
import ArticleAuther from "../components/ArticleAuther.jsx";
import ArticleComment from "../components/ArticleComment.jsx";

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
            <div
              className={style["article__comment"]}
              style={{ width: "340px" }}
            >
              <ArticleComment />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
