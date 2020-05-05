import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Person (props) {
  return (
    
    <div className="person">
      {console.log('hello world')}
      <h1>{props.name}</h1>
      <p>My age: {props.age}</p>
    </div>
  )
} 

const app = (
  
   <div>
      <Person name="Anton" age="35" />
      <Person name="Oksana" age="34" />
   </div>
)

ReactDOM.render(app, document.querySelector("#app"));