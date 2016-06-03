var React = require('react');
var Film = require('./Film.jsx');

var FilmBase = React.createClass({

  getInitialState: function() {
    return { films: [] }
  },

  componentWillMount: function() {

    // function to sort using specific property
    // in this case will call using episode_id to order movies correctly
    var dynamicSort = function(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      };
    };

    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/films/',
      dataType: 'json',
      cache: false,
      success: function(data) {

        var ordered = data.results.sort(dynamicSort("episode_id"))

        // set reordered data to films array recieved from SWAPI
        this.setState({ films: ordered });
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