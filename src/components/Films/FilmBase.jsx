var React = require('react');
var Film = require('./Film.jsx');

var FilmBase = React.createClass({

  getInitialState: function() {
    return { films: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/films/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to films array recieved from SWAPI
        this.setState({ films: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

    // map films array to get name and URL to link to individual pages
      var createFilmItem = this.state.films.map(function(item, index) {

        var newTextId = item.title.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <Film
          key={item.title + index}
          id={newTextId}
          title={item.title}
          url={item.url}
          episode_id={item.episode_id}
          opening_crawl={item.opening_crawl}
          director={item.director}
          producer={item.producer}
          release_date={item.release_date}
          species={item.species}
          starships={item.starships}
          vehicles={item.vehicles}
          characters={item.characters}
          planets={item.planets}
        />
      }.bind(this));

    return (
      <div>
        {createFilmItem}
      </div>
    )
  }

});

module.exports = FilmBase;