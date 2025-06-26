import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../redux/Actions/keepAction';


const Keep = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.keep.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const data = { id: Date.now(), title };
      dispatch(addTask(data));
      setTitle('');
    }
  };

  return (
    <div className="keep-container">
      <h2 className="keep-title">Google Keep</h2>

      <form onSubmit={handleSubmit} className="keep-form">
        <input
          type="text"
          placeholder="Take a note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="keep-notes">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <p>{note.title}</p>
            <button onClick={() => dispatch(deleteTask(note.id))}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keep;
