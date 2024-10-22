'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What services does NJOKARU offer?",
    answer: "NJOKARU offers a wide range of services including garden design, landscaping, regular maintenance, and more."
  },
  {
    question: "Can NJOKARU handle large-scale landscaping projects?",
    answer: "Yes, NJOKARU has experience in landscaping projects of all sizes, from small backyard gardens to extensive commercial spaces."
  },
  {
    question: "What kind of maintenance services does NJOKARU offer?",
    answer: "NJOKARU provides comprehensive maintenance services including lawn mowing, pruning, weeding, fertilizing, pest control, and irrigation system maintenance."
  },
  {
    question: "Does NJOKARU also offer tree removal or planting services?",
    answer: "Yes, NJOKARU can handle tree removal and planting services, ensuring safety and proper techniques are used."
  },
  {
    question: "What are the factors NJOKARU considers when designing a garden?",
    answer: "NJOKARU takes into account various elements such as your desired style, the size and shape of your space, existing features, and local climate to create a personalized garden design."
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6" id={`faq-answer-${index}`}>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}