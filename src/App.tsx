import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Calculator from './Calculator';
import ExpandCollapse from './ExpandCollapse';
import MultipleLanguage from './MultipleLanguage';
import UserInformation from './UserInformation';

function App() {
  const [lang, setLang] = useState('en')

  const content: { [key: string]: string } = {
    "en": "Save",
    "mr": "Jatan Kara"
  }
  return (
    <div className="App">
      <UserInformation/>
      {/* <select onChange={(e) => setLang(e.target.value)}>
        <option value={'en'}>ENG</option>
        <option value={'mr'}>MAR</option>
      </select>
      <MultipleLanguage langId={lang} /> */}
      {/* <Calculator/> */}
      {/* <Counter max={5}/>
      <Counter max={10}/>
      <Counter max={3}/> */}
      {/* <header className="App-header">
        <input data-testid='txt-username'/>
        <input data-testid='txt-password'/>
        <button className='login' data-testid="btn-login">LOGIN</button>
        <span>Learn React</span>
      </header> */}
    </div>
  );
}

export default App;
