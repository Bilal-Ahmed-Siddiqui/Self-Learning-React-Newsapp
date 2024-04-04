import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageurl, url, author, publishedAt } = props;
  let d = new Date(publishedAt);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: "22rem" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} on {d.toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn bt-sm btn-dark "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;