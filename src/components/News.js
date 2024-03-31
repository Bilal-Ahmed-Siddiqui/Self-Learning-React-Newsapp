import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 9
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=475fc797869745b6bd22c85358f454c0&pageSize=${this.props.pageSize}`; 
    let data = await fetch(url);
    let data_json = await data.json();
    this.setState({
      articles: data_json.articles,
      totalResults: data_json.totalResults,
      loading: false,
    });
  };

  previousbtn = async () => {
    this.setState({ page: this.state.page - 1, loading: true }, async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=475fc797869745b6bd22c85358f454c0&pageSize=${this.props.pageSize}`; 
      let data = await fetch(url + `&page=${this.state.page}`);
      let data_json = await data.json();
      this.setState({ articles: data_json.articles, loading: false });
    });
  };
  nextbtn = async () => {
    this.setState({ page: this.state.page + 1, loading: true }, async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=475fc797869745b6bd22c85358f454c0&pageSize=${this.props.pageSize}`; 
      let data = await fetch(url + `&page=${this.state.page}`);
      let data_json = await data.json();
      this.setState({ articles: data_json.articles, loading: false });
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">Top Headlines</h1>
        {this.state.loading && <Loading />}
        <div className="row my-5">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : " "}
                    desc={
                      element.description
                        ? element.description.slice(0, 60)
                        : " "
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://img.freepik.com/free-photo/network-connection-graphic-overlay-background-computer-screen_53876-120776.jpg?w=826&t=st=1711750966~exp=1711751566~hmac=8388c642d1362169486e97a60ccc9b2ff56eb99992e756cdb34a08c483737d77"
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.previousbtn}
            disabled={this.state.page <= 1}
          >
            &#9664; Previous Page
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextbtn}
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next Page &#9654;
          </button>
        </div>
      </div>
    );
  }
}
