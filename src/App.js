import React, {useState} from 'react';
import './style/App.css'
import PersonList from "./components/PersonList";
import PostList from "./components/PostList";

function App() {
  const [choosedPerson, setChoosedPerson] = useState({})

  return (
    <div className="App">
      <h1 className="header"> Persons</h1>
      <PersonList check={setChoosedPerson} checkPerson={choosedPerson}/>
      <PostList person={choosedPerson}/>
    </div>
  );
}

export default App;
