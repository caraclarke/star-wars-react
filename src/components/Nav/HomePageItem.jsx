var React = require('react');
var Link = require('react-router').Link;

var HomePageItem = React.createClass({

  render: function() {

    return (
      <div className="col-xs-12">
        <h1>Click on a link to explore the Star Wars Universe!</h1>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/films" id="films">Films</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/people" id="people">People</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/planets" id="planets">Planets</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/species" id="species">Species</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/starships" id="starships">Starships</Link></h2>
        </div>

        <div className="col-md-4 col-xs-12 homeItem">
          <h2><Link to="/vehicles" id="vehicles">Vehicles</Link></h2>
        </div>
      </div>
    );
  }
});

module.exports = HomePageItem;