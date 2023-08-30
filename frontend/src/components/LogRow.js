import React from 'react';
import { RiChatDeleteFill, RiEdit2Fill } from 'react-icons/ri';

function LogRow({ log, onEdit, onDelete }) {
    return (
        <tr>
            <td>{log.company}</td>
            <td>{log.title}</td>
            <td>{log.min_salary}</td>
            <td>{log.max_salary}</td>
            <td>{log.date.slice(0, 10)}</td>
            <td><RiChatDeleteFill onClick={() => onDelete(log._id)} /></td>
            <td><RiEdit2Fill onClick={() => onEdit(log)} /></td>
        </tr>
    );
}

export default LogRow;