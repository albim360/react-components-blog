import React, { Component } from "react";
import Header from "./components/TheHeader";
import Card from "./components/Card";

class App extends Component {
  state = {
    post: {
      title: "Il mio primo post",
      content: "Questo è il mio primo post sul mio blog.",
    },
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
