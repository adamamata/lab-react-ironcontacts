import "./App.css";
import contacts from './contacts.json';
import { useState } from 'react';
const firstFive = contacts.slice(0, 5);

function App() {
  const [celebrity, setCelebrity] = useState(firstFive);
  const celebrityList = [...celebrity];

  const addRandom = () => {
    let i = Math.floor(Math.random() * contacts.length);
    if (!celebrityList.includes(contacts[i])){
      celebrityList.push(contacts[i]);
    }
    setCelebrity(celebrityList);
  }

  return (
  <div className="App">
    <h1>IronContacts</h1>
    <button onClick={() => addRandom()}>Add Random Contact</button> 
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {celebrityList.map(celebs => 
          <tr>
            <td><img src={celebs.pictureUrl} alt='celebPicture'/></td>
            <td>{celebs.name}</td>
            <td>{Math.round(celebs.popularity)}</td>
            <td>{celebs.wonOscar ? '🏆' : ""}</td>
            <td>{celebs.wonEmmy ? '🏆' : ""}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>  
  );
}

export default App;