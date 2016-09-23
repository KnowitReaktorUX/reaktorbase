import React from 'react';

class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: this.props.isChecked };
  }

  onChange(e) {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div>
      <h2>Component - checkbox with label</h2>
      <label>
        <input
          type='checkbox'
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
      </div>
    );
  }
}

export default CheckboxWithLabel;

CheckboxWithLabel.propTypes = { isChecked: React.PropTypes.bool };
CheckboxWithLabel.defaultProps = { isChecked: false };
