import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  const [countrycode, setCountrycode] = useState("us");
  const [category, setCategory] = useState("general");

  const selection = (country, category) => {
    setCountrycode(country);
    setCategory(category);
  };
  return (
    <div>
      <Navbar selection={selection} />
      <News
        pageSize={9}
        country={countrycode}
        category={category}
        apiKey={process.env.REACT_APP_NEWS_API}
      />
    </div>
  );
};

export default App;
