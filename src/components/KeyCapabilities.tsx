import React, { useState } from 'react';
import { KEY_CAPABILITIES } from '../data/resumeData';
import { TrendingUp, Calculator, PackageCheck, Cpu, Target, Briefcase, Check } from 'lucide-react';

export const KeyCapabilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Target': return <Target className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default: return <TrendingUp className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Core Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Commercial Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging analytical rigor with practical commercial execution across Revenue Growth Management, Pricing, Trade Optimization, and Program Governance.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_CAPABILITIES.map((cap) => {
            const isSelected = selectedCategory === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCategory(isSelected ? null : cap.id)}
                className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20 dark:ring-blue-400/20'
                    : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center">
                    {getIcon(cap.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {cap.skills.length} Competencies
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cap.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  {cap.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                    >
                      <Check className="w-3 h-3 text-blue-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
