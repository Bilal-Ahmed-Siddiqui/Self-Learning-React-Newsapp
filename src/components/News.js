import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

const News = (props) => {
  let { pageSize, country, category, apiKey } = props;
  const countries = {
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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const update_news = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
    let data = await fetch(url);
    let data_json = await data.json();
    setArticles(data_json.articles);
    setTotalResults(data_json.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    setPage(1);
    update_news();
    document.title = `${
      category.charAt(0).toUpperCase() + category.slice(1)
    } - Rabbit News`;
  }, [country, category]);

  useEffect(() => {
    update_news();
  }, []);

  useEffect(() => {
    update_news();
  }, [page]);

  const previousbtn = () => {
    setPage(page - 1);
  };

  const nextbtn = () => {
    setPage(page + 1);
  };
  return (
    <div className="container">
      <h1 className="text-center my-3">Top Headlines</h1>
      <h3 className="text-center my-1">
        About {category.charAt(0).toUpperCase() + category.slice(1)} from{" "}
        {countries[country]}
      </h3>
      {loading && <Loading />}
      <div className="row my-5">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : " "}
                  desc={
                    element.description ? element.description.slice(0, 60) : " "
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
          onClick={previousbtn}
          disabled={page <= 1}
        >
          &#9664; Previous Page
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={nextbtn}
          disabled={page >= Math.ceil(totalResults / pageSize)}
        >
          Next Page &#9654;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  category: "general",
  pageSize: 9,
  apiKey: "",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
