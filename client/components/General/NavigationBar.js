import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/loginActions';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.context.router.push('/');
    this.props.logout();
  }

  render() {
    const { isAuthenticated, user } = this.props.login;
    const userLinks = (
      <div>
      <ul id="dropdown1" className="dropdown-content">
        <li>
           <Link to="#">
            my-docs
            <i className="material-icons right">perm_media</i>
           </Link>
        </li>
        <li>
           <Link to="#">
            Profile
            <i className="material-icons right">account_circle</i>
           </Link>
        </li>
        <li className="divider"></li>
        <li>
           <a href="#" onClick={this.logout}>
             Logout
             <i className="material-icons right">power_settings_new</i>
           </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
           <Link to="#">
            View users
            <i className="material-icons right">account_circle</i>
           </Link>
        </li>
        <li>
          <Link to="#">
            Search Documents
            <i className="material-icons right">search</i>
          </Link>
        </li>
        <li>
           <Link to="create-document">
            Create Document
            <i className="material-icons right">add</i>
           </Link>
        </li>
        <li>
          <a className="dropdown-button" href="#!" data-activates="dropdown1">
            {user && `Welcome, ${user.username}`}
            <i className="material-icons right">
               arrow_drop_down
             </i>
           </a>
         </li>
       </ul>
       </div>
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
            &nbsp;&nbsp;Jed-Doc
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

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    login: state.login,
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar);
