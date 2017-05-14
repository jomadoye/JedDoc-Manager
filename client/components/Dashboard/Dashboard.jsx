import React from 'react';
import { connect } from 'react-redux';
import * as DocumentAction from '../../actions/documentAction';
import CardDocumentView from '../common/CardDocumentView.jsx';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.loadAuthorizedToViewDocument();
  }
  render() {
    const { AuthToViewDocuments } = this.props;
    const documents = AuthToViewDocuments;
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
            { documents && documents.map((document) => {
              if (document.access === 'public') {
                return <CardDocumentView document={document} key={document.id} myDocument={false} readOnly/>;
              }
            })}
          </div>
          <div id="test2" className="col s12">
            { documents && documents.map((document) => {
              if (document.access === 'role') {
                return <CardDocumentView document={document} key={document.id} myDocument={false} readOnly/>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  loadAuthorizedToViewDocument: React.PropTypes.func.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {any} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadAuthorizedToViewDocument: () =>
      dispatch(DocumentAction.loadAuthorizedToViewDocument()),
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
    AuthToViewDocuments: state.documents.AuthorizeToViewDocuments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

