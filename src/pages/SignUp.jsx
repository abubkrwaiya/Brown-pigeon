import React from "react";
import LoginForm from "../components/LoginForm";
import PageHeader from "../components/PageHeader";

export default function SignUp() {
  return (
    <>
      <PageHeader
        title="Create an account with Brown Pigeon"
        subtitle="Be part of brown pigeon Users "
      />{" "}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>

          <LoginForm />

          {/* Footer */}
        </div>
      </div>
    </>
  );
}

// import React, {useState} from "react";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div>
//       <form>
//         <label>User Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">password</label>
//         <input
//           type="password"
//           name="email"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }
