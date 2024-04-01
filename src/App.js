import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countrycode: 'us',
      category: 'general'
    };
  }

  selection = (country,category) => {
    this.setState({ country, category});
  }
  render() {
    return (
      <div>
        <Navbar selection={this.selection}/>
        <News pageSize = {9} country = {this.state.country} category = {this.state.category} />
      </div>
    );
  }
}
