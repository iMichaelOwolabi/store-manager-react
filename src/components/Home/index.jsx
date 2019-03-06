import React, { Component } from 'react';
import '../../partial-styles/styles.scss';
import './Home.scss';
import loginValidator from '../../helpers/validator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      },
      errors: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = loginValidator(user.username, user.password);
    if (errors) {
      return this.setState({ errors });
    }
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  render() {
    const { user, errors } = this.state;
    return (
      <div className="wrapper">
        <section id="login">
          <div className="push" />
          <div className="loginBox">
            <h3>Account Login</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" id="username" placeholder="Username" required value={user.username} onChange={this.handleChange} />
              <input type="password" name="password" id="password" placeholder="Password" required value={user.password} onChange={this.handleChange} />
              <div className="error">{errors}</div>
              <button className="button-1" type="submit">Sign in</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
