import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css'; // Assuming you have a CSS file named Feedback.css for styling

function Feedback() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = { email, mobile, feedback };

    // Sending form data to backend API
    axios.post('http://vstrader-api.onrender.com/add/form', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clearing the form fields after successful submission
        setEmail('');
        setMobile('');
        setFeedback('');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="form-input"
            required
          />
          <small>Format: 123-456-7890</small>
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Feedback;
