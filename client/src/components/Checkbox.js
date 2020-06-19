
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
      <div className={isChecked ? 'relative checkbox border-blue-500 border-4' : 'relative'} style={{height: '200px'}}>
        <label className="inline-block w-full h-full">
          <input
						className="h-full w-full"
						type="checkbox"
						value={label}
						checked={isChecked}
						onChange={this.toggleCheckboxChange}
					/>
          <img style={{width: '100%',height: '100%', objectFit: 'cover'}} className="absolute top-0" src={image} />
        </label>
      </div>
    );
  }
}

export default Checkbox;
