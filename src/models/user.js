const uuidv1 = require('uuid/v1');

class User {
  constructor(options) {
    this.id = 1;
    this.store = localStorage;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.jobTitle = options.jobTitle;
    this.location = options.location;
    this.tagline = options.tagline;
    this.imgUrl = options.imgUrl;
  }
  fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  titleLocation() {
    return [this.jobTitle, this.location].join(" from ");
  }

  update(args) {
    var user = this;
    Object.keys(args).forEach(function(key) {
      user[key] = args[key];
    });
    this.save();
  }

  save() {
    if(this.id === undefined) this.id = uuidv1();

    this.store.setItem(this.id, this.toJSON());
    }

  toJSON() {
      return JSON.stringify(this.attributes());
  }

  attributes() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      jobTitle: this.jobTitle,
      location: this.location,
      tagline: this.tagline,
      imgUrl: this.imgUrl,
      store: this.store
    }
  }
}

export default User;