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
      <header className="bg-[url('/images/hens.jpg')] bg-cover bg-center rounded p-8 text-center">
        <h2 className=" frost text-2xl md:text-3xl font-bold text-white">Contact us</h2>
      </header>

      <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-8">
        <form ref={formRef} className="w-full md:w-2/3 bg-white dark:bg-gray-400 p-6 rounded shadow" onSubmit={handleSubmit}>
          <div className="grid gap-3 dark:text-black">
            <label className="sr-only ">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-2 rounded px-3 bg-gray-100 dark:bg-gray-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone(optional)"
              value={formData.phone}
              onChange={handleChange}
             
              className="w-full py-2 rounded px-3 bg-gray-100 dark:bg-gray-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 rounded px-3 bg-gray-100 dark:bg-gray-300"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-2 rounded px-3 bg-gray-100 dark:bg-gray-300"
            />

            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 rounded px-3 bg-gray-100 h-32 dark:bg-gray-300"
            />

            <button type="submit" disabled={loading} className="w-max mx-auto px-6 py-2 bg-amber-700 text-white rounded disabled:opacity-50">{loading ? 'Sending...' : 'Send message'}</button>
            {status === 'success' && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>}
          </div>
        </form>

        <aside className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="bg-yellow-600 p-6 rounded shadow glass outline outline-solid outline-amber-800">
            <h3 className="text-amber-800 bg-amber-300 px-4 rounded font-bold w-fit">Direct Contact Details</h3>
            <div className="mt-4 space-y-2 bg-amber-100 rounded">
              <div className="rounded px-2 py-1 flex text-white overflow-hidden">
                <img src="/images/email.png" className="size-7 pt-1 shrink-0"></img> <p className="px-2 text-justify text-black pt-1 animate-marquee whitespace-nowrap min-w-[200%]">grannada.enterprise@gmail.com &nbsp; grannada.enterprise@gmail.com</p></div>
              <div className="rounded px-2 py-1 flex text-white">
                <img src="/images/phone.png" className="size-7 pt-1"></img>
                <small className="px-3 font-bold text-black pt-1">0740 207040</small>

              </div>
              <div className="rounded px-2 py-1 flex text-white">
                <img src="/images/facebook.png" alt="facebook" className="size-7" />
                <small className="px-3 font-bold text-black pt-1">Grannada Farm</small></div>
            </div>

            <div className="mt-6 grid place-items-center">
              <h4 className="bg-amber-300 inline-block px-3 py-1 rounded">Response Time</h4>
              <small className="mt-2 font-extralight">Within 24 hrs from Monday-Saturday between 8am-5pm</small>
            </div>
            <div className="place-items-center mt-2">
              <img src="images/image.jpg" className="w-full max-w-xs rounded mx-auto" alt="contact" />
            </div>
            
          </div>
        </aside>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">Frequently Asked Questions</h2>
        <Faq />
      </div>
    </div>
  );
}

export default Contacts;