import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 9,
    apiKey: ""
  };
  countries = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cu: "Cuba",
    cz: "Czech Republic",
    de: "Germany",
    eg: "Egypt",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    si: "Slovenia",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    
  }
  update_news = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let data_json = await data.json();
    this.setState({
      articles: data_json.articles,
      totalResults: data_json.totalResults,
      loading: false,
    });
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category ||
      prevProps.pageSize !== this.props.pageSize
    ) {
      this.setState({ page: 1 }, () => {
        this.update_news();
        document.title = `${
          this.props.category.charAt(0).toUpperCase() +
          this.props.category.slice(1)
        }  - Rabbit News`;
      });
    }
  };

  componentDidMount = () => {
    this.update_news();
  };

  previousbtn = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.update_news();
    });
  };

  nextbtn = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.update_news();
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">Top Headlines</h1>
        <h3 className="text-center my-1">
          About{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          from {this.countries[this.props.country]}
        </h3>
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
                    author={element.author}
                    publishedAt={element.publishedAt}
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
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next Page &#9654;
          </button>
        </div>
      </div>
    );
  }
}
