import React, { useEffect, useState } from 'react';
import Number from '../assets/Number';
import BackOnTrack from '../assets/BackOnTrack';

const MojBroj = ({props}) => {
  const [numbers, setNumbers] = useState([]);
  const [mainNumber, setMainNumber] = useState(0);
  const [extendedDigits, setExtendedDigits] = useState(0);
  const [randomDoubleDigit, setRandomDoubleDigit] = useState(0);
  const [currentExpression, setCurrentExpression] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const numbers = localStorage.getItem('singleDigits');
    const mainNumber = localStorage.getItem('mainNumber');
    const extendedDigits = localStorage.getItem('extendedDigits');
    const randomDoubleDigit = localStorage.getItem('randomDoubleDigit');
    setMainNumber(mainNumber);
    setExtendedDigits(extendedDigits);
    setRandomDoubleDigit(randomDoubleDigit);
    setNumbers(JSON.parse(numbers || '[]'));
  }, []);

  useEffect(() => {
    if (currentExpression) {
      try {
      const evaluatedResult = eval(currentExpression); // Paziti na sigurnost ako se korisnički unos ne kontroliše
        setResult(evaluatedResult);
      } catch {
        console.log('Invalid expression');
      }
    }
  }, [currentExpression]);

  const handleNumberClick = (number) => {
    setCurrentExpression((prev) => prev + number);
  };

  const handleOperationClick = (operation) => {
    setCurrentExpression((prev) => prev + operation);
  };

  const handleClear = () => {
    setCurrentExpression('');
    setResult(0);
  };

  return (
    <div>
      <BackOnTrack setGameName={props.setGameName} />
      <div className='flex my-10 justify-center'>

      <Number number={mainNumber} />
      </div>
      <div className="flex rounded-lg border-sky-600 shadow-2xl items-start border-t-2 py-5 sm:py-0 sm:w-10/12 m-auto sm:items-center sm:justify-center">
        <div className='flex w-2/3 flex-wrap border-r-2 justify-center'>
        <div className='flex w-full justify-center sm:w-4/5 flex-wrap'> 

        {numbers.map((number, index) => (
          <div
          key={index}
          className="sm:m-2 w-1/5 sm:w-fit text-center cursor-pointer"
          onClick={() => handleNumberClick(number)}
          >
            <Number number={number} />
          </div>
        ))}
        </div>
        <div className='flex w-full justify-center sm:w-4/5 flex-wrap'>

        <div className="m-2 w-2/5 sm:w-fit cursor-pointer" onClick={() => handleNumberClick(randomDoubleDigit)}>
          <Number number={randomDoubleDigit} />
        </div>
        <div className="m-2 w-2/5 sm:w-fit cursor-pointer" onClick={() => handleNumberClick(extendedDigits)}>
          <Number number={extendedDigits} />
        </div>
        </div>
        </div>
      <div className="flex w-1/3 justify-between sm:w-fit flex-wrap box-border px-2 sm:p-2">
        {['+', '-', '*', '/', '(', ')'].map((op) => (
          <button
          key={op}
          className="w-2/5 mb-2 sm:m-2 bg-sky-600 text-white rounded-md p-2"
          onClick={() => handleOperationClick(op)}
          >
            {op}
          </button>
        ))}
        <button
          className="w-2/5 sm:m-2 bg-red-600 text-white rounded-md p-2"
          onClick={handleClear}
          >
          C
        </button>
      </div>
          </div>
      <p className="text-center mt-5 shadow-2xl bg-sky-600 w-11/12 p-2 rounded-md m-auto text-white min-h-12 "> {currentExpression}</p>
      <p className="text-center shadow-2xl bg-sky-600 w-11/12 p-2 mt-3 text-white rounded-md m-auto min-h-12 "> {result}</p>
    </div>
  );
};

export default MojBroj;
