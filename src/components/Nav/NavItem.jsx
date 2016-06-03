var React = require('react');
var Link = require('react-router').Link;

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

  render: function() {

    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Link to={"/" + this.props.id} style={this.props.aStyle} id={this.props.id}>{this.props.title}</Link>
      </li>
    );
  }
});

module.exports = NavItem;