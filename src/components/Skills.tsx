import { Code2, Database, Brain, Palette, Users, Zap, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'cyan',
      skills: ['C/C++', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL']
    },
    {
      title: 'Web Technologies',
      icon: Palette,
      color: 'blue',
      skills: ['HTML', 'React', 'Node.js', 'Tailwind CSS']
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      color: 'teal',
      skills: ['Deep Learning', 'Data Structures', 'Machine Learning']
    },
    {
      title: 'Database & Systems',
      icon: Database,
      color: 'emerald',
      skills: ['MySQL', 'OOPS', 'Networks']
    },
    {
      title: 'Professional Skills',
      icon: Users,
      color: 'cyan',
      skills: ['Leadership', 'Communication', 'Teamwork', 'Documentation', 'Finance Handling']
    },
    {
      title: 'Personal Attributes',
      icon: Zap,
      color: 'blue',
      skills: ['Problem Solving', 'Adaptability', 'Creativity', 'Self Discipline', 'Work Ethic', 'Self Motivation']
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string; glow: string }> = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-400/50',
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/20'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-400/50',
      text: 'text-blue-400',
      gradient: 'from-blue-500 to-teal-500',
      glow: 'shadow-blue-500/20'
    },
    teal: {
      bg: 'bg-teal-500/10',
      border: 'border-teal-400/50',
      text: 'text-teal-400',
      gradient: 'from-teal-500 to-emerald-500',
      glow: 'shadow-teal-500/20'
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-400/50',
      text: 'text-emerald-400',
      gradient: 'from-emerald-500 to-cyan-500',
      glow: 'shadow-emerald-500/20'
    }
  };

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-down">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-float-bounce" />
              <span className="text-cyan-400 font-semibold text-lg">My Expertise</span>
              <Sparkles className="w-6 h-6 text-cyan-400 animate-float-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 animate-fade-in-up">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full animate-pulse-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const colors = colorMap[category.color];
              const Icon = category.icon;

              return (
                <div
                  key={index}
                  className="group relative perspective"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/50 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl overflow-hidden h-full transform hover:scale-105 hover:-rotate-y-5 preserve-3d">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>

                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative p-8 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 ${colors.bg} rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-rotate-y border border-white/10`}>
                          <Icon className={`w-7 h-7 ${colors.text} group-hover:animate-float-up`} />
                        </div>
                        <h3 className="font-bold text-white text-lg leading-tight">{category.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-3 flex-1">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-2 text-sm bg-gradient-to-br from-white/10 to-white/5 text-gray-200 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg ${colors.glow} hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10`}
                            style={{ animationDelay: `${idx * 0.05}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-cyan-400/30 text-center overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-cyan-200 transition-colors duration-300">Languages</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="group/lang cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/lang:from-cyan-300 group-hover/lang:to-blue-300 mb-3">Tamil</div>
                  <div className="text-gray-400 group-hover/lang:text-gray-300 transition-colors duration-300 font-medium">Native</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gradient-to-b from-white/10 via-white/20 to-white/10"></div>
                <div className="group/lang cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 group-hover/lang:from-blue-300 group-hover/lang:to-teal-300 mb-3">English</div>
                  <div className="text-gray-400 group-hover/lang:text-gray-300 transition-colors duration-300 font-medium">Proficient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
