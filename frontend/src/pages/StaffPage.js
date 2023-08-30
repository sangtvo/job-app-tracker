import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then ((response) => {
            setResults(response.results);
        })
        .catch(() => {
            alert("Error")
        });
    };
    return (
        <>
        <h2>Staff Directory</h2>
        <article>
            <p>
                Click "Add" to fetch staff data from the server:
                <button id="callServer" onClick ={fetchResults} value="Calls from the server">Add</button>
            </p>
            <table>
                <caption>Staff Profile</caption>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name and Email</th>
                    <th>Telephone</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                {results.map((individual, index) => (
                            <StaffRow individual={individual} key={index} />
                        ))}
                </tbody>
              </table>
        </article>
        </>
    );

}

export default StaffPage;