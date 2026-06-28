import React, { useState } from "react";
import styles from "./IssueForm.module.css";

const IssueForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description || !location) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    alert("Issue Submitted!");

    handleReset();
  };

  const handleReset = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setLocation("");
    setError("");
  };

  return (
    <div className={styles.issueForm}>
      <h2>Submit New Issue</h2>

      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Roads</option>
          <option>Water Supply</option>
          <option>Electricity</option>
          <option>Sanitation</option>
          <option>Public Safety</option>
        </select>

        <textarea
          placeholder="Description"
          maxLength={200}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <small className={styles.counter}>
          {description.length}/200 characters
        </small>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className={styles.buttons}>
          <button type="submit">Submit Issue</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;