import React from 'react';
import Table from './table';

const students = [
    {
        student: 'Sarah',
        course: 'Math',
        grade: 85
    },
    {
        student: 'Jhon',
        course: 'English',
        grade: 100
    },
    {
        student: 'Daniel',
        course: 'History',
        grade: 80
    },
];

const App = () => (
    <div className="container">
        <h1>"Student Grade Table"</h1>
        <Table data={students} />
    </div>
)



export default App;



