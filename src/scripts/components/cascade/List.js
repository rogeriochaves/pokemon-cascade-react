'use strict';

var React = require('react');
var ListItem = require('./ListItem');

var List = React.createClass({

  render: function() {
    var itemsElements = [];

    itemsElements = this.props.items.map(function (item) {
      return <ListItem {...this.props} item={item} />;
    }.bind(this));

    return (
      <div className="column">
        <b>{this.props.name}</b>
        <hr />
        <ul>
          {itemsElements}
        </ul>
      </div>
    );
  }

});

module.exports = List;
