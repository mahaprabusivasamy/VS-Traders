import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch form submissions from backend API when component mounts
    axios.get('https://vstrader-api.onrender.com/get/form')
      .then(response => {
        setSubmissions(response.data);
      })
      .catch(error => {
        console.error('Error fetching form submissions:', error);
      });
  }, []);

  return (
    <div>
      <h2>Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Mobile</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.email}</td>
              <td>{submission.mobile}</td>
              <td>{submission.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormSubmissions;
