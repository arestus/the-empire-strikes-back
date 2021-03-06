import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Person from './Person';

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://swapi.dev/api/people/');
      setPeople(data.results);
      console.log(data.results);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('comment', JSON.stringify(comment));
  // }, [comment]);

  return (
    <>
      <h2>People</h2>
      <ul>
        {people.map(person => (
          <li key={person.name}>
            <Person person={person} />
          </li>
        ))}
      </ul>
    </>
  );
}
