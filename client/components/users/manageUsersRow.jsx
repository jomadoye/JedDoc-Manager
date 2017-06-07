import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
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
    this.handleDisplayUserRole = this.handleDisplayUserRole.bind(this);
  }
  /**
   * This function mounts the component
   *
   *
   * @memberof ManageUsersRow
   */
  componentDidMount() {
    $('.modal').modal();
  }
  /**
   * This function handles editing user details
   *
   * @param {any} event
   *
   * @memberof ManageUsersRow
   */
  handleUserEditOnchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * This function handles the delete of documents
   *
   * @param {any} event
   *
   * @memberof ManageUsersRow
   */
  handleDelete(event) {
    event.preventDefault();
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
    },
    () => {
      this.props.deleteSingleUserAccount(this.props.user.id);
      swal('Deleted!', 'This user has been deleted.', 'success');
    });
  }

  /**
   * This function handle submit
   *
   * @param {any} event
   *
   * @memberof ManageUsersRow
   */
  handleSubmit(event) {
    event.preventDefault();
    const user = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      roleId: this.state.roleId,
    };
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this users previous details!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, update it!',
      closeOnConfirm: false,
    },
    () => {
      this.props.updateSingleUserAccountByAdmin(user, this.props.user.id);
      this.props.deleteFlashMessage(1);
      swal('Updated!', 'This user has been edited.', 'success');
    });
  }

  /**
   * This function handles edit the user details on the modal
   *
   * @param {any} event
   *
   * @memberof ManageUsersRow
   */
  handleEditModal(event) {
    event.preventDefault();
    const userId = this.props.user.id;
    const modal = `#modal-${userId}`;
    $(modal).modal('open');
  }

  /**
   * This function dis plays the user roles
   *
   * @param {any} id
   * @returns
   *
   * @memberof ManageUsersRow
   */
  handleDisplayUserRole(id) {
    if (id === 1) {
      return 'Administrator';
    } else if (id === 2) {
      return 'Tester';
    } else if (id === 3) {
      return 'Regular User';
    }
    return 'User';
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
        <td>{this.handleDisplayUserRole(user.roleId)}</td>
        <td><a className="waves-effect waves-light btn manage-edit-user-btn"
          onClick={this.handleEditModal}>Edit User</a>
          <div id={`modal-${user.id}`} className="modal">
            <div className="modal-content">
              <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input placeholder="Placeholder"
                    disabled
                    id="fullName"
                    type="text"
                    value={fullname}
                    name="fullname"
                    onChange={this.handleUserEditOnchange}
                    className="validate"/>
                    <label className="active"
                    htmlFor="fullName">Full Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input
                    disabled
                    id="username"
                    type="text"
                    className="validate"
                    name="username"
                    onChange={this.handleUserEditOnchange}
                    value={username}/>
                    <label className="active"
                    htmlFor="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input
                    disabled
                    id="email"
                    type="email"
                    className="validate"
                    name="email"
                    onChange={this.handleUserEditOnchange}
                    value={email}/>
                    <label className="active"
                    htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <input
                    id="roleId"
                    type="text"
                    value={roleId}
                    name="roleId"
                    onChange={this.handleUserEditOnchange}
                    className="validate"/>
                    <label className="active"
                    htmlFor="roleId">RoleId</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8 offset-s2">
                    <button
          className="btn waves-effect waves-light manage-edit-user-submit-btn"
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
        disabled={user.roleId === 1}
        className="waves-effect waves-light btn manage-delete-user-btn"
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
  roleId: PropTypes.number.isRequired,
  updateSingleUserAccountByAdmin: PropTypes.func.isRequired,
};

/**
 * mapStateToProps
 *
 * @param {any} state
 * @returns {object} state
 */
function mapStateToProps(state) {
  return {
    roleId: state.login.user.roleId,
  };
}

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
    updateSingleUserAccountByAdmin: (user, userId) =>
      dispatch(UserActions.updateSingleUserAccountByAdmin(user, userId)),
    deleteFlashMessage: () => dispatch(deleteFlashMessage()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsersRow);
