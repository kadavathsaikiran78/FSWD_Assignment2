import React from 'react';
const StudentDetails = ({ student }) => {
  const details = { ...student };
  const message = `Student Name: ${details.name}`;
  return (
    <div>
      <h2>Student Details</h2>
      <p>{message}</p>
      <p>Roll Number: {details.rollNo}</p>
      <p>Branch: {details.branch}</p>
      <p>Year: {details.year}</p>
    </div>
  );
};

const StudentApp = () => {
  const student = {
    name: "K. Sai Kiran",
    rollNo: "1602-24-733-041",
    branch: "CSE(A)",
    year: "3rd Year"
  };
  return (
    <div>
      <StudentDetails student={{ ...student }} />
    </div>
  );
};

export default StudentApp;
