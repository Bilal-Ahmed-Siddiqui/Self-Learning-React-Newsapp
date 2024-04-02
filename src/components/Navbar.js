import React, { Component } from "react";

export default class navbar extends Component {
  constructor() {
    super();
    this.state = {
      categories: {
        general: "general",
        business: "business",
        entertainment: "entertainment",
        health: "health",
        science: "science",
        sports: "sports",
        technology: "technology",
      },
      countries: {
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
      },
      selectedCountry: "us",
      selectedCategory: "general",
    };
  }

  componentDidMount = () => {
    this.setSelection();
  }
  
  setSelection = () => {
    this.props.selection(
      this.state.selectedCountry,
      this.state.selectedCategory
    );
  };
  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category }, () => {
      this.setSelection();
    });
  };

  handleCountryChange = (country) => {
    this.setState({ selectedCountry: country }, () => {
      this.setSelection();
    });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Rabbit News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Category
              </button>
              <ul className="dropdown-menu">
                {Object.keys(this.state.categories).map((element) => {
                  return (
                    <li key={element}>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => this.handleCategoryChange(element)}
                      >
                        {this.state.categories[element]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown mx-5">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Country
              </button>
              <ul
                className="dropdown-menu"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {Object.keys(this.state.countries).map((element) => {
                  return (
                    <li key={element}>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => this.handleCountryChange(element)}
                      >
                        {this.state.countries[element]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
