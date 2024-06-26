import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const res = await axios.get('/name')
    console.log(res.data)
    setUsername(res.data)
  }

  return (
    <>
      <h1>MY WEBSITE</h1>
      <h3>Hi my name is {username}</h3>
    </>
  );
}

export default App;
