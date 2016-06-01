var React = require('react');
var NavItem = require('./Nav/NavItem.jsx');
var FilmBase = require('./Films/FilmBase.jsx')
var PeopleBase = require('./People/PeopleBase.jsx')
var PlanetBase = require('./Planets/PlanetBase.jsx');
var SpeciesBase = require('./Species/SpeciesBase.jsx')
var StarshipBase = require('./Starships/StarshipBase.jsx')
var VehicleBase = require('./Vehicles/VehicleBase.jsx')

var App = React.createClass({

  getInitialState: function() {
    return {
      subjectFilter: '',
      navLinks: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
    }
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
          <h1>Click on an icon to explore the Star Wars Universe</h1>

          <div className="col-sm-12">
            <div className="col-md-4 col-sm-12 hideList">
              <ul>
                {createLinkItem}
              </ul>
            </div>

            <div className="subjects">
              <div id="FilmsComp" className="hidden basePage">
                <FilmBase />
              </div>
              <div id="PeopleComp" className="hidden basePage">
                <PeopleBase />
              </div>
              <div id="PlanetsComp" className="hidden basePage">
                <PlanetBase />
              </div>
              <div id="SpeciesComp" className="hidden basePage">
                <SpeciesBase />
              </div>
              <div id="StarshipsComp" className="hidden basePage">
                <StarshipBase />
              </div>
              <div id="VehiclesComp" className="hidden basePage">
                <VehicleBase />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;