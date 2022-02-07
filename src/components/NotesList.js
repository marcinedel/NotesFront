import React from 'react'

const NotesList = ({ notesList, onRemoveNoteClick }) => {
    if (!notesList){
        return null
    }
    console.log(notesList[0])
    notesList.reverse()
    console.log(notesList[0])
    return notesList.slice().reverse().map((note) => 
    <div key={note._id} className='container mb-3 bg-secondary '>
        <div className='row align-items-center'>
            <div className='col-3'>
                {note.title}
            </div>
            <div className='col'>
                {note.content}
            </div>
            <div className='col-md-auto'>
                <button className='btn btn-danger' onClick={ () =>{onRemoveNoteClick(note)}}>
                    X
                </button>
            </div>
        </div>
    </div>)
}

export default NotesList