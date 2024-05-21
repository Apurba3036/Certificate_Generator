import React from 'react';

const About = () => {
    return (
        <div className="bg-blue-50 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-4">
              Welcome to our Certificate Generator Web App! We are a team of dedicated developers
              passionate about providing a seamless experience for the students of IUBAT to generate
              their certificates with ease.
            </p>
            <p className="text-lg mb-4">
              Our goal is to simplify the certificate generation process for students, ensuring that
              they can access their certificates conveniently using their login name and ID.
            </p>
            <p className="text-lg mb-4">
              If you have any questions, suggestions, or feedback, please feel free to reach out to us.
              We are committed to continuously improving our platform to better serve the IUBAT community.
            </p>
            <p className="text-lg mb-4">
              Thank you for choosing our Certificate Generator Web App. We appreciate your support!
            </p>
            <div className="text-center">
              
                <img src="https://i.ytimg.com/vi/j1z99pBc-do/maxresdefault.jpg" alt="Certificate" className="w-32 h-22 mx-auto" />
              
            </div>
          </div>
        </div>
      </div>
         

    );
};

export default About;