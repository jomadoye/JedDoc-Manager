import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../../../components/App.jsx';
import Footer from '../../../components/includes/Footer.jsx';
import FlashMessagesList from
  '../../../components/includes/FlashMessagesList.jsx';
import NavigationBar from '../../../components/includes/NavigationBar.jsx';

describe(' Test for App Component', () => {
  it('renders the root component', () => {
    shallow(<App />);
  });
  it('renders NavigationBar', () => {
    const wrapper = shallow(<App />);
    const navbar = <NavigationBar />;
    expect(wrapper.contains(navbar)).toEqual(true);
  });
  it('renders Footer', () => {
    const wrapper = shallow(<App />);
    const footer = <Footer />;
    expect(wrapper.contains(footer)).toEqual(true);
  });
  it('renders the props children of flashMessagesList', () => {
    const wrapper = shallow(
      <App>
        <FlashMessagesList />
      </App>,
    );
    expect(wrapper.contains(<FlashMessagesList />)).toEqual(true);
  });
  it('renders the props children of navigationBar', () => {
    const wrapper = shallow(
      <App>
        <NavigationBar />
      </App>,
    );
    expect(wrapper.contains(<NavigationBar />)).toEqual(true);
  });
  it('renders the props children of Footer', () => {
    const wrapper = shallow(
      <App>
        <Footer />
      </App>,
    );
    expect(wrapper.contains(<NavigationBar />)).toEqual(true);
  });
});
