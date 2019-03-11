import React from 'react';
import Button from 'react-bootstrap/Button';

class NoteRow extends React.Component {
    render() {
        return (
            <div style={styles.noteRow} onClick={() => this.props.selectNote(this.props.note)}>
                <div>
                    <h4>{this.props.note.title}</h4>
                </div>
                <div>
                    <Button className="btn" onClick={() => this.props.deleteNote(this.props.note.id)}>X</Button>
                </div>

            </div>
        );
    }
}

const styles = {
    noteRow: {
        border: '2px solid gray',
        borderRadius: 5,
        padding: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default NoteRow