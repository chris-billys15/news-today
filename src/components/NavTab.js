import React from "react";
import { Tabs, Button } from "antd";
import NewsGrid from "./NewsGrid";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const Categories = [
  "TOP",
  "Rekomendasi",
  "Showbiz",
  "News",
  "Life",
  "Regional",
  "Hot Issue",
  "Intermezzo",
  "Trending",
  "Watch Now",
  "K! Update",
  "Sci-Tech",
  "Sports",
  "Campus",
  "Movie",
  "Fokus",
  "Biz",
  "Story",
  "Hobbies",
  "Otomotif",
  "Parenting",
  "COVID-19",
  "Games",
  "Horror",
  "Music",
  "English",
  "Zodiak",
  "Special Poll 2020",
  "Kata Gaul",
];
export default class NavTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
    };
  }
  render() {
    const { mode } = this.state;
    return (
      <div style={{ margin: 5 }}>
        <Tabs defaultActiveKey="TOP" tabPosition={mode} centered animated>
          {Categories.map((category) => (
            <TabPane
              style={{ height: "auto" }}
              tab={`${category}`}
              key={category}
            >
              <div>{category}</div>
              <NewsGrid />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
