import React, { useState, useMemo } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { Search, Clock, Calendar, BookOpen, X, Share2, Bookmark, BookmarkCheck, ArrowRight, Calculator } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'RGM & Pricing', 'Analytics & Simulation', 'Commercial Strategy', 'Program Delivery', 'Cloud Products'];

  // Instant fast search filter
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.content.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((b) => b !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  const handleShare = () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
    } catch (e) {
      // Ignore clipboard write restrictions in iframe
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Technical Insights</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Commercial Analytics & RGM Insights
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Thought leadership articles on price pack architecture, trade spend ROI, elasticity modeling, and program governance.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm mb-12 space-y-4">
          
          {/* Fast Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search blog archives instantly by title, keyword, or concept (e.g. Elasticity, Trade Spend, PPA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              id="blog-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-blue-500'
                  }`}
                  id={`blog-category-${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Showing {filteredPosts.length} of {BLOG_POSTS.length} articles
            </div>
          </div>

        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles matched your search</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try searching for different keywords like "Elasticity", "Pricing", "PPA", or "ROI".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const isBookmarked = bookmarks.includes(post.id);
              return (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/60">
                        {post.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(post.id, e)}
                          className="text-slate-400 hover:text-amber-500 transition-colors p-1"
                          title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-500" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>

                    <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Article Reader Modal */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {activePost.category} • {activePost.readTime}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {activePost.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Share link"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActivePost(null)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    id="close-post-modal-btn"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Share confirmation banner */}
              {copiedLink && (
                <div className="bg-emerald-600 text-white text-xs font-semibold py-1.5 text-center">
                  Article link copied to clipboard!
                </div>
              )}

              {/* Article Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span>Published by <strong>Ketan Yadav</strong></span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activePost.tags.map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Formatted Text Render with react-markdown */}
                <div className="blog-article-content max-w-none text-slate-800 dark:text-slate-200">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pt-2 pb-2 tracking-tight">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-5 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 pt-4 pb-1">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base my-3">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-slate-900 dark:text-white">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-slate-800 dark:text-slate-200">
                          {children}
                        </em>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 space-y-1.5 my-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-5 space-y-1.5 my-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed">
                          {children}
                        </li>
                      ),
                      hr: () => (
                        <hr className="my-6 border-slate-200 dark:border-slate-800" />
                      ),
                      code: ({ className, children, ...props }) => {
                        const isMath = className?.includes('language-math');
                        const isTextDiagram = className?.includes('language-text');
                        
                        if (isMath) {
                          return (
                            <div className="my-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800/80 shadow-xs">
                              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2">
                                <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                <span>Mathematical Model & Equation</span>
                              </div>
                              <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-blue-100 overflow-x-auto py-1">
                                {children}
                              </div>
                            </div>
                          );
                        }

                        if (isTextDiagram) {
                          return (
                            <pre className="my-4 p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-relaxed shadow-inner">
                              <code>{children}</code>
                            </pre>
                          );
                        }

                        return (
                          <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold" {...props}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <div className="my-3">{children}</div>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                          <table className="w-full text-left text-sm border-collapse bg-white dark:bg-slate-900">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                          {children}
                        </thead>
                      ),
                      th: ({ children }) => (
                        <th className="p-3 text-xs uppercase tracking-wider font-bold">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="p-3 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                          {children}
                        </td>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 py-1.5 my-3 italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-r-lg">
                          {children}
                        </blockquote>
                      )
                    }}
                  >
                    {activePost.content}
                  </Markdown>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center text-xs">
                <span className="text-slate-500">Ketan Yadav Commercial Analytics Portfolio</span>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-4 py-2 font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
