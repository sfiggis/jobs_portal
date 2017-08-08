import { expect } from 'chai';
import User from '../../src/models/user';
import { LocalStorage } from 'node-localstorage';

describe('User', function() {

  var user;
  var localStorage;

  beforeEach(function() {
    user = new User({
      firstName: 'Sophie',
      lastName: 'Figgis',
      jobTitle: 'Full Stack Developer',
      location: 'Windsor, UK',
      tagline: 'javascript... hmm...',
      imgUrl: 'http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg'
    });
     user.state = {
        currentUser: user
      };
  });

  it('provides the firstName', function() {
    expect(user.firstName).to.eq('Sophie');
  });

  it('provides the lastName', function() {
    expect(user.lastName).to.eq('Figgis');
  });

  it('provides the fullName', function() {
    expect(user.fullName()).to.eq('Sophie Figgis');
  });

  it('provides the jobTitle', function() {
    expect(user.jobTitle).to.eq('Full Stack Developer');
  });

  it('provides the location', function() {
    expect(user.location).to.eq('Windsor, UK');
  });

  it('provides the job title and location', function() {
    expect(user.titleLocation()).to.eq('Full Stack Developer from Windsor, UK');
  });

  it('provides the tagline', function() {
    expect(user.tagline).to.eq('javascript... hmm...');
  });

  it('provides the image url', function() {
    expect(user.imgUrl).to.eq('http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg');
  });

  it ('displays updated name after editing', function() {
    user.update({ firstName: "Jody", lastName: "Rogan" });
    expect(user.firstName).to.eq("Jody");
    expect(user.lastName).to.eq("Rogan");
  })


  describe("save", function() {
    beforeEach(function() {
      user.save();
    });

    it("generates an id", function() {
      expect(user.id).to.not.be.undefined;
      expect(typeof(user.id)).to.eq('number');
    });

  });
});