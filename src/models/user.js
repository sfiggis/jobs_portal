class User {
  constructor(options) {
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
  }
}

export default User;