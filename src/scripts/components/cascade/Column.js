'use strict';

var React = require('react');
var List = require('./List');
var Description = require('./Description');

var Column = React.createClass({

  render: function() {
    var item;

    if (!this.props.items) {
      return false;
    }

    if (typeof this.props.items === 'object') {
      item = <List {...this.props} />;
    } else {
      item = <Description info={this.props.items} />;
    }

    return (
      <div className="column">
        {item}
      </div>
    );
  }

});

module.exports = Column;
