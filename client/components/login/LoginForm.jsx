import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup.jsx';
import validateInput
 from '../../../server/shared/validations/login/loginValidation';
import { login } from '../../actions/loginActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(() => {
        this.context.router.push('dashboard');
      }).catch((err) => {
        const response = err.response.data;
        this.setState({ errors: response, isLoading: false });
      });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { errors, query, password, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="center-align">
        {errors.form && <div className="alert alert-danger">
        { errors.form } </div> }
        <TextFieldGroup
        materialIcon="account_circle"
        field="query"
        label="Username / Email"
        value={query}
        error={errors.query}
        onChange={this.onChange} />

        <TextFieldGroup
        materialIcon="https"
        type="password"
        field="password"
        label="Password"
        value={password}
        error={errors.password}
        onChange={this.onChange}
        />
        <div className="container">
          <button className="btn waves-effect waves-light btn-large"
            disabled={isLoading}>
            SignIn
          <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(null, { login })(LoginForm);
