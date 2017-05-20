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
    };
    this.handlePagination = this.handlePagination.bind(this);
  }
  componentWillMount() {
    this.props.loadAuthorizedToViewDocument();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ AuthToViewDocuments: nextProps.documents.AuthorizeToViewDocuments });
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
  render() {
    const { AuthToViewDocuments } = this.state;
    const publicDocuments = [];
    const roleDocuments = [];
    if (AuthToViewDocuments) {
      AuthToViewDocuments.map((document) => {
        if (document.access === 'public') {
          publicDocuments.push(document);
        } else if (document.access === 'role') {
          roleDocuments.push(document);
        }
      });
    }
    const { selected, page } = this.state;
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
              <li className="tab col s6"><a href="#test1">Public Documents</a></li>
              <li className="tab col s6"><a href="#test2">Role Documents</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            { AuthToViewDocuments && publicDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 readOnly/>)}
          </div>
          <div id="test2" className="col s12">
            { AuthToViewDocuments && roleDocuments.map(document =>
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
      </div>
    );
  }
}

Dashboard.propTypes = {
  loadAuthorizedToViewDocument: PropTypes.func.isRequired,
  AuthToViewDocuments: PropTypes.array,
  documents: PropTypes.object.isRequired,
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

