import React from 'react';
import Button from 'react-bootstrap/Button';

class NoteDisplay extends React.Component {
    constructor(props) {
        console.log(props.selectedNote)
        super(props)
        const { id, title, text } = this.props.selectedNote;
        this.state = { id, title, text };
    }

    static getDerivedStateFromProps(props, state) {
        if ((state.id != props.selectedNote.id)) {
            const { id, title, text } = props.selectedNote;
            return { id, title, text };
        }
        return null
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    addNote = () => {
        const { title, text } = this.state;
        this.props.addNote({ id: this.uuid(), title, text })
    }

    editNote = () => {
        const { id, title, text } = this.state;
        this.props.editNote({ id, title, text })
    }

    saveNote = () => {
        if (this.props.selectedNote.id) {
            this.editNote()
        } else {
            this.addNote()
        }
    }

    cancel = () => {
        const { id, title, text } = this.props.selectedNote
        this.setState({ id, title, text })
    }

    //generates a random if for the new notes
    uuid = () => {
        return Math.floor((Math.random()) * 0x10000).toString(16);
    }

    render() {
        return (
            <div style={styles.noteDisplay}>
                <div>
                    <p><b>note title:</b></p>
                    <input type="text" name="title" style={{ width: 400 }} value={this.state.title} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <p><b>note text:</b></p>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} rows="12" cols="56" />
                </div>
                <div style={styles.buttons}>
                    <Button style={{ width: 100 }} variant="primary" onClick={this.saveNote} disabled={this.state.title.trim() === "" || this.state.text.trim() === ""}>save</Button>
                    <Button style={{ width: 100 }} variant="secondary" onClick={this.cancel}>cancel</Button>
                </div>
            </div>
        );
    }
}

const styles = {
    noteDisplay: {
        border: '2px solid gray',
        borderRadius: 5,
        padding: 12,
        width: 500,
        height: 500
    },
    buttons: {
        width: 250,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default NoteDisplay