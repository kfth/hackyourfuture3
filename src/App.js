import React, { Component } from "react";
import "./App.css";

//components
import Spinner from "./component/spinner";

class App extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    fetch("http://localhost:4200/people/all")
      .then(response => response.json())
      .then(json =>
        this.setState({
          data: json,
          isLoading: false
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("OLD STATE", prevState);
    console.log("NEW STATE", this.state);
    console.log("hello im running");
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <div className="App">
        {isLoading ? (
          <Spinner />
        ) : (
          data.map(item => {
            return (
              <div key={item.id} className="people__person">
                <h1> {item.name}</h1>
                <h2> {item.title}</h2>
                <input type="password" value={item.password} />
                <img src={item.profileUrl} alt={item.name} />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default App;
