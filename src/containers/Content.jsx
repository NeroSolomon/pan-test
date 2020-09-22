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
          <div
            className="item--float-left"
            style={{ width: "335px", overflow: "hidden" }}
          >
            <div className={style["article__auther"] + " item--clear-float"}>
              <div className={style["article__auther-pic"]} />
              <div className={style["article__auther-name"]}>Animals Lover</div>
            </div>
            <div
              className={style["article__comment"]}
              style={{ width: "340px" }}
            >
              <div className={style["comment__container"]}>
                <div className={style["comment__auther-pic"]} />
                <div className={style["comment__auther-name"]}>
                  Animals Lover
                </div>
                <div className={style["comment__detail"]}>
                  <div className={style["comment__detail-info"]}>
                    <span>6 天</span>
                    <span>200 次赞</span>
                    <span style={{ cursor: "pointer", fontWeight: "bold" }}>
                      回复
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
