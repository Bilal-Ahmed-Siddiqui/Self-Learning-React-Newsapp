import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Katia Hetter",
      title: "Are allergies making you feel sick? Here’s how to find out - CNN",
      description:
        "As spring begins, more people than ever are affected by seasonal allergies that are starting earlier and lasting longer. How do you know if you have them?",
      url: "https://www.cnn.com/2024/03/27/health/spring-allergies-pollen-wellness/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-03-27T18:30:00Z",
      content:
        "Sniffling a bit more than usual? Welcome to spring allergy season in the Northern Hemisphere. Even if you dont think you have allergies, its worth paying attention to those sniffles.\r\nMore than 1 in … [+7429 chars]",
    },
    {
      source: {
        id: null,
        name: "Miami Herald",
      },
      author: "Grethel Aguila, Jay Weaver, Omar Rodríguez Ortiz",
      title:
        "What did agents find when they raided Diddy’s mansion? Where is the mogul? What to know - Miami Herald",
      description:
        "Agents seized electronics and Diddy’s phone after raiding his Star Island mansion in Miami Beach. They questioned him at Opa-locka airport before he flew to Antigua: source",
      url: "https://www.miamiherald.com/news/local/crime/article287100960.html",
      urlToImage:
        "https://www.miamiherald.com/latest-news/ry6vbx/picture287087665/alternates/LANDSCAPE_1140/112_Sean_Diddy_Combs_House_AF.jpg",
      publishedAt: "2024-03-27T17:55:52Z",
      content:
        "Crime\r\nFour people in Diddys entourage were cuffed by federal agents after they raided his Miami Beach mansion Monday. Another Diddy associate was busted on drug charges at the Opa-locka airport. And… [+7515 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Dan Stillman",
      title:
        "A way-too-early look at the cloud cover forecast for the solar eclipse - The Washington Post",
      description:
        "Initial forecasts lean toward sunnier skies over Texas and cloudier skies to the north, but it’s much too soon to place confidence in this outlook.",
      url: "https://www.washingtonpost.com/weather/2024/03/27/solar-eclipse-cloud-forecast-totality/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CUNL5KN6ENFDTLOBJGR6ITDTWQ.png&w=1440",
      publishedAt: "2024-03-27T17:54:43Z",
      content:
        "First things first: Youre not going to get anything here resembling a confident cloud forecast for a few-minute window 12 days from now. But if youve got plans to watch the April 8 total solar eclips… [+6175 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Jordan Freiman, Brian Dakss",
      title:
        "Mega Millions estimated $1.13 billion jackpot has one winning ticket, in New Jersey - CBS News",
      description:
        "There was one winning ticket sold for Tuesday night's estimated $1.13 billion Mega Millions jackpot, in New Jersey, officials said. It was the fifth largest in the game's history.",
      url: "https://www.cbsnews.com/news/mega-millions-1-1-billion-jackpot-1-winning-ticket/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/27/1397a21d-eaad-4ec9-b66e-eec904c1c184/thumbnail/1200x630/517fb406cc1c95930a3fb7a71a8a4a80/gettyimages-2115755837.jpg?v=3d62f4cc0092e6eb151a9685301ed284",
      publishedAt: "2024-03-27T17:29:19Z",
      content:
        "There was one winning ticket sold for Tuesday night's estimated $1.13 billion Mega Millions jackpot, in New Jersey, the game's officials said. It was the fifth largest pot of gold ever won by Mega Mi… [+2133 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Israel and Hezbollah trade strikes over Lebanon border - BBC.com",
      description:
        "The Iran-backed movement fires rockets into Israel killing one, after a deadly strike on a Lebanese village.",
      url: "https://www.bbc.com/news/world-middle-east-68675608",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/67E0/production/_133029562_mediaitem133029558.jpg",
      publishedAt: "2024-03-27T17:03:08Z",
      content: null,
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Audrey Conklin",
      title:
        "Utah children’s book author sent damning text to lover before hubby poison plot: docs - Fox News",
      description:
        "Utah woman Kouri RIchins, a children's book author accused of poisoning her husband Eric Richins with fentanyl in 2022, is now facing a new attempted murder charge.",
      url: "https://www.foxnews.com/us/utah-childrens-book-author-sent-damning-text-lover-before-hubby-poison-plot-docs",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/Richins.jpg",
      publishedAt: "2024-03-27T17:01:00Z",
      content:
        "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+7722 chars]",
    },
  ];
  constructor() {
    super();
    console.log("news constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">Top Headlines</h1>
        <div className="row my-5">
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="my title"
              desc="breaking news"
              imageurl="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1902025989-copy.jpg?c=16x9&q=w_800,c_fill"
            />
          </div>
        </div>
      </div>
    );
  }
}
