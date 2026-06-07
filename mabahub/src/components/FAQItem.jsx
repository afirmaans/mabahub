import { useState } from 'react'

export default function FAQItem({ item, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <article className="faq-item">
      <button
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{item.question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && <p className="faq-answer">{item.answer}</p>}
    </article>
  )
}
