import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  componentDidMount = async () => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=475fc797869745b6bd22c85358f454c0";
    let data = await fetch(url);
    let data_json = await data.json();
    this.setState({articles: data_json.articles});
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">Top Headlines</h1>
        <div className="row my-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 30):" "}
                  desc={element.description?element.description.slice(0, 60):" "}
                  imageurl={element.urlToImage?element.urlToImage: "https://img.freepik.com/free-photo/network-connection-graphic-overlay-background-computer-screen_53876-120776.jpg?w=826&t=st=1711750966~exp=1711751566~hmac=8388c642d1362169486e97a60ccc9b2ff56eb99992e756cdb34a08c483737d77"}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
