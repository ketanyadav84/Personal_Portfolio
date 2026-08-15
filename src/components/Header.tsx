import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResumeModal: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenResumeModal,
  activeTab,
  setActiveTab,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Capabilities', id: 'capabilities' },
    { name: 'Experience', id: 'experience' },
    { name: 'RGM Simulator', id: 'simulator' },
    { name: 'Blog Insights', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode
          ? 'bg-slate-950/95 text-slate-100 border-b border-slate-800/90 shadow-xl backdrop-blur-md'
          : 'bg-white/95 text-slate-900 border-b border-slate-200/90 shadow-md backdrop-blur-md'
      } ${isScrolled ? 'py-2.5' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => handleTabClick('about')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              KY
            </div>
            <div>
              <span
                className={`text-base sm:text-lg font-extrabold tracking-tight block transition-colors ${
                  darkMode
                    ? 'text-white group-hover:text-blue-400'
                    : 'text-slate-900 group-hover:text-blue-600'
                }`}
              >
                {PERSONAL_INFO.name}
              </span>
              <span
                className={`text-xs font-semibold block ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                RGM & Commercial Analytics
              </span>
            </div>
          </button>

          {/* Desktop Tab Navigation Bar */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border shadow-inner ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-slate-100 border-slate-300'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  id={`nav-tab-${link.id}`}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-blue-600 text-white shadow-md'
                      : darkMode
                      ? 'text-slate-100 hover:text-white hover:bg-slate-800'
                      : 'text-slate-900 hover:text-blue-700 hover:bg-slate-200'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all border font-semibold flex items-center justify-center ${
                darkMode
                  ? 'bg-slate-900 text-amber-400 border-slate-700 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark Mode"
              id="dark-mode-toggle-btn"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800" />
              )}
            </button>

            {/* Resume Download Button */}
            <button
              onClick={onOpenResumeModal}
              id="header-resume-download-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900 text-amber-400 border-slate-700'
                  : 'bg-slate-100 text-slate-900 border-slate-300'
              }`}
              aria-label="Toggle Theme"
              id="mobile-theme-toggle-btn"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900 text-white border-slate-700'
                  : 'bg-slate-100 text-slate-900 border-slate-300'
              }`}
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 space-y-3 border-b shadow-2xl animate-fadeIn ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-colors ${
                    isActive
                      ? darkMode
                        ? 'bg-blue-950/80 text-blue-300 border border-blue-800'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                      : darkMode
                      ? 'text-slate-100 hover:bg-slate-800'
                      : 'text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className={`pt-3 border-t flex items-center gap-3 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              id="mobile-drawer-resume-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold bg-blue-600 text-white shadow-md"
            >
              <FileText className="w-4 h-4" />
              Download Resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
