import { useState } from "react";
import { data } from "../../../data";



const UseStateArray = () => {
const [people, setPeople] = useState(data)


 const RemovePeople = (id) => {
  let newPeople = people.filter((person )=> person.id !== id) 
   setPeople(newPeople);
 };

  return (
    <div>
      <h3>Name of set up List </h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={()=> RemovePeople(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
       Clear lists
      </button>
    </div>
  );
};

export default UseStateArray;
