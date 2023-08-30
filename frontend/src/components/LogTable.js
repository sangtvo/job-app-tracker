import React from 'react';
import LogRow from './LogRow';

function LogTable({ logs, onDelete, onEdit }) {
    return (
        <div className='container'>
        <table id="jobapps">
            <caption>Add and Edit Job Applications</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Minimum Salary</th>
                    <th>Maximum Salary</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log, i) => 
                    <LogRow 
                        log={log} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default LogTable;

