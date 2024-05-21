import React, { useState } from 'react';
import { agent } from './api';
import ResponseDisplay from './ResponseDisplay';
import './styles.css';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await agent(userInput);
    setResponse(result);
  };

  return (
    <div className="app">
      <h1>Virtual Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask something..."
        />
        <button type="submit">Submit</button>
      </form>
      <ResponseDisplay response={response} />
    </div>
  );
};

export default App;
