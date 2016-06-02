var React = require('react');
var NavItem = require('./Nav/NavItem.jsx');
var HomePageItem = require('./Nav/HomePageItem.jsx');
var Film = require('./Films/Film.jsx')
var People = require('./People/People.jsx')
var Planet = require('./Planets/Planet.jsx');
var Species = require('./Species/Species.jsx')
var Starship = require('./Starships/Starship.jsx')
var Vehicle = require('./Vehicles/Vehicle.jsx')

var App = React.createClass({

  getInitialState: function() {
    return {
      subjectFilter: '',
      navLinks: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'],
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: []
    }
  },

  componentWillMount: function() {
    // film ajax get
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

    // people ajax get
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

    // planet ajax get
    $.ajax({
      url: 'http://swapi.co/api/planets/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // set data to planets array recieved from SWAPI
        this.setState({ planets: data.results });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('url: ', this.props.url);
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    // species ajax get
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

    // starships ajax get
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

    // vehicles ajax get
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

  handleChildClick: function(event) {

    $('.hideList').css('display', 'none');
    $('.basePage').addClass('hidden');
    this.setState({ subjectFilter: subjectFilter });

    switch(subjectFilter) {
      case 'Films':
        $('#FilmsComp').removeClass('hidden');
        break;
      case 'People':
        $('#PeopleComp').removeClass('hidden');
        break;
      case 'Planets':
        $('#PlanetsComp').removeClass('hidden');
        break;
      case 'Species':
        $('#SpeciesComp').removeClass('hidden');
        break;
      case 'Starships':
        $('#StarshipsComp').removeClass('hidden');
        break;
      case 'Vehicles':
        $('#VehiclesComp').removeClass('hidden');
        break;
    }
  },

  componentDidMount: function() {
    $('html').click(function() {
        $('.compProps').addClass('hidden');
    });
  },

  // click Index title to get rid of subjectFilter and reset it to showing all options
  resetAllTerms: function(event) {
    var newId = '#' + subjectFilter + 'Comp';
    subjectFilter = '';

    $(newId).addClass('hidden');
    $('.hideList').css('display', 'block');
  },

  render: function() {

    // map navLinks, return <NavItem /> to be rendered
    var createLinkItem = this.state.navLinks.map(function(item, subjectFilter, index) {
      return <NavItem onValueChange={this.handleChildClick} key={item + index} id={item} title={item} />
    }.bind(this));

    // use same navLinks array, return <HomePageItem /> to be rendered
    var createHomeItem = this.state.navLinks.map(function(item, subjectFilter, index) {
      return <HomePageItem onValueChange={this.handleChildClick} key={item + index} id={item} title={item} />
    }.bind(this));

    // map films array to get name and URL to link to individual pages
    var createFilmItem = this.state.films.map(function(item, index) {
      var newFilmId = item.title.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <Film
        key={item.title + index}
        id={newFilmId}
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

    // map people array to get name and URL to link to individual pages
    var createPersonItem = this.state.people.map(function(item, index) {
      var newPeopleId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <People
        key={item.name + index}
        id={newPeopleId}
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
      />
    }.bind(this));

    // map planets array to get name and URL to link to individual pages
    var createPlanetItem = this.state.planets.map(function(item, index) {
      var newPlanetId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <Planet
        key={item.name + index}
        id={newPlanetId}
        name={item.name}
        url={item.url}
        diameter={item.diameter}
        rotation_period={item.rotation_period}
        orbital_period={item.orbital_period}
        gravity={item.gravity}
        population={item.population}
        climate={item.climate}
        terrain={item.terrain}
        surface_water={item.surface_water}
      />
    }.bind(this));

    // map species array to get name and URL to link to individual pages
    var createSpeciesItem = this.state.species.map(function(item, index) {
      var newSpeciesId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <Species
        key={item.name + index}
        id={newSpeciesId}
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

    // map starships array to get name and URL to link to individual pages
    var createStarshipItem = this.state.starships.map(function(item, index) {
      var newStarshipId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <Starship
        key={item.name + index}
        id={newStarshipId}
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

    // map vehicles array to get name and URL to link to individual pages
    var createVehicleItem = this.state.vehicles.map(function(item, index) {
      var newVehicleId = item.name.replace(/(\s\()/g, '').replace(/(\))/g, '').replace(/\W+/g, '').split(' ').join('').toLowerCase();
      return <Vehicle
        key={item.name + index}
        id={newVehicleId}
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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={this.resetAllTerms}>Star Wars Connections</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{createLinkItem}</ul>
          </div>
        </nav>

        <div className="container">

          <div className="col-sm-12">
            <div className="col-sm-12 hideList">
              <h1>Click on a link to explore the Star Wars Universe!</h1>

              {createHomeItem}
            </div>

            <div className="subjects">
              <div id="FilmsComp" className="hidden basePage">
                {createFilmItem}
              </div>
              <div id="PeopleComp" className="hidden basePage">
                {createPersonItem}
              </div>
              <div id="PlanetsComp" className="hidden basePage">
                {createPlanetItem}
              </div>
              <div id="SpeciesComp" className="hidden basePage">
                {createSpeciesItem}
              </div>
              <div id="StarshipsComp" className="hidden basePage">
                {createStarshipItem}
              </div>
              <div id="VehiclesComp" className="hidden basePage">
                {createVehicleItem}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;