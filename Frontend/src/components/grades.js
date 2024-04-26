import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './grades.css';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [gradeValue, setGradeValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    try {
      const response = await axios.get('http://localhost:3000/grades');
      setGrades(response.data);
    } catch (error) {
      console.error('Error fetching grades:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/grades', {
        studentName,
        course,
        grade: gradeValue
      });
      fetchGrades();
      setStudentName('');
      setCourse('');
      setGradeValue('');
    } catch (error) {
      console.error('Error adding grade:', error);
      setError('An error occurred while adding the grade');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/grades/:id`);
      fetchGrades();
    } catch (error) {
      console.error('Error deleting grade:', error);
      setError('An error occurred while deleting the grade');
    }
  };

  return (
    <center>
      <div>
        <h2>Grades</h2>
        <form className="grade-form" onSubmit={handleSubmit}>
          <div>
            <label>Student Name:</label>
            <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
          </div>
          <div>
            <label>Course:</label>
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
          </div>
          <div>
            <label>Grade:</label>
            <input type="text" value={gradeValue} onChange={(e) => setGradeValue(e.target.value)} required />
          </div>
          <button type="submit">Add Grade</button>
        </form>
        <br />
        {error && <div>{error}</div>}
        <table className="grade-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {grades.map(grade => (
              <tr key={grade._id}>
                <td>{grade.studentName}</td>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(grade._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default Grades;
