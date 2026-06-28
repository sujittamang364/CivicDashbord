import React, { useState } from "react";
import NavBar from "./components/NavBar";
import StatsGrid from "./components/StatsGrid";
import SectionHeader from "./components/SectionHeader";
import Button from "./components/Button";
import IssueForm from "./components/Form";



import issues from "./data/data";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [showIssues, setShowIssues] = useState(true);

  return (
    <div>
      <NavBar className="nav"/>

      <SectionHeader
        title="A platform for reporting and tracking community issues across your city."
      />

      <StatsGrid />

      <SectionHeader
        title="Reported Issues"
        Icon={FaArrowTrendUp}
        variant="report"
        button={
          <Button
            text={showIssues ? "Hide Issues" : "Show Issues"}
            Icon={showIssues ? FaEyeSlash : FaEye}
            onClick={() => setShowIssues((prev) => !prev)}
          />
        }
      />
      <Button  text="Report issues" onClick={<IssueForm/>}/>
    </div>
  );
}

export default App;