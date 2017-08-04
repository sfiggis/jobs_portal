import React, { Component } from 'react';
import ProjectListView from './projectListView';
import User from '../models/user';
import 'whatwg-fetch';

class ShowUser extends Component {
  render() {
    if (this.props.user !== undefined) {
      return (
        <div>
          <img id="profile-img" alt="profile" src={ this.props.user.imgUrl }/>
          <div id="user-info" onDoubleClick={ this.props.parent.edit }>
          <h2>
            { this.props.user.fullName() }
          </h2> 
          <h3>
            { this.props.user.titleLocation() }
          </h3>
          <h4>
            { this.props.user.tagline }
          </h4> 
        </div>
        <ProjectListView />
      </div>
      );  
    } else {
      return <div>loading...</div>
    };
  };
};

class EditUser extends Component {
  render() {
    return (
      <div onDoubleClick={ this.props.parent.show }>
        <fieldset>
          <input id="firstName" className="edit-field" defaultValue={ this.props.user.firstName } onChange={ this.props.parent.handleChange }/>
          <input id="lastName" className="edit-field" defaultValue={ this.props.user.lastName } onChange={ this.props.parent.handleChange }/>
        </fieldset>
        <fieldset>
          <input id="jobTitle" className="edit-field" defaultValue={ this.props.user.jobTitle } onChange={ this.props.parent.handleChange }/>
          <input id="location" className="edit-field" defaultValue={ this.props.user.location } onChange={ this.props.parent.handleChange }/>
       </fieldset> 
       <fieldset>
          <input id="tagline" className="edit-field" defaultValue={ this.props.user.tagline } onChange={ this.props.parent.handleChange }/>
       </fieldset> 
      </div> 
    )
  }
}

class UserView extends Component {

  constructor(props) {
  super(props);
  this.state = {
    currentUser: {},
    view: <ShowUser user={ this.props.user } parent={ this } />
    };

    this.edit = this.edit.bind(this);
    this.show = this.show.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  edit() {
    this.setState( {
      view: <EditUser user={ this.state.currrentUser } parent={ this } />
    });
  };

  show() {
        this.setState( {
      view: <ShowUser user={ this.state.currentUser } parent={ this } />
    });

  };


  componentDidMount() {
    var view = this;
    var userProperties = {};
    fetch("http://localhost:4000/users", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:4000'
      }
    }).then((body) => {
      return body.json();
      }).then(function(parsedData) {
        Object.keys(parsedData[0]).map(function(data) {
          userProperties[snakeToCamel(data)] = parsedData[0][data];
        });
        var user = new User(userProperties);
        view.setState({
          currentUser: user,
          view: <ShowUser user={ user } parent={view} />
        });
      });
    }

  render() {
    return <div className="user-view">
    { this.state.view }
      </div>
  };

  handleChange(event) {
    var object = { [event.target.id]: event.target.value };
     this.props.user.update(object);
  };
};

function snakeToCamel(s){
    return s.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
}

export default UserView;