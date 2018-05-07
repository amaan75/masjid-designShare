import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = params => event => {
    this.props.onCurrentPageChange(params);
  };

  checkActivePage(pageName) {
    const { currentPage } = this.props;
    if (pageName === currentPage) {
      return true;
    }
    return false;
  }

  render() {
    const { currentPage } = this.props;
    return (
      <header
        className={`masthead ${this.checkActivePage("salah") ? "" : "mb-auto"}`}
      >
        <div className="inner">
          <h3 className="masthead-brand">{this.props.title}</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a
              className={`nav-link ${
                this.checkActivePage("home") ? "active" : ""
              }`}
              href="#"
              onClick={this.handleChange("home")}
            >
              Home
            </a>
            <a
              className={`nav-link ${
                this.checkActivePage("salah") ? "active" : ""
              }`}
              href="#"
              onClick={this.handleChange("salah")}
            >
              Salah
            </a>
            <a
              className={`nav-link ${
                this.checkActivePage("contact") ? "active" : ""
              }`}
              href="#"
              onClick={this.handleChange("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
