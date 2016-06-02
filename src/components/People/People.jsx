var React = require('react');

var People = React.createClass({

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
      <div className="col-sm-6">
        <div className="col-md-4">
          <h3>{this.props.name}</h3>
          <a href='#' onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-md-8">
          <div id={this.props.id} className="hidden">
            <p><strong>Birth Year::</strong> {this.props.birth_year}</p>
            <p><strong>Eye Color::</strong> {this.props.eye_color}</p>
            <p><strong>Gender:</strong> {this.props.gender}</p>
            <p><strong>Hair Color:</strong> {this.props.hair_color}</p>
            <p><strong>Height:</strong> {this.props.height}</p>
            <p><strong>Skin Color:</strong> {this.props.skin_color}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = People;