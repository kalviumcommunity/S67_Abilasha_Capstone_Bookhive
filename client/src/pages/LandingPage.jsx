// src/LandingPage.js

import React, { useState } from "react";

const LandingPage = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);  // Show/Hide SignUp Form
  const [signUpText, setSignUpText] = useState("Sign Up");  // Text on the button
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  }); // Manage form data

  // Toggle the visibility of the sign-up form
  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setSignUpText(isSignUpOpen ? "Sign Up" : "Close Sign Up");  // Toggle button text
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed up with data:", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
    }); // Reset form data after submission
    toggleSignUp(); // Close the signup form after submission
  };

  return (
    <div className="bg-gray-100 text-center py-10 px-4">
      <header className="bg-pink-100 py-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to BookHive</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your virtual book club for discovering, discussing, and reviewing books.
        </p>
      </header>

      <section className="mt-12 flex justify-center gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
          <h3 className="text-xl font-semibold text-gray-800">Book Discovery</h3>
          <p className="text-gray-600 mt-2">
            Find books by genre and discover your next great read.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
          <h3 className="text-xl font-semibold text-gray-800">Virtual Book Clubs</h3>
          <p className="text-gray-600 mt-2">
            Join a community of readers in our exclusive virtual book clubs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
          <h3 className="text-xl font-semibold text-gray-800">Reviews & Discussions</h3>
          <p className="text-gray-600 mt-2">
            Share your thoughts and read others' reviews on the latest books.
          </p>
        </div>
      </section>

      <section className="mt-12 bg-pink-100 py-10 rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800">Join BookHive Today!</h2>
        <p className="text-lg text-gray-600 mt-4">
          Start discovering books, sharing reviews, and meeting like-minded readers.
        </p>
        <button
          className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-xl hover:bg-pink-400 transition-all duration-300"
          onClick={toggleSignUp}
        >
          {signUpText} {/* Button text dynamically changes */}
        </button>
      </section>

      {isSignUpOpen && (
        <section className="mt-10 bg-white p-6 rounded-xl shadow-lg w-1/3 mx-auto">
          <h3 className="text-xl font-semibold text-gray-800">Sign Up</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-xl"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-xl"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-pink-400 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      )}

      <footer className="mt-16 text-gray-600">
        <p>&copy; 2025 BookHive. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
