import { useEffect, useState } from 'react';
import {useQuery} from '@apollo/client';
import { GET_ALL_USERS } from '../../query/user';
import './index.scss';

function App() {
const {data, loading, error} = useQuery(GET_ALL_USERS)
const [name, setName] = useState('')
const [users, setUsers] = useState([])
const [filteredList, SetFilteredList] = useState(users);

useEffect(()=>{
  if(!loading){
    setUsers(data.characters.results)
  }
}, [data])

useEffect(()=>{
  SetFilteredList(users.filter(user => user.name.toLowerCase().includes(name.toLowerCase())))
}, [name])
console.log(users)
console.log(name)
return (
  <div className='App'>
    <h1>Characters Rick and Morty</h1>
    <input className='input' onChange={(e)=> setName(e.target.value)}></input>

    <div className="characters">
      {filteredList.map(user =>(
        <div className='character'>
          <img src={user.image}></img>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
