import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion('');
    }
  };

  return (
    <div className='container mx-auto mt-4'>
      <form onSubmit={handleSubmit}>
        <div className='bg-gray-100 p-4 rounded-2xl shadow-md'>
          <label htmlFor="question" className='block text-gray-700 font-semibold mb-2'>Ask a Question</label>
          <input
            type="text"
            id="question"
            className='w-full p-2 border border-gray-300 rounded-lg'
            placeholder='Type your question here...'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
