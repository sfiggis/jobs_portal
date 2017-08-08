class User {
  constructor(options) {
    this.id = 1;
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
    fetch("http://localhost:4000/users/" + this.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.firstName,
        last_name: this.lastName,
        job_title: this.jobTitle,
        location: this.location,
        tagline: this.tagline,
        img_url: this.imgUrl
      })
    });
  };
}

export default User;