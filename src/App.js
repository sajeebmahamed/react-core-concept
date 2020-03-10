import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const developers = ['John', 'Smith', 'Albid', 'Jhankar'];
  return (
    <div className="App">
      <header className="App-header">
        <MyInfo name= {developers[0]} des = "Im a frontend developer living in dhaka bangladesh"> </MyInfo>
        <MyInfo name = {developers[1]}></MyInfo>
        <MyInfo name="Shakib" des= "Im a backend developer living in dhaka bangladesh"> </MyInfo>
        
      </header>
    </div>
  );
}
function MyInfo(props){
  const myStyle = {
    backgroundColor : 'green',
    border : '1px solid red',
    margin : '10px',
    padding : '10px'
  }
  return (
  // <div style = {{border : "1px solid red", margin : "10px"}}>
  <div style={myStyle}>
    <h1>Hello, This is {props.name}</h1>
    <h3> {props.des} </h3>
  </div>
  )
}

export default App;
