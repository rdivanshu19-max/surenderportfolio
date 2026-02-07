import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Testimonial {
  id: string;
  quote: string;
  role: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'An exceptional leader who transformed our regional operations. His strategic vision and hands-on approach to team building resulted in unprecedented sales growth that exceeded all targets.',
    role: 'Regional Director',
    relationship: 'Former Supervisor',
  },
  {
    id: '2',
    quote: 'His deep understanding of supply chain dynamics and inventory management saved us significant costs while improving product availability across all distribution channels.',
    role: 'VP – Operations',
    relationship: 'Senior Colleague',
  },
  {
    id: '3',
    quote: 'A true people leader. He built and mentored a team of over 100 members, creating a culture of accountability and excellence that consistently delivered results quarter after quarter.',
    role: 'HR Head',
    relationship: 'Cross-functional Partner',
  },
  {
    id: '4',
    quote: 'His ability to read market trends and adapt strategies in real time is remarkable. The 46% regional sales increase under his leadership speaks for itself.',
    role: 'National Sales Head',
    relationship: 'Senior Leadership',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="relative p-6 md:p-8 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <Quote className="size-8 text-primary/15 absolute top-5 right-5" />
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">
            {testimonial.role.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground">{testimonial.relationship}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            What Colleagues Say
          </h2>
          <p className="text-center text-muted-foreground font-light mb-14 max-w-xl mx-auto">
            Feedback from supervisors and cross-functional partners throughout my career.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
