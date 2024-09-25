import { useState } from "react";


const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 21,
    hobby: 'coding'
  });
 

  const displayPerson = () => {
    setPerson({name: 'John', age: 28, hobby: 'read books'});
    
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>Show John</button>
    </>
  );
};

export default UseStateObject;
