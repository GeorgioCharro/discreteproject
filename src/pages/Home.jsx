import { useState } from 'react';

function Home() {
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');

  const handleReverse = () => {
    setReversed(input.split('').reverse().join(''));
  };

  return (
    <div className='mt-8 font-bold'>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded p-2"
          placeholder="Enter a string"
        />
        <button
          onClick={handleReverse}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Reverse
        </button>
      </div>
      {reversed && (
        <div className="mt-4">
          Reversed String: <span className="text-blue-500">{reversed}</span>
        </div>
      )}
    </div>
  );
}

export default Home;
