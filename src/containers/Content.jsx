import React from "react";
import { Card } from "antd";
import img from "./img/cute-dog.jpg";
import style from "./css/content.module.scss";

function Content() {
  return (
    <div className="App-content">
      <div className="site-card-border-less-wrapper">
        <Card
          bordered={false}
          bodyStyle={{ padding: "0" }}
          style={{ width: "100%" }}
        >
          <div
            className="item--float-left"
            style={{ width: "600px", maxWidth: "65%" }}
          >
            <img src={img} alt="内容" />
          </div>
          <div className="item--float-left" style={{ width: "335px" }}>
            <div className={style["article__auther"] + " item--clear-float"}>
              <div className={style["article__auther-pic"]} />
              <div className={style["article__auther-name"]}>Animals Lover</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
