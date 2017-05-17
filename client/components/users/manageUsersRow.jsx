import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/userAction';
import { deleteFlashMessage } from '../../actions/flashMessages';

class ManageUsersRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: this.props.user.fullname,
      username: this.props.user.username,
      email: this.props.user.email,
      roleId: this.props.user.roleId,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);
    this.handleUserEditOnchange = this.handleUserEditOnchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    $('.modal').modal();
  }
  handleUserEditOnchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteSingleUserAccount(this.props.user.id);
  }
  handleSubmit(event) {
    event.preventDefault();
    const user = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      roleId: this.state.roleId,
    };
    this.props.updateUserProfile(user, this.props.user.id);
  }
  handleEditModal(event) {
    event.preventDefault();
    const userId = this.props.user.id;
    const modal = `#modal-${userId}`;
    $(modal).modal('open');
  }
  render() {
    const { user, index } = this.props;
    const { fullname, email, username, roleId } = this.state;
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.roleId}</td>
        <td><a className="waves-effect waves-light btn"
          onClick={this.handleEditModal}>Edit User</a>
          <div id={`modal-${user.id}`} className="modal">
            <div className="modal-content">
              <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input placeholder="Placeholder"
                    id="fullName" type="text"
                    value={fullname}
                    name="fullname"
                    onChange={this.handleUserEditOnchange}
                    className="validate"/>
                    <label htmlFor="fullName">Full Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input id="username"
                    type="text"
                    className="validate"
                    name="username"
                    onChange={this.handleUserEditOnchange}
                    value={username}/>
                    <label htmlFor="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input id="email"
                    type="email"
                    className="validate"
                    name="email"
                    onChange={this.handleUserEditOnchange}
                    value={email}/>
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input id="roleId"
                    type="text"
                    value={roleId}
                    name="roleId"
                    onChange={this.handleUserEditOnchange}
                    className="validate"/>
                    <label htmlFor="roleId">RoleId</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <button className="btn waves-effect waves-light"
                      type="submit" name="action">Edit User
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
            <div className="modal-footer">
              <a href="#!"
                className="modal-action modal-closewaves-effect waves-green btn-flat">
                Agree</a>
            </div>
        </div></td>
        <td><button
        className="waves-effect waves-light btn"
        onClick={this.handleDelete}
        >Delete User</button></td>
      </tr>
    );
  }
}

ManageUsersRow.propTypes = {
  user: PropTypes.object.isRequired,
  deleteSingleUserAccount: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  updateUserProfile: PropTypes.func.isRequired,
};

/**
 * This function maps the state to props
 *
 * @param {function} dispatch
 * @returns function
 */
function mapDispatchToProps(dispatch) {
  return {
    deleteSingleUserAccount: userId =>
      dispatch(UserActions.deleteSingleUserAccount(userId)),
    updateUserProfile: (user, userId) =>
      dispatch(UserActions.updateUserProfile(user, userId)),
    deleteFlashMessage: () => dispatch(deleteFlashMessage()),

  };
}

export default connect(null, mapDispatchToProps)(ManageUsersRow);
