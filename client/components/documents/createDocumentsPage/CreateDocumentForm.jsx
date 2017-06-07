import React from 'react';
import { Row, Input } from 'react-materialize';
import PropTypes from 'prop-types';

/**
 * This function renders the form to create a document
 *
 * @export
 * @param {object} { state }
 * @param {function} { onchange }
 * @param {function} { onsubmit }
 * @returns HTML
 */
export default function CreateDocumentForm({ state, onchange, onsubmit }) {
  const { title, body } = state;
  return (
      <div className="">
        <div className="row">
          <h1 className="center-align welcome-message">Create A Document</h1>
        </div>
        <form onSubmit={onsubmit}>
          <div className="input-field">
            <i className="material-icons prefix">mode_edit</i>
            <label>Document title</label>
            <input
            id="title"
            onChange={onchange}
            name="title"
            value={title}
            type="text" />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">question_answer</i>
            <textarea
            id="body"
            className="materialize-textarea"
            onChange={onchange}
            name="body"
            value={body}
              />
            <label htmlFor="icon_prefix2">Document body</label>
          </div>

          <div className="input-field">
            <Row>
              <Input type="select"
                name="access"
                onChange={onchange}
                label="Select a document access type"
                defaultValue="public">
                <option id="publicSelect" value="public">Public</option>
                <option id="privateSelect" value="private">Private</option>
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

CreateDocumentForm.propTypes = {
  state: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
  onsubmit: PropTypes.func.isRequired,
};
