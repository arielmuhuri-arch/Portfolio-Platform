import { Search } from 'lucide-react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-md mx-auto mb-10">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={20} />
      </div>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-lg"
      />
    </div>
  );
};
// Note: Remember to remove the import of 'X' from 'lucide-react' in src/main.jsx if it's not used elsewhere.