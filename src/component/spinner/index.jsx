import React from "react";
import "./style.css";

class Spinner extends React.Component {
  componentWillUnmount() {
    console.log("im dying");
  }
  render() {
    return (
      <div className="container">
        <div className="spinner" />
      </div>
    );
  }
}

export default Spinner;
