import React from 'react';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import User from '../../src/models/user';

import UserView from '../../src/components/userView';

describe("UserView component", function() {
  var component;
  var user;

  describe("render", function() {
    beforeEach(function() {
      user = new User({
        firstName: 'Sophie',
        lastName: 'Figgis',
        jobTitle: 'Full Stack Developer',
        location: 'Windsor, UK',
        tagline: 'javascript... hmm...',
        imgUrl: 'http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg'
      });

      component = mount(<UserView user={ user } />);
    });

    it("creates a div with a class name of user-view", function() {
      var component = render(<UserView user={ user } />);
      expect(component.find("div").length).to.eq(5);
      expect(component.find("div").hasClass("user-view")).to.eq(true);
    });

    it("displays a user's name in a heading", function() {
      expect(component.find("h2").first().text()).to.eq("Sophie Figgis");
    });

    it("displays a user's job and location in a sub-heading", function() {
      var component = render(<UserView user={ user } />);
      expect(component.find("h3").html()).to.eq('Full Stack Developer from Windsor, UK');
    });

    it("displays a user's tagline in a sub-heading", function() {
      var component = render(<UserView user={ user } />);
      expect(component.find("h4").html()).to.eq('javascript... hmm...');
    });

    it("displays a user's image as image element", function() {
      var component = render(<UserView user={ user } />);
      expect(component.find("img")[0].attribs.src).to.eq('http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg');
    });
  });

  describe("editing name", function() {
    beforeEach(function() {
      component.find("h2").first().simulate("dblclick");
    });

    it("displays the user fields in edit boxes for the user to change", function() {
      const inputs = component.find("input.edit-field")
      expect(inputs).to.have.length(5);
      expect(inputs.first().html()).contains('Sophie');
      expect(inputs.last().html()).contains('javascript... hmm...');
    });
  });

  describe("updating user", function() {
    beforeEach(function() {
      component.setState({ firstName: "Jody"})
      component.setState({ lastName: "Rogan"})
      component.setState({ jobTitle: "Definitely just back end developer"})
      component.setState({ location: "Mars"})
      });

    it("updates the users first name and last name", function() {
      expect(component.state().firstName).to.eq("Jody");
      expect(component.state().lastName).to.eq("Rogan");
    });

    it("updates the users job title and location", function() {
      expect(component.state().jobTitle).to.eq("Definitely just back end developer");
      expect(component.state().location).to.eq("Mars");
    });
  });

  describe("handles change from user input", function() {
    beforeEach(function() {
      var event = { target: { id: "firstName", value: "Jody" }};
      component = mount(<UserView user={ user } />);
      component.instance().handleChange(event);
      });

    it("handles changes after user updated fields", function() {
      expect(user.firstName).to.eq("Jody");
    });
  });
});