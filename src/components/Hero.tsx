import React from 'react';
import { PERSONAL_INFO, WORK_HISTORY } from '../data/resumeData';
import { ArrowRight, Download, Mail, Linkedin, Award, TrendingUp, Calculator, Briefcase, ChevronRight, Sparkles, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onNavigateTab }) => {
  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Profile Summary Header */}
        <div className="max-w-4xl space-y-6 text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Program Lead & RGM Analytics Expert</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              id="hero-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ketanyadav84/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              id="hero-linkedin-link"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Bio Summary */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {PERSONAL_INFO.summary}
          </p>

          {/* Key Credentials Badges */}
          <div className="pt-1 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              ISB Hyderabad AMPBA (2024)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              CFA (ICFAI) Certified (2010)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              Master of Financial Analysis (2010)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              AB-InBev / PepsiCo / NielsenIQ
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              id="hero-download-resume-btn"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              onClick={() => onNavigateTab ? onNavigateTab('simulator') : null}
              id="hero-try-simulator-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Try RGM Simulator</span>
            </button>

            <button
              onClick={() => onNavigateTab ? onNavigateTab('contact') : null}
              id="hero-contact-btn"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overall Career Timeline & Journey Section */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800" id="career-journey-timeline">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200/60 dark:border-blue-800/60">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Career Milestones & Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Professional Journey Overview
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                A 10+ year trajectory spanning commercial analytics, price pack architecture, revenue management products, and multi-disciplinary program delivery.
              </p>
            </div>

            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('experience')}
                id="hero-view-full-experience-btn"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>View In-Depth Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORK_HISTORY.map((exp, index) => (
              <div
                key={exp.id}
                id={`career-overview-card-${exp.id}`}
                className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-400/80 dark:hover:border-blue-600/80 transition-all shadow-xs hover:shadow-md group"
              >
                {/* Top Row: Period & Company */}
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      {exp.period}
                    </span>
                    {index === 0 && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Present
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 mb-2.5">
                    {exp.role}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

