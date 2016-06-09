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

  },

  render: function() {

    // map planets array to get name and URL to link to individual pages
      var createPlanetItem = this.state.planets.map(function(item, index) {

        var newTextId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <Planet
          key={item.name + index}
          id={newTextId}
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
          films={item.films}
          residents={item.residents}
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