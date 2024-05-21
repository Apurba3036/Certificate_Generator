import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [studentID, setStudentID] = useState('');
  const [studentName,setStudentName]=useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/studentinfo?ID=${studentID}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.data) {
        navigate('/studentinfo', { state: { student: response.data } });
      } else {
        setMessage('Student ID not found.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white mt-14 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700">Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={studentName}
              onChange={handleStudentNameChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Student ID:</label>
            <input
              type="text"
              name="studentID"
              value={studentID}
              onChange={handleStudentIDChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        {message && (
          <div className={`mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
