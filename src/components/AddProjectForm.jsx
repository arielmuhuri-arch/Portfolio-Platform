import { useState } from 'react';
import { X } from 'lucide-react';

export const AddProjectForm = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/800/600`,
    category: 'Web Design',
    technologies: '',
    link: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Add New Project</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={28} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl"
                >
                  <option>Web Design</option>
                  <option>Mobile App</option>
                  <option>Branding</option>
                  <option>UI/UX</option>
                  <option>Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Link (optional)</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl"
                  placeholder="https://"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Technologies <span className="text-gray-500 text-xs">(comma separated)</span>
              </label>
              <input
                type="text"
                required
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="React, Tailwind, JavaScript"
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Add to Portfolio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};