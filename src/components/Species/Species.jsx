var React = require('react');

var Species = React.createClass({

  onClick: function(event) {
    event.stopPropagation();

    // toggle hidden class
    // responsible for showing/hiding extra information on planets
    // hidden is in main_style.css sheet in public folder
    $('#' + this.props.id).toggleClass('hidden');
  },

  render: function() {

    var propsStyle = {
      marginTop: 25
    };

    return (
      <div className="col-sm-12">
        <div className="col-sm-6">
          <h3>{this.props.name}</h3>
          <a href='#' onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-sm-6">
          <div id={this.props.id} className="hidden">
            <p><strong>Classification:</strong> {this.props.classification}</p>
            <p><strong>Designation:</strong> {this.props.designation}</p>
            <p><strong>Average Height::</strong> {this.props.average_height}</p>
            <p><strong>Eye Color(s):</strong> {this.props.eye_colors}</p>
            <p><strong>Hair Color(s):</strong> {this.props.hair_colors}</p>
            <p><strong>Skin Color(s):</strong> {this.props.skin_colors}</p>
            <p><strong>Language:</strong> {this.props.language}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Species;