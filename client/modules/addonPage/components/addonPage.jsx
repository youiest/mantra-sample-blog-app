import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Component, PropTypes } from 'react'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
const items = [
  <MenuItem key={1} value={1} primaryText="Never"/>,
  <MenuItem key={2} value={2} primaryText="Every Night"/>,
  <MenuItem key={3} value={3} primaryText="Weeknights"/>,
  <MenuItem key={4} value={4} primaryText="Weekends"/>,
  <MenuItem key={5} value={5} primaryText="Weekly"/>,
];

const SelectFieldExampleFloatingLabel = React.createClass({
  getInitialState() {
    return {
      state: {value: null},
    };
  },
  handleChange(event, index, value) {
    return this.setState({value})
    },

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value? this.state.value : 1}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
        >
          {items}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Styled Floating Label Text"
          floatingLabelStyle={{color: 'red'}}
        >
          {items}
        </SelectField>
      </div>
    );
  }
})
export default SelectFieldExampleFloatingLabel;
