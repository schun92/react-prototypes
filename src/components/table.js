import React from 'react';


const table = (props) => {
    const tableRows = props.data.map((studentInfo, index)=>{

        console.log('this is the index:', index);
        console.log('this is the info:', studentInfo);
        return (
            <tr key={index}>
                <th>{studentInfo.student}</th>
                <th>{studentInfo.course}</th>
                <th>{studentInfo.grade}</th>
            </tr>
        )
    });
    console.log("this is the props:", props);
return (
    <div>
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div>
    );
};

export default table;

