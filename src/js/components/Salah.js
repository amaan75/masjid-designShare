import React from "react";
import css from "../../scss/salah.scss";
import Dropdown from "./Dropdown";
import salahTime from "../data/Data_Salah_Time";

export default class Salah extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSalah: "isha",
      userSalah: salahTime.isha,
      sehriOrIftar: salahTime.iftar
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    //value for drop-down
    this.setState({
      currentSalah: event.target.value
    });
    this.checkSalah(event.target.value);
  }

  showSalah(salahTime) {
    this.setState({
      userSalah: salahTime
    });
  }
  checkSalah(userChoice) {
    if (userChoice === "fajr") {
      this.showSalah(salahTime.fajr);
    } else if (userChoice === "zuhr") {
      this.showSalah(salahTime.zuhr);
    } else if (userChoice === "asr") {
      this.showSalah(salahTime.asr);
    } else if (userChoice === "maghrib") {
      this.showSalah(salahTime.maghrib);
    } else if (userChoice === "isha") {
      this.showSalah(salahTime.isha);
    } else {
      console.log("there are only 5 farz salah");
    }
  }
  handleClick = userChoice => e => {
    this.setState({
      currentSalah: userChoice
    });
    this.checkSalah(userChoice);
  };
  render() {
    const { userSalah, currentSalah } = this.state;
    return (
      <div className="container">
        <div className="d-none d-md-block">
          <div className="nav justify-content-center nav-fill ">
            <ul className=" pagination pagination-lg justify-content-center nav-fill">
              <li
                onClick={this.handleClick("fajr")}
                className="page-item page-link rounded-left"
              >
                Fajr
              </li>
              <li
                onClick={this.handleClick("zuhr")}
                className="page-item page-link"
              >
                Zuhr
              </li>
              <li
                onClick={this.handleClick("asr")}
                className="page-item page-link"
              >
                Asr
              </li>
              <li
                onClick={this.handleClick("maghrib")}
                className="page-item page-link"
              >
                Maghrib
              </li>
              <li
                onClick={this.handleClick("isha")}
                className="page-item page-link rounded-right"
              >
                Isha
              </li>
            </ul>
          </div>
          <div className="row justify-content-center align-items-center">
            <p className="display-1">{userSalah}</p>
          </div>
          <div className="roza-time">
            <div className="sehri float-left">
              <h1 className="border border-white rounded p-2 mt-5 mx-3">
                Sehri
              </h1>
              <div className="text-white display-3 p-2 mt-4 mx-3 ">
                {salahTime.sehri}
              </div>
            </div>
            <div className="iftar float-right ">
              <h1 className="border border-white rounded p-2 mt-5 mx-3">
                Iftar
              </h1>
              <h1 className="text-white display-3 p-2 mt-4 mx-3">
                {salahTime.iftar}
              </h1>
            </div>
          </div>
        </div>
        <div className=" d-block d-md-none">
          <select
            className="btn btn-secondary dropdown-toggle"
            onChange={this.handleChange}
            aria-haspopup="true"
            value={currentSalah}
          >
            <option value="fajr">Fajr</option>
            <option value="zuhr">Zuhr</option>
            <option value="asr">Asr</option>
            <option value="maghrib">Magghrib</option>
            <option value="isha">Isha</option>
          </select>
          <div className="row justify-content-center align-items-center">
            <p className="display-1">{userSalah}</p>
          </div>
        </div>
      </div>
    );
  }
}
