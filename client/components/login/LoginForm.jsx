import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup.jsx';

/**
 * This function renders the login page
 *
 * @export
 * @param {object, function, function} { state, onsubmit, onchange }
 * @returns {HTML}
 */
export default function LoginForm({ state, onsubmit, onchange }) {
  const { errors, query, password, isLoading } = state;
  return (
    <form onSubmit={onsubmit} className="center-align">
      {errors.form && <div className="teal darken-1">
      { errors.form } </div> }
      <TextFieldGroup
      materialIcon="account_circle"
      field="query"
      label="Username / Email"
      value={query}
      error={errors.query}
      onChange={onchange} />

      <TextFieldGroup
      materialIcon="https"
      type="password"
      field="password"
      label="Password"
      value={password}
      error={errors.password}
      onChange={onchange}
      />
      <div className="container">
        <button
          type="submit"
          className="btn waves-effect waves-light btn-large"
          disabled={isLoading}>
          SignIn
        <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  state: PropTypes.object.isRequired,
  onsubmit: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
};

