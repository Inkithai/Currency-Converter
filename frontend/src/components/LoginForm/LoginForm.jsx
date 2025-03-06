import React from "react";

const LoginForm = ({ onSubmit, formData, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="bg-purple-100 p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;