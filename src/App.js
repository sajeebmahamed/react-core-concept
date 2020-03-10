import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyInfo> </MyInfo>
        <MyInfo> </MyInfo>
        <MyInfo> </MyInfo>
        <MyInfo> </MyInfo>
      </header>
    </div>
  );
}
function MyInfo(){
  const myStyle = {
    backgroundColor : 'green',
    border : '1px solid red',
    margin : '10px',
    padding : '10px'
  }
  return (
  // <div style = {{border : "1px solid red", margin : "10px"}}>
  <div style={myStyle}>
    <h1>Hello, This is Sajeeb</h1>
    <h3>Im a frontend developer living in dhaka bangladesh</h3>
  </div>
  )
}

export default App;
