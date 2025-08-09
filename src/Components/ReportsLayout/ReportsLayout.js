// src/Components/ReportsLayout/ReportsLayout.js
import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  // Demo rows; swap with real data later if you like
  const rows = [
    { doctorName: "Dr. John Doe", speciality: "Cardiology", file: "/patient_report.pdf" },
    { doctorName: "Dr. Jane Smith", speciality: "Dermatology", file: "/patient_report.pdf" },
  ];

  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports</h2>

      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial<br/>Number</th>
            <th>Doctor<br/>Name</th>
            <th>Doctor<br/>Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td className="doctor-name">{r.doctorName}</td>
              <td>{r.speciality}</td>
              <td>
                <a
                  className="report-btn"
                  href={r.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View</span><span>Report</span>
                </a>
              </td>
              <td>
                <a className="report-btn" href={r.file} download>
                  <span>Download</span><span>Report</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
