import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import * as DocumentAction from '../../actions/documentAction';
import { deleteFlashMessage } from '../../actions/flashMessages';

class CardDocumentView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDocumentOnchange = this.handleDocumentOnchange.bind(this);
    this.handleEditDocumentSubmit = this.handleEditDocumentSubmit.bind(this);

    this.state = {
      title: this.props.document.title,
      body: this.props.document.body,
      access: this.props.document.access,
      isLoading: false,
    };
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
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this document!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
    },
    () => {
      const documentId = this.props.document.id;
      this.props.deleteDocument(documentId);
      this.props.deleteFlashMessage(1);
      swal('Deleted!', 'This document has been deleted.', 'success');
    });
  }

  handleDocumentOnchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleEditDocumentSubmit(event) {
    event.preventDefault();
    const document = this.state;
    const documentId = this.props.document.id;
    this.props.updateDocument(document, documentId,
      this.props.currentUser.roleId);
    this.props.deleteFlashMessage(1);
  }

  render() {
    const { document, myDocument, readOnly } = this.props;
    const currentDate = moment(new Date());
    const DateCreated = moment(document.createdAt);
    const dateUpdated = moment(document.updatedAt);
    const documentDate = DateCreated.from(currentDate);
    const updatedDocumentDate = dateUpdated.from(currentDate);
    const { title, body } = this.state;
    return (
    <div>
      <div className="col l3 s6 m4">
      {myDocument && <div>
          <a
className="modal-trigger btn-floating btn-small waves-effect waves-light red"
            onClick={this.handleView} key={document.id}>
              <i id="mi-visibility"
              className="material-icons">visibility</i></a>
          &nbsp;&nbsp;
            <a className="btn-floating btn-small waves-effect waves-light red"
              onClick={this.handleDelete}>
                <i id="mi-delete" className="material-icons">delete</i></a>
          &nbsp;&nbsp;
          <a
className="modal-trigger btn-floating btn-small waves-effect waves-light red"
            onClick={this.handleEdit} key={document.id + 1000}>
              <i id="mi-edit" className="material-icons">mode_edit</i></a>
          <div id={`viewDocument${document.id}`}
            className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4 className="center-align">{document.title}</h4>
              <hr />
              <p>{document.body}</p>
              <h6>Created: {documentDate}</h6>
              <h6>lastUpdated: {updatedDocumentDate}</h6>
            </div>
            <div className="modal-footer">
              <a href="#!"
              id="modal-close"
    className="modal-action modal-close waves-effect waves-green btn-flat ">
              Close</a>
            </div>
          </div>
          <div id={`editDocument${document.id}`}
            className="modal modal-fixed-footer">
            <div className="modal-content">
              <div className="">
                <form
                id="editDocumentModal"
                onSubmit={this.handleEditDocumentSubmit}>
                  <div className="input-field">
                    <i className="material-icons prefix">mode_edit</i>
                    <label className="active">Document title</label>
                    <input
                    id="title"
                    onChange={this.handleDocumentOnchange}
                    name="title"
                    value={title}
                    type="text" />
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">question_answer</i>
                    <textarea
                    className="materialize-textarea"
                    onChange={this.handleDocumentOnchange}
                    name="body"
                    value={body}
                    id="body"
                    />
                    <label className="active"
                    htmlFor="icon_prefix2">Document body</label>
                  </div>

                  <div className="input-field">
                    <Row>
                      <Input type="select"
                        name="access"
                        onChange={this.handleDocumentOnchange}
                        label="Select a document access type"
                        defaultValue="public">
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="role">Role</option>
                      </Input>
                    </Row>
                  </div>

                  <div className="container">
                    <button
                      type="submit"
                      className="btn waves-effect waves-light btn-large">
                      Edit Document
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#!"
              id="modal-close-edit"
className="modal-action modal-close waves-effect waves-green btn-flat">
              Close</a>
            </div>
          </div>
        </div>
      }
        {readOnly &&
        <div>
          <a
className=" modal-trigger btn-floating btn-small waves-effect waves-light red"
          onClick={this.handleView} key={document.id}>
          <i className="material-icons">visibility</i></a>
<div id={`viewDocument${document.id}`} className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4 className="center-align">{document.title}</h4>
              <hr />
              <p>{document.body}</p>
              <h4>Author: {document.User.fullname}</h4>
              <h6>Created: {documentDate}</h6>
              <h6>lastUpdated: {updatedDocumentDate}</h6>
            </div>
            <div className="modal-footer">
              <a href="#!"
    className="modal-action modal-close waves-effect waves-green btn-flat">
              Close</a>
            </div>
          </div>
        </div>}
        <div className="">
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img
              className="activator"
              src="https://unsplash.it/200/300/?random" />
            </div>
            <div className="card-content">
              <span
              className="card-title activator grey-text text-darken-4">
{document.title.length > 20 ?
`${document.title.substring(0, 15)}...` : document.title}
</span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
{ document.title.length > 20 ?
`${document.title.substring(0, 15)}...` : document.title}
<i className="material-icons right">close</i></span>
<p>{ document.body.length > 100 ?
   `${document.body.substring(0, 150)}...` : document.body }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

CardDocumentView.propTypes = {
  document: PropTypes.object.isRequired,
  myDocument: PropTypes.bool,
  readOnly: PropTypes.bool,
  deleteDocument: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  updateDocument: PropTypes.func.isRequired,
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
    updateDocument: (document, documentId, roleId) =>
      dispatch(DocumentAction.updateDocument(document, documentId, roleId)),
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
    documents: state.documents,
    currentUser: state.login.user,
  };
}

export default
  connect(mapStateToProps, mapDispatchToProps)(CardDocumentView);
