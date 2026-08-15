import React, { useState } from 'react';
import { WORK_HISTORY, EDUCATION } from '../data/resumeData';
import { Building2, Calendar, GraduationCap, Award, ChevronDown, ChevronUp, CheckCircle, Search } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('ab-inbev'); // Expanded by default

  const filteredHistory = WORK_HISTORY.filter(
    (item) =>
      item.company.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(filterTerm.toLowerCase())) ||
      item.keyHighlights.some((h) => h.toLowerCase().includes(filterTerm.toLowerCase()))
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Career Trajectory</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Professional Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl">
              10+ years driving revenue management, commercial decision engines, pricing elasticities, and program delivery across FMCG and QSR leaders.
            </p>
          </div>

          {/* Quick Search in Experience */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by company or skill..."
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="experience-search-input"
            />
          </div>
        </div>

        {/* Work Experience Timeline List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {filteredHistory.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-10 sm:pl-16 group">
                
                {/* Timeline Dot */}
                <div className="absolute left-1.5 sm:left-5 top-4 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900 flex items-center justify-center text-white text-[10px] font-bold">
                  •
                </div>

                {/* Experience Card */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/50 transition-all duration-200 shadow-sm">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/60 dark:border-slate-700/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.company}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1 font-medium bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Role Brief */}
                  {item.summary && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 font-medium">
                      {item.summary}
                    </p>
                  )}

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-2.5">
                    {item.keyHighlights.slice(0, isExpanded ? item.keyHighlights.length : 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand / Collapse toggle if highlights > 3 */}
                  {item.keyHighlights.length > 3 && (
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                      id={`toggle-exp-btn-${item.id}`}
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Show {item.keyHighlights.length - 3} More Highlights</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}

                  {/* Skill Badges */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Qualifications Sub-section */}
        <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Education & Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {edu.year}
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white pt-1">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
