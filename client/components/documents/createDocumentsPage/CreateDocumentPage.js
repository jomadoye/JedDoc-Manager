import React from 'react';
import CreateDocumentForm from './CreateDocumentForm';

class CreateDocumentPage extends React.Component {
  render() {
    return (
      <div className="center-align">
        <div className="row">
          <h1 className="center-align welcome-message">Create A Document</h1>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <CreateDocumentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDocumentPage;
