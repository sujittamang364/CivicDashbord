import React, { useState } from "react";
import NavBar from "./components/NavBar";
import StatsGrid from "./components/StatsGrid";
import SectionHeader from "./components/SectionHeader";
import Button from "./components/Button";
import IssueCard from "./components/IssueCard";
import { IoCreateOutline } from "react-icons/io5";
import issues from "./data/data";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReportIssue from "./components/IssueForm";
import SearchFilter from "./components/SearchFilter";
const App = () => {
  const [showIssues, setShowIssues] = useState(true);
  const [showReportForm, setShowReportForm] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");


  return (
    <div>
      <NavBar />

      <SectionHeader title="A platform for reporting and tracking community issues across your city." />

      <StatsGrid />

      <SectionHeader
        title="Reported Issues"
        Icon={FaArrowTrendUp}
        variant="report"
        reportbtn={
          <Button
            text="Report Issues"
            Icon={IoCreateOutline}
            onClick={() => setShowReportForm(true)}
          />
        }
        button={
          <Button
            text={showIssues ? "Hide Issues" : "Show Issues"}
            Icon={showIssues ? FaEyeSlash : FaEye}
            onClick={() => setShowIssues((prev) => !prev)}
          />
        }
      />
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        />

      {showIssues && (
        <div className="issue-grid">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
      {showReportForm && (
        <div className="modalOverlay" onClick={() => setShowReportForm(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeBtn"
              onClick={() => setShowReportForm(false)}
            >
              ✕
            </button>

            <ReportIssue />
          </div>
        </div>
      )}
    
    </div>
  );
};

export default App;
