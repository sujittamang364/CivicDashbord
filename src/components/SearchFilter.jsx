import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../styles/searchfilter.module.css";
import issues from "../data/data";
import IssueCard from "./IssueCard";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.description.toLowerCase().includes(search.toLowerCase()) ||
      issue.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      issue.category === category;

    const matchesStatus =
      status === "All Status" ||
      issue.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <>
      <div className={styles.searchFilter}>
        {/* Search */}
        <div className={styles.searchBox}>
          <FiSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search issues..."
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className={styles.filterBar}>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Roads</option>
            <option>Electricity</option>
            <option>Water Supply</option>
            <option>Sanitation</option>
            <option>Public Safety</option>
          </select>

          <select
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Resolved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Issue List */}
      <div className={styles.issueList}>
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        ) : (
          <p className={styles.noResults}>No issues found.</p>
        )}
      </div>
    </>
  );
};

export default SearchFilter;