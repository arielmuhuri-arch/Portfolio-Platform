import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { ProjectCard } from './components/ProjectCard';
import { AddProjectForm } from './components/AddProjectForm';

const initialProjects = [
  {
    id: '1',
    title: "E-commerce Platform",
    description: "A modern shopping experience with seamless checkout and beautiful product displays.",
    image: "https://picsum.photos/id/1015/800/600",
    category: "Development",
    technologies: ["React", "Node.js", "Tailwind"],
    link: "https://example.com"
  },
  {
    id: '2',
    title: "Finance Dashboard",
    description: "Real-time analytics dashboard for financial institutions with interactive charts.",
    image: "https://picsum.photos/id/106/800/600",
    category: "UI/UX",
    technologies: ["TypeScript", "Recharts", "Framer Motion"],
  },
  {
    id: '3',
    title: "Brand Identity System",
    description: "Complete visual identity including logo, guidelines, and marketing materials.",
    image: "https://picsum.photos/id/201/800/600",
    category: "Branding",
    technologies: ["Figma", "Illustrator"],
  },
  {
    id: '4',
    title: "Mobile Banking App",
    description: "Intuitive mobile banking application focused on user experience and security.",
    image: "https://picsum.photos/id/180/800/600",
    category: "Mobile App",
    technologies: ["React Native", "Firebase"],
  }
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [projects, searchTerm]);

  const handleAddProject = (newProject) => {
    setProjects([{
      ...newProject,
      id: Date.now().toString()
    }, ...projects]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar onAddClick={() => setShowForm(true)} />

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-blue-600">✦</span>
            <span className="text-sm font-medium text-gray-600">Creative Agency Portfolio</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our Latest Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of digital experiences crafted with passion and precision.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <p className="text-2xl text-gray-400 mb-2">No matches found</p>
            <p className="text-gray-500">Try adjusting your search term</p>
          </div>
        )}
      </main>

      {showForm && (
        <AddProjectForm
          onAdd={handleAddProject}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;