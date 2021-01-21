import React from "react";
import { Tabs, Spin } from "antd";
import { connect } from "react-redux";
import NewsGrid from "./NewsGrid";
import { SwiperSlideComponent } from "./SwiperSlide";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

class NavTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
    };
  }

  filterByName(item, id) {
    return item.id === id;
  }
  sortData(data, categoryId) {
    if (data === undefined || data === null) {
      return [];
    }
    var categoryObject = data.result.categories.filter(
      ({ id }) => id === categoryId
    );
    var sortedData = { "ARTIKEL PILIHAN UNTUKMU": [] };
    if (categoryObject[0].templates.length > 0) {
      categoryObject[0].templates.map((template) => {
        var title = "ARTIKEL PILIHAN UNTUKMU";
        if (
          template.title !== undefined &&
          template.title !== null &&
          template.title !== ""
        ) {
          title = template.title;
          sortedData[`${title}`] = [];
        }
        if (template.sections.length > 0) {
          for (var i = 0; i < template.sections.length; i++) {
            var data = template.sections[i].articles.filter(({ id }) => id > 0);
            sortedData[`${title}`] = sortedData[`${title}`].concat(data);
          }
        }
        return null;
      });
    }
    return sortedData;
  }

  render() {
    const { mode } = this.state;
    if (this.props.state.data.content === null) {
      return (
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          <Spin style={{ alignSelf: "center" }} />
        </div>
      );
    } else {
      return (
        <div style={{ margin: 5 }}>
          <Tabs defaultActiveKey="TOP" tabPosition={mode} centered animated>
            {this.props.state.data.content.result.categoryList.map(
              (category) => {
                var sortedData = this.sortData(
                  this.props.state.data.content,
                  category.id
                );
                var carouselData = sortedData["ARTIKEL PILIHAN UNTUKMU"].splice(
                  0,
                  7
                );
                return (
                  <TabPane
                    style={{ height: "auto" }}
                    tab={`${category.name}`}
                    key={category.id}
                  >
                    <SwiperSlideComponent articles={carouselData} />
                    {Object.entries(sortedData).map((item) => {
                      if (item[1].length === 0) {
                        return <></>;
                      } else {
                        return <NewsGrid title={item[0]} data={item[1]} />;
                      }
                    })}
                  </TabPane>
                );
              }
            )}
          </Tabs>
        </div>
      );
    }
  }
}

// redux:

// Read data from store
const mapStateToProps = (state) => ({
  state,
});

// no mapDispatchToProps : use default dispatch. component will receive dispatch props!
export default connect(mapStateToProps)(NavTab);
