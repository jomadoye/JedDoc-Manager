import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDocument } from '../../../actions/documentAction';
import { addFlashMessage, deleteFlashMessage }
  from '../../../actions/flashMessages';
import CreateDocumentForm from './CreateDocumentForm.jsx';

class CreateDocumentPage extends React.Component {
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

  /**
   * This method handles the documnent onChange
   *
   * @param {object} event
   *
   * @memberof CreateDocumentPage
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * This method handles the onSubmit handler
   *
   * @param {object} event
   *
   * @memberof CreateDocumentPage
   */
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
    return (
      <div className="center-align">
        <div className="row">
          <div className="col s6 offset-s3">
            <CreateDocumentForm
            state={this.state}
            onsubmit={this.onSubmit}
            onchange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

CreateDocumentPage.propTypes = {
  createDocument: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default
  connect(null,
    { createDocument,
      addFlashMessage,
      deleteFlashMessage })(CreateDocumentPage);
