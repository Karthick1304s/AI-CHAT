import React, { useState } from 'react';

import ChatInput from './components/ChatInput';
import ChatResponse from './components/ChatResponse';
import { fetchChatResponse } from './services/api';

const App = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (e) {
      alert("Failed to fetch response");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className='App-header bg-blue-500 text-white text-center py-4'>
        <h1 className='text-4xl font-bold'>Chat Application</h1>
        <p className='text-lg mt-2'>Welcome to the Chat Application</p>
      </header>
      <ChatInput onSubmit={handleSubmit} />
      <ChatResponse response={loading ? 'loading' : response} />
    </div>
  );
};

export default App;
