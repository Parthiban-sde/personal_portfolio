import { ExternalLink, Award, Shield, Building2, Users, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TEV-STT: Text-Guided Expressive Video Generation',
      period: 'Nov 2024 - Apr 2025',
      badge: 'Published',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/50',
      description: 'Spatio-Temporal Transformer model for generating realistic facial landmark deformations from textual descriptions.',
      technologies: ['Deep Learning', 'CLIP', 'Transformer', 'FaceVid2Vid'],
      highlights: [
        'Published in 2nd International Conference on Computing and Data Science (ICCDS), 2025',
        'Utilized CLIP-based text embeddings aligned with spatio-temporal landmark representations',
        'Employed FaceVid2Vid for high-quality facial motion generation'
      ],
      icon: Award,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Phishing URL Detection',
      period: 'Feb 2024 - Apr 2024',
      badge: 'AI/ML',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-400/50',
      description: 'Hybrid deep learning model for detecting phishing URLs through advanced methodologies.',
      technologies: ['Python', 'VAE', 'ResNeXt', 'GRU', 'CNN', 'RNN'],
      highlights: [
        'Developed hybrid model leveraging Variational Autoencoder for data augmentation',
        'Implemented ResNeXt-GRU architecture for effective classification',
        'Enhanced feature extraction for phishing and legitimate URL detection'
      ],
      icon: Shield,
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Hostel Management System',
      period: 'May 2023 - Jun 2023',
      badge: 'Full Stack',
      badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-400/50',
      description: 'Web-based application for hostel administrators to manage operations efficiently.',
      technologies: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
      highlights: [
        'Designed comprehensive system for student records and room assignments',
        'Implemented attendance tracking and management features',
        'Built with modern web technologies for optimal performance'
      ],
      icon: Building2,
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Student Information Management System',
      period: 'Feb 2022 - Jun 2022',
      badge: 'Web App',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/50',
      description: 'Web application allowing teachers to manage student records and students to view their information.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      highlights: [
        'Enables management of marks, attendance, and student information',
        'Provides student portal for viewing personal records',
        'Implemented secure authentication and role-based access'
      ],
      icon: Users,
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-gradient-to-tl from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-down">
              <Sparkles className="w-6 h-6 text-blue-400 animate-float-bounce" />
              <span className="text-blue-400 font-semibold text-lg">Featured Work</span>
              <Sparkles className="w-6 h-6 text-blue-400 animate-float-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 animate-fade-in-up">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full animate-pulse-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group relative perspective h-full"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800 via-slate-800/70 to-slate-900 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:shadow-2xl overflow-hidden h-full transform hover:scale-105 preserve-3d group-hover:animate-pulse-glow">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-2xl`}></div>

                    <div className={`absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 group-hover:animate-float-up`}></div>

                    <div className="relative p-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 bg-gradient-to-br ${project.gradient} bg-opacity-15 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:animate-rotate-y border border-white/20`}>
                          <Icon className="w-7 h-7 text-white group-hover:animate-float-bounce" />
                        </div>
                        <span className={`px-4 py-2 text-xs font-bold rounded-full border backdrop-blur-sm ${project.badgeColor} group-hover:scale-110 transition-transform duration-300`}>
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-all duration-300 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-400 mb-6 font-medium">{project.period}</p>

                      <p className="text-gray-300 mb-8 leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-xs bg-gradient-to-br from-white/10 to-white/5 text-gray-300 rounded-xl border border-white/20 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-110 font-semibold"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
