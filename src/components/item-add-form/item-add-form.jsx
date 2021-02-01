import React from "react";
import "./item-add-form.css";

class ItemAddForm extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          placeholder="Что нужно сделать?"
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Добавить дело</button>
      </form>
    );
  }
}

export default ItemAddForm;
