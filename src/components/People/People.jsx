var React = require('react');

var People = React.createClass({

  getInitialState: function() {
    return {
      species: [],
      starships: [],
      vehicles: [],
      films: []
    }
  },

  componentWillMount: function() {

    // get species names
    for (var i=0; i < this.props.species.length; i++) {
      var url = this.props.species[i].toString();
      $.get(url).done(function(data) {
        this.state.species.push({
          name: data.name,
          url: url
        });
        this.setState({ species: this.state.species });
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

    // get films titles
    for (var i=0; i < this.props.films.length; i++) {
      var url = this.props.films[i].toString();
      $.get(url).done(function(data) {
        this.state.films.push({
          title: data.title,
          url: url
        });
        this.setState({ films: this.state.films });
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
    var createSpecies = this.state.species.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.species.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
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

    // films
    var createFilms = this.state.films.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.films.length >= 2 ? <a className="commaList crossLink" key={item.title+index}>{item.title}</a> : <a className="crossLink" key={item.title+index}>{item.title}</a>
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