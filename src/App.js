import React, { useState, useEffect } from 'react';

import { 

  Palette, 

  Code, 

  Target, 

  Layers, 

  ArrowRight, 

  Github, 

  Twitter, 

  Linkedin, 

  Mail, 

  Menu, 

  X, 

  ExternalLink,

  ChevronRight,

  Monitor,

  Layout,

  Cpu

} from 'lucide-react';



const App = () => {

  const [activePage, setActivePage] = useState('home');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  // Handle scroll for sticky nav styling

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const navigate = (page) => {

    setActivePage(page);

    setIsMenuOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });

  };



  // --- Components ---



  const Navbar = () => (

    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div 

          className="text-2xl font-black tracking-tighter cursor-pointer group"

          onClick={() => navigate('home')}

        >

          JAN <span className="text-[#FFD700] group-hover:text-white transition-colors">M.</span>

        </div>



        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-8 items-center">

          {['home', 'about', 'portfolio', 'services'].map((item) => (

            <button

              key={item}

              onClick={() => navigate(item)}

              className={`capitalize text-sm font-medium tracking-widest hover:text-[#FFD700] transition-colors ${activePage === item ? 'text-[#FFD700]' : 'text-white/70'}`}

            >

              {item}

            </button>

          ))}

          <button 

            onClick={() => {

              const contactSection = document.getElementById('contact');

              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });

            }}

            className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-all transform hover:scale-105"

          >

            LET'S TALK

          </button>

        </div>



        {/* Mobile Toggle */}

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>

          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>



      {/* Mobile Menu Overlay */}

      {isMenuOpen && (

        <div className="fixed inset-0 bg-[#0f0f0f] z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-bold animate-in fade-in duration-300">

          {['home', 'about', 'portfolio', 'services'].map((item) => (

            <button key={item} onClick={() => navigate(item)} className="capitalize hover:text-[#FFD700] transition-colors">

              {item}

            </button>

          ))}

          <button 

            onClick={() => { navigate('home'); setTimeout(() => document.getElementById('contact').scrollIntoView(), 100); }}

            className="text-[#FFD700] border-2 border-[#FFD700] px-8 py-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all"

          >

            CONTACT

          </button>

        </div>

      )}

    </nav>

  );



  const Footer = () => (

    <footer className="bg-[#080808] border-t border-white/5 py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="md:col-span-2">

          <div className="text-3xl font-black tracking-tighter mb-6">JAN <span className="text-[#FFD700]">M.</span></div>

          <p className="text-white/50 max-w-sm mb-8 leading-relaxed">

            Crafting digital experiences that merge high-end aesthetics with functional code. Based globally, working remotely.

          </p>

          <div className="flex space-x-4">

            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all"><Twitter size={18} /></a>

            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all"><Linkedin size={18} /></a>

            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all"><Github size={18} /></a>

          </div>

        </div>

        <div>

          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-[#FFD700]">Navigation</h4>

          <ul className="space-y-4 text-sm text-white/70">

            <li><button onClick={() => navigate('home')} className="hover:text-white">Home</button></li>

            <li><button onClick={() => navigate('portfolio')} className="hover:text-white">Work</button></li>

            <li><button onClick={() => navigate('about')} className="hover:text-white">Studio</button></li>

            <li><button onClick={() => navigate('services')} className="hover:text-white">Services</button></li>

          </ul>

        </div>

        <div>

          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-[#FFD700]">Contact</h4>

          <p className="text-sm text-white/70 mb-4 italic underline select-all">janmbapraofficial@mail.com</p>

          <p className="text-sm text-white/50">Available for new projects starting Q3 2024.</p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between text-xs text-white/30 uppercase tracking-widest">

        <p>&copy; 2024 JAN M. ALL RIGHTS RESERVED.</p>

        <p className="mt-4 md:mt-0">DESIGNED BY JAN M.</p>

      </div>

    </footer>

  );



  const ContactSection = () => (

    <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">

          HAVE A PROJECT <span className="text-[#FFD700]">IN MIND?</span>

        </h2>

        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">

          I'm currently accepting new commissions. Whether you need a brand identity or a high-performance web application, let's create something extraordinary.

        </p>

        <a 

          href="mailto:janmbapraofficial@mail.com" 

          className="inline-flex items-center space-x-4 bg-[#FFD700] text-black px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all group transform hover:scale-105"

        >

          <span>SEND A MESSAGE</span>

          <Mail className="group-hover:translate-x-1 transition-transform" />

        </a>

      </div>

    </section>

  );



  // --- Page Views ---



  const HomePage = () => (

    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* Hero Section */}

      <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">

        {/* Background Decorative Element */}

        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

        

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">

              <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />

              <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Available for Work</span>

            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">

              DESIGN THAT <span className="text-[#FFD700]">SPEAKS.</span> <br />

              WEBSITES THAT <span className="text-[#FFD700]">CONVERT.</span>

            </h1>

            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">

              Hi, I'm Jan M. A Graphic Designer & Web Developer specializing in building high-end digital identities for forward-thinking brands.

            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">

              <button 

                onClick={() => navigate('portfolio')}

                className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-white transition-all transform hover:scale-105"

              >

                <span>VIEW RECENT WORK</span>

                <ArrowRight size={20} />

              </button>

              <button 

                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}

                className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all"

              >

                <span>CONTACT ME</span>

              </button>

            </div>

          </div>

          <div className="relative hidden lg:block">

            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group">

               {/* Abstract placeholder visual */}

               <div className="relative w-2/3 h-2/3 flex items-center justify-center">

                  <div className="absolute inset-0 border-4 border-[#FFD700] rounded-full scale-75 opacity-20 group-hover:scale-90 group-hover:opacity-40 transition-all duration-1000" />

                  <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" />

                  <div className="text-8xl font-black text-[#FFD700] opacity-10 select-none">JM</div>

                  <div className="absolute bottom-10 right-10 flex space-x-2">

                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center"><Monitor size={20} /></div>

                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center"><Layout size={20} /></div>

                  </div>

               </div>

            </div>

          </div>

        </div>

      </section>



      {/* Services Preview */}

      <section className="py-24 px-6 border-y border-white/5">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6">

            <div>

              <h4 className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-xs mb-4">Core Expertise</h4>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight">CRAFTING EXCELLENCE.</h2>

            </div>

            <button onClick={() => navigate('services')} className="group flex items-center space-x-2 text-white/60 hover:text-[#FFD700] transition-colors">

              <span>EXPLORE ALL SERVICES</span>

              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />

            </button>

          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[

              { icon: <Palette className="text-[#FFD700]" />, title: "Brand Identity", desc: "Creating memorable visual languages that define your brand's presence." },

              { icon: <Code className="text-[#FFD700]" />, title: "Web Architecture", desc: "High-performance, responsive websites built with modern frameworks." },

              { icon: <Target className="text-[#FFD700]" />, title: "Digital Strategy", desc: "Aligning creative design with business goals for maximum conversion." }

            ].map((s, idx) => (

              <div key={idx} className="bg-[#151515] p-10 rounded-3xl border border-white/5 hover:border-[#FFD700]/30 transition-all group">

                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">{s.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>

                <p className="text-white/50 leading-relaxed">{s.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Portfolio Showcase Preview */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">SELECTED <span className="text-[#FFD700]">WORK.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {[

              { title: "Vanguard Tech", category: "Web Design / Dev", color: "bg-blue-600" },

              { title: "Lumina Labs", category: "Branding / Identity", color: "bg-purple-600" }

            ].map((p, idx) => (

              <div 

                key={idx} 

                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/5 relative aspect-[4/3] bg-[#111]"

                onClick={() => navigate('portfolio')}

              >

                <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity ${p.color}`} />

                <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 to-transparent">

                   <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2">{p.category}</span>

                   <h3 className="text-3xl font-black">{p.title}</h3>

                   <div className="mt-4 flex items-center space-x-2 text-white/0 group-hover:text-white/100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">

                     <span className="text-sm font-bold uppercase tracking-widest">Case Study</span>

                     <ArrowRight size={16} />

                   </div>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-16 text-center">

            <button onClick={() => navigate('portfolio')} className="px-10 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black font-bold transition-all">

              VIEW FULL PORTFOLIO

            </button>

          </div>

        </div>

      </section>



      <ContactSection />

    </div>

  );



  const AboutPage = () => (

    <div className="pt-40 px-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>

            <h4 className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-xs mb-6">About Me</h4>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10">

              I BLEND <span className="text-[#FFD700]">CODE</span> WITH <span className="text-[#FFD700]">ART.</span>

            </h1>

            <div className="space-y-6 text-xl text-white/60 leading-relaxed">

              <p>

                My name is Jan M, and I believe that every pixel should serve a purpose. As a dual-threat designer and developer, I bridge the gap between creative vision and technical execution.

              </p>

              <p>

                With over 6 years of experience in the industry, I have helped startups and established enterprises redefine their digital presence through bespoke aesthetics and high-performance technologies.

              </p>

            </div>

            

            <div className="grid grid-cols-2 gap-8 mt-16">

              <div>

                <h5 className="text-[#FFD700] font-bold text-sm uppercase tracking-widest mb-4">Philosophy</h5>

                <p className="text-sm text-white/50 leading-loose">

                  Simplicity is the ultimate sophistication. I strip away the noise to let your brand's core message shine through.

                </p>

              </div>

              <div>

                <h5 className="text-[#FFD700] font-bold text-sm uppercase tracking-widest mb-4">Mission</h5>

                <p className="text-sm text-white/50 leading-loose">

                  To empower founders with digital tools that aren't just beautiful, but are engineered for growth.

                </p>

              </div>

            </div>

          </div>



          <div className="space-y-12">

            <div className="bg-[#151515] p-10 rounded-3xl border border-white/5">

              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">

                <Cpu className="text-[#FFD700]" />

                <span>TECHNICAL ARSENAL</span>

              </h3>

              <div className="grid grid-cols-2 gap-y-6">

                {[

                  { name: "UI/UX Design", level: "100%" },

                  { name: "Frontend Architecture", level: "95%" },

                  { name: "Brand Identity", level: "100%" },

                  { name: "React / Next.js", level: "90%" },

                  { name: "Node.js", level: "85%" },

                  { name: "Motion Graphics", level: "80%" },

                ].map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 px-1">

                      <span>{skill.name}</span>

                      <span className="text-[#FFD700]">{skill.level}</span>

                    </div>

                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">

                      <div className="h-full bg-[#FFD700]" style={{ width: skill.level }} />

                    </div>

                  </div>

                ))}

              </div>

            </div>



            <div className="bg-[#151515] p-10 rounded-3xl border border-white/5 flex items-center justify-between group cursor-pointer">

              <div>

                <h4 className="text-xl font-bold">INTERESTED IN COLLABORATING?</h4>

                <p className="text-white/40 text-sm mt-2">I am currently available for freelance projects.</p>

              </div>

              <div 

                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}

                className="w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-all"

              >

                <ArrowRight />

              </div>

            </div>

          </div>

        </div>

      </div>

      <ContactSection />

    </div>

  );



  const PortfolioPage = () => {

    const categories = ['All', 'Web', 'Branding', 'Product'];

    const [filter, setFilter] = useState('All');



    const projects = [

      { id: 1, title: "Aura Skincare", cat: "Branding", color: "bg-orange-500" },

      { id: 2, title: "Nexus Fintech", cat: "Web", color: "bg-emerald-600" },

      { id: 3, title: "Oasis Realty", cat: "Web", color: "bg-stone-700" },

      { id: 4, title: "Krypton OS", cat: "Product", color: "bg-indigo-600" },

      { id: 5, title: "Zephyr Watch", cat: "Branding", color: "bg-rose-500" },

      { id: 6, title: "Motive Agency", cat: "Web", color: "bg-cyan-600" },

    ];



    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);



    return (

      <div className="pt-40 px-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">WORK <span className="text-[#FFD700]">ARCHIVE.</span></h1>

            <div className="flex flex-wrap justify-center gap-4">

              {categories.map(c => (

                <button

                  key={c}

                  onClick={() => setFilter(c)}

                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === c ? 'bg-[#FFD700] text-black' : 'bg-white/5 border border-white/10 hover:border-white/30'}`}

                >

                  {c}

                </button>

              ))}

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProjects.map(p => (

              <div key={p.id} className="group relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/5 animate-in fade-in zoom-in-95 duration-500">

                <div className={`absolute inset-0 ${p.color} opacity-20 group-hover:opacity-40 transition-all duration-700`} />

                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent">

                  <div className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em] mb-3">{p.cat}</div>

                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>

                  <div className="flex items-center space-x-2 text-white/50 group-hover:text-[#FFD700] transition-colors">

                    <span className="text-xs font-bold uppercase tracking-widest">Explore Project</span>

                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />

                  </div>

                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all">

                   <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">

                     <ExternalLink size={16} />

                   </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        <ContactSection />

      </div>

    );

  };



  const ServicesPage = () => {

    const serviceList = [

      {

        title: "Graphic Design",

        icon: <Palette size={40} />,

        desc: "Visual storytelling that captures attention and builds emotional connections with your audience.",

        bullets: ["Social Media Kit", "Print & Editorial", "Custom Illustrations", "Motion Graphics"]

      },

      {

        title: "Web Development",

        icon: <Code size={40} />,

        desc: "Turning designs into reality with clean, scalable code and high-speed performance.",

        bullets: ["React / Next.js Development", "Headless CMS Integration", "E-commerce Solutions", "Custom API Development"]

      },

      {

        title: "Branding",

        icon: <Layers size={40} />,

        desc: "Beyond just a logo. We build comprehensive identity systems that define your legacy.",

        bullets: ["Visual Identity", "Brand Guidelines", "Typography Systems", "Iconography Design"]

      },

      {

        title: "Creative Strategy",

        icon: <Target size={40} />,

        desc: "Data-driven creative direction that ensures every design decision drives ROI.",

        bullets: ["Market Research", "Brand Positioning", "Launch Strategy", "Conversion Optimization"]

      }

    ];



    return (

      <div className="pt-40 px-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-24">

            <h4 className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-xs mb-6">Expertise</h4>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">

              PREMIUM SOLUTIONS FOR <span className="text-[#FFD700]">DIGITAL GROWTH.</span>

            </h1>

            <p className="text-xl text-white/50 leading-relaxed">

              I provide a holistic approach to digital transformation, ensuring your brand is consistent, scalable, and technically superior across all platforms.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {serviceList.map((service, i) => (

              <div key={i} className="bg-[#151515] p-12 rounded-[40px] border border-white/5 hover:border-[#FFD700]/20 transition-all flex flex-col h-full group">

                <div className="text-[#FFD700] mb-8 group-hover:scale-110 transition-transform origin-left">

                  {service.icon}

                </div>

                <h3 className="text-3xl font-black mb-6">{service.title}</h3>

                <p className="text-white/60 mb-8 leading-relaxed">

                  {service.desc}

                </p>

                <div className="mt-auto">

                  <div className="h-px bg-white/10 w-full mb-8" />

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {service.bullets.map((b, j) => (

                      <li key={j} className="flex items-center space-x-3 text-sm text-white/40">

                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />

                        <span>{b}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

        <ContactSection />

      </div>

    );

  };



  return (

    <div className="bg-[#0f0f0f] text-white font-sans selection:bg-[#FFD700] selection:text-black min-h-screen">

      <Navbar />

      

      <main>

        {activePage === 'home' && <HomePage />}

        {activePage === 'about' && <AboutPage />}

        {activePage === 'portfolio' && <PortfolioPage />}

        {activePage === 'services' && <ServicesPage />}

      </main>



      <Footer />

      

      <style>{`

        @keyframes spin-slow {

          from { transform: rotate(0deg); }

          to { transform: rotate(360deg); }

        }

        .animate-spin-slow {

          animation: spin-slow 20s linear infinite;

        }

        .font-sans {

          font-family: 'Inter', 'Poppins', sans-serif;

        }

      `}</style>

    </div>

  );

};
