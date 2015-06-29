'use strict';

var React = require('react');
var Column = require('./Column');

var Pokemons = [
  {id: 'abc1', name: 'Charmander', type: 'fire'},
  {id: 'abc2', name: 'Squirtle', type: 'water'},
  {id: 'abc3', name: 'Bulbasaur', type: 'plant'}
];

var Attacks = [
  {id: 'abc1', name: 'Flamethrower', desc: 'Powerfull attack', forType: 'fire'},
  {id: 'abc2', name: 'Bubbles', desc: 'Meh', forType: 'water'},
  {id: 'abc3', name: 'Hydro Pump', desc: 'Awesome water cannon', forType: 'water'},
  {id: 'abc4', name: 'Tail whip', desc: 'Useless attack', forType: 'all'},
  {id: 'abc5', name: 'Leaf attack', desc: 'Cool green ninja stars', forType: 'plant'}
];

var Cascade = React.createClass({

  getInitialState: function () {
    return {
      selected: []
    };
  },

  render: function() {
    var pokemon = this.getPokemon(this.state.selected[0]);
    var attacks = this.getPokemonAttacks(pokemon);
    var attack = this.getAttack(this.state.selected[1]);
    var description = attack ? attack.desc : null;

    return (
      <div>
        <Column items={Pokemons} name="Initial Pokemon" index={0} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)} />
        <Column items={attacks} name="Available Attacks" index={1} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)}/>
        <Column items={description} name="Attacks Decription" index={2} />
      </div>
    );
  },

  updateSelection: function (index) {
    return function (event) {
      var selected = this.state.selected;
      selected.splice(index);
      selected.push(event.target.value);

      this.setState({selected: selected});
    }.bind(this);
  },

  getPokemon: function (id) {
    return Pokemons.filter(function (pokemon) {
      return pokemon.id === id;
    })[0];
  },

  getPokemonAttacks: function (pokemon) {
    if (!pokemon) return [];

    return Attacks.filter(function (attack) {
      return attack.forType === 'all' || attack.forType === pokemon.type;
    });
  },

  getAttack: function (id) {
    return Attacks.filter(function (attack) {
      return attack.id === id;
    })[0];
  }

});

module.exports = Cascade;
