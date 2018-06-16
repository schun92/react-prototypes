import React from 'react';
import ReactDOM from 'react-dom';

const user ={
    name: 'Sarah',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);


function luckyNumber(){
    return Math.floor(Math.random()*1000)+1;
};

function greeting(person){
   return <div className="container">
   <h1>Hello {person.name}</h1>
   <h2 className="text-muted">The lucky number is: {person.luckyNumber}</h2>
   </div>
};



