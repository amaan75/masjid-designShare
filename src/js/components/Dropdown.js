import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSalah: "isha"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ currentSalah: event.target.value });
  }

  render() {
    return (
      <div className={`dropdown d-block d-md-none`}>
        <select
          className="btn btn-secondary dropdown-toggle"
          onChange={this.handleChange}
          aria-haspopup="true"
          value={this.state.currentSalah}
        >
          <option value="fajr">Fajr</option>
          <option value="zuhr">Zuhr</option>
          <option value="asr">Asr</option>
          <option value="maghrib">Magghrib</option>
          <option value="isha">Isha</option>
        </select>
      </div>
    );
  }
}
export default Dropdown;
