var React = require('react');

var Planet = React.createClass({

  getInitialState: function() {
    return { newPlanetUrl: '' }
  },

  componentWillMount: function() {
    var url = document.createElement('a');
    url.href = this.props.url;
    url.pathname = url.pathname.replace(/(\/api\/)/, '');
    this.setState({ newPlanetUrl: url.pathname });
  },

  onClick: function(event) {
    event.stopPropagation();

    // toggle hideMe class
    // responsible for showing/hiding extra information on planets
    // hideMe is in main_style.css sheet in public folder
    $('#' + this.props.id).toggleClass('hidden');
  },

  render: function() {

    return (
      <div className="col-md-4">
        <h3>{this.props.name}</h3>
        <a href='#' onClick={this.onClick}>Show Planet Details</a>

        <div id={this.props.id} className="hidden">
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
    )
  }

});

module.exports = Planet;