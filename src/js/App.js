import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hadees from "./components/Hadees";
import Salah from "./components/Salah";
import data from "./data/Data_Hadees";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
    this.onCurrentPageChangeHandler = this.onCurrentPageChangeHandler.bind(
      this
    );
  }
  onCurrentPageChangeHandler(param) {
    this.setState({
      currentPage: param
    });
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
        <Header
          onCurrentPageChange={this.onCurrentPageChangeHandler}
          currentPage={this.state.currentPage}
          title="Masjid-e-Rasheed"
        />
        {currentPage === "home" && (
          <Hadees
            translation={data.hadees[0].english}
            book={data.hadees[0].book}
            url={data.hadees[0].url}
          />
        )}
        {currentPage === "salah" && <Salah />}
        <Footer />
      </div>
    );
  }
}
export default App;
