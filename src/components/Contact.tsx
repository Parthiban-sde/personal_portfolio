import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramparthipan2000@gmail.com',
      link: 'mailto:ramparthipan2000@gmail.com',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98949 66090',
      link: 'tel:+919894966090',
      color: 'blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
      link: null,
      color: 'teal'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/parthiban-r',
      color: 'emerald'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', gradient: 'from-cyan-500 to-blue-500' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', gradient: 'from-blue-500 to-teal-500' },
    teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', gradient: 'from-teal-500 to-emerald-500' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', gradient: 'from-emerald-500 to-cyan-500' }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300">
              Let's collaborate on innovative projects and create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = colorMap[info.color];

              const content = (
                <div className="flex items-center gap-4">
                  <div className={`p-4 ${colors.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className={`font-semibold ${colors.text} flex items-center gap-2`}>
                      {info.value}
                      {info.link && <ExternalLink className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              );

              return info.link ? (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-white/10"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl border border-cyan-400/30">
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:ramparthipan2000@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-gray-400">
        <p>&copy; 2025 Parthiban R. Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
}
