import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Faq from "./Faq";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const formRef = useRef();

  useEffect(() => {
    emailjs.init('YI1j8K6airy7xAFbH');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm('service_87p6upc', 'template_1websmr', formRef.current, 'YI1j8K6airy7xAFbH');
      setStatus('success');
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="relative bg-[url('/images/hens.jpg')] bg-cover bg-center rounded-xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 font-serif">Contact Us</h2>
          <p className="text-white mt-2 font-sans">We'd love to hear from you! Reach out for any inquiries.</p>
        </div>
      </header>

      <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:gap-10">
        <form ref={formRef} className="w-full lg:w-2/3 bg-white dark:bg-gray-400 p-8 rounded-xl shadow-lg border border-amber-100 dark:border-amber-700" onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-6 font-serif">Send us a Message</h3>
          <div className="grid gap-5 dark:text-black">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 font-sans">Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-3 rounded-lg px-4 bg-gray-50 dark:bg-gray-300 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 font-sans">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
               
                className="w-full py-3 rounded-lg px-4 bg-gray-50 dark:bg-gray-300 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 font-sans">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-3 rounded-lg px-4 bg-gray-50 dark:bg-gray-300 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 font-sans">Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 rounded-lg px-4 bg-gray-50 dark:bg-gray-300 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 font-sans">Message *</label>
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full py-3 rounded-lg px-4 bg-gray-50 dark:bg-gray-300 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
              />
            </div>

            <button type="submit" disabled={loading} className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">{loading ? 'Sending...' : 'Send Message'}</button>
            {status === 'success' && <p className="text-green-600 text-center mt-4 font-sans">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center mt-4 font-sans">Failed to send message. Please try again.</p>}
          </div>
        </form>

        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-linear-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 p-8 rounded-xl shadow-lg border border-amber-200 dark:border-amber-700">
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-6 font-serif">Direct Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-600 p-3 rounded-full">
                  <img src="/images/email.png" alt="email" className="w-5 h-5"/>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-sans">Email</p>
                  <a href="mailto:grannada.enterprise@gmail.com" className="text-amber-800 dark:text-amber-200 font-semibold hover:text-amber-600 font-sans">grannada.enterprise@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-600 p-3 rounded-full">
                  <img src="/images/phone.png" alt="phone" className="w-5 h-5"/>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-sans">Phone</p>
                  <a href="tel:0740207040" className="text-amber-800 dark:text-amber-200 font-semibold hover:text-amber-600 font-sans">0740 207 040</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-600 p-3 rounded-full">
                  <img src="/images/facebook.png" alt="facebook" className="w-5 h-5"/>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-300 font-sans">Facebook</p>
                  <span className="text-amber-800 dark:text-amber-200 font-semibold font-sans">Grannada Farm</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all" onClick={()=>window.open("https://maps.app.goo.gl/v31Y48diWtMPS5ZK8?g_st=aw","_blank")}>
                📍 Open Location
              </button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center font-sans">Guaranteed response within 24 hrs<br/>Monday-Saturday, 8am-5pm</p>
            </div>
            <div className="mt-6">
              <img src="images/image.jpg" className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto rounded-lg shadow-md" alt="contact" />
            </div>
            
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-6 font-serif">Frequently Asked Questions</h2>
        <Faq />
      </div>
    </div>
  );
}

export default Contacts;