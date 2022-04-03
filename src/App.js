import React, {useState} from 'react';
import './style/App.css'
import PersonList from "./components/PersonList";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  const [choosedPerson, setChoosedPerson] = useState({})

  return (
    <div className="App">
      <Header/>
      <PersonList check={setChoosedPerson} checkPerson={choosedPerson}/>
      <PostList person={choosedPerson}/>
    </div>
  );
}

export default App;
