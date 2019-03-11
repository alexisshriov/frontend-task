import React from 'react';
import { shallow } from 'enzyme';
import NoteRow from './NoteRow';

describe('NoteList', () => {
  it('should render NoteList correctly', () => {
    const note = {id: 'd39gr', title: 'note title test1', text: 'note text test1'}
    const component = shallow(<NoteRow note = {note}  />);
    expect(component).toMatchSnapshot();
  });
});