var React = require('react');
var People = require('./People.jsx');

var PeopleBase = React.createClass({

  getInitialState: function() {
    return { people: [] }
  },

  componentWillMount: function() {
    // call to SWAPI
    $.ajax({
      url: 'http://swapi.co/api/people/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to people array recieved from SWAPI
        this.setState({ people: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

    // map people array to get name and URL to link to individual pages
      var createPersonItem = this.state.people.map(function(item, index) {

        var newTextId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();

        return <People
          key={item.name + index}
          id={newTextId}
          name={item.name}
          url={item.url}
          birth_year={item.birth_year}
          gender={item.gender}
          eye_color={item.eye_color}
          hair_color={item.hair_color}
          height={item.height}
          skin_color={item.skin_color}
          homeworld={item.homeworld}
          films={item.films}
          species={item.species}
          vehicles={item.vehicles}
          starships={item.starships}
        />
      }.bind(this));

    return (
      <div>
        {createPersonItem}
      </div>
    )
  }

});

module.exports = PeopleBase;