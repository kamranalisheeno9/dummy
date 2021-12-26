import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState("")
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };

    fetch('http://localhost:3000/api/markets',requestOptions)
        .then(response => response.json())
        .then(data => setData(data));
        console.log(data)

}, []);
  return (
    <div className="App">
      <p>
        {data.spread}
      </p>
    </div>
  );
}

export default App;
