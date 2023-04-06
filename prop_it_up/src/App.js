import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard'

const people = [
  { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
  { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
]


function App() {
  return (
    <div className="people">

      {people.map(p => {
        return <PersonCard firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor} />
      })
      }

    </div>

  );
}

export default App;
