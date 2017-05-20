import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './General/NavigationBar.jsx';
import FlashMessageList from './flashMessages/flashMessagesList.jsx';
import Footer from './General/footer.jsx';
import '../public/scss/app.scss';

class App extends React.Component {
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
