import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../styles/Github.css";

function Github() {
  return (
    <div className="github">
        <div className="github_text">
            <h2>Github <span>Calendar</span> </h2>
        </div>
      <div className="cal">
        <GitHubCalendar username="sonuprasad66" />
      </div>
    </div>
  );
}

export default Github;
