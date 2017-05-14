import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import { createDocument } from '../../../actions/documentAction';
import { addFlashMessage, deleteFlashMessage }
  from '../../../actions/flashMessages';

class CreateDocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      access: 'public',
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createDocument(this.state).then((res) => {
      this.props.addFlashMessage({
        type: 'error',
        text: res,
      });
      if (res === 'Document created successfully.') {
        this.setState({ title: ' ' });
        this.setState({ body: ' ' });
      }
    });
    this.props.deleteFlashMessage(1);
  }

  render() {
    const { title, body } = this.state;
    return (
        <div className="">
          <form onSubmit={this.onSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <label>Document title</label>
              <input
              onChange={this.onChange}
              name="title"
              value={title}
              type="text" />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">question_answer</i>
              <textarea
              className="materialize-textarea"
              onChange={this.onChange}
              name="body"
              value={body}
              id="icon_prefix2"
               />
              <label htmlFor="icon_prefix2">Document body</label>
            </div>

            <div className="input-field">
              <Row>
                <Input type="select"
                  name="access"
                  onChange={this.onChange}
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
                Create Document
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
         </div>
    );
  }
}

CreateDocumentForm.propTypes = {
  createDocument: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default
  connect(null,
    { createDocument,
      addFlashMessage,
      deleteFlashMessage })(CreateDocumentForm);
