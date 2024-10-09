import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login attempt:", { email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log("Signup attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-200 via-purple-200 to-rose-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full sm:max-w-xs md:max-w-sm lg:max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register Form</h2>
        <div className="flex justify-center mb-6">
          <button
            className={`py-2 px-4 rounded-l-lg ${isLogin ? "bg-red-400 hover:bg-red-600 text-white" : "bg-gray-200"} `}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 rounded-r-lg ${!isLogin ? "bg-red-400 hover:bg-red-600 text-white" : "bg-gray-200"} `}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          {isLogin ? "Create an account" : "Already have an account?"}{" "}
          <a href="#" className="text-blue-500 hover:underline" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup now" : "Login now"}
          </a>
        </p>
      </div>
    </div>
  );
}
