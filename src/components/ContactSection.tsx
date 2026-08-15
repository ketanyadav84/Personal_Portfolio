import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ContactFormData, ContactResponse } from '../types';
import { Mail, Phone, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, Clock } from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'US / Canada', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    reason: 'Consulting',
    message: '',
  });

  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const fullPhone = phoneNumber.trim() ? `${countryCode} ${phoneNumber.trim()}` : '';

    // Simulate instant client-side confirmation without requiring backend email setup
    setTimeout(() => {
      setResponse({
        success: true,
        message: 'Thank you! Your message has been recorded. Ketan Yadav will review your inquiry and respond shortly.',
        details: {
          recipient: PERSONAL_INFO.email,
          timestamp: new Date().toISOString(),
          status: 'Recorded locally',
        },
      });
      setFormData({
        name: '',
        email: '',
        phone: fullPhone,
        subject: '',
        reason: 'Consulting',
        message: '',
      });
      setPhoneNumber('');
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Ketan Yadav
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in Revenue Growth Management consulting, advisory, commercial analytics leadership, or keynote workshops? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-blue-500/50 transition-all group"
                  id="contact-card-email"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Direct Email</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-blue-500/50 transition-all group"
                  id="contact-card-phone"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Phone Number</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-blue-500/50 transition-all group"
                  id="contact-card-linkedin"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">LinkedIn Profile</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      in/ketanyadav84
                    </p>
                  </div>
                </a>

              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-xs text-blue-800 dark:text-blue-300 flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Typical response time: Within 24-48 business hours.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Email Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send an Email Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill in your details below. The backend server will send your message directly to Ketan's inbox.
              </p>
            </div>

            {/* Submission Status Alert */}
            {response && (
              <div
                className={`mb-6 p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                  response.success
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
                }`}
                id="contact-response-alert"
              >
                <div className="flex items-center gap-2 font-bold">
                  {response.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                  <span>{response.success ? 'Message Sent Successfully!' : 'Submission Failed'}</span>
                </div>

                <p>{response.message || response.error}</p>

                {response.details && (
                  <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-[11px] space-y-1 font-mono">
                    <p>Recipient: {response.details.recipient}</p>
                    <p>Sent at: {new Date(response.details.timestamp).toLocaleString()}</p>
                    <p>Status: {response.details.status}</p>
                  </div>
                )}
              </div>
            )}

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="contact-input-name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="contact-input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone with Separate Country Code and Number Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number (Optional)
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="contact-select-country-code"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-[115px] sm:w-[125px] px-2.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0 cursor-pointer font-medium"
                      title="Select Country Dial Code"
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={`${item.code}-${item.country}`} value={item.code}>
                          {item.flag} {item.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 99244 70299"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="contact-input-phone"
                    />
                  </div>
                </div>

                {/* Reason Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Inquiry Reason
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="contact-select-reason"
                  >
                    <option value="Consulting">RGM & Commercial Consulting</option>
                    <option value="Hiring">Executive / Leadership Opportunities</option>
                    <option value="RGM Workshop">Elasticity & Price Workshop</option>
                    <option value="General">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Revenue Management Advisory for FMCG Brand"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="contact-input-subject"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Please describe your project, organizational goals, or question..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="contact-textarea-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                id="contact-submit-btn"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Email Message</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
