var React = require('react');
var Link = require('react-router').Link;
var NavItem = require('./Nav/NavItem.jsx');
// var HomePageItem = require('./Nav/HomePageItem.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      subjectFilter: '',
      navLinks: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
    }
  },

  // onClick: function() {
  //   console.log('clicked');
  // },

  render: function() {

    var navStyle = {
      border: 0,
      borderRadius: 0
    };

    var titleStyle = {
      cursor: 'pointer'
    };

    var linkStyle = {
      cursor: 'pointer'
    }

    // three if statements below changing nav background, link (navLink) and title colors
    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;

    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;

    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    // map navLinks, return <NavItem /> to be rendered
    var createLinkItem = this.state.navLinks.map(function(item, subjectFilter, index) {
      var navId = item.toLowerCase();
      return <NavItem aStyle={linkStyle} key={item + index} id={navId} title={item} />
    }.bind(this));

    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" style={titleStyle} className="navbar-brand">Star Wars Connections</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{createLinkItem}</ul>
          </div>
        </nav>

        <div className="container">

          <div className="col-sm-12">

            <div onClick={this.onClick} className="subjects">
              {this.props.children}
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;