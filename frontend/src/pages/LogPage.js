import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiFileAddFill } from "react-icons/ri";

import LogTable from '../components/LogTable';

function LogPage({ setLog }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [logs, setLogs] = useState([]);
    // const [logToEdit, setLogToEdit] = useState([]);

    // RETRIEVE the entire list of logs
    const loadLogs = async () => {
        const response = await fetch('/log');
        const logs = await response.json();
        setLogs(logs);
    } 
    

    // UPDATE a single log
    const onEditLog = async log => {
        setLog(log);
        redirect("/edit");
    }


    // DELETE a single log
    const onDeleteLog = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const logs = await getResponse.json();
            setLogs(logs);
        } else {
            console.error(`Failed to delete job log with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the logs
    useEffect(() => {
        loadLogs();
    }, []);

    // DISPLAY the logs
    return (
        <>
            <h2>Job Application Tracker</h2>
            <p>A job application tracker to see how many jobs were applied throughout the year.
                To add, please click this icon: <RiFileAddFill onClick={() => redirect("/create")} />
            </p>
            {/* {logToEdit && <EditPage logToEdit={logToEdit} />} */}
            <LogTable 
                logs={logs} 
                onEdit={onEditLog} 
                onDelete={onDeleteLog} 
            />
        </>
    );
}

export default LogPage;
