import React from "react";
import NewsItem from "./NewsItem";
import { Row, Col } from "antd";
import "./NewsGrid.css";

export default class NewsGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "ARTIKEL PILIHAN UNTUKMU",
    };
  }
  render() {
    return (
      <div className="padding-24x32">
        <div className="sectiontitle-text">{this.state.title}</div>
        <Row>
          <Col span={12}>
            <NewsItem />
          </Col>
          <Col span={12}>
            <NewsItem />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <NewsItem />
          </Col>
          <Col span={12}>
            <NewsItem />
          </Col>
        </Row>
      </div>
    );
  }
}
