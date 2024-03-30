import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageurl, url } = this.props;
    return (
      <div className="container d-flex justify-content-center">
        <div className="card" style={{ width: "22rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} target="_blank" className="btn bt-sm btn-primary ">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
