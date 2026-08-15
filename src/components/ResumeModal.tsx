import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_HISTORY, EDUCATION, KEY_CAPABILITIES } from '../data/resumeData';
import { X, Download, FileText, CheckCircle2, Mail, Phone, Linkedin, Printer } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // Client-side PDF generator using jsPDF
  const generatePDF = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        unit: 'pt',
        format: 'a4',
      });

      const margin = 40;
      let y = 40;
      const pageWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pageWidth - margin * 2;

      // Header Name
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(30, 41, 59); // dark slate
      doc.text(PERSONAL_INFO.name, margin, y);

      // Contact info right aligned
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(71, 85, 105);
      doc.text(`Email: ${PERSONAL_INFO.email}  |  Phone: ${PERSONAL_INFO.phone}  |  LinkedIn: linkedin.com/in/ketanyadav84`, margin, y + 16);

      y += 44;

      // Title Banner
      doc.setFillColor(37, 99, 235); // Blue
      doc.rect(margin, y, contentWidth, 24, 'F');
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text(PERSONAL_INFO.title, margin + 10, y + 16);

      y += 36;

      // Section: Profile Summary
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(30, 41, 59);
      doc.text('PROFILE SUMMARY', margin, y);
      doc.setLineWidth(0.5);
      doc.setDrawColor(203, 213, 225);
      doc.line(margin, y + 4, margin + contentWidth, y + 4);

      y += 16;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);

      const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, contentWidth);
      doc.text(summaryLines, margin, y);
      y += summaryLines.length * 12 + 10;

      // Section: Key Capabilities
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(30, 41, 59);
      doc.text('KEY CAPABILITIES', margin, y);
      doc.line(margin, y + 4, margin + contentWidth, y + 4);

      y += 16;
      const caps = [
        '• Revenue Growth Management (SRM / RGM / NRM)',
        '• Pricing Strategy & Price Elasticity Analysis',
        '• Price Pack Architecture (PPA) & Mix Analytics',
        '• Promotion Effectiveness & ROI Measurement',
        '• Scenario Simulation & What-If Analysis',
        '• Analytical Tool & Cloud Dashboard Development',
        '• Power BI | Advanced Excel Modeling | Python',
        '• Stakeholder Management & Program Delivery'
      ];

      for (let i = 0; i < caps.length; i += 2) {
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.text(caps[i], margin, y);
        if (caps[i + 1]) {
          doc.text(caps[i + 1], margin + contentWidth / 2, y);
        }
        y += 12;
      }

      y += 10;

      // Section: Work Experience
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(30, 41, 59);
      doc.text('WORK HISTORY', margin, y);
      doc.line(margin, y + 4, margin + contentWidth, y + 4);

      y += 16;

      WORK_HISTORY.slice(0, 5).forEach((item) => {
        // Page overflow check
        if (y > 750) {
          doc.addPage();
          y = 40;
        }

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        doc.text(`${item.company}: ${item.role}`, margin, y);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(37, 99, 235);
        doc.text(item.period, margin + contentWidth - 100, y);

        y += 12;

        item.keyHighlights.slice(0, 3).forEach((hl) => {
          if (y > 770) {
            doc.addPage();
            y = 40;
          }
          doc.setFont('Helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(51, 65, 85);
          const hlLines = doc.splitTextToSize(`• ${hl}`, contentWidth - 10);
          doc.text(hlLines, margin + 5, y);
          y += hlLines.length * 11;
        });

        y += 6;
      });

      // Section: Education
      if (y > 730) {
        doc.addPage();
        y = 40;
      }

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(30, 41, 59);
      doc.text('EDUCATION & CERTIFICATIONS', margin, y);
      doc.line(margin, y + 4, margin + contentWidth, y + 4);

      y += 16;
      EDUCATION.forEach((edu) => {
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(30, 41, 59);
        doc.text(`${edu.degree} — ${edu.institution} (${edu.year})`, margin, y);
        y += 12;
      });

      // Save document
      doc.save('Ketan_Yadav_Resume.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Resume Preview — {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official PDF Document • Commercial Analytics & RGM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              id="resume-modal-download-pdf-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Generating PDF...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              id="close-resume-modal-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Document Content View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-500" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-blue-500" /> {PERSONAL_INFO.phone}</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-blue-500" /> linkedin.com/in/ketanyadav84</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b pb-1 border-slate-200 dark:border-slate-800">
              Profile Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b pb-1 border-slate-200 dark:border-slate-800">
              Key Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {KEY_CAPABILITIES.map((cap) => (
                <div key={cap.id} className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{cap.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b pb-1 border-slate-200 dark:border-slate-800">
              Work History
            </h2>

            {WORK_HISTORY.map((wh) => (
              <div key={wh.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>{wh.company} — <span className="text-blue-600 dark:text-blue-400">{wh.role}</span></span>
                  <span className="text-xs font-mono text-slate-500">{wh.period}</span>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 text-xs">
                  {wh.keyHighlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b pb-1 border-slate-200 dark:border-slate-800">
              Education & Qualifications
            </h2>
            <div className="space-y-2">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                    <p className="text-slate-500">{edu.institution}</p>
                  </div>
                  <span className="font-mono text-blue-600 dark:text-blue-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <p><strong>Languages:</strong> {PERSONAL_INFO.languages.join(', ')}</p>
            <p><strong>Hobbies:</strong> {PERSONAL_INFO.hobbies.join(', ')}</p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center text-xs">
          <span className="text-slate-500">Ketan Yadav PDF Resume Document</span>
          <button
            onClick={generatePDF}
            className="px-4 py-2 font-semibold bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors"
          >
            Download PDF File
          </button>
        </div>

      </div>
    </div>
  );
};
