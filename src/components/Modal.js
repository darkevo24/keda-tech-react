import { useState } from "react";

export default function Modal({ onClose }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login and password to server for authentication
    // ...

    // Clear input fields
    setLogin("");
    setPassword("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login" className="block font-medium text-gray-700 mb-2">
            Login
          </label>
          <input
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-4 w-full"
          />

          <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-lg px-3 py-2 mb-4 w-full"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <button onClick={onClose} className="absolute top-0 right-0 p-2">
          <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
