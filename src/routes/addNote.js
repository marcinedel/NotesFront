import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNote() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const onAddNoteClick = async () => {
        const token = localStorage.getItem('token')
        try {
            console.log(token)
            const response = await fetch('http://localhost:3000/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ title: title, content: content})
            })

            if (response.status == 200) {
                console.log(await response.json())
                navigate('/')
            }
        } catch (err) {
            console.log()
        }
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="titleInput">Note title</label>
                <input type="text" onInput={e => setTitle(e.target.value)} className="form-control" id="titleInput" placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label htmlFor="contentInput">Note content</label>
                <input type="text" onInput={e => setContent(e.target.value)} className="form-control" id="contentInput" placeholder="Enter content" />
            </div>
            <button className="btn btn-primary" onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}