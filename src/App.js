import "./App.css";
import contacts from './contacts.json';
import { useState } from 'react';
const firstFive = contacts.slice(0, 5);

function App() {
  const [celebrity, setCelebrity] = useState(firstFive);
  const celebrityList = [...celebrity];

  //Function expression to add random contact
  const addRandom = () => {
    let i = Math.floor(Math.random() * contacts.length);
    if (!celebrityList.includes(contacts[i])){
      celebrityList.push(contacts[i]);
    }
    setCelebrity(celebrityList);
  }

  //Function expression to sort by popularity
  const sortPopularity = () => {
    setCelebrity(celebrityList.sort((a, b) => a.popularity > b.popularity ? -1 : 1));
  }

  //Function expression to sort by name
  const sortName = () => {
    setCelebrity(celebrityList.sort((a, b) => a.name > b.name ? 1 : -1));
  }

  //Function expression to delete a contact
  const deleteContact = (event) => {
    //Have to go the airport to pick up my girlfriend's family. If this isn't done by tomorrow's class I'll finish it after :) 
  }

  return (
  <div className="App">
    <h1>IronContacts</h1>
    <div className="sorting-buttons">
      <button onClick={() => addRandom()}>Add Random Contact</button> 
      <button onClick={() => sortPopularity()}>Sort by Popularity</button> 
      <button onClick={() => sortName()}>Sort by Name</button> 
    </div>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {celebrityList.map(celebs => 
          <tr key={celebs.id} >
            <td><img src={celebs.pictureUrl} alt='celebPicture'/></td>
            <td>{celebs.name}</td>
            <td>{Math.round(celebs.popularity)}</td>
            <td>{celebs.wonOscar ? '🏆' : ""}</td>
            <td>{celebs.wonEmmy ? '🏆' : ""}</td>
            <td><button onClick={() => deleteContact()}>Delete</button></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>  
  );
}

export default App;