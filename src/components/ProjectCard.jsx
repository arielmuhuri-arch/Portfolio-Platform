import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h3>
        
        <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-2xl text-gray-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all"
          >
            View Live Project
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};