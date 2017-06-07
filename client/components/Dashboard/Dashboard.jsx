import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../actions/documentAction';
import CardDocumentView from '../common/CardDocumentView.jsx';
import PaginationNav from '../common/PaginationNav.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AuthToViewDocuments: props.documents.AuthToViewDocuments.documents,
      selected: 1,
      page: 1,
      index: 1,
      isPageLoad: false,
      search: ' ',
      count: 1,
    };
    this.handlePagination = this.handlePagination.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * This method runs when the component mounts
   *
   *
   * @memberof Dashboard
   */
  componentWillMount() {
    this.props.loadAuthorizedToViewDocument();
  }

  /**
   * This method runs when the props are updated
   *
   * @param {object} nextProps
   *
   * @memberof Dashboard
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ AuthToViewDocuments:
      nextProps.documents.AuthorizeToViewDocuments.documents });
    if (this.props !== nextProps.props) {
      const { isPageLoad } = this.state;
      const { AuthorizeToViewDocuments } = nextProps.documents;
      if (!isPageLoad) {
        if (AuthorizeToViewDocuments) {
          const page = Math.ceil(AuthorizeToViewDocuments.count / 8);
          this.props.loadAuthorizedToViewDocument();
          this.setState({ page });
          this.setState({ count: AuthorizeToViewDocuments.count });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }

  /**
   * This method handles pagination
   *
   * @param {object} limit
   * @param {object} offset
   * @param {object} event
   *
   * @memberof Dashboard
   */
  handlePagination(limit, offset, event, index) {
    this.props.loadAuthorizedToViewDocument(limit, offset);
    this.setState({ selected: event.target.innerHTML });
    this.setState({ index: index + 1 });
  }

  /**
   * This method handles the onChange handler
   *
   * @param {object} event
   *
   * @memberof Dashboard
   */
  onChange(event) {
    event.preventDefault();
    if (event.target.value === '' ||
        event.target.value === '  ' ||
        event.target.value === ' ') {
      this.props.loadAuthorizedToViewDocument();
    }
    this.setState({ search: event.target.value });
  }

  /**
   * This method handles the onSubmit event
   *
   * @param {object} event
   *
   * @memberof Dashboard
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.searchDocumentsByTitleOnDashboard(this.state.search);
    const page = 1;
    this.setState({ count: this.state.count });
    this.setState({ page });
    this.setState({ isPageLoad: true });
  }
  render() {
    const { AuthToViewDocuments } = this.state;
    const { selected, page, search, index } = this.state;
    const { documents } = this.props;
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
                <a href="#test1">My Dashboard</a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            <br/>
            { AuthToViewDocuments && AuthToViewDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 readOnly/>)}
          </div>
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
                  pageCount={page}
                  notActive={notActive}
                  handlePagination={this.handlePagination}
                  />))
                }
                <li className="waves-effect"><a href="#!">
                  <i className="material-icons">chevron_right</i></a></li>
                <div className="center-align">
                  <h6>page {index} of {page}</h6>
                  <h6>Showing {AuthToViewDocuments && AuthToViewDocuments.length} of {AuthToViewDocuments && documents.AuthorizeToViewDocuments.count} result</h6>
                </div>
              </div>
              }
            </ul>
          </div>
          <div className="fixed-action-btn horizontal click-to-toggle">
          <a className="btn-floating btn-large red">
            <i className="material-icons  teal darken-4">search</i>
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
    );
  }
}

Dashboard.propTypes = {
  loadAuthorizedToViewDocument: PropTypes.func.isRequired,
  searchDocumentsByTitleOnDashboard: PropTypes.func.isRequired,
  AuthToViewDocuments: PropTypes.array,
  documents: PropTypes.object.isRequired,
  props: PropTypes.object,
};

/**
 * mapDispatchToProps
 *
 * @param {function} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadAuthorizedToViewDocument: (limit, offset) =>
      dispatch(DocumentAction.loadAuthorizedToViewDocument(limit, offset)),
    searchDocumentsByTitleOnDashboard: (query, limit, offset) =>
      dispatch(DocumentAction
        .searchDocumentsByTitleOnDashboard(query, limit, offset)),
  };
}

/**
 * mapStateToProps
 *
 * @param {object} state
 * @returns {object}
 */
function mapStateToProps(state) {
  return {
    documents: state.documents,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

