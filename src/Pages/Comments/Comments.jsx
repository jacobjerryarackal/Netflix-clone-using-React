import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Comments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitteddata, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, comment };
    setSubmittedData([...submitteddata, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="comment-section">
        <h1>This is the Comment Section</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Comment <span className="required">*</span>
            </label>
            <textarea
              value={comment}
              rows="15"
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {submitteddata.length > 0 && (
        <div className="submitted-data">
          <h4>Submitted Comments</h4>
          {submitteddata.map((comment, index) => (
            <div key={index} className="comment">
              <p>
                <strong>Name:</strong> {comment.name}
              </p>
              <p>
                <strong>Email:</strong> {comment.email}
              </p>
              <p>
                <strong>Comment:</strong> {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Comments;
