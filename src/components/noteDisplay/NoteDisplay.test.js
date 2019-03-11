import React from 'react';
import { shallow } from 'enzyme';
import NoteDisplay from './NoteDisplay';

describe('NoteDisplay', () => {
  it('should render NoteDisplay correctly', () => {
    const selectedNode = {id: 'ds35', title: 'note title test', text: 'note text test'}
    const component = shallow(<NoteDisplay selectedNote={selectedNode}  />);
    expect(component).toMatchSnapshot();
  });
});