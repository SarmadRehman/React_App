import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Run  () {
 return( 
    <>
  <App /> 
 <h1>Hi there</h1>
 </>) 
}

ReactDOM.render(
    <Run/>, 
document.getElementById("root")
);
