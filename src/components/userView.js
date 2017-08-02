import React, { Component } from 'react';

class ShowUser extends Component {
  render() {
    return (
      <h2 onDoubleClick={ this.props.parent.edit }>
        { this.props.user.fullName() }
      </h2> 
    );  
  };
};

class EditUser extends Component {
  render() {
    return (
      <div>
        <input id="first-name" className="edit-field" defaultValue={ this.props.user.firstName } onChange={ this.props.parent.handleChange }/>
        <input id="last-name" className="edit-field" defaultValue={ this.props.user.lastName } onChange={ this.props.parent.handleChange }/>
      </div>
    )
  }
}

class UserView extends Component {

  constructor(props) {
  super(props);
  this.state = {
    view: <ShowUser user={ this.props.user } parent= { this } />,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName
    };

    this.edit = this.edit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  edit() {
    this.setState( {
      view: <EditUser user={ this.props.user } parent={ this } />
    });
  };

  render() {
    return <div className="user-view">
        { this.state.view }
      </div>
  };

  handleChange(event) {
    if (event.target.id === "first-name") {
      this.setState({
        firstName: event.target.value
      });
    } else {
      this.setState({
        lastName: event.target.value
      });
    }
  };

};

export default UserView;