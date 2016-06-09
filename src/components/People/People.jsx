var React = require('react');

var People = React.createClass({

  getInitialState: function() {
    return {
      speciesP: [],
      starshipsP: [],
      vehiclesP: [],
      movies: []
    }
  },

  componentWillMount: function() {

    // get species names
    for (var i=0; i < this.props.species.length; i++) {
      var url = this.props.species[i].toString();
      $.get(url).done(function(data) {
        this.state.speciesP.push({
          name: data.name,
          url: url
        });
        this.setState({ speciesP: this.state.speciesP });
       }.bind(this));
    };

    // get starships names
    for (var i=0; i < this.props.starships.length; i++) {
      var url = this.props.starships[i].toString();
      $.get(url).done(function(data) {
        this.state.starshipsP.push({
          name: data.name,
          url: url
        });
        this.setState({ starshipsP: this.state.starshipsP });
       }.bind(this));
    };

    // get vehicles names
    for (var i=0; i < this.props.vehicles.length; i++) {
      var url = this.props.vehicles[i].toString();
      $.get(url).done(function(data) {
        this.state.vehiclesP.push({
          name: data.name,
          url: url
        });
        this.setState({ vehiclesP: this.state.vehiclesP });
       }.bind(this));
    };

    // get films titles
    for (var i=0; i < this.props.films.length; i++) {
      var url = this.props.films[i].toString();
      $.get(url).done(function(data) {
        this.state.movies.push({
          title: data.title,
          url: url
        });
        this.setState({ movies: this.state.movies });
       }.bind(this));
    };

  },

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

    // species
    var createSpecies = this.state.speciesP.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.speciesP.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // starships
    var createStarships = this.state.starshipsP.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.starshipsP.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // vehicles
    var createVehicles = this.state.vehiclesP.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.vehiclesP.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
      );
    }, this);

    // films
    var createFilms = this.state.movies.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.movies.length >= 2 ? <a className="commaList crossLink" key={item.title+index}>{item.title}</a> : <a className="crossLink" key={item.title+index}>{item.title}</a>
      );
    }, this);

    return (
      <div className="col-sm-12 compBlock">
        <div className="col-sm-6">
          <h3>{this.props.name}</h3>
          <a className="seeAlsoLink" onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-sm-6">
          <div id={this.props.id} className="hidden props">
            <p><strong>Birth Year:</strong> {this.props.birth_year}</p>
            <p><strong>Eye Color:</strong> {this.props.eye_color}</p>
            <p><strong>Gender:</strong> {this.props.gender}</p>
            <p><strong>Hair Color:</strong> {this.props.hair_color}</p>
            <p><strong>Height:</strong> {this.props.height}</p>
            <p><strong>Skin Color:</strong> {this.props.skin_color}</p>
            <p><strong>Species:</strong> {createSpecies}</p>
            <p><strong>Starships:</strong> {createStarships}</p>
            <p><strong>Vehicles:</strong> {createVehicles}</p>
            <p><strong>Films:</strong> {createFilms}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = People;