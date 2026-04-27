import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

const projectTypes = ['Residential Villa', 'Apartment Interior', 'Commercial Office', 'Retail Space', 'Hospitality', 'Other'];
const budgetRanges = ['₹10L – ₹25L', '₹25L – ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹2Cr', '₹2Cr – ₹5Cr', '₹5Cr+'];
const timelines = ['1–3 Months', '3–6 Months', '6–12 Months', '12+ Months'];

const QuoteModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', budgetRange: '', timeline: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1TO5JYf_7y1LN5KCVLlOby63iJ9y3RQWqGBw4vg2UqVw_O8QQa-TOrtscQwBhftp4aA/exec';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formattedMessage = `Project: ${form.projectType}\nBudget: ${form.budgetRange}\nTimeline: ${form.timeline}\nRemarks: ${form.message}`;

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: formattedMessage,
          type: 'Quote'
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', projectType: '', budgetRange: '', timeline: '', message: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-primaryBackground rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 dark:border-white/10"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-10 border-b border-gray-100 bg-gray-900">
              <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <div className="w-12 h-px bg-accentGold mb-6" />
              <h2 className="text-4xl font-bold text-white mb-2">Request a Quote</h2>
              <p className="text-gray-400 dark:text-gray-500 text-sm font-medium tracking-wide">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            {/* Form */}
            <div className="p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-accentGold flex justify-center mb-6"><CheckCircle2 size={72} /></div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Quote Request Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Our team will reach out to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', required: true }, 
                      { label: 'Email', name: 'email', type: 'email', required: false }, 
                      { label: 'Phone', name: 'phone', type: 'tel', required: true }
                    ].map(f => (
                      <div key={f.name} className={f.name === 'phone' ? 'md:col-span-2' : ''}>
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-gray-400">
                          {f.label}{f.required && <span className="text-accentGold ml-1">*</span>}
                        </label>
                        <input
                          type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required={f.required}
                          className="w-full bg-gray-50 dark:bg-secondaryBackground border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-accentGold transition-colors font-semibold"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Project Type', name: 'projectType', options: projectTypes },
                      { label: 'Budget Range', name: 'budgetRange', options: budgetRanges },
                      { label: 'Timeline', name: 'timeline', options: timelines },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-gray-400">{f.label}</label>
                        <select
                          name={f.name} value={form[f.name]} onChange={handleChange} required
                          className="w-full bg-gray-50 dark:bg-secondaryBackground border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-accentGold transition-colors appearance-none cursor-pointer font-bold"
                        >
                          <option value="">Select...</option>
                          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-gray-400">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Brief description of your project... (Optional)"
                      className="w-full bg-gray-50 dark:bg-secondaryBackground border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-accentGold transition-colors resize-none font-medium shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-accentGold hover:bg-hoverAccent text-white font-bold tracking-[0.2em] text-xs uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={18} className={isSubmitting ? "animate-pulse" : ""} /> 
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
