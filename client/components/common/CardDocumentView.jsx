import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as DocumentAction from '../../actions/documentAction';
import { deleteFlashMessage } from '../../actions/flashMessages';

class DashboardDocumentView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('ul.tabs').tabs();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left',
      stopPropagation: false, // Stops event propagation
    },
  );
  }

  handleView(event) {
    event.preventDefault();
    const docID = this.props.document.id;
    const modal = `#viewDocument${docID}`;
    $(modal).modal('open');
  }

  handleEdit(event) {
    event.preventDefault();
    const docID = this.props.document.id;
    const modal = `#editDocument${docID}`;
    $(modal).modal('open');
  }

  handleDelete() {
    event.preventDefault();
    let myindex;
    const documentId = this.props.document.id;
    this.props.deleteDocument(documentId);
    this.props.deleteFlashMessage(1);
    const documents = this.props.MyDocuments.map(a => Object.assign({}, a));
    documents.forEach((document, index) => {
      if (document.id === documentId) {
        myindex = index;
      }
    });
    documents.splice(myindex, 1);
    this.setState({ MyDocuments: documents });
  }

  render() {
    const { document, myDocument, readOnly } = this.props;
    return (
    <div>
      <div className="col s3">
      {myDocument && <div>
          <a className="modal-trigger btn-floating btn-small waves-effect waves-light red" onClick={this.handleView} key={document.id}><i className="material-icons">visibility</i></a>
          &nbsp;&nbsp;
            <a className="btn-floating btn-small waves-effect waves-light red" onClick={this.handleDelete}><i className="material-icons">delete</i></a>
          &nbsp;&nbsp;
          <a className="modal-trigger btn-floating btn-small waves-effect waves-light red" onClick={this.handleEdit} key={document.id + 1000}><i className="material-icons">mode_edit</i></a>
          <div id={`viewDocument${document.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4 className="center-align">{document.title}</h4>
              <hr />
              <p>{document.body}</p>
              <h4>Author: {document.User.fullname}</h4>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
            </div>
          </div>
          <div id={`editDocument${document.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h5 className="center-align">This is my edit document modal</h5>
              <h4 className="center-align">{document.title}</h4>
              <hr />
              <p>{document.body}</p>
              <h4>Author: {document.User.fullname}</h4>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
            </div>
          </div>
        </div>
      }
        {readOnly &&
        <div>
          <a className=" modal-trigger btn-floating btn-small waves-effect waves-light red" onClick={this.handleView} key={document.id}><i className="material-icons">visibility</i></a>
          <div id={`viewDocument${document.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4 className="center-align">{document.title}</h4>
              <hr />
              <p>{document.body}</p>
              <h4>Author: {document.User.fullname}</h4>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
            </div>
          </div>
        </div>}
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="https://unsplash.it/200/300/?random" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{ document.title }</span>
            <span className="">Author: { document.User.fullname }</span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{ document.title }<i className="material-icons right">close</i></span>
            <p>{`${document.body.substring(0, 150)}...`}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

DashboardDocumentView.propTypes = {
  document: PropTypes.object.isRequired,
  myDocument: PropTypes.bool,
  readOnly: PropTypes.bool,
  deleteDocument: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  MyDocuments: PropTypes.array.isRequired,
};

/**
 * mapDispatchToProps
 *
 * @param {objecr} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    deleteDocument: documentId =>
      dispatch(DocumentAction.deleteDocument(documentId)),
    deleteFlashMessage: a => dispatch(deleteFlashMessage(a)),
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
    MyDocuments: state.documents.MyDocuments,
  };
}

export default
connect(mapStateToProps, mapDispatchToProps)(DashboardDocumentView);
