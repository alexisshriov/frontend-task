import React from 'react';
import NodeRow from '../noteRow/NoteRow';

class NotesList extends React.Component {
    state = {
        filteredNotes: this.props.notes,
        filterText: ''

    }

    static getDerivedStateFromProps(props, state) {
        const filteredNotes = props.notes.filter(note => (
            note.title.toUpperCase().includes(state.filterText.toUpperCase()) || note.text.toUpperCase().includes(state.filterText.toUpperCase())
        ))
        console.log('excuted')
        return { filteredNotes: filteredNotes }
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({ filterText: value })
    }

    render() {
        return (
            <div style={{ width: 300 }}>
                <div style={{ margin: 7 }} >
                    <label>Filter:</label><input type='text' onChange={this.handleChange}></input>
                </div>
                {this.state.filteredNotes.map(note => <NodeRow key={note.id} note={note} deleteNote={this.props.deleteNote} selectNote={this.props.selectNote} />)}
            </div>
        );
    }
}

export default NotesList;

