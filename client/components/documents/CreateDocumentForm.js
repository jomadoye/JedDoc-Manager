import React from 'react';
import { connect } from 'react-redux';
import { createDocument } from '../../actions/createDocument';
import { addFlashMessage, deleteFlashMessage } from '../../actions/flashMessages';

class CreateDocumentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      role: '',
      isLoading: false,
    }
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
          text: res
        });
    });
    this.props.deleteFlashMessage(1);
  }

  render() {
    const { title, body, role } = this.state;
    const { addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="row">
          <h1>Create Document</h1>
        </div>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="input-field">
              <label>Document title</label>
              <input
              onChange={this.onChange}
              name="title" 
              value={title}
              type="text" />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
              className="materialize-textarea"
              onChange={this.onChange}
              name="body"
              value={body}
              id="icon_prefix2"
              ></textarea>
              <label htmlFor="icon_prefix2">Document body</label>
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
      </div>
    );
  }
}

CreateDocumentForm.propTypes = {
  createDocument: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
}
//MapStateToProps
//MapDispatchToProps
export default connect(null, { createDocument, addFlashMessage, deleteFlashMessage })(CreateDocumentForm);