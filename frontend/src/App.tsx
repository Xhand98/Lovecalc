import { useState } from 'react';
import './App.css'
import './index.css'
import { Amar } from '../wailsjs/go/main/App';
import {Input} from "@heroui/input"
import { Button } from '@heroui/button';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
//  const [x, setX] = useState(0);
//  const [y, setY] = useState(0);

//  const[suma, setSuma] = useState("");
//  const updateSuma = (result: string) => setSuma(result);

  const [welcomeText, setWelcomeText] = useState("¡Calculadora de amor!");
  const updateWelcomeText = (e: any) => setWelcomeText(e.target.value);

  const [sub1, setSub1] = useState("");
  const updateSub1 = (e: any) => setSub1(e.target.value);

  const [sub2, setSub2] = useState("");
  const updateSub2 = (e: any) => setSub2(e.target.value);            

  const [result, setResult] = useState("");
  const updateResult = (result: string) => setResult(result);

  const switchSubjects = () => {
    
  };
// function greet() {
//     Greet(name).then(updateWelcomeText);
// }

//  function sum() {
//      Sum(x.toString(), y.toString()).then(updateSuma);
//  }

  const cambiar = () => {
    let tempSub = sub1;
    setSub1(sub2);
    setSub2(tempSub);

};

  function amar() {
    if (sub1 === "" || sub2 === "") {
      setResult("Por favor, ingresa ambos nombres.");
      return;
    }
    Amar(sub1, sub2).then(updateResult);
  }

  function reset() {
    setSub1("");
    setSub2("");
    setResult("");
    }

  return (
    <div className="min-h-screen  grid grid-cols-1 place-items-center justify-items-center mx-auto py-8">
      <ThemeSwitcher />
        <h1 className="content-center text-sky-400 text-center text-6xl font-bold font-mono">{welcomeText}</h1>
        <h2 className='content-center text-center text-violet-700 text-4xl font-bold font-mono'>{result}</h2>
        <Input
        label="Sujeto 1"
        onChange={updateSub1}
        value={sub1} // This makes it a controlled input
        id="sub1"
      />
      <Input
        label="Sujeto 2"
        onChange={updateSub2}
        value={sub2} // This makes it a controlled input
        id="sub2"
      />
        <div className='flex gap-40'> 
        <Button onPress={amar} color="primary">
          Calcular
        </Button>
        <Button onPress={reset} color="secondary">
          Reset
        </Button>
        <Button onPress={cambiar} color="default">
          Switch
        </Button>
        </div>
    </div>
  );
}

export default App
