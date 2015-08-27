import React from 'react/addons';
import assert from 'assert';
import CheckboxWithLabel from '../../../app/components/checkboxwithlabel/checkboxwithlabel.react';

const TestUtils = React.addons.TestUtils;

describe('CheckboxWithLabel component', function () {
  	before('render and locate element', function () {
    	var renderedComponent = TestUtils.renderIntoDocument(
      		<CheckboxWithLabel labelOn="On" labelOff="Off" />
    	);

	    // Searching for <input> tag within rendered React component
	    // Throws an exception if not found
	    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
											renderedComponent,
	      									'input'
	    								);

	    this.inputElement = inputComponent.getDOMNode();
      this.label        = TestUtils.findRenderedDOMComponentWithTag(
                      renderedComponent,
                          'label');
    });

  	it('<input> should be of type "checkbox"', function () {
    	assert.equal(this.inputElement.getAttribute('type'), 'checkbox');
  	});

    it('Label should be Off by default', function () {
      assert.equal(this.label.getDOMNode().textContent, 'Off');
    });

    it('Label changes text to On after checkbox is clicked', function () {
      TestUtils.Simulate.change(this.inputElement);
      assert.equal(this.label.getDOMNode().textContent, 'On');
    });
});
