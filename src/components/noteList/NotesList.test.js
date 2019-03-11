import React from 'react';
import { shallow } from 'enzyme';
import NotesList from './NotesList';

describe('NoteList', () => {
  it('should render NoteList correctly', () => {
    const notes = [{id: 'd39gr', title: 'note title test1', text: 'note text test1'}, {id: 'ds35', title: 'note title test2', text: 'note text test2'}]
    const component = shallow(<NotesList notes={notes} />);
    expect(component).toMatchSnapshot();
  });
});