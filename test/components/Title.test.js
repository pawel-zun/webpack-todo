import React from 'react'
import Title from '../../src/components/Title'

test('render a title', () => {
  const wrapper = shallow(
    <Title 
      headline="What are you going ToDo?"
      howMany={4} />
  );
  expect(wrapper).toMatchSnapshot();
});
