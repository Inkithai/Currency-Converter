import React from "react";

const RegisterForm = ({ onSubmit, formData, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="bg-purple-100 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-purple-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-purple-700">
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
        <label htmlFor="mobile" className="block text-sm font-medium text-purple-700">
          Mobile:
        </label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-purple-700">
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
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-700">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;