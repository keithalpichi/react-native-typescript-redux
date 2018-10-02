import * as React from 'react';
import Main from '../../../views/Main';
import renderer from 'react-test-renderer';

describe("<Main />: ", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})