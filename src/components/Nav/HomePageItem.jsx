var React = require('react');

var HomePageItem = React.createClass({

  // click handler to pass subjectFilter up to App to filter section
  changePage: function(e) {
    subjectFilter = this.props.id;
    this.props.onValueChange(subjectFilter)
  },

  render: function() {
    return (
      <div onClick={this.changePage} className="col-md-4 col-xs-12 homeItem">
        <h2><a id={this.props.id}>{this.props.title}</a></h2>
      </div>
    );
  }
});

module.exports = HomePageItem;