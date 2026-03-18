import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Building2, Settings, Zap, ArrowRight, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'portfolio';

// --- Components ---

const Header = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', id: 'home' },
    { name: 'INVESTMENT STRATEGY', id: 'home' },
    { name: 'PORTFOLIO', id: 'portfolio' },
    { name: 'MEDIA', id: 'home' },
    { name: 'CONTACT', id: 'home' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-dark/95 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setPage('home')}
        >
          <div className="w-8 h-8 border-2 border-gold flex items-center justify-center font-serif text-gold font-bold">T</div>
          <span className="text-white font-serif tracking-widest text-lg">TRIDENT CAPITAL</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setPage(link.id as Page)}
              className={`text-xs tracking-widest transition-colors hover:text-gold ${
                currentPage === link.id && link.id === 'portfolio' ? 'text-gold border-b border-gold pb-1' : 'text-white/80'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setPage(link.id as Page);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white/80 text-sm tracking-widest text-left hover:text-gold"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920" 
          alt="Cityscape" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-serif leading-tight mb-8"
        >
          Capital, directed with institutional discipline and private-market agility.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A private capital firm focused on building long-term value through real assets, scalable operating businesses, and future-focused industries.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-3 bg-gold hover:bg-gold-dark text-white text-xs tracking-widest transition-all uppercase font-medium">
            View Strategy
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border border-white/40 hover:border-white text-white text-xs tracking-widest transition-all uppercase font-medium">
            Make an Enquiry
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const CoreSectors = () => {
  const sectors = [
    {
      icon: <Building2 className="text-gold" size={32} />,
      title: 'REAL ASSETS',
      desc: 'Strategic land holdings, development sites, income-producing property, and hospitality assets.'
    },
    {
      icon: <Settings className="text-gold" size={32} />,
      title: 'OPERATING BUSINESSES',
      desc: 'Construction platforms, infrastructure services, and vertically integrated development companies.'
    },
    {
      icon: <Zap className="text-gold" size={32} />,
      title: 'FUTURE INDUSTRIES',
      desc: 'Energy transition assets, commodity platforms, and digital infrastructure positioned at the intersection of structural demand.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-gold text-sm tracking-[0.3em] font-medium mb-16 uppercase">Core Sectors</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 shadow-sm border-b-4 border-gold/20 hover:border-gold transition-all"
            >
              <div className="mb-6">{sector.icon}</div>
              <h3 className="text-lg font-serif tracking-widest mb-4">{sector.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pillars = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6 uppercase">
              Building value across<br />three core pillars
            </h2>
            <p className="text-slate-600 leading-relaxed mb-12 max-w-lg">
              Trident Capital is a firm focused on building long-term value and businesses operating commercially. Strategic land holdings, development sites, income-producing property, and hospitality assets.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <span className="block text-4xl font-serif text-gold/40 mb-2">01</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Construction platforms, infrastructure services, and vertically integrated development companies.
                </p>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold/40 mb-2">02</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Energy transition assets, commodity platforms, and digital infrastructure positioned at the intersection of structural demand.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 lg:p-16">
            <div className="grid sm:grid-cols-2 gap-12 mb-16">
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">20+</span>
                <p className="text-xs tracking-widest text-slate-500 uppercase">Energy transition investments and focus sectors</p>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">3</span>
                <p className="text-xs tracking-widest text-slate-500 uppercase">Decades of combined experience in private markets</p>
              </div>
            </div>

            <h3 className="text-2xl font-serif mb-6 uppercase">A disciplined model built on operational expertise</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Trident Capital firm focused on building long-term value, and integrated platforms, scalable operating services, and family sector of operational compasses.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trident Capital firm was established to provide an operational expertise in emerging markets across various sectors, and vertically integrated services in commodity transition and energy transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Strategic Land Portfolio',
      location: 'Malaysia',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Renewable Energy Transition',
      location: 'Southeast Asia',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Luxury Hospitality Assets',
      location: 'Kuala Lumpur',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Infrastructure & Logistics',
      location: 'Singapore',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Guest Experience',
      location: 'Kuala Lumpur',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Transportation & Logistics',
      location: 'Singapore',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Investments built for enduring value.</h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A growing portfolio of real assets and operating businesses across key sectors and geographies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[16/9] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{project.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-navy py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-8">Interested in our investment approach?</h2>
          <button className="px-10 py-4 bg-gold hover:bg-gold-dark text-white text-xs tracking-widest uppercase font-medium transition-all">
            Submit an Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-gold flex items-center justify-center font-serif text-gold font-bold">T</div>
              <span className="font-serif tracking-widest text-lg">TRIDENT CAPITAL</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Investment Strategy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Media</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Sectors</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-gold transition-colors">Real Assets</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Operating Businesses</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Future Industries</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Guest Experience</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs text-white/40 leading-relaxed">
              © 2026 Trident Capital. All rights reserved.<br />
              Private Capital Management Industry.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 tracking-widest uppercase">Trident Capital - Excellence in Private Markets</p>
          <div className="flex gap-6 text-[10px] text-white/30 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen">
      <Header currentPage={page} setPage={setPage} />
      
      <main>
        {page === 'home' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <CoreSectors />
            <Pillars />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PortfolioPage />
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
