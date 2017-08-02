import React from 'react';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import User from '../../src/models/user'

import UserView from '../../src/components/userView';

describe("UserView component", function() {
  var component;
  var user;

  describe("render", function() {
    beforeEach(function() {
      user = new User({
        firstName: 'Sophie',
        lastName: 'Figgis'
      });

      component = mount(<UserView user={ user } />);
    });

    it("creates a div with a class name of user-view", function() {
      var component = render(<UserView user={ user } />);
      expect(component.find("div").length).to.eq(1);
      expect(component.find("div").hasClass("user-view")).to.eq(true);
    });

    it("displays a user's name in a heading", function() {
      console.log(component.find("h2").first().html);
      expect(component.find("h2").first().text()).to.eq("Sophie Figgis");
    });
  });

  describe("editing name", function() {
    beforeEach(function() {
      component.find("h2").first().simulate("dblclick");
    });

    it("displays the name in an edit box for the user to change", function() {
      const inputs = component.find("input.edit-field")
      expect(inputs).to.have.length(2);
      expect(inputs.first().html()).contains('Sophie');
      expect(inputs.last().html()).contains('Figgis');
    });
  });

  describe("updating name", function() {
    beforeEach(function() {
      component.setState({ firstName: "Jody"})
      component.setState({ lastName: "Rogan"})
      });

    it("updates the users first first name and last name", function() {
      expect(component.state().firstName).to.eq("Jody");
      expect(component.state().lastName).to.eq("Rogan");
    });
  });
});