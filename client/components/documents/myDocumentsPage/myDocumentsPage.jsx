import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../../actions/documentAction';
import CardDocumentView from '../../common/CardDocumentView.jsx';
import PaginationNav from '../../common/PaginationNav.jsx';

class MyDocumentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: props.documents.MyDocuments.documents,
      selected: 1,
      page: 1,
      isPageLoad: false,
      search: ' ',
    };
    this.handlePagination = this.handlePagination.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * This method runs when the component mounts
   *
   *
   * @memberof MyDocumentPage
   */
  componentDidMount() {
    const { UserId } = this.props;
    this.props.loadUserDocuments(UserId);
  }

  /**
   * This method runs when the component updates it's props
   *
   * @param {any} nextProps
   *
   * @memberof MyDocumentPage
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ documents: nextProps.documents.MyDocuments.documents });
    if (this.props !== nextProps.props) {
      const { isPageLoad } = this.state;
      const { MyDocuments } = nextProps.documents;
      const { UserId } = this.props;
      if (!isPageLoad) {
        if (MyDocuments) {
          const page = Math.ceil(MyDocuments.count / 8);
          this.props.loadUserDocuments(UserId, 8, 0);
          this.setState({ page });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }

  /**
   * This method handles the pagination
   *
   * @param {any} limit
   * @param {any} offset
   * @param {any} event
   *
   * @memberof MyDocumentPage
   */
  handlePagination(limit, offset, event) {
    const { UserId } = this.props;
    this.props.loadUserDocuments(UserId, limit, offset);
    this.setState({ selected: event.target.innerHTML });
  }

  /**
   * This method handles the onChange handler
   *
   * @param {any} event
   *
   * @memberof MyDocumentPage
   */
  onChange(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
    if (event.target.value === ' ' ||
        event.target.value === '  ') {
      const { UserId } = this.props;
      this.props.loadUserDocuments(UserId);
    }
  }

  /**
   * This method handles the onSubmit handler
   *
   * @param {any} event
   *
   * @memberof MyDocumentPage
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.searchDocumentsByTitle(this.state.search, 5, 0);
  }

  render() {
    const MyDocuments = this.state.documents;
    const { selected, page, search } = this.state;
    const selectedDocuments = selected.toString();
    const isActive = 'active';
    const notActive = 'waves-effect';
    let pageArray;
    if (page) {
      pageArray = new Array(page).fill('pages');
    }
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col s12">
              <ul className="tabs">
                <li className="tab col s12">
                  <a href="#test1">My Documents</a></li>
              </ul>
          </div>
           <div id="test1" className="col s12">
            <br />
              { MyDocuments && MyDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 myDocument/>)}
          </div>
          <div className="center-align">
            <ul className="pagination">
              {
              <div>
                <li className="waves-effect"><a href="#!">
                  <i className="material-icons">chevron_left</i></a></li>
                {page && pageArray && pageArray.map((pages, index) =>
                (<PaginationNav
                  key={index}
                  selected={selectedDocuments}
                  index={index}
                  isActive={isActive}
                  notActive={notActive}
                  handlePagination={this.handlePagination}
                  isSearchDocument
                  />))
                }
                <li className="waves-effect"><a href="#!">
                  <i className="material-icons">chevron_right</i></a></li>
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
                  className="validate teal lighten-3"/>
                  <label htmlFor="first_name">Search Documents</label>
                </div>
              </div>
            </form>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

MyDocumentPage.propTypes = {
  loadUserDocuments: PropTypes.func.isRequired,
  searchDocumentsByTitle: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
  props: PropTypes.object,
  UserId: PropTypes.number.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {any} dispatch
 * @returns dipatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadUserDocuments: (userId, limit, offset) =>
      dispatch(DocumentAction.loadUserDocuments(userId, limit, offset)),
    searchDocumentsByTitle: (searchQuery, limit, offset) =>
      dispatch(DocumentAction
        .searchDocumentsByTitle(searchQuery, limit, offset)),
  };
}

/**
 * mapStateToProps
 *
 * @param {any} state
 * @returns {object} state
 */
function mapStateToProps(state) {
  return {
    documents: state.documents,
    UserId: state.login.user.id,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDocumentPage);
