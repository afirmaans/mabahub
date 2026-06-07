import FAQItem from '../components/FAQItem'
import SectionHeader from '../components/SectionHeader'
import { faqItems } from '../data/mabaData'

export default function FAQ() {
  return (
    <main className="page">
      <div className="container faq-page">
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan umum"
          description="Accordion sederhana untuk menjawab pertanyaan teknis dan kebutuhan peserta."
        />

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FAQItem item={item} key={item.id} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </main>
  )
}
