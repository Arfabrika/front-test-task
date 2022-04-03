import React, {useEffect, useState} from 'react';
import '../style/App.css'

const Person = ({pers, click, ...props}) => {
  const [person, setPerson] = useState({id: 0, name: 'a', company: {name: ''}, url: ''});

  useEffect(()=> {
    setPerson({...pers, url: 'https://i.pravatar.cc/210/?img='+(pers.id + 4)});
  }, [])

  return (
    <div {...props}>
        <div  className={click === -1 ? 'checked_person' : 'person'}>
          <img src={person.url} className="image_person"/>
          <div className="name"> {person.name} </div>
          <div className="company_name"> {person.company.name} </div>
        </div>
    </div>
  );
};

export default Person;