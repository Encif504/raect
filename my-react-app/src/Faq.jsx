import { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Where is your farm located and do you deliver?",
      answer: "We are located off Bungoma-Mumias Road, Mukhweya Village at Bungoma-Kakamega County border. We supply our products to the local community. Depending on order size and location, we may offer delivery. Contact us directly to confirm availability and delivery options."
    },
    {
      question: "Do you offer farm visits, tours or educational experiences?",
      answer: "Yes, we do offer farm visits and tours. Talk to us to book your tour."
    },
    {
      question: "How do you ensure the quality of your eggs and chicken?",
      answer: "Our poultry is raised with proper nutrition, clean housing, and careful management. We focus on healthy feeding practices and maintain strict hygiene standards to ensure fresh, safe, and high quality products."
    },
    {
      question: "Are your farm operations environmentally friendly?",
      answer: "Yes. We use solar energy to power our farm and implement sustainable waste management systems. Our goal is to reduce waste, lower energy costs, and protect the environment."
    },
    {
      question: "What role do Black Soldier Flies play on your farm?",
      answer: "Black Soldier Flies help us manage organic waste sustainably. They convert waste into high protein feed for poultry and fish, reducing environmental impact while improving farm efficiency"
    },
    {question: "What products do you currently sell?",
     answer: "We sell fresh eggs, ex layers, hybrid chicken, honey, fish, dried Black Soldier Flies, Black Soldier Fly maggots, Black Soldier Fly eggs, and chicken waste for manure or agricultural use."
    },
    {question:"How can I place an order or make bulk purchases?",
     answer: "You can contact us directly through phone or message to place orders. For bulk purchases such as poultry, fish, or Black Soldier Fly products, we recommend reaching out in advance to confirm availability."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded">
          
          {/* Question Row */}
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 dark:bg-gray-400 shadow-lg"
          >
            <h3 className="font-semibold dark:text-black font-serif">{faq.question}</h3>

            {/* + or - */}
            <span className="text-xl font-bold dark:text-amber-900">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>

          {/* Answer */}
          {activeIndex === index && (
            <div className="p-4 bg-gray-400 tracking-tighter dark:text-amber-800">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;