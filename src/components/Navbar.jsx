import { Plus } from 'lucide-react';

export const Navbar = ({ onAddClick }) => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            //
          </div>
          <h1 className="text-2xl font-semibold">Portfolio</h1>
        </div>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>
    </nav>
  );
};