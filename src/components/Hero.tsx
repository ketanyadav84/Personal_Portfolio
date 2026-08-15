import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowRight, Download, Mail, Linkedin, Phone, Award, TrendingUp, CheckCircle2, Calculator } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onNavigateTab }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Area */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Program Lead & RGM Analytics Expert</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
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
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                id="hero-linkedin-link"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Key Credentials Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                ISB Hyderabad AMPBA (2024)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                CFA Certified (2010)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                AB-InBev / PepsiCo / NielsenIQ
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResumeModal}
                id="hero-download-resume-btn"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
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

          {/* Key Impact Stats Card Grid */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Proven Impact</p>
                  <h3 className="text-lg font-bold text-white mt-0.5">Commercial Track Record</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Grid of Key Metrics */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">$12M</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Profit Impact (MAZ Markets)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10+</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Years Analytics Leadership</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">90+</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Client NPS Score (NielsenIQ)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">26%</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Productivity Increase (TCS)</p>
                </div>
              </div>

              {/* Highlight callout */}
              <div className="pt-4 border-t border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specializing in transforming complex econometric pricing data into intuitive cloud decision tools and executable strategies for sales teams.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
