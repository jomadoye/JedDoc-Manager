import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
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
          <li className="divider" />
          <li>
            <a href="#" onClick={this.logout}>
              Logout
              <i className="material-icons right">power_settings_new</i>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
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

    const sideNavBar = (
      <Link to="/" className="brand-logo">
        <i className="material-icons button-collapse" data-activates="slide-out">menu</i>
        J-Docs
       </Link>
    );

    const logo = (
      <Link to="/" className="brand-logo">
        &nbsp;&nbsp;&nbsp; J-Docs
       </Link>
    );
    return (
      <div>
      <nav>
        <div className="nav-wrapper teal darken-4">
            { isAuthenticated ? sideNavBar : logo }
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { isAuthenticated ? userLinks : guestLinks }
          </ul>
        </div>
      </nav>


      <div>
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="userView">
              <div className="background">
                <img src="../../public/assets/SideBarBackgroundImg.png" />
              </div>
              <a href="#!user"><img className="circle" src="../../public/assets/q.png"/></a>
              <a href="#!name"><span className="white-text name">{ isAuthenticated && user.fullname }</span></a>
              <a href="#!email"><span className="white-text email">{ isAuthenticated && user.email}</span></a>
            </div>
          </li>
          <li><a href="#!"><i className="material-icons">perm_media</i>My Profile</a></li>
          <li><a href="create-document"><i className="material-icons">account_circle</i>My Documents</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      </div>


      </div>
    );
  }
}

NavigationBar.propTypes = {
  login: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
