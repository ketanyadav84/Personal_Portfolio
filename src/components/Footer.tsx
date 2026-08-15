import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp, Mail, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId: string) => {
    if (setActiveTab) {
      setActiveTab(tabId);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
                KY
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Commercial Analytics & Program Delivery Lead with 10+ years driving revenue growth management, pricing elasticities, and cloud analytical products.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation Links</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <button onClick={() => handleNav('about')} className="text-left hover:text-blue-400 transition-colors">About Me</button>
              <button onClick={() => handleNav('capabilities')} className="text-left hover:text-blue-400 transition-colors">Capabilities</button>
              <button onClick={() => handleNav('experience')} className="text-left hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => handleNav('simulator')} className="text-left hover:text-blue-400 transition-colors">RGM Simulator</button>
              <button onClick={() => handleNav('blog')} className="text-left hover:text-blue-400 transition-colors">Blog Insights</button>
              <button onClick={() => handleNav('contact')} className="text-left hover:text-blue-400 transition-colors">Contact</button>
              <button onClick={onOpenResumeModal} className="text-left text-blue-400 hover:underline">
                Resume PDF
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Connect</p>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ketanyadav84/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                id="footer-linkedin-link"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            id="scroll-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
