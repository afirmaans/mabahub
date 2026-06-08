import { useState } from 'react'

export default function FAQItem({ item, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <article className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{item.question}</span>

        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <p className="faq-answer" id={`faq-answer-${item.id}`}>
          {item.answer}
        </p>
      )}
    </article>
  )
}