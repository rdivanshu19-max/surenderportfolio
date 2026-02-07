import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Sales Management', level: 95 },
  { name: 'Supply Chain & Logistics', level: 90 },
  { name: 'Team Leadership', level: 95 },
  { name: 'Inventory Planning', level: 88 },
  { name: 'Distribution Network', level: 85 },
  { name: 'Consumer Insights & Strategy', level: 82 },
  { name: 'FMCG Operations', level: 92 },
  { name: 'Stakeholder Management', level: 85 },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-semibold text-primary">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export function ProfessionalSkills() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
            Professional Skills
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
