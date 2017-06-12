import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as UserActions from '../../actions/userAction';
import ManageUsersRow from '../users/ManageUsersRow.jsx';
import PaginationNav from '../common/PaginationNav.jsx';

/**
 * The manage users page
 *
 * @class ManageUsersPage
 * @extends {React.Component}
 */
class ManageUsersPage extends React.Component {

  /**
   * Creates an instance of ManageUsersPage.
   *
   * @param {object} props
   *
   * @memberof ManageUsersPage
   */
  constructor(props) {
    super(props);

    this.handlePagination = this.handlePagination.bind(this);
    this.state = {
      selected: 1,
      page: 1,
      isPageLoad: false,
      search: '',
      count: 1,
      index: 1,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * This method runs when the component mounts
   *
   *
   * @memberof ManageUsersPage
   */
  componentWillMount() {
    this.props.loadAllUsers();
  }

  /**
   * This method runs when the component updates props
   *
   * @param {object} nextProps
   *
   * @memberof ManageUsersPage
   */
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps.props) {
      const { allUsers } = nextProps;
      const { isPageLoad } = this.state;
      if (!isPageLoad) {
        if (allUsers) {
          const page = Math.ceil(allUsers.count / 8);
          this.props.loadAllUsers(8, 0);
          this.setState({ count: allUsers.count });
          this.setState({ page });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }

  /**
   * This method handles the pagination
   *
   * @param {string} limit
   * @param {string} offset
   * @param {string} event
   *
   * @memberof ManageUsersPage
   */
  handlePagination(limit, offset, event) {
    this.props.loadAllUsers(limit, offset);
    this.setState({ selected: event.target.innerHTML });
  }

  /**
   * This method handles the onSubmit handler
   *
   * @param {function} event
   *
   * @memberof ManageUsersPage
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.searchUserByUsername(this.state.search, 5, 0);
    const page = 1;
    this.setState({ count: this.props.allUsers.count });
    this.setState({ page });
    this.setState({ isPageLoad: true });
  }

  /**
   * This method handles the onChange handler
   *
   * @param {function} event
   *
   * @memberof ManageUsersPage
   */
  onChange(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
    if (event.target.value === '' ||
      event.target.value === ' ' ||
      event.target.value === '  '
    ) {
      this.props.loadAllUsers(8, 0);
    }
  }

  /**
   * This method renders the component
   *
   * @returns {Object} jsx component
   *
   * @memberof ManageUsersPage
   */
  render() {
    const { allUsers } = this.props;
    const { selected, page, search, index } = this.state;
    const selectedUsers = selected.toString();
    const isActive = 'active';
    const notActive = 'waves-effect';
    let pageArray;
    if (page) {
      pageArray = new Array(page).fill('pages');
    }
    return (
      <div className="container">
        <div className="top horizontal click-to-toggle">
          <ul>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col s8 m8 l8  offset-s2 offset-m2 offset-l2 input-field">
                  <i className="material-icons prefix">search</i>
                  <input
                  placeholder="Search for documents"
                  id="first_name"
                  value={search}
                  onChange={this.onChange}
                  type="text"
                  className="validate"/>
                </div>
            </div>
            </form>
          </ul>
        </div>
        <table className="striped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>FullName</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Role Id</th>
              <th>Role</th>
              <th>Edit User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {allUsers && allUsers.users && allUsers.users.map((user, index) =>
              <ManageUsersRow key={user.id} user={user} index={index}/>)}
          </tbody>
        </table>
        <div className="center-align">
          <ul className="pagination">
            {
            <div>
              <li className="waves-effect"><a href="#!">
                <i className="material-icons">chevron_left</i></a></li>
              {page && pageArray && pageArray.map((pages, index) =>
              (<PaginationNav
                 key={index}
                 selected={selectedUsers}
                 index={index}
                 isActive={isActive}
                 notActive={notActive}
                 handlePagination={this.handlePagination}
                />))
              }
              <li className="waves-effect"><a href="#!">
                <i className="material-icons">chevron_right</i></a></li>
                <div className="center-align">
                  <h6>page {index} of {page}</h6>
                  <h6>Showing {allUsers && allUsers.users && allUsers.users.length} of {allUsers && allUsers.count} result</h6>
                </div>
            </div>
            }
          </ul>
        </div>

        <div className="fixed-action-btn horizontal click-to-toggle">
          <a className="btn-floating btn-large red">
            <i className="material-icons  teal lighten-3">search</i>
          </a>
          <ul>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field">
                  <input
                  placeholder="Placeholder"
                  id="first_name"
                  value={search}
                  onChange={this.onChange}
                  type="text"
                  className="validate"/>
                  <label htmlFor="first_name">Search Users</label>
                </div>
              </div>
            </form>
          </ul>
        </div>
      </div>
    );
  }
}

ManageUsersPage.propTypes = {
  loadAllUsers: PropTypes.func.isRequired,
  searchUserByUsername: PropTypes.func.isRequired,
  allUsers: PropTypes.object,
};

/**
 * This function maps the dispatch to the props
 *
 * @param {function} dispatch
 * @returns {function}
 */
function mapDispatchToProps(dispatch) {
  return {
    loadAllUsers: (limit, offset) =>
      dispatch(UserActions.loadAllUsers(limit, offset)),
    searchUserByUsername: (searchQuery, limit, offset) =>
      dispatch(UserActions.searchUserByUsername(searchQuery, limit, offset)),
  };
}

/**
 * This function maps the state to the props
 *
 * @param {object} state
 * @returns {fucntion}
 */
function mapStateToProps(state) {
  return {
    allUsers: state.login.allUsers,
  };
}

export default
  connect(mapStateToProps, mapDispatchToProps)(ManageUsersPage);
