import { expect } from 'chai';
import User from '../../src/models/user';

describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User({
      firstName: 'Sophie',
      lastName: 'Figgis'
    });
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
});