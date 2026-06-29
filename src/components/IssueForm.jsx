import React, { useState } from "react";
import styles from "../styles/issueform.module.css";
import issues from "../data/data";

const categories = [
  "Roads",
  "Electricity",
  "Water Supply",
  "Garbage",
  "Street Lights",
  "Public Transport",
  "Drainage",
  "Internet",
  "Other",
];

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (formData.description.trim().length < 20) {
      newErrors.description =
        "Description must contain at least 20 characters.";
    }

    if (formData.location.trim().length < 3) {
      newErrors.location = "Please enter a valid location.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newIssue = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      description: formData.description,
      status: "Pending",
      location: formData.location,
      reportedOn: new Date().toISOString().split("T")[0],
    };

    console.log(newIssue);

    alert("Issue Reported Successfully!");

    setFormData({
      title: "",
      category: "",
      description: "",
      location: "",
    });

    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h2>Report New Issue</h2>

      <form onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
          <label>Issue Title</label>

          <input
            type="text"
            name="title"
            placeholder="Large pothole on Main Road"
            value={formData.title}
            onChange={handleChange}
          />

          {errors.title && (
            <span className={styles.error}>{errors.title}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {errors.category && (
            <span className={styles.error}>{errors.category}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>

          <textarea
            rows="6"
            name="description"
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
          />

          <small>
            {formData.description.length}/500 Characters
          </small>

          {errors.description && (
            <span className={styles.error}>{errors.description}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Location</label>

          <input
            type="text"
            name="location"
            placeholder="Downtown"
            value={formData.location}
            onChange={handleChange}
          />

          {errors.location && (
            <span className={styles.error}>{errors.location}</span>
          )}
        </div>

        <button className={styles.submitBtn}>
          Submit Issue
        </button>

      </form>
    </div>
  );
};

export default ReportIssue;