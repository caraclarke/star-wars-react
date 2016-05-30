var React = require('react');

var NavItem = React.createClass({

  getInitialState: function() {
    return { hover: false };
  },

  // mouseOver and mouseOut changing state of hover to change style
  mouseOver: function(e) {
    this.setState({hover: true});
  },

  mouseOut: function(e) {
    this.setState({hover: false});
  },

  // click handler to pass subjectFilter up to App to filter section
  handleChange: function(e) {
    subjectFilter = this.props.id;
    this.props.onValueChange(subjectFilter)
  },

  render: function() {
    return (
      <li onClick={this.handleChange} className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <a style={this.props.aStyle} id={this.props.id}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem;