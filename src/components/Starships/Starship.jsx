var React = require('react');

var Starship = React.createClass({

  getInitialState: function() {
    return {
      movies: [],
      pilotsSt: []
    }
  },

  componentWillMount: function() {

    // get pilot names
    for (var i=0; i < this.props.pilots.length; i++) {
      var url = this.props.pilots[i].toString();
      $.get(url).done(function(data) {
        this.state.pilotsSt.push({
          name: data.name,
          url: url
        });
        this.setState({ pilotsSt: this.state.pilotsSt });
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

    var createPilots = this.state.pilotsSt.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.pilotsSt.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
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
            <p><strong>Model:</strong> {this.props.model}</p>
            <p><strong>Starship Class:</strong> {this.props.starship_class}</p>
            <p><strong>Cost in Credits:</strong> {this.props.cost_in_credits}</p>
            <p><strong>Length:</strong> {this.props.length}</p>
            <p><strong>Passenger Size:</strong> {this.props.passengers}</p>
            <p><strong>Max Atmosphering Speed:</strong> {this.props.max_atmosphering_speed}</p>
            <p><strong>Hyperdrive Rating:</strong> {this.props.hyperdrive_rating}</p>
            <p><strong>MGLT:</strong> {this.props.MGLT}</p>
            <p><strong>Cargo Capacity:</strong> {this.props.cargo_capacity}</p>
            <p><strong>Consumables:</strong> {this.props.consumables}</p>
            <p><strong>Movies:</strong> {createFilm}</p>
            <p><strong>Pilots:</strong> {createPilots}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Starship;