'use strict';

var React = require('react');

var Description = React.createClass({

  render: function() {
    return (
      <div className="column">
        <b>{this.props.name}</b>
        <hr />
        <p>
          {this.props.info}
        </p>
      </div>
    );
  }

});

module.exports = Description;
