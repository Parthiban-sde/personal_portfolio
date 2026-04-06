import { Briefcase, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Head of Finance',
      organization: 'Student Association and Arts Society',
      location: 'College of Engineering Guindy, Anna University',
      period: 'Sep 2024 - July 2025',
      icon: TrendingUp,
      color: 'cyan'
    },
    {
      role: 'Secretary of Industrial Relations',
      organization: 'Computer Science and Engineering Association',
      location: 'College of Engineering Guindy, Anna University',
      period: 'July 2024 - March 2025',
      icon: Users,
      color: 'blue'
    },
    {
      role: 'Company Sergeant Major',
      organization: 'National Cadets Corps',
      location: '1 (TN) CTC NCC Army Anna University',
      period: 'Nov 2021 - March 2024',
      icon: Award,
      color: 'teal',
      achievement: 'Best Cadet Award by Honorable Vice Chancellor of Anna University'
    },
    {
      role: 'Provision In-Charge',
      organization: 'Engineering College Hostels',
      location: 'Anna University, Chennai',
      period: 'Sept 2023 - July 2023',
      icon: Briefcase,
      color: 'emerald'
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-400/50', text: 'text-cyan-400', gradient: 'from-cyan-500 to-blue-500' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-400/50', text: 'text-blue-400', gradient: 'from-blue-500 to-teal-500' },
    teal: { bg: 'bg-teal-500/10', border: 'border-teal-400/50', text: 'text-teal-400', gradient: 'from-teal-500 to-emerald-500' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-400/50', text: 'text-emerald-400', gradient: 'from-emerald-500 to-cyan-500' }
  };

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-down">
              <Sparkles className="w-6 h-6 text-teal-400 animate-float-bounce" />
              <span className="text-teal-400 font-semibold text-lg">Professional Journey</span>
              <Sparkles className="w-6 h-6 text-teal-400 animate-float-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 animate-fade-in-up">
              Experience & Leadership
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full animate-pulse-glow"></div>
          </div>

          {/* Current Role — Thirdwave Full-time */}
          <div className="mb-8 group relative p-10 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-3xl border border-cyan-400/30 shadow-2xl overflow-hidden hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up" />

            {/* Currently Here badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-300 font-semibold">Currently Here</span>
            </div>

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl group-hover:scale-125 group-hover:animate-rotate-y transition-all duration-500 border border-white/20 flex-shrink-0">
                <Briefcase className="w-10 h-10 text-cyan-300 group-hover:animate-float-bounce" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors duration-300">Software Engineer</h3>
                <p className="text-xl text-cyan-300 font-semibold mb-1">株式会社サードウェーブ (Thirdwave)</p>
                <p className="text-gray-400 mb-1">Full-time · Oct 2025 – Present · 7 mos</p>
                <p className="text-gray-500 mb-6 text-sm">Tokyo, Japan</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Full Stack AI Engineer &amp; LLM Engineer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Building intelligent systems with Large Language Models (LLM) &amp; Artificial Intelligence</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['LLM', 'AI', 'Full Stack', 'React', 'Python'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role — Thirdwave Internship */}
          <div className="mb-20 group relative p-10 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-3xl border border-blue-400/20 shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up" />

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="p-6 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl group-hover:scale-125 group-hover:animate-rotate-y transition-all duration-500 border border-white/20 flex-shrink-0">
                <Briefcase className="w-10 h-10 text-blue-300 group-hover:animate-float-bounce" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">Software Engineer Intern</h3>
                <p className="text-xl text-blue-300 font-semibold mb-1">株式会社サードウェーブ (Thirdwave)</p>
                <p className="text-gray-400 mb-1">Internship · May 2025 – Sep 2025 · 5 mos</p>
                <p className="text-gray-500 mb-6 text-sm">Chennai, Tamil Nadu, India</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Full Stack AI Engineer Internship &amp; Learning Japanese</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Worked on AI-powered full stack solutions while developing Japanese language proficiency</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['AI', 'Japanese', 'Full Stack', 'Internship'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-400/30 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Qwixpert Internship */}
          <div className="mb-20 group relative p-10 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-3xl border border-teal-400/20 shadow-2xl overflow-hidden hover:shadow-teal-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute -top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up" />

            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="p-6 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl group-hover:scale-125 group-hover:animate-rotate-y transition-all duration-500 border border-white/20 flex-shrink-0">
                <Briefcase className="w-10 h-10 text-teal-300 group-hover:animate-float-bounce" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-teal-200 transition-colors duration-300">Data Analyst Intern</h3>
                <p className="text-xl text-teal-300 font-semibold mb-1">Qwixpert Consulting</p>
                <p className="text-gray-400 mb-1">Internship · March 2025 – May 2025 · 3 mos</p>
                <p className="text-gray-500 mb-6 text-sm">Bangalore, Karnataka, India</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Worked in Data Analysis and Product Development area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Learned how data models support business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1.5 font-bold">→</span>
                    <span className="group-hover:text-gray-200 transition-colors">Helped develop models based on customer needs through business analysis methods</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['Data Analysis', 'Product Development', 'Business Analysis'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-400/30 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-bold text-white">Leadership Roles</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => {
                const colors = colorMap[exp.color];
                const Icon = exp.icon;

                return (
                  <div
                    key={index}
                    className="group relative perspective h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative p-8 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl overflow-hidden h-full transform hover:scale-105 preserve-3d">
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>

                      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-float-up`}></div>

                      <div className="relative">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`p-4 ${colors.bg} rounded-xl group-hover:scale-110 group-hover:animate-rotate-y transition-all duration-300 border border-white/10`}>
                            <Icon className={`w-7 h-7 ${colors.text} group-hover:animate-float-bounce`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg mb-1 group-hover:text-cyan-200 transition-colors">{exp.role}</h4>
                            <p className={`text-sm ${colors.text} font-semibold`}>{exp.organization}</p>
                          </div>
                        </div>

                        <div className="ml-16">
                          <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
                          <p className="text-xs text-gray-500 mb-4">{exp.period}</p>
                          {exp.achievement && (
                            <div className="p-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl border-l-4 border-teal-400 group-hover:border-teal-300 transition-colors">
                              <p className="text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors">{exp.achievement}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
