
import React, { useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function StudentInfo() {

  const location = useLocation();
  const { student } = location.state;
  console.log(student.student);
  const contentRef = useRef(null);

  const handleGeneratePDF = () => {
    const element = contentRef.current;
    html2pdf()
      .from(element)
      .save();
  };
  return (
    <div className="mt-20  min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div  ref={contentRef} className="mt-4 p-4 bg-gray-100 border border-gray-300 w-full rounded">
        <div className="certificate-container relative px-2 py-2 border-2 border-black z-10">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5COd6R-c57QF6IyhArJm86IewAV2tvbWNNAnvbTlJqg&s" alt="iubat logo" className="absolute top-0 left-0 m-4 w-12 h-12" />
      {/* <img src="" alt="meow" className="absolute top-0 right-0 m-4" /> */}
      
      <h2 className="text-3xl w-full font-bold mb-6 text-center uppercase">Certificate of Completion</h2>
      <div className="university-name text-lg text-center mb-4 font-medium">
        International University of Business Agriculture and Technology
      </div>
      <div className="certificate-body shadow-full rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-lg italic mb-2 text-center">
          This is to certify that <span className="font-semibold">{student.student.name}</span> has successfully completed the requirements for the degree of Bachelor of Science in <span className="font-semibold">{student.student.Department}</span> with a CGPA of <span className="font-semibold">{student.student.CGPA}</span> in the year <span className="font-semibold">{student.student.Passing_year}</span>.
        </p>
      </div>
    </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-1 px-3 mr-3 rounded" onClick={handleGeneratePDF} >Download Certificate</button>
        <NavLink to="/login"  className="bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-1 px-3 rounded">Logout</NavLink>
      </div>
    </div>
  );
}

export default StudentInfo;
