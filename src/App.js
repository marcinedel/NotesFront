import './App.css';
import { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from './contexts/userInfoProvider.js';
import NotesList from './components/NotesList'

function App() {
  const { userInfo, setUserInfo } = useContext(UserInfoContext)
  const [notesList, setNotesList] = useState()
  const navigate = useNavigate()

  const addNoteHandler = () => {
    navigate('/addNote')
  }

  const onRemoveNoteClick = async (note) => {
    const token = localStorage.getItem('token')
    try {
      console.log(note)
      const response = await fetch('http://localhost:3000/notes/' + note._id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },

      })

      if (response.status == 200) {
        const updatedNotesList = notesList.filter(n => n._id !== note._id)
        console.log(updatedNotesList)
        setNotesList(updatedNotesList)
      }
    } catch (err) {
      console.log(err)
    }
  }

  let count = 0;

  useEffect(async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch('http://localhost:3000/notes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      })

      if (response.status == 200) {
        const responseJson = await response.json()
        console.log(responseJson)
        setNotesList(responseJson)
      }
    } catch (err) {
      console.log(err)
    }
  }, [count])
  let content
  if (userInfo == undefined) {
    content = <h1>Not logged</h1>
  } else {
    content = <div>
      <button className='btn btn-primary mb-5' onClick={addNoteHandler}>Add note!</button>
      <NotesList notesList={notesList} onRemoveNoteClick={onRemoveNoteClick} />
    </div>

  }
  return (
    <div className="App">

      <div>
        {content}
      </div>

    </div>
  );
}

export default App;
