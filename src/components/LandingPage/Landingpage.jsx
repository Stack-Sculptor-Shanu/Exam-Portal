import React from 'react'
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
        <h1 className="text-4xl md:text-6xl font-bold">Boost Your Aptitude Skills</h1>
        <p className="mt-4 text-lg md:text-xl">Practice, Learn, and Excel in any kind of aptitude Exams</p>
        <button className="mt-3 px-3 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200">
          <Link className='mt-3 px-3 py-3' to="/login">Get started</Link>
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 md:px-20  bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
  <h2 className="text-3xl font-bold text-center">Why Choose AptiNest?</h2>
  <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
    <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold">
        <Link to="/exams">Live Exams</Link>
      </h3>
      <p className="mt-2 text-gray-600">A wide range of aptitude questions with solutions.</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold">results</h3>
      <p className="mt-2 text-gray-600">Track your progress and improve with analytics.</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold">
        <Link to="/mocktest">Mock Test</Link>
      </h3>
      <p className="mt-2 text-gray-600">Simulate real exam scenarios with full-length tests.</p>
    </div>
  </div>
</section>


      {/* Testimonials */}
      {/* <section className="bg-gray-200 py-20 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="italic">"AptiNest helped me crack my placement test with confidence! Highly recommended."</p>
            <h4 className="mt-4 font-semibold">- Rahul S.</h4>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="italic">"Great platform with a user-friendly interface and valuable questions."</p>
            <h4 className="mt-4 font-semibold">- Sneha M.</h4>
          </div>
        </div>
      </section> */}

     
    </div>
  );
};


export default Landingpage