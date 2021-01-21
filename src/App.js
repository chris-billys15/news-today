import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { RequestNews } from "./api/linetoday";
import NavigationBar from "./components/NavigationBar";
import { SET_CONTENT_DATA, REMOVE_CONTENT_DATA } from "./redux/actionTypes";

class App extends React.Component {
  componentDidMount() {
    RequestNews().then((response) => {
      if (response.status === 200) {
        this.props.dispatch({
          type: SET_CONTENT_DATA,
          payload: {
            data: response.data,
          },
        });
      } else {
        this.props.dispatch({
          type: REMOVE_CONTENT_DATA,
        });
      }
    });
  }
  render() {
    return (
      <div className="app-container">
        <div className="content">
          <NavigationBar></NavigationBar>
        </div>
      </div>
    );
  }
}

// redux:

// Read data from store
const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(App);
