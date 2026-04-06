import { Github, Linkedin, Mail, Phone, Code2, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/parthiban-r',
    color: 'hover:text-cyan-400 hover:border-cyan-400/50',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/parthiban-r-92724a225/',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ramparthipan2000@gmail.com',
    color: 'hover:text-teal-400 hover:border-teal-400/50',
  },
  {
    icon: Phone,
    label: 'Phone',
    href: 'tel:+819081317352',
    color: 'hover:text-emerald-400 hover:border-emerald-400/50',
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 overflow-hidden border-t border-white/5">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Gradient divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6 pt-12 pb-8 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand / Tagline */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300">
                RAMAN PARTHIBAN
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Science Engineer crafting intelligent solutions with&nbsp;
              <span className="text-cyan-400 font-medium">AI</span>,&nbsp;
              <span className="text-blue-400 font-medium">Machine Learning</span>&nbsp;&amp;&nbsp;
              <span className="text-teal-400 font-medium">Modern Web</span>.
            </p>
            <p className="text-gray-500 text-sm">📍 Tokyo, Japan</p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm w-fit"
                >
                  <span className="h-px w-4 bg-gray-600 group-hover:bg-cyan-400 group-hover:w-6 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:ramparthipan2000@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 w-fit"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} RAMAN PARTHIBAN · Built with
            <Heart className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500 inline-block" />
            using React &amp; Tailwind CSS
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-200"
          >
            Back to top
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
