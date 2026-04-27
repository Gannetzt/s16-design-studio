import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1TO5JYf_7y1LN5KCVLlOby63iJ9y3RQWqGBw4vg2UqVw_O8QQa-TOrtscQwBhftp4aA/exec';

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          type: 'Contact'
        }),
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-primaryBackground text-gray-900 dark:text-white transition-colors duration-300 pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold" />
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Reach Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Let's Start a <span className="text-accentGold">Conversation</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Operating across **Bangalore, Hyderabad, Vijayawada, and Vizag**, we're ready to build something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send Us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-accentGold/10 border border-accentGold/30 text-accentGold p-4 rounded-xl mb-6 shadow-sm"
                >
                  <CheckCircle2 size={20} />
                  <span className="font-semibold text-accentGold">Message sent! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 90000 12345', required: true },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-500 dark:text-gray-400">
                      {field.label}{field.required && <span className="text-accentGold ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full bg-gray-50 dark:bg-secondaryBackground border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accentGold transition-colors shadow-inner"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-500 dark:text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project... (Optional)"
                    rows={5}
                    className="w-full bg-gray-50 dark:bg-secondaryBackground border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accentGold transition-colors shadow-inner resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accentGold hover:bg-hoverAccent text-white font-bold tracking-widest text-sm uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact Details</h2>
                <div className="space-y-6">
                  {[
                    { 
                      icon: <MapPin size={22} />, 
                      label: 'Headquarters', 
                      value: <a href="https://maps.google.com/?q=Balaji+Arcade,+Ground+Floor,+TNGO+Colony+phase-2,+Goldcrest+School+Road,+Gachibowli+500046,+Telangana,+Hyderabad" target="_blank" rel="noopener noreferrer" className="hover:text-accentGold transition-colors">Balaji Arcade, Ground Floor, TNGO Colony phase-2, Goldcrest School Road, Gachibowli 500046, Telangana, Hyderabad</a>
                    },
                    { icon: <MapPin size={22} />, label: 'Serving', value: 'Bangalore | Hyderabad | Vijayawada | Vizag' },
                    { 
                      icon: <Phone size={22} />, 
                      label: 'Phone', 
                      value: <span className="flex gap-1"><a href="tel:+918790872287" className="hover:text-accentGold transition-colors">+91 87908 72287</a><span>/</span><a href="tel:+918123244152" className="hover:text-accentGold transition-colors">+91 81232 44152</a></span>
                    },
                    { 
                      icon: <Mail size={22} />, 
                      label: 'Email', 
                      value: <a href="mailto:space16designstudio@gmail.com" className="hover:text-accentGold transition-colors">space16designstudio@gmail.com</a>
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-5">
                      <div className="text-accentGold mt-1 flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1 font-bold">{item.label}</p>
                        <div className="font-semibold text-gray-800 dark:text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 h-72 bg-gray-50 dark:bg-secondaryBackground flex items-center justify-center relative shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=60"
                  alt="Hyderabad cityscape"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/20">
                  <div className="bg-accentGold rounded-full p-3 mb-3 shadow-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">Gachibowli, Hyderabad</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mt-1 uppercase tracking-widest">Telangana, India</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 dark:bg-secondaryBackground/50 border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-gray-800 dark:text-white">Business Hours</h3>
                <div className="space-y-4 text-sm text-gray-600 font-medium">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Monday – Saturday</span>
                    <span className="text-accentGold font-bold">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                    <span className="text-gray-400 italic dark:text-gray-500">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
