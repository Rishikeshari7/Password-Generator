import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoCopySharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [password,setPassword]=useState('')
  const [passlength,setpasslength]=useState(8);
  const [isUppercase,setIsUppercase]=useState(true);
  const [isLowercase,setIsLowercase]=useState(true);
  const [isNumber,setIsNumber]=useState(true);
  const [isSymbol,setIsSymbol]=useState(true);

  const clickHandler=(e)=>{
    e.preventDefault();
    let passsword=''
    for(let i=0;i<passlength;i++){
      const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const small="abcdefghijklmnopqrstuvwxyz"
      const number="1234567890"
      const symbol="~!@#$%^&*|?+-"
      if(isUppercase){
        let rand=capital[Math.floor(Math.random()*capital.length)]
        passsword+=rand;
      }
      if(isLowercase){
        let rand=small[Math.floor(Math.random()*small.length)]
        passsword+=rand;
      }
      if(isNumber){
        let rand=number[Math.floor(Math.random()*number.length)]
        passsword+=rand;
      }
      if(isSymbol){
        let rand=symbol[Math.floor(Math.random()*symbol.length)]
        passsword+=rand;
      }
    }
    setPassword(passsword.slice(0,passlength))
    console.log(password);
    
  }
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Text Copied")
  };
  return (
    <div className='container'>
      <div className='main'>
        <h1 className='heading'>Password Generator</h1>
          <div className='hero'>
          {
            password &&
            <div className='h1'><h2 className='pass' >{password}</h2><IoCopySharp className='icon' onClick={copyPasswordToClipboard} /></div>
          }
            
            <form className='form' onSubmit={clickHandler}>
              <div className='length' >
                <label>Password Length:{passlength}</label>
                <input 
                  type='range'
                  min="5" 
                  max="15" 
                  value={passlength} 
                  onChange={(e)=>setpasslength(e.target.value)}
                  ></input>

              </div>
              <div className='width'>
                <label>Include Uppercase Letters</label>
                <input
                type='checkbox'
                name='uppercase'
                checked={isUppercase}
                onChange={(e)=>{setIsUppercase(!isUppercase);console.log(isUppercase)}}
                ></input>
              </div>
              <div className='width'>
                <label>Include Lowercase Letters</label>
                <input
                type='checkbox'
                name='lowercase'
                checked={isLowercase}
                onChange={(e)=>{setIsLowercase(!isLowercase);console.log(isLowercase)}}
                ></input>
              </div>
              <div className='width'>
                <label>Include Numeric Letters</label>
                <input
                type='checkbox'
                name='number'
                checked={isNumber}
                onChange={(e)=>{setIsNumber(!isNumber);console.log(isNumber)}}
                ></input>
              </div>
              <div className='width'>
                <label>Include Symbolic Letters</label>
                <input
                type='checkbox'
                name='symbol'
                checked={isSymbol}
                onChange={(e)=>{setIsSymbol(!isSymbol);console.log(isSymbol)}}
                ></input>
              </div>
              <button className='btn' >Generate</button>
            </form>
          </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
