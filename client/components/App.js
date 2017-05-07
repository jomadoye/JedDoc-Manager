import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessageList from './flashMessages/flashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessageList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
