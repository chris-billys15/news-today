import React from "react";
import { Image } from "antd";
import "./NewsItem.css";

export default class NewsItem extends React.Component {
  render() {
    return (
      <div className="col-container newsitem-container">
        <Image
          className="newsitem-image"
          src="https://obs.line-scdn.net/0hA4pTUAjSHhtNLQh5XnNhTHV7Emp-SwQSb09YeG55RitlAQkeeE5NeGAsQjcwHFtLbUpRdG0oFS1lHFkYJA"
          width="340px"
          alt="test"
        />
        <div className="articletitle-text">
          Beredar Sumbangan Amal Raffi Ahmad, Jumlahnya Fantastis Bikin Netizen
          Salut
        </div>
        <div className="publisher-text">Merdeka.com</div>
      </div>
    );
  }
}
