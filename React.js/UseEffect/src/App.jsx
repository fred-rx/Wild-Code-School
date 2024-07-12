import React, { useEffect, useState } from 'react';
import Message from './components/Message';
import './App.css';

export default function App() {

  const [email, setEmail] = useState("")
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    console.log('Email has changed')
  }, [email])

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {isUserLoggedIn ? <Message isUserLoggedIn={isUserLoggedIn}/> : ''}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="elon@spacex.com" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="submit" value="submit" onClick={() => setIsUserLoggedIn(true)} />
      </form>
      <button onClick={() => setIsUserLoggedIn(false)}>Lougout</button>
    </div>
  );
}
