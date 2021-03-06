'use strict';

var React = require('react');
var List = require('./List');
var Description = require('./Description');

var Pokemons = require('./data/Pokemons');
var Attacks = require('./data/Attacks');
var Eeveelutions = require('./data/Eeveelutions');

var Cascade = React.createClass({

  getInitialState: function () {
    return {
      selected: []
    };
  },

  render: function() {
    var pokemon = this.getPokemon(this.state.selected[0]);
    var attacks = this.getPokemonAttacks(pokemon);

    if (pokemon && pokemon.name === 'Eevee') {
      var attack = this.getAttack(this.state.selected[2]);
      var description = attack ? attack.desc : null;

      return (
        <div>
          <List items={Pokemons} name="Initial Pokemon" index={0} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)} />
          <List items={Eeveelutions} name="Eeveelutions" index={1} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)} />
          <List items={attacks} name="Available Attacks" index={2} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)}/>
          <Description info={description} name="Attacks Decription" />
        </div>
      );
    } else {
      var attack = this.getAttack(this.state.selected[1]);
      var description = attack ? attack.desc : null;

      return (
        <div>
          <List items={Pokemons} name="Initial Pokemon" index={0} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)} />
          <List items={attacks} name="Available Attacks" index={1} selected={this.state.selected} updateSelection={this.updateSelection.bind(this)}/>
          <Description info={description} name="Attacks Decription" />
        </div>
      );
    }

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
