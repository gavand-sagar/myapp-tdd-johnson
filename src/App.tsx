import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Calculator from './Calculator';
import ExpandCollapse from './ExpandCollapse';

function App() {
  return (
    <div className="App">
      <ExpandCollapse/>
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
