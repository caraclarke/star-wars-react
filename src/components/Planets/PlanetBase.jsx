var React = require('react');
var Planet = require('./Planet.jsx');

var PlanetBase = React.createClass({

  getInitialState: function() {
    return { planets: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/planets/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to planets array recieved from SWAPI
        this.setState({ planets: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    var url = document.createElement('a');
    url.href = this.props.url;
    url.pathname = url.pathname.replace(/(\/api\/)/, '');
    this.setState({ newPlanetUrl: url.pathname });

  },

  render: function() {

    // map planets array to get name and URL to link to individual pages
      var createPlanetItem = this.state.planets.map(function(item, index) {
        return <Planet
          key={item.name + index}
          id={item.id}
          name={item.name}
          url={item.url}
          diameter={item.diameter}
          rotation_period={item.rotation_period}
          orbital_period={item.orbital_period}
          gravity={item.gravity}
          population={item.population}
          climate={item.climate}
          terrain={item.terrain}
          surface_water={item.surface_water}
        />
      }.bind(this));

    return (
      <div>
        {createPlanetItem}
      </div>
    )
  }

});

module.exports = PlanetBase;