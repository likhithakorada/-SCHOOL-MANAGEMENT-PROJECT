import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './academics.css';

const AcademicsForm = () => {
  const [academics, setAcademics] = useState({
    className: '',
    gradeLevel: '',
    section: '',
    teacherAssigned: '',
    studentId: '',
    classId: '',
    academicYear: '',
    teacherName: '',
    subjectExpertise: '',
    contactInformation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademics({ ...academics, [name]: value });
  };

  const handleTimeTableChange = (e, index, type) => {
    const newTimeTable = { ...academics.timeTable };
    newTimeTable[type][index] = e.target.value;
    setAcademics({ ...academics, timeTable: newTimeTable });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/academics/academics', academics);
      alert('Academic record registered successfully');
      setAcademics({
        className: '',
        gradeLevel: '',
        section: '',
        teacherAssigned: '',
     
        studentId: '',
        classId: '',
        academicYear: '',
        teacherName: '',
        subjectExpertise: '',
        contactInformation: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register academic record. Please try again.');
    }
  };

  return (
    <div className="academics-form">
      <h2>Academics Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Class Name:</label>
          <input type="text" name="className" value={academics.className} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Grade Level:</label>
          <input type="text" name="gradeLevel" value={academics.gradeLevel} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Section:</label>
          <input type="text" name="section" value={academics.section} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Teacher Assigned:</label>
          <input type="text" name="teacherAssigned" value={academics.teacherAssigned} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Student ID:</label>
          <input type="text" name="studentId" value={academics.studentId} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Class ID:</label>
          <input type="text" name="classId" value={academics.classId} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Academic Year:</label>
          <input type="text" name="academicYear" value={academics.academicYear} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Teacher Name:</label>
          <input type="text" name="teacherName" value={academics.teacherName} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Subject Expertise:</label>
          <input type="text" name="subjectExpertise" value={academics.subjectExpertise} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Contact Information:</label>
          <input type="text" name="contactInformation" value={academics.contactInformation} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AcademicsForm;
