import { useEffect, useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '1637 E Valley Pkwy, STE 1050, Escondido, CA 92027' },
  { icon: Phone, label: 'Call Us', value: '+44 746 6256968' },
  { icon: Mail, label: 'Email Us', value: 'admissions@expertlance.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9AM - 8PM\nOnline support available daily' },
];

export default function Contact() {
  type ContactEntry = {
    id: string;
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
    submittedAt: string;
  };

  const STORAGE_KEY = 'expertlance-contact-entries';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [entries, setEntries] = useState<ContactEntry[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ContactEntry[];
      if (Array.isArray(parsed)) {
        setEntries(parsed);
      }
    } catch {
      setEntries([]);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill your name, email, and message');
      return;
    }

    const targetEmail = 'admissions@expertlance.com';
    const newEntry: ContactEntry = {
      id:
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || 'N/A',
      service: formData.service || 'Not selected',
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    const nextEntries = [newEntry, ...entries];
    setEntries(nextEntries);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries));

    const subject = `ExpertLance Contact: ${newEntry.service} from ${newEntry.name}`;
    const body = [
      `Name: ${newEntry.name}`,
      `Email: ${newEntry.email}`,
      `Company: ${newEntry.company}`,
      `Program: ${newEntry.service}`,
      '',
      'Message:',
      newEntry.message,
    ].join('\n');

    const mailToLink = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });

    // Open the email draft after saving locally.
    window.setTimeout(() => {
      window.location.href = mailToLink;
    }, 150);
  };

  const clearAllEntries = () => {
    setEntries([]);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden pt-36">
      <div className="absolute inset-0 bg-brand-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-line bg-white mb-6">
            <span className="text-sm font-medium text-brand-primary">Contact Us</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
            Let’s Build Your
            <br />
            <span className="text-gradient-light">Programming Journey</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Share your goals and we will help you choose the right CS and programming track.
            Submitted entries are saved and shown below for easy review.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="bg-white border border-brand-line rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-sm">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink mb-1">{info.label}</div>
                  <div className="text-brand-muted text-sm whitespace-pre-line">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-brand-line rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-brand-surface border border-brand-line rounded-xl text-brand-ink placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-brand-surface border border-brand-line rounded-xl text-brand-ink placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-surface border border-brand-line rounded-xl text-brand-ink placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-2">Program Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-surface border border-brand-line rounded-xl text-brand-ink focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all appearance-none"
                  >
                    <option value="">Select a program</option>
                    <option value="core-programming">Core Programming</option>
                    <option value="dsa">Data Structures & Algorithms</option>
                    <option value="fullstack">Full-Stack Web Development</option>
                    <option value="backend">Backend & Databases</option>
                    <option value="ai-track">AI/ML Track</option>
                    <option value="system-design">System Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-ink mb-2">Your Goals</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-brand-surface border border-brand-line rounded-xl text-brand-ink placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none"
                  placeholder="Tell us your current level, target role, and learning timeline..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              {submitted && (
                <p className="text-sm text-green-700">
                  Entry saved and email draft opened (if your mail app allows it).
                </p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black font-heading font-semibold rounded-full hover:bg-brand-yellow-dark hover:scale-105 transition-all duration-300"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
                {!submitted && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white border border-brand-line rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <h3 className="font-heading text-2xl font-bold text-brand-ink">Saved Contact Entries</h3>
            {entries.length > 0 && (
              <button
                type="button"
                onClick={clearAllEntries}
                className="px-4 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {entries.length === 0 ? (
            <p className="text-brand-muted text-sm">No submissions yet. Fill and submit the form to see entries here.</p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <article key={entry.id} className="border border-brand-line rounded-xl p-4 bg-brand-surface">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="font-semibold text-brand-ink">{entry.name}</p>
                      <p className="text-sm text-brand-muted">{entry.email}</p>
                    </div>
                    <p className="text-xs text-brand-muted">
                      {new Date(entry.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                    <p><span className="font-medium text-brand-ink">Company:</span> <span className="text-brand-muted">{entry.company}</span></p>
                    <p><span className="font-medium text-brand-ink">Program:</span> <span className="text-brand-muted">{entry.service}</span></p>
                  </div>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    <span className="font-medium text-brand-ink">Goals:</span> {entry.message}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}