var React = require('react');

var Planet = React.createClass({

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
          <a className="seeAlsoLink" onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-sm-6">
          <div id={this.props.id} className="hidden props">
            <p><strong>Diameter:</strong> {this.props.diameter}</p>
            <p><strong>Rotation Period:</strong> {this.props.rotation_period}</p>
            <p><strong>Orbital Period:</strong> {this.props.orbital_period}</p>
            <p><strong>Gravity:</strong> {this.props.gravity}</p>
            <p><strong>Population:</strong> {this.props.population}</p>
            <p><strong>Climate:</strong> {this.props.climate}</p>
            <p><strong>Terrain:</strong> {this.props.terrain}</p>
            <p><strong>Surface Water:</strong> {this.props.surface_water}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Planet;