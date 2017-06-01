import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../actions/documentAction';
import { CardDocumentView } from '../common/CardDocumentView.jsx';

class LoadDocuments extends React.Component {

  /**
   * This method runs when the components mounts
   *
   *
   * @memberof LoadDocuments
   */
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
        <div className="center-align">
          <ul className="pagination">
          <li className="disabled">
            <a href=""><i className="material-icons">chevron_left</i></a></li>
          <li className="active"><a href="signup">1</a></li>
          <li className="waves-effect"><a href="signup">2</a></li>
          <li className="waves-effect"><a href="signup">3</a></li>
          <li className="waves-effect"><a href="signup">4</a></li>
          <li className="waves-effect"><a href="signup">5</a></li>
          <li className="waves-effect">
            <a href="signup">
              <i className="material-icons">chevron_right</i></a></li>
        </ul>
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
