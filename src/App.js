import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const developers = ['John', 'Smith', 'Albid', 'Jhankar'];
  const employee = [
    {name : "X", dept : "Soft"},
    {name : "Y", dept : "Programming"}
  ]
  const productsData = [
    {name : 'Photoshop', price : '$30.00'},
    { name: 'Adobe XD', price: 'Free' },
    { name: 'Illustrator', price: '$89.00' }
  ]
  return (
    <div className="App">
      <header className="App-header">   <MyInfo name = "Shakib" des = "frontend"></MyInfo>
        <MyInfo name="Monti" des= "Backend"></MyInfo>
        <MyInfo name="Sajeeb" des="fullstack"></MyInfo>
        <MyInfo name = { developers[0] } des = "React"></MyInfo>
        <MyInfo name={developers[1]} des="Angular"></MyInfo>
        <MyInfo name = {employee[0].name} dept = { employee[0].dept }></MyInfo>
        <Products product = {productsData[0]}></Products>
        <Products product={productsData[1]}></Products>
        <Products product={productsData[2]}></Products>
      </header>
    </div>
  );
}
function MyInfo(props){
  let myStyle = {
    border : '1px solid red',
    backgroundColor : 'green'
  }
  return (
    <div>
      <h1 style = {myStyle}>Hello, This is {props.name} </h1>
      <h4 style = {{ color : 'cyan', border : '1px solid blue' }}>I'm, a {props.des} developers living in Dhaka, Bangladesh</h4>
      <h5 style={{ color: 'cyan', border: '1px solid blue' }}> Department : { props.dept }</h5>
    </div>
  )
}
function Products(props){
  let productStyle = {
    backgroundColor : 'darkblue',
    width : '25%',
    height : '200px',
    border : '1px solid red',
    float : 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  
  return (
    <div style = { productStyle }>
      <h3>Name : { name }</h3>
      <h5>Price : { price} </h5>
    </div>
  )
}



export default App;
