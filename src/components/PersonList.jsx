import React, {useEffect, useState} from 'react';
import {personLoader} from "../dataLoader";
import Person from "./Person";
import Buttons from "./Buttons";

const PersonList = ({check, checkPerson}) => {
  const [persons, setPersons] = useState([]);
  const [page, setPage] = useState(1);
  const [clicks, setClicks] = useState([]);

  async function fetchPersons() {
    if (page > 3)
      setPage(3);
    else if (page < 1)
      setPage(1);
    const response = await personLoader.getAll(4, page);
    setPersons(response.data);
  }
  useEffect(()=> {
    fetchPersons();
    const tmpArray = new Array(10);
    tmpArray.fill(1);
    setClicks(tmpArray)
  }, [page])
  return (
    <div>
      <Buttons curPage={page} setPage={setPage}/>
      <div className="person_list">
          {persons.map((person, index) =>
              <Person onClick={() => {
                  const tmpArray = new Array(10);
                  tmpArray.fill(1);
                  tmpArray[index] = -1;
                  setClicks(tmpArray)
                check(person)
                }
              }
                pers = {person}
                key = {person.id}
                click={clicks[index]}
                checkPerson ={checkPerson}
                />
          )}
      </div>
    </div>
  );
};

export default PersonList;