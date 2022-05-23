import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers';
import { useEffect, useState } from 'react';


function App()
{
  const [number, setNumber] = useState(0);

  const setNumberHandler = (newNumber) =>
  { 
    setInterval(() =>
    {
      const num = 1
      return setNumber(num + newNumber);
    }, 1000);
    return Numbers({text: number});
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

  useEffect(() => {
    setNumberHandler()
    
  }, [number])
  
  return (
    <div className="App">
      {
        numbers.map(number => (
          
          <Numbers text={ number}/>

        ))
      }
      
      <style jsx>{`
   .App{
      background-color: #ccc;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
   }
   
   `}</style>
    </div>
  );
}

export default App;
