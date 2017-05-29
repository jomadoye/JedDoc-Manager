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
      AuthToViewDocuments: props.documents.AuthToViewDocuments,
      selected: 1,
      page: 1,
      isPageLoad: false,
      search: ' ',
    };
    this.handlePagination = this.handlePagination.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.loadAuthorizedToViewDocument();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ AuthToViewDocuments:
      nextProps.documents.AuthorizeToViewDocuments });
    if (this.props !== nextProps.props) {
      const { isPageLoad } = this.state;
      const { AuthorizeToViewDocuments } = nextProps.documents;
      if (!isPageLoad) {
        if (AuthorizeToViewDocuments) {
          const page = Math.ceil(AuthorizeToViewDocuments.length / 5);
          this.props.loadAuthorizedToViewDocument(5, 0);
          this.setState({ page });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }
  handlePagination(limit, offset, event) {
    this.props.loadAuthorizedToViewDocument(limit, offset);
    this.setState({ selected: event.target.innerHTML });
  }
  onChange(event) {
    event.preventDefault();
    if (event.target.value === '' ||
        event.target.value === '  ' ||
        event.target.value === ' ') {
      this.props.loadAuthorizedToViewDocument(5, 0);
    }
    this.setState({ search: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.searchDocumentsByTitleOnDashboard(this.state.search, 5, 0);
  }
  render() {
    const { AuthToViewDocuments } = this.state;
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
                  notActive={notActive}
                  handlePagination={this.handlePagination}
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
 * @param {any} dispatch
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
 * @param {any} state
 * @returns {object}
 */
function mapStateToProps(state) {
  return {
    documents: state.documents,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

