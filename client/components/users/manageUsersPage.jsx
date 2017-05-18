import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as UserActions from '../../actions/userAction';
import ManageUsersRow from '../users/manageUsersRow.jsx';
import PaginationNav from '../common/PaginationNav.jsx';

class ManageUsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.handlePagination = this.handlePagination.bind(this);
    this.state = {
      selected: 1,
      page: 1,
      isPageLoad: false,
    };
  }
  componentWillMount() {
    this.props.loadAllUsers();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps.props) {
      const { allUsers } = nextProps;
      const { isPageLoad } = this.state;
      if (!isPageLoad) {
        if (allUsers) {
          const page = Math.ceil(allUsers.length / 5);
          this.props.loadAllUsers(5, 0);
          this.setState({ page });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }
  handlePagination(limit, offset, event) {
    this.props.loadAllUsers(limit, offset);
    this.setState({ selected: event.target.innerHTML });
  }

  render() {
    const { allUsers } = this.props;
    const { selected, page } = this.state;
    const isActive = 'active';
    const notActive = 'waves-effect';
    let pageArray;
    if (page) {
      pageArray = new Array(page).fill('pages');
    }
    return (
      <div className="container">
        <h1> welcome to view users page for Admin</h1>
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
            {allUsers && allUsers.map((user, index) =>
              <ManageUsersRow key={user.id} user={user} index={index}/>)}
          </tbody>
        </table>
        <div className="center-align">
          <ul className="pagination">
            {
            <div>
              <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
              {page && pageArray && pageArray.map((pages, index) => (<PaginationNav
                 key={index}
                 selected={selected}
                 index={index}
                 isActive={isActive}
                 notActive={notActive}
                 handlePagination={this.handlePagination}
                />))
              }
              <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </div>
            }
          </ul>
        </div>
      </div>
    );
  }
}

ManageUsersPage.propTypes = {
  loadAllUsers: PropTypes.func.isRequired,
  allUsers: PropTypes.array,
};

/**
 * This function maps the dispatch to the props
 *
 * @param {any} dispatch
 * @returns {function}
 */
function mapDispatchToProps(dispatch) {
  return {
    loadAllUsers: (limit, offset) => dispatch(UserActions.loadAllUsers(limit, offset)),
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
