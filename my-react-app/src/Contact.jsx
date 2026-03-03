import { useState } from "react";
import Faq from "./Faq";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="bg-[url('/images/hens.jpg')] bg-cover bg-center rounded p-8 text-center">
        <h2 className=" frost text-2xl md:text-3xl font-bold text-white">Contact us</h2>
      </header>

      <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-8">
        <form className="w-full md:w-2/3 bg-white p-6 rounded shadow" onSubmit={handleSubmit} action="grannada.farm@gmail.com" encType="text/plain" method="POST">
          <div className="grid gap-3">
            <label className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-2 rounded px-3 bg-gray-100"
            />

            <input
              type="tel"
              name="phone"
              placeholder="0712345678"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full py-2 rounded px-3 bg-gray-100"
            />

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 rounded px-3 bg-gray-100"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-2 rounded px-3 bg-gray-100"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 rounded px-3 bg-gray-100 h-32"
            />

            <button type="submit" className="w-max mx-auto px-6 py-2 bg-amber-700 text-white rounded">Send message</button>
          </div>
        </form>

        <aside className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="bg-yellow-600 p-6 rounded shadow glass outline outline-solid outline-amber-800">
            <h3 className="text-amber-800 bg-amber-300 px-4 rounded font-bold w-fit">Direct Contact Details</h3>
            <div className="mt-4 space-y-2 bg-amber-100 rounded">
              <div className="rounded px-2 py-1 flex text-white">
                <img src="/images/email.png" className="size-7 pt-1"></img> <small className="px-3 font-bold text-black pt-1">grannada.farm@gmail.com</small></div>
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