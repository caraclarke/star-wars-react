var React = require('react');
var Vehicle = require('./Vehicle.jsx');

var VehiclesBase = React.createClass({

  getInitialState: function() {
    return { vehicles: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/vehicles/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to vehicles array recieved from SWAPI

        this.setState({ vehicles: data.results });

      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

    // map vehicles array to get name and URL to link to individual pages
      var createVehicleItem = this.state.vehicles.map(function(item, index) {

        var newTextId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <Vehicle
          key={item.name + index}
          id={newTextId}
          name={item.name}
          url={item.url}
          model={item.model}
          vehicle_class={item.vehicle_class}
          class={item.class}
          manufacturer={item.manufacturer}
          length={item.length}
          cost_in_credits={item.cost_in_credits}
          crew_size={item.crew}
          passengers={item.passengers}
          max_atmosphering_speed={item.max_atmosphering_speed}
          cargo_capacity={item.cargo_capacity}
          consumables={item.consumables}
          films={item.films}
          pilots={item.pilots}
        />
      }.bind(this));

    return (
      <div>
        {createVehicleItem}
      </div>
    )
  }

});

module.exports = VehiclesBase;