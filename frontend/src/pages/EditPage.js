import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditPage = ({ logToEdit }) => {

    const [company, setCompany]              = useState(logToEdit.company);
    const [title, setTitle]                  = useState(logToEdit.title);
    const [min_salary, setMinSalary]         = useState(logToEdit.min_salary);
    const [max_salary, setMaxSalary]         = useState(logToEdit.max_salary);
    const [date, setDate]                    = useState(logToEdit.date);
    
    const redirect = useNavigate();

    const editLog = async () => {
        const response = await fetch(`/log/${logToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                company: company,
                title: title,
                min_salary: min_salary,
                max_salary: max_salary,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The job application was edited!`);
        } else {
            const errMessage = await response.json();
            alert(`The job application was not edited due to status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }


    return (
        <>
        <article>
            <h2>Edit a job application in the tracker</h2>
            <p>Specify which fields you would like to edit.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which job are you editing?</legend>
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
                        onClick={editLog}
                        id="submit"
                    >Update</button> the job application</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditPage;
