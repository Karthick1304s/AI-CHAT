import React from 'react';

const ChatResponse = ({ response }) => {
  if (!response) return null;

  if (response === 'loading') {
    return (
      <div className='text-center mt-4'>
        <p className='text-lg'>Loading...</p>
      </div>
    );
  }

  const { candidates, usageMetadata } = response;

  return (
    <div className='container mx-auto mt-4'>
      <div className='bg-gray-100 p-4 rounded-2xl shadow-md'>
        <h2 className='text-xl font-bold mb-2'>Response</h2>
        {candidates?.map((candidate, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-sm mb-4'>
            <h3 className='text-lg font-semibold mb-1'>Candidate {index + 1}</h3>
            {/* Safely accessing candidate.content.parts[0] */}
            <p className='text-gray-800 mb-2'>
              {candidate.content?.parts?.[0]?.text}
            </p>
            {candidate?.citationMetadata?.citationSources && (
              <>
                <h6 className='font-semibold'>Citations:</h6>
                <ul className='list-disc list-inside'>
                  {candidate.citationMetadata.citationSources.map((source, idx) => (
                    <li key={idx} className='text-gray-600'>
                      <a
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-blue-500 hover:underline'
                      >
                        {source.uri}
                      </a>{" "}
                      (Indexes: {source.startIndex} - {source.endIndex})
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
        <div className='mt-4'>
          <h4 className='font-bold'>Usage Data</h4>
          <p>Completion Tokens: {usageMetadata?.promptTokenCount}</p>
          <p>Total Tokens: {usageMetadata?.totalTokenCount}</p>
          <p>Model Name: {usageMetadata?.totalTokenCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatResponse;
