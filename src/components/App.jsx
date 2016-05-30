var React = require('react');
var NavItem = require('./Nav/NavItem.jsx');
var PlanetBase = require('./Planets/PlanetBase.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      subjectFilter: '',
      navLinks: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
    }
  },

  // set state in basePage of alphId
  handleChildClick: function(event) {

    this.setState({ subjectFilter: subjectFilter });

    switch(subjectFilter) {
      case 'Planets':
        $('.hideList').css('display', 'none');
        $('#planetBase').css('display', 'block');
        break;
    }
  },

  // click Index title to get rid of subjectFilter and reset it to showing all options
  resetAllTerms: function(event) {
    subjectFilter = '';
    // console.log(subjectFilter);
    // $('.subjects').css('display', 'none');
    // $('.hideList').css('display', 'block');
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

          <div id="changeMe" className="col-sm-12">
            <div className="col-md-4 col-sm-12 hideList">
              <ul>
                {createLinkItem}
              </ul>
            </div>

            <div className="subjects">
              <div id="planetBase">
                <PlanetBase />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;