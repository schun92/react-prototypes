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

/* <tr>
<th>Sarah</th>
<th>Math</th>
<th>95</th>
</tr>
<tr>
<th>Jhon</th>
<th>English</th>
<th>100</th>
</tr>
<tr>
<th>Daniel</th>
<th>History</th>
<th>99</th>
</tr> */