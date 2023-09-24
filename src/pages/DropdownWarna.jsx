// Komponen DropdownWarna.js
import React, { Component } from "react";
import { Quill } from "react-quill";
const { ColorPicker } = Quill.import("formats/color");
class DropdownWarna extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.applyColor = this.applyColor.bind(this);
  }
  handleChange(color) {
    this.setState({ color });
  }
  applyColor() {
    if (this.state.color) {
      this.props.applyColor(this.state.color);
    }
  }
  render() {
    return (
      <div className="ql-color-picker">
        <input
          type="color"
          onChange={(e) => this.handleChange(e.target.value)}
          value={this.state.color}
        />
        <button onClick={this.applyColor}>OK</button>
      </div>
    );
  }
}
export default DropdownWarna;
