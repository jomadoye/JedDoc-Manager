import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './includes/NavigationBar.jsx';
import FlashMessageList from './includes/FlashMessagesList.jsx';
import Footer from './includes/Footer.jsx';

/**
 * The App page
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

  /**
   * This method renders the component
   *
   * @returns {Object} jsx component
   *
   * @memberof App
   */
  render() {
    return (
      <div className="teal lighten-5 wrapper">
        <NavigationBar />
        <div className="main">
          <FlashMessageList />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
