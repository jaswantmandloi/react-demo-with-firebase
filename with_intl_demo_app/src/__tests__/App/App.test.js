import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App/Main/index';

test('testing main APP component', () => {

    const component = renderer.create(<App />);

    let tree = component.toJSON();

    console.log(tree);

    expect(Object.keys(tree.props)).toHaveLength();

});