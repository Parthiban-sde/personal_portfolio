import { ArrowDown, Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 perspective">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-rotate opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl animate-float-up opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-400/30 rounded-full mb-6 animate-scale-up hover:animate-pulse-glow transition-all duration-300">
              <Code2 className="w-4 h-4 text-cyan-400 animate-float-bounce" />
              <span className="text-sm text-cyan-300 font-semibold">Computer Science Engineer</span>
            </div>
          </div>

          <div className="perspective mb-8">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 transform transition-all duration-500 hover:from-cyan-200 hover:via-blue-200 hover:to-teal-200" style={{ textShadow: '0 0 30px rgba(0, 188, 212, 0.3)' }}>
              Parthiban R
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200 leading-relaxed font-light tracking-wide">
            Building innovative solutions with <span className="text-cyan-300 font-semibold">AI</span>, <span className="text-blue-300 font-semibold">Machine Learning</span> & <span className="text-teal-300 font-semibold">Modern Web</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
            <a
              href="mailto:ramparthipan2000@gmail.com"
              className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-semibold">Get In Touch</span>
            </a>

            <a
              href="https://linkedin.com/in/parthiban-r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-cyan-300" />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="tel:+919894966090"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:border-teal-400/50 group"
            >
              <Phone className="w-5 h-5 group-hover:text-teal-300" />
              <span className="font-semibold">+91 98949 66090</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-8 animate-fade-in-up animation-delay-600">
            <div className="relative p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:from-cyan-300 group-hover:to-blue-300">8.48</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">CGPA</div>
              </div>
            </div>
            <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl border border-blue-400/20 backdrop-blur-lg hover:border-blue-400/50 transition-all duration-300 hover:scale-110 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 group-hover:from-blue-300 group-hover:to-teal-300">4+</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">Projects</div>
              </div>
            </div>
            <div className="relative p-6 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl border border-teal-400/20 backdrop-blur-lg hover:border-teal-400/50 transition-all duration-300 hover:scale-110 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:from-teal-300 group-hover:to-emerald-300">15+</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
}
