import { useState } from 'react';
import Aust from '../assets/Aust Logo.png';

function Home() {
  const [setA, setSetA] = useState('');
  const [setB, setSetB] = useState('');
  const [results, setResults] = useState({});

  const handleCalculate = () => {
    const arrayA = setA.split(',').map(item => item.trim());
    const arrayB = setB.split(',').map(item => item.trim());
    const universalSet = Array.from(new Set([...arrayA, ...arrayB]));

    const complementA = universalSet.filter(item => !arrayA.includes(item));
    const intersectionAB = arrayA.filter(item => arrayB.includes(item));
    const unionAB = Array.from(new Set([...arrayA, ...arrayB]));
    const differenceAB = arrayA.filter(item => !arrayB.includes(item));
    const symmetricDifferenceAB = arrayA.filter(item => !arrayB.includes(item))
                                      .concat(arrayB.filter(item => !arrayA.includes(item)));

    setResults({
      complementA,
      intersectionAB,
      unionAB,
      differenceAB,
      symmetricDifferenceAB
    });
  };

  return (
    <div className='relative min-h-screen font-bold'>
      <div className='absolute inset-0 flex justify-center items-center'>
        <img 
          src={Aust}
          alt="Logo" 
          className='opacity-25 w-1/2 h-auto' 
        />
      </div>
      <div className="relative flex flex-col space-y-4 p-4 rounded">
        <input
          type="text"
          value={setA}
          onChange={(e) => setSetA(e.target.value)}
          className="border border-gray-300 rounded p-2"
          placeholder="Enter elements of Set A, separated by commas"
        />
        <input
          type="text"
          value={setB}
          onChange={(e) => setSetB(e.target.value)}
          className="border border-gray-300 rounded p-2"
          placeholder="Enter elements of Set B, separated by commas"
        />
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
      {results.complementA && (
        <div className="relative mt-4 bg-white bg-opacity-75 p-4 rounded">
          <div>Complement of A: <span className="text-blue-500">{results.complementA.join(', ')}</span></div>
          <div>Intersection of A and B: <span className="text-blue-500">{results.intersectionAB.join(', ')}</span></div>
          <div>Union of A and B: <span className="text-blue-500">{results.unionAB.join(', ')}</span></div>
          <div>Difference of A and B: <span className="text-blue-500">{results.differenceAB.join(', ')}</span></div>
          <div>Symmetric Difference of A and B: <span className="text-blue-500">{results.symmetricDifferenceAB.join(', ')}</span></div>
        </div>
      )}
      <footer className="absolute bottom-0 w-full text-center p-4 bg-white bg-opacity-75">
        &copy; 2024 American University of Science and Technology
      </footer>
    </div>
  );
}

export default Home;
