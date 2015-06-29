'use strict';

var React = require('react');

var Description = React.createClass({

  render: function() {
    return (
      <div>
        <p>
          {this.props.info}
        </p>
      </div>
    );
  }

});

module.exports = Description;
