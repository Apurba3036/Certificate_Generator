import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
          <div className="max-w-3xl mx-auto bg-white mt-20 rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <p><strong>Address:</strong> 4 Embankment Drive Road, Sector-10 (Off Dhaka-Ashulia Road), Uttara Model Town, Dhaka-1230, Bangladesh.</p>
            </div>
            <div className="mb-4">
              <p><strong>Phone:</strong> 55091801, 55091802, 55091803, 55091804, 55091805</p>
            </div>
            <div className="mb-4">
              <p><strong>Mobile:</strong> +88 01714014933, 016164014933, 01974014933, 01842014933, 01511014933</p>
            </div>
            <div className="mb-4">
              <p><strong>Fax:</strong> (880-2) 5895 2625</p>
            </div>
            <div>
              <p><strong>Email:</strong> info@iubat.edu</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;