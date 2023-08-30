import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const [company, setCompany]   = useState('');
    const [title, setTitle]       = useState('');
    const [min_salary, setMinSalary]         = useState('');
    const [max_salary, setMaxSalary]         = useState('');
    const [date, setDate]         = useState('');
    
    const redirect = useNavigate();

    const addLog = async () => {
        const newLog = { company, title, min_salary, max_salary, date };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newLog),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The job application was added!`);
            redirect("/");
        } else {
            alert(`The job application not added due to status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add to the tracker</h2>
            <p>Fill out the fields to be logged into the database.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which job are you adding?</legend>
                    <label for="company">Company</label>
                    <input
                        type="text"
                        placeholder="Name of Company"
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="title">Job Title</label>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="min_salary">Minimum Salary</label>
                    <input
                        type="number"
                        value={min_salary}
                        placeholder="Minimum Salary"
                        onChange={e => setMinSalary(e.target.value)} 
                        id="min_salary" />

                    <label for="max_salary">Maximum Salary</label>
                    <input
                        type="number"
                        value={max_salary}
                        placeholder="Maximum Salary"
                        onChange={e => setMaxSalary(e.target.value)} 
                        id="max_salary" />

                    <label for="date">Applied Date</label>
                    <input
                        type="date"
                        placeholder="Date Applied"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addLog}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;