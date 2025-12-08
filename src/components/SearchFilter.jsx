import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search places..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchFilter;
