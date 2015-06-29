'use strict';

var React    = require('react'),
    Router   = require('react-router-component'),
    Cascade = require('./cascade/Cascade');

var Locations = Router.Locations,
    Location = Router.Location,
    NotFound = Router.NotFound,
    Link = Router.Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        Sorry! Page is not found.
        Back to <Link href="/">home page</Link>.
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <Locations hash>
        <Location path="/" handler={Cascade} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
});

module.exports = Content;
