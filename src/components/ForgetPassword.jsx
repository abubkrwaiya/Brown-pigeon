import React, {useState} from "react";
import {sendPasswordResetEmail, getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const sendPasswordReset = async (email) => {
    const auth = getAuth(); // Initialize auth
    try {
      await sendPasswordResetEmail(auth, email); // Send password reset email
      console.log("Password reset email sent successfully.");
      alert("Password reset email sent. Check your inbox.");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email) {
      await sendPasswordReset(email); // Call the function with the email
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium 
          rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Send Password Reset Email
        </button>
      </div>
    </form>
  );
}
