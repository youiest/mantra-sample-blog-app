
var SelectFieldExampleFloatingLabel = React.createClass({
  getInitialState() {
    let ThemeManager = mui.Styles.ThemeManager

    let DefaultRawTheme = mui.Styles.LightRawTheme
    const items = [
      <MenuItem key={1} value={1} primaryText="Never"/>,
      <MenuItem key={2} value={2} primaryText="Every Night"/>,
      <MenuItem key={3} value={3} primaryText="Weeknights"/>,
      <MenuItem key={4} value={4} primaryText="Weekends"/>,
      <MenuItem key={5} value={5} primaryText="Weekly"/>,
    ];
    return {
      hovered: false,
      isKeyboardFocused: false,
      state: {value: null},
      touch: false,
      //items: items,
      muiTheme: this.context.muiTheme
        ? this.context.muiTheme
        : ThemeManager.getMuiTheme(DefaultRawTheme)
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
