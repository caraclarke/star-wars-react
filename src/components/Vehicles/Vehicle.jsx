var React = require('react');

var Vehicle = React.createClass({

  getInitialState: function() {
    return { face: [] }
  },

  componentWillMount: function() {

    for (var i=0; i < this.props.films.length; i++) {
      var url = this.props.films[i].toString();

      $.get(url).done(function(data) {
        this.state.face.push(data.title);

        this.setState({ face: this.state.face });
        // console.log(this.state.face)
       }.bind(this));
    }
    // console.log(this.state.face);
  },

  onClick: function(event) {
    event.stopPropagation();

    // toggle hidden class
    // responsible for showing/hiding extra information on planets
    // hidden is in main_style.css sheet in public folder
    $('#' + this.props.id).toggleClass('hidden');
  },

  render: function() {

    var propsStyle = {
      marginTop: 25
    };

    var multiple = this.state.face.length >= 2;

    var createFilm = this.state.face.map(function(item, index) {
      return (
        (multiple) ? <a className="commaList crossLink" key={item+index}>{item}</a> : <a className="crossLink" key={item+index}>{item}</a>
      );
    }, this);

    return (
      <div className="col-sm-12 compBlock">
        <div className="col-sm-6">
          <h3>{this.props.name}</h3>
          <a className="seeAlsoLink" onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-sm-6">
          <div id={this.props.id} className="hidden props">
            <p><strong>Model:</strong> {this.props.model}</p>
            <p><strong>Vehicle Class:</strong> {this.props.vehicle_class}</p>
            <p><strong>Manufacturer:</strong> {this.props.manufacturer}</p>
            <p><strong>Length:</strong> {this.props.length}</p>
            <p><strong>Cost in Credits:</strong> {this.props.cost_in_credits}</p>
            <p><strong>Crew Size:</strong> {this.props.crew_size}</p>
            <p><strong>Passenger Size:</strong> {this.props.passengers}</p>
            <p><strong>Max Atmosphering Speed:</strong> {this.props.max_atmosphering_speed}</p>
            <p><strong>Cargo Capacity:</strong> {this.props.cargo_capacity}</p>
            <p><strong>Consumables:</strong> {this.props.consumables}</p>
            <p><strong>Movies:</strong> {createFilm}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Vehicle;