var React = require('react');
var Species = require('./Species.jsx');

var SpeciesBase = React.createClass({

  getInitialState: function() {
    return { species: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/species/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to species array recieved from SWAPI
        this.setState({ species: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

    // map species array to get name and URL to link to individual pages
      var createSpeciesItem = this.state.species.map(function(item, index) {

        var newTextId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <Species
          key={item.name + index}
          id={newTextId}
          name={item.name}
          url={item.url}
          classification={item.classification}
          designation={item.designation}
          average_height={item.average_height}
          eye_colors={item.eye_colors}
          hair_colors={item.hair_colors}
          skin_colors={item.skin_colors}
          language={item.language}
          homeworld={item.homeworld}
          people={item.people}
          films={item.films}
        />
      }.bind(this));

    return (
      <div>
        {createSpeciesItem}
      </div>
    )
  }

});

module.exports = SpeciesBase;