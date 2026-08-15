import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyCapabilities } from './components/KeyCapabilities';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { RGMCalculatorWidget } from './components/RGMCalculatorWidget';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch (e) {
        return false;
      }
    }
    return false;
  });

  const [activeTab, setActiveTab] = useState<string>('about');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // Storage error safeguard
    }
  }, [darkMode]);

  const tabsList = [
    { id: 'about', label: 'About & Bio' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'experience', label: 'Experience' },
    { id: 'simulator', label: 'RGM Simulator' },
    { id: 'blog', label: 'Blog Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const currentTabIdx = tabsList.findIndex((t) => t.id === activeTab);
  const prevTab = currentTabIdx > 0 ? tabsList[currentTabIdx - 1] : null;
  const nextTab = currentTabIdx < tabsList.length - 1 ? tabsList[currentTabIdx + 1] : null;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'about':
        return <Hero onOpenResumeModal={() => setResumeModalOpen(true)} onNavigateTab={handleTabChange} />;
      case 'capabilities':
        return (
          <div className="pt-24 min-h-[70vh]">
            <KeyCapabilities />
          </div>
        );
      case 'experience':
        return (
          <div className="pt-24 min-h-[70vh]">
            <ExperienceTimeline />
          </div>
        );
      case 'simulator':
        return (
          <div className="pt-24 min-h-[70vh]">
            <RGMCalculatorWidget />
          </div>
        );
      case 'portfolio':
        return (
          <div className="pt-24 min-h-[70vh]">
            <PortfolioSection />
          </div>
        );
      case 'blog':
        return (
          <div className="pt-24 min-h-[70vh]">
            <BlogSection />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24 min-h-[70vh]">
            <ContactSection />
          </div>
        );
      default:
        return <Hero onOpenResumeModal={() => setResumeModalOpen(true)} onNavigateTab={handleTabChange} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-blue-500 selection:text-white flex flex-col justify-between">
        <SEOHead />
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />

        {/* Tab Page Container */}
        <main className="flex-grow">
          {renderActivePage()}

          {/* Page Bottom Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
              {prevTab ? (
                <button
                  onClick={() => handleTabChange(prevTab.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition-all cursor-pointer"
                  id="prev-page-btn"
                >
                  <ChevronLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Previous: {prevTab.label}</span>
                </button>
              ) : (
                <div />
              )}

              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 hidden sm:inline-block">
                Page {currentTabIdx + 1} of {tabsList.length}
              </span>

              {nextTab ? (
                <button
                  onClick={() => handleTabChange(nextTab.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition-all ml-auto cursor-pointer"
                  id="next-page-btn"
                >
                  <span>Next: {nextTab.label}</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </main>

        <Footer
          onOpenResumeModal={() => setResumeModalOpen(true)}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
