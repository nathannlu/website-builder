
import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  state = {
		isChecked: this.props.checked ? true : false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label, image } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
						type="checkbox"
						value={label}
						checked={isChecked}
						onChange={this.toggleCheckboxChange}
					/>
          <img src={image} />
        </label>
      </div>
    );
  }
}

export default Checkbox;
