var React = require('react');

var Film = React.createClass({
  getInitialState: function() {
    return {
      filmSpec: [],
      starships: [],
      vehicles: [],
      characters: [],
      planets: []
    }
  },

  componentWillMount: function() {

    // get species names
    for (var i=0; i < this.props.species.length; i++) {
      var url = this.props.species[i].toString();
      $.get(url).done(function(data) {
        this.state.filmSpec.push({
          name: data.name,
          url: url
        });
        this.setState({ species: this.state.filmSpec });
       }.bind(this));
    };

    // get starships names
    for (var i=0; i < this.props.starships.length; i++) {
      var url = this.props.starships[i].toString();
      $.get(url).done(function(data) {
        this.state.starships.push({
          name: data.name,
          url: url
        });
        this.setState({ starships: this.state.starships });
       }.bind(this));
    };

    // get vehicles names
    for (var i=0; i < this.props.vehicles.length; i++) {
      var url = this.props.vehicles[i].toString();
      $.get(url).done(function(data) {
        this.state.vehicles.push({
          name: data.name,
          url: url
        });
        this.setState({ vehicles: this.state.vehicles });
       }.bind(this));
    };

    // get characters names
    for (var i=0; i < this.props.characters.length; i++) {
      var url = this.props.characters[i].toString();
      $.get(url).done(function(data) {
        this.state.characters.push({
          name: data.name,
          url: url
        });
        this.setState({ characters: this.state.characters });
       }.bind(this));
    };

    // get planets names
    for (var i=0; i < this.props.planets.length; i++) {
      var url = this.props.planets[i].toString();
      $.get(url).done(function(data) {
        this.state.planets.push({
          name: data.name,
          url: url
        });
        this.setState({ planets: this.state.planets });
       }.bind(this));
    };
  },

  onClick: function(event) {
    event.stopPropagation();

    var itemId = '#' + this.props.id;

    // toggle hidden class
    // responsible for showing/hiding extra information on planets
    // hidden is in main_style.css sheet in public folder
    $(itemId).toggleClass('hidden');
  },

  render: function() {

    var propsStyle = {
      marginTop: 25
    };

    // species
    var createSpecies = this.state.filmSpec.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.filmSpec.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // starships
    var createStarships = this.state.starships.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.starships.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // vehicles
    var createVehicles = this.state.vehicles.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.vehicles.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // characters
    var createCharacters = this.state.characters.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.characters.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // planets
    var createPlanet = this.state.planets.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.planets.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    return (
      <div className="col-sm-12 compBlock">
        <div className="col-sm-6">
          <h3>{this.props.title}</h3>
          <a className="seeAlsoLink" onClick={this.onClick}>Show Details</a>
        </div>

        <div className="col-sm-6" style={propsStyle}>
          <div id={this.props.id} className="hidden props">
            <p><strong>Episode Id:</strong> {this.props.episode_id}</p>
            <p><strong>Director:</strong> {this.props.director}</p>
            <p><strong>Producer(s):</strong> {this.props.producer}</p>
            <p><strong>Release Date:</strong> {this.props.release_date}</p>
            <p><strong>Species:</strong> {createSpecies}</p>
            <p><strong>Starships:</strong> {createStarships}</p>
            <p><strong>Vehicles:</strong> {createVehicles}</p>
            <p><strong>Characters:</strong> {createCharacters}</p>
            <p><strong>Planets:</strong> {createPlanet}</p>
            <p><strong>Opening Crawl:</strong> {this.props.opening_crawl}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Film;