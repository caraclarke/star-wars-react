var React = require('react');

var Planet = React.createClass({

  getInitialState: function() {
    return {
      movies: [],
      residentsPl: []
    }
  },

  componentWillMount: function() {

    // get pilot names
    for (var i=0; i < this.props.residents.length; i++) {
      var url = this.props.residents[i].toString();
      $.get(url).done(function(data) {
        this.state.residentsPl.push({
          name: data.name,
          url: url
        });
        this.setState({ residentsPl: this.state.residentsPl });
       }.bind(this));
    };

    // get film titles
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

    var createFilm = this.state.movies.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.movies.length >= 2 ? <a className="commaList crossLink" key={item.title+index}>{item.title}</a> : <a className="crossLink" key={item.title+index}>{item.title}</a>
      );
    }, this);

    var createResident = this.state.residentsPl.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.residentsPl.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
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
            <p><strong>Diameter:</strong> {this.props.diameter}</p>
            <p><strong>Rotation Period:</strong> {this.props.rotation_period}</p>
            <p><strong>Orbital Period:</strong> {this.props.orbital_period}</p>
            <p><strong>Gravity:</strong> {this.props.gravity}</p>
            <p><strong>Population:</strong> {this.props.population}</p>
            <p><strong>Climate:</strong> {this.props.climate}</p>
            <p><strong>Terrain:</strong> {this.props.terrain}</p>
            <p><strong>Surface Water:</strong> {this.props.surface_water}</p>
            <p><strong>Movies:</strong> {createFilm}</p>
            <p><strong>Residents:</strong> {createResident}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Planet;