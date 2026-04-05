import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-down">
              <Sparkles className="w-6 h-6 text-blue-400 animate-float-bounce" />
              <span className="text-blue-400 font-semibold text-lg">Who I Am</span>
              <Sparkles className="w-6 h-6 text-blue-400 animate-float-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 animate-fade-in-up">
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full animate-pulse-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I am a dedicated <span className="text-cyan-300 font-semibold">Computer Science Engineer</span> with a strong foundation in software development
                and data analysis. My passion for <span className="text-blue-300 font-semibold">AI and machine learning</span> drives me to build innovative web
                applications and data-driven solutions.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Through academic projects and continuous self-learning, I've strengthened my expertise in
                emerging technologies. I am eager to collaborate, grow, and apply these technologies to solve
                real-world challenges.
              </p>

              <div className="flex items-center gap-3 text-gray-300 group cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:scale-110 group-hover:animate-rotate-y transition-all duration-300">
                  <MapPin className="w-6 h-6 text-cyan-400 group-hover:animate-float-bounce" />
                </div>
                <span className="text-lg font-medium">Chennai, India</span>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <div className="group relative perspective">
                <div className="relative p-8 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl overflow-hidden transform hover:scale-105 preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up"></div>

                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 group-hover:animate-rotate-y transition-all duration-300 border border-white/20 flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-cyan-300 group-hover:animate-float-bounce" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg group-hover:text-cyan-200 transition-colors">Education</h3>
                      <p className="text-gray-300 font-medium">B.E. Computer Science & Engineering</p>
                      <p className="text-sm text-gray-400">College of Engineering Guindy, Anna University</p>
                      <p className="text-sm text-cyan-400 font-bold mt-3 group-hover:text-cyan-300 transition-colors">CGPA: 8.48</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative perspective">
                <div className="relative p-8 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl overflow-hidden transform hover:scale-105 preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up"></div>

                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl group-hover:scale-110 group-hover:animate-rotate-y transition-all duration-300 border border-white/20 flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-blue-300 group-hover:animate-float-bounce" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg group-hover:text-blue-200 transition-colors">Experience</h3>
                      <p className="text-gray-300 font-medium">Data Analyst Intern</p>
                      <p className="text-sm text-gray-400">Qwixpert Consulting, Bangalore</p>
                      <p className="text-sm text-blue-400 font-bold mt-3 group-hover:text-blue-300 transition-colors">March 2025 - May 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative perspective">
                <div className="relative p-8 bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-2xl border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl overflow-hidden transform hover:scale-105 preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-float-up"></div>

                  <div className="relative flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 group-hover:animate-rotate-y transition-all duration-300 border border-white/20 flex-shrink-0">
                      <Award className="w-7 h-7 text-teal-300 group-hover:animate-float-bounce" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg group-hover:text-teal-200 transition-colors">Achievement</h3>
                      <p className="text-gray-300 font-medium">Best Cadet Award</p>
                      <p className="text-sm text-gray-400">NCC Army, Anna University</p>
                      <p className="text-sm text-teal-400 font-bold mt-3 group-hover:text-teal-300 transition-colors">Company Sergeant Major</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
