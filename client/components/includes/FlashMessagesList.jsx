import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessages';

/**
 * The flash message list
 *
 * @class FlashMessageList
 * @extends {React.Component}
 */
class FlashMessageList extends React.Component {

  /**
   * This method renders the component
   *
   * @returns {Object} jsx component
   *
   * @memberof FlashMessageList
   */
  render() {
    const signupToast = this.props.messages.map((message) => {
      const { text } = message;
      return Materialize.toast(`${text}`, 4000);
    },
    );
    return (
      <div>
      { signupToast }
      </div>
    );
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

/**
 * mapStateToProps
 *
 * @param {object} state
 * @returns {object} state
 */
function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  };
}

export default connect(mapStateToProps, {
  deleteFlashMessage })(FlashMessageList);
