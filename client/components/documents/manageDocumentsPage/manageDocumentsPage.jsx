import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../../actions/documentAction';
import CardDocumentView from '../../common/CardDocumentView.jsx';
import PaginationNav from '../../common/PaginationNav.jsx';

class manageUserDocumentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: props.documents.allDocuments,
      selected: 1,
      page: 1,
      index: 1,
      isPageLoad: false,
      count: 1,
    };

    this.handlePagination = this.handlePagination.bind(this);
  }

  /**
   * This method runs when the components mount
   *
   *
   * @memberof manageUserDocumentsPage
   */
  componentDidMount() {
    this.props.loadAllDocuments();
  }

  /**
   * This method runs when the component will receive props
   *
   * @param {any} nextProps
   *
   * @memberof manageUserDocumentsPage
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ documents: nextProps.documents.allDocuments });
    if (this.props !== nextProps.props) {
      const { isPageLoad } = this.state;
      const { allDocuments } = nextProps.documents;
      if (!isPageLoad) {
        if (allDocuments) {
          const page = Math.ceil(allDocuments.count / 8);
          this.props.loadAllDocuments();
          this.setState({ page });
          this.setState({ count: allDocuments.count });
          this.setState({ isPageLoad: true });
        }
      }
    }
  }

   /**
   * This method handles pagination
   *
   * @param {any} limit
   * @param {any} offset
   * @param {any} event
   * @param {any} index
   *
   * @memberof Dashboard
   */
  handlePagination(limit, offset, event, index) {
    this.props.loadAllDocuments(limit, offset);
    this.setState({ selected: event.target.innerHTML });
    this.setState({ index: index + 1 });
  }

  render() {
    const allDocuments = this.state.documents.documents;
    const { selected, page, index } = this.state;
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
                <li className="tab col s4">
                  <a href="#test1">My Documents</a></li>
              </ul>
          </div>
           <div id="test1" className="col s12">
            <br />
              { allDocuments && allDocuments.map(document =>
                <CardDocumentView
                document={document}
                key={document.id}
                 myDocument/>)}
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
                  <h6>Showing {allDocuments && allDocuments.length} of {allDocuments && documents.allDocuments.count} result</h6>
                </div>
              </div>
              }
            </ul>
          </div>
      </div>
    );
  }
}

manageUserDocumentsPage.propTypes = {
  loadAllDocuments: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {any} dispatch
 * @returns dipatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadAllDocuments: (limit, offset) =>
      dispatch(DocumentAction.loadAllDocuments(limit, offset)),
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(manageUserDocumentsPage);
