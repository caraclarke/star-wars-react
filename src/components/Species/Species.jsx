var React = require('react');

var Species = React.createClass({

  getInitialState: function() {
    return {
      movies: [],
      charactersSp: []
    }
  },

  componentWillMount: function() {

    // get pilot names
    for (var i=0; i < this.props.people.length; i++) {
      var url = this.props.people[i].toString();
      $.get(url).done(function(data) {
        this.state.charactersSp.push({
          name: data.name,
          url: url
        });
        this.setState({ charactersSp: this.state.charactersSp });
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

    var createCharacters = this.state.charactersSp.map(function(item, index) {
      // var newUrl = item.url.replace('http://swapi.co/api', '');
      return (
        this.state.charactersSp.length >= 2 ? <a className="commaList crossLink" key={item.name+index}>{item.name}</a> : <a className="crossLink" key={item.name+index}>{item.name}</a>
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
            <p><strong>Classification:</strong> {this.props.classification}</p>
            <p><strong>Designation:</strong> {this.props.designation}</p>
            <p><strong>Average Height:</strong> {this.props.average_height}</p>
            <p><strong>Eye Color(s):</strong> {this.props.eye_colors}</p>
            <p><strong>Hair Color(s):</strong> {this.props.hair_colors}</p>
            <p><strong>Skin Color(s):</strong> {this.props.skin_colors}</p>
            <p><strong>Language:</strong> {this.props.language}</p>
            <p><strong>Movies:</strong> {createFilm}</p>
            <p><strong>Characters:</strong> {createCharacters}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Species;