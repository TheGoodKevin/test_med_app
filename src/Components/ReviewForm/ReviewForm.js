// src/components/ReviewForm/ReviewForm.js
import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const doctorReviews = [
    { id: 1, name: "Dr. John Doe", speciality: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", speciality: "Dermatology" },
  ];

  const [activeFormIndex, setActiveFormIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', review: '', rating: '' });
  const [submittedMessages, setSubmittedMessages] = useState({});
  const [disabledButtons, setDisabledButtons] = useState({});
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = (index) => {
    setActiveFormIndex(index);
    setFormData({ name: '', review: '', rating: '' });
    setShowWarning(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();

    const { name, review, rating } = formData;

    if (!name || !review || !rating) {
      setShowWarning(true);
      return;
    }

    setSubmittedMessages(prev => ({
      ...prev,
      [index]: `Review by ${name}: ${review} (Rating: ${rating}/5)`
    }));

    setDisabledButtons(prev => ({
      ...prev,
      [index]: true
    }));

    setShowWarning(false);
    setActiveFormIndex(null); // hide form after submit
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      <table className="review-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctorReviews.map((doc, index) => (
            <React.Fragment key={doc.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.speciality}</td>
                <td>
                  <button
                    className="feedback-button"
                    onClick={() => handleClick(index)}
                    disabled={disabledButtons[index]}
                  >
                    Click Here
                  </button>
                </td>
                <td className="review-given-cell">
                  {submittedMessages[index] && (
                    <div className="submitted-message">{submittedMessages[index]}</div>
                  )}
                </td>
              </tr>
              {activeFormIndex === index && (
                <tr>
                  <td colSpan="5">
                    <form onSubmit={(e) => handleSubmit(e, index)} className="feedback-form">
                      <h3>Give Your Review</h3>
                      {showWarning && <p className="warning">Please fill out all fields.</p>}
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label>Review:</label>
                      <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                      />
                     <label>Rating:</label>
                        <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                            key={star}
                            className={star <= formData.rating ? "filled" : ""}
                            onClick={() =>
                                setFormData((prev) => ({ ...prev, rating: star }))
                            }
                            >
                            ★
                            </span>
                        ))}
                        </div>
                      <button type="submit" className="submit-button">Submit</button>
                    </form>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;
