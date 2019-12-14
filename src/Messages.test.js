import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Messages from './Messages';
describe('Messages component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders UI correctly when no unread messages', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});