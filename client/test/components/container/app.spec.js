import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../../../components/App';
import Footer from '../../../components/General/footer.jsx';
import flashMessagesList from
  '../../../components/flashMessages/flashMessagesList.jsx';
import NavigationBar from '../../../components/General/NavigationBar.jsx';

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
        <flashMessagesList />
      </App>,
    );
    expect(wrapper.contains(<flashMessagesList />)).toEqual(true);
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
