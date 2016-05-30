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

  onClick: function(e) {
    e.preventDefault;

    this.setState({ displayProps: true })
  },

  //TODO:
    // residents
    // films
    // fix clicking (only one can be clicked at once so it stops fucking up styling)
    // fix layout
    // maybe all possible planets listed on side and when clicked the display comes up on other side of page

  render: function() {

    return (
      <div className="col-md-4">
        <h3>{this.props.name}</h3>
        <a href='#'>Show Planet Details</a>

        <div className={this.state.displayProps ? "" : "hideProps"}>
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