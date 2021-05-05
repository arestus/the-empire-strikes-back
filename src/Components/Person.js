import React, { useState } from 'react';

const Person = ({ person }) => {
  const [inputText, setInputText] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setComment(inputText);
    setInputText('');
  };

  return (
    <div>
      <h3>Name: {person.name}</h3>
      <p>Birth year - {person.birth_year}</p>
      <form onSubmit={handleSubmit}>
        <label>Comment: {comment}</label>
        <br />
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <input type="submit" value="add comment" />
      </form>
    </div>
  );
};

export default Person;
