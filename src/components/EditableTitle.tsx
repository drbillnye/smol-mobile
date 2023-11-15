import React, { useState } from 'react';

interface EditableTitleProps {
  title: string;
  onTitleChange: (newTitle: string) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = ({ title, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleTitleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onTitleChange(newTitle);
    setIsEditing(false);
  };

  return (
    <div id="editable-title">
      {isEditing ? (
        <form onSubmit={handleTitleSubmit}>
          <input type="text" value={newTitle} onChange={handleTitleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <h1 onClick={() => setIsEditing(true)}>{title}</h1>
      )}
    </div>
  );
};

export default EditableTitle;