import React from "react";
import { Image } from "antd";
import { THUMBNAIL_PREFIX_URL } from "../config";
import "./NewsItem.css";

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "ARTIKEL PILIHAN UNTUKMU",
      imagehash:
        "0hA4pTUAjSHhtNLQh5XnNhTHV7Emp-SwQSb09YeG55RitlAQkeeE5NeGAsQjcwHFtLbUpRdG0oFS1lHFkYJA",
      publisher: "LINE",
      link: null,
    };
  }

  renderImage(thumbnail) {
    if (thumbnail === undefined) {
      return (
        <Image
          className="newsitem-image"
          src={
            `${THUMBNAIL_PREFIX_URL}` +
            "0hA4pTUAjSHhtNLQh5XnNhTHV7Emp-SwQSb09YeG55RitlAQkeeE5NeGAsQjcwHFtLbUpRdG0oFS1lHFkYJA"
          }
          alt={this.props.article.title}
        />
      );
    } else {
      //   var url = THUMBNAIL_PREFIX_URL + thumbnail.hash;
      return (
        <Image
          className="newsitem-image"
          src={`${THUMBNAIL_PREFIX_URL}` + thumbnail.hash}
          alt={this.props.article.title}
        />
      );
    }
  }
  render() {
    return (
      <div className="col-container newsitem-container">
        {this.renderImage(this.props.thumbnail)}
        <div className="articletitle-text">{this.props.article.title}</div>
        <div className="publisher-text">{this.props.article.publisher}</div>
      </div>
    );
  }
}
