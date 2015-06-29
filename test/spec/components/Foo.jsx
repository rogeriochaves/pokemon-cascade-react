'use strict';

describe('Foo', function () {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Foo, component, renderedComponent;

  beforeEach(function () {
    Foo = require('components/Foo.js');
    component = <Foo />;
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of Foo', function () {
    expect(component).toBeDefined();
  });
});
