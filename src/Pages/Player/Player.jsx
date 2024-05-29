import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { name, email, comment };
    setSubmittedData([...submittedData, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };

  const navigate = useNavigate();

  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzU3NWVhMTYzZjAxMjgxNzZjYTc3MTUwZmQ3Yzc2YiIsInN1YiI6IjY2NTQ1ODRkMjRhYWUyMmQxNDA2YWNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WorRzdlbmFNe8Ofx4FCGlSYnuXqSOTjhJo788Kw246o",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>

      <div className="comment-section">
        <h1>This is a Comment Area</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">
              Name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="email">
              Email <span class="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small>Your email will not be published.</small>
          </div>
          <div className="form-group">
            <label for="comment">
              Comment <span class="required">*</span>
            </label>
            <textarea
              name="comment"
              rows="15"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        {submittedData.length > 0 && (
          <div className="submitted-data">
            <h4>Submitted Comments</h4>
            {submittedData.map((comment, index) => (
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
      </div>
    </div>
  );
};

export default Player;
