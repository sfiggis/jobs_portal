class Project {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.link = options.link;
    this.description = options.description;
    this.imgUrl = options.imgUrl;
    this.userId = options.userId;
  }

  update(args) {
    var project = this;
    Object.keys(args).forEach(function(key) {
      project[key] = args[key];
    });
    project.save();
  }
  save() {
    var project = this;
    console.log(JSON.stringify(project));
    fetch("http://localhost:4000/projects/" + project.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({project: project}) 
    });
  };
}

export default Project;