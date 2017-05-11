import React from 'react';
import NavigationBar from './General/NavigationBar';
import FlashMessageList from './flashMessages/flashMessagesList';
import Footer from './General/footer';
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

export default App;
