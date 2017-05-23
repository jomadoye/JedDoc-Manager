import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as RoleActions from '../../actions/roleActions';
import { deleteFlashMessage } from '../../actions/flashMessages';

class createRolePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: ' ',
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createUserRole(this.state).then((res) => {
      if (res === 'Role created successfully') {
        this.setState({ title: ' ' });
      }
    });
    this.props.deleteFlashMessage(1);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="container" onSubmit={this.handleSubmit}>
        <h1> welcome to create role page for Admin</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Enter role name"
                  id="new-role"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.title}
                  name="title"/>
                <label htmlFor="first_name">Role</label>
              </div>
            </div>
            <div className="row">
              <button id="create-role-btn" className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

createRolePage.propTypes = {
  createUserRole: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

/**
 * This function maps dispatches to props
 *
 * @param {any} dispatch
 * @returns dispatches
 */
function mapDispatchToProps(dispatch) {
  return {
    createUserRole: title =>
      dispatch(RoleActions.createUserRole(title)),
    deleteFlashMessage: a => dispatch(deleteFlashMessage(a)),
  };
}

// function mapStateToProps(state) {
//   return {
//     roles: state.roles,
//   };
// }
export default
  connect(null, mapDispatchToProps)(createRolePage);
