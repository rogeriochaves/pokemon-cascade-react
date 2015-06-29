'use strict';

var React = require('react');

var ListItem = React.createClass({

  render: function() {

    var item = this.props.item;
    var index = this.props.index;
    var selected = this.props.selected[index];
    var updateSelection = this.props.updateSelection(index);

    return (
      <li>
        <input name={this.props.name} id={this.getId(item)} type="radio" value={item.id} checked={item.id === selected} onChange={updateSelection} />
        <label htmlFor={this.getId(item)}>{item.name}</label>
      </li>
    );

  },

  getId: function (item) {
    return 'cascade-item-' + this.props.index + '-' + item.id;
  }

});

module.exports = ListItem;
