import React from "react";
import NewsItem from "./NewsItem";
import "./NewsGrid.css";

export default class NewsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "ARTIKEL PILIHAN UNTUKMU",
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data, title: this.props.title });
  }
  render() {
    return (
      <div className="padding-24x32">
        <div className="sectiontitle-text">{this.state.title}</div>

        <div className="grid-container">
          {this.state.data.map((article, i) => {
            if (article.thumbnail !== undefined) {
              return (
                <NewsItem
                  key={article.thumbnail.hash}
                  article={article}
                  thumbnail={article.thumbnail}
                />
              );
            }
            return <></>;
          })}
        </div>
      </div>
    );
  }
}
