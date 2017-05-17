import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../actions/documentAction';
import CardDocumentView from '../common/CardDocumentView.jsx';

class LoadDocuments extends React.Component {
  componentDidMount() {
    this.props.loadDocuments();
  }

  render() {
    const { documents } = this.props;
    return (
      <div className="container">
        <div className="row">
           <h1 className="center-align welcome-message">
              Sign-in to create documents</h1>
        </div>
        <div className="row">
          <div className="welcome-document-title center-align">
            <h4>View some sample created documents</h4>
          </div>
          {documents && documents.map((document, index) =>
          index < 8 &&
            <CardDocumentView
              key={document.id}
              document={document}
              myDocument={false}
              readOnly/>,
          )}
        </div>
      </div>
    );
  }
}

LoadDocuments.propTypes = {
  documents: PropTypes.array,
  loadDocuments: PropTypes.func.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {any} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadDocuments: () => dispatch(DocumentAction.loadWelcomePageDocument()),
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
    documents: state.documents.PublicDocuments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadDocuments);
