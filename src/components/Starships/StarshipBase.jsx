var React = require('react');
var Starship = require('./Starship.jsx');

var StarshipBase = React.createClass({

  getInitialState: function() {
    return { starships: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/starships/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to starships array recieved from SWAPI
        this.setState({ starships: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

    // map starships array to get name and URL to link to individual pages
      var createStarshipItem = this.state.starships.map(function(item, index) {

        var newTextId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <Starship
          key={item.name + index}
          id={newTextId}
          name={item.name}
          url={item.url}
          model={item.model}
          starship_class={item.starship_class}
          cost_in_credits={item.cost_in_credits}
          length={item.length}
          crew={item.crew}
          passengers={item.passengers}
          max_atmosphering_speed={item.max_atmosphering_speed}
          MGLT={item.MGLT}
          cargo_capacity={item.cargo_capacity}
          consumables={item.consumables}
          films={item.films}
          pilots={item.pilots}
          hyperdrive_rating={item.hyperdrive_rating}
        />
      }.bind(this));

    return (
      <div>
        {createStarshipItem}
      </div>
    )
  }

});

module.exports = StarshipBase;