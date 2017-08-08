class Project {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.link = options.link;
    this.description = options.description;
    this.imgUrl = options.imgUrl;
    this.user_id = options.user_id
  }

  update(args) {
    var project = this;
    Object.keys(args).forEach(function(key) {
      project[key] = args[key];
    });
    console.log(this.props)
    // this.save();
  }
  save() {
    fetch("http://localhost:4000/projects/" + this.id, {
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
        img_url: this.imgUrl,
        user_id: this.user_id
      })
    });
  };
}

export default Project;