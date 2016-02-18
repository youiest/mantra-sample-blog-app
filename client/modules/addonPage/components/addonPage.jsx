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
  getDefaultProps() {
    return {
      openImmediately: false,
    };
  },
  handleChange(event, index, value) {
    return this.setState({value})
    },
  onFocus(event){
    this.render(this ,<SelectFieldExampleFloatingLabel openImmediately={true} />)
    //event.persist()
    //this.setState({open:true})
    //let el = React.findDOMNode(this);
    //const t = event.target
    //this.requestClose('clickAway');
    //this.setProps({openImmediately:true})
    //this.props.openImmediately = true
    //t.props.openImmediately = true

    //console.log('focus', event.target, t, el, this.refs.select,this.props, this.state, this, React.PropTypes.func)

    //ev = new Event({type:'open'})
    //t.dispatchEvent(ev)

  },

  render() {
    return (
      <div>
        <SelectField
          ref="select"
          value={this.state.value? this.state.value : 1}
          tabIndex="0"
          onChange={this.handleChange}
          onFocus={this.onFocus}
          floatingLabelText="Floating Label Text"
          floatingLabelStyle={{color: 'red'}}
        >
          {items}
        </SelectField>
      </div>
    );
  }
})
export default SelectFieldExampleFloatingLabel;
