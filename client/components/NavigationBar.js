import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.login;
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
           <a href="#" onClick={this.logout}>
             Logout
             <i className="material-icons right">power_settings_new</i>
           </a>
        </li>
       </ul>
    );
    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
           <Link to="/signup">
            Sign up
            <i className="material-icons right">exit_to_app</i>
           </Link>
        </li>
         <li>
           <Link to="/login">
             login
             <i className="material-icons right">trending_flat</i>
           </Link>
         </li>
       </ul>
    );
    return (
      <nav>
        <div className="nav-wrapper teal darken-1">
          <Link to="/" className="brand-logo">
            Jed-Red Dice
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { isAuthenticated? userLinks : guestLinks }
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  login: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    login: state.login,
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar);
