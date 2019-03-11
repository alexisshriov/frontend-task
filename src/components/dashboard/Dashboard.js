import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NotesList from '../noteList/NotesList';
import NoteDisplay from '../noteDisplay/NoteDisplay';
import * as actions from '../../actions/notes';

import Button from 'react-bootstrap/Button';

class Dashboard extends React.Component {
  state = {
    editMode: true,
    selectedNote: { id: null, title: '', text: '' }
  }

  selectNote = (note) => {
    this.setState({ selectedNote: note })
  }

  render() {
    return (
      <div>
        <div style={styles.dashboard}>
          <div style={{ marginLeft: 400, border: '2px solid gray' }}>
            <div style={{ margin: 12 }}>
              <Button variant='success' style={{ width: 270 }} onClick={() => this.selectNote({ id: null, title: '', text: '' })}>Add Note</Button>
            </div>
            <div>
              <NotesList notes={this.props.notes} deleteNote={this.props.action.deleteNote} selectNote={this.selectNote} />
            </div>
          </div>
          <div style={{ marginLeft: 20 }}>
            <NoteDisplay selectedNote={this.state.selectedNote} addNote={this.props.action.addNote} editNote={this.props.action.editNote} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    notes: state.notes
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    action: bindActionCreators(actions, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const styles = {
  dashboard: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    border: '2px solid gray',
    marginTop: 100
  }
}