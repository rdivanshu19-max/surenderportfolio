import { motion } from 'framer-motion';
import { profileInfo, achievements, expertiseAreas, careerTimeline } from '@/data/profile';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProfessionalSkills } from '@/components/ProfessionalSkills';
import { Testimonials } from '@/components/Testimonials';
import { PerformanceCharts } from '@/components/PerformanceCharts';
import { SEOHead } from '@/components/seo/SEOHead';
import { Mail, Linkedin, TrendingUp, Users, Briefcase, Building, Target, Package, ClipboardList, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const iconMap: Record<string, React.ElementType> = {
  'trending-up': TrendingUp,
  'users': Users,
  'briefcase': Briefcase,
  'building': Building,
  'target': Target,
  'package': Package,
  'clipboard-list': ClipboardList,
};

export default function Home() {
  return (
    <>
      <SEOHead
        title={`${profileInfo.name} - ${profileInfo.title}`}
        description={profileInfo.tagline}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Photo */}
              <motion.div
                className="md:col-span-2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="relative">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl">
                    <img
                      src={profilePhoto}
                      alt={profileInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap shadow-lg">
                    {profileInfo.experienceYears} Years Experience
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                className="md:col-span-3 text-center md:text-left space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    {profileInfo.name}
                  </h1>
                  <p className="text-lg md:text-xl font-medium text-primary/80 tracking-wide">
                    {profileInfo.title}
                  </p>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  {profileInfo.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href={`mailto:${profileInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <Mail className="size-4" />
                    Get in Touch
                  </a>
                  <a
                    href={profileInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background rounded-lg font-medium hover:bg-accent transition-colors"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="size-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </section>

        {/* Key Achievements */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
                Key Achievements
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => {
                const Icon = iconMap[item.icon] || Briefcase;
                return (
                  <ScrollReveal key={item.id} delay={index * 0.1}>
                    <div className="text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                        {item.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {item.label}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
                About Me
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5">
                {profileInfo.about.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light leading-relaxed text-muted-foreground text-center"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
                Core Expertise
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => {
                const Icon = iconMap[area.icon] || Briefcase;
                return (
                  <ScrollReveal key={area.id} delay={index * 0.1}>
                    <div className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {area.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Skills */}
        <ProfessionalSkills />

        {/* Career Timeline */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
                Career Timeline
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {careerTimeline.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 0.15}>
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                    
                    <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {entry.current && (
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground font-medium">
                          {entry.years}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {entry.role}
                      </h3>
                      <p className="text-base font-medium text-primary/70 mb-3">
                        {entry.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Charts */}
        <PerformanceCharts />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact CTA */}
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground font-light mb-8">
                Open to discussing opportunities, collaborations, and industry insights.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={`mailto:${profileInfo.email}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Mail className="size-4" />
                  {profileInfo.email}
                </a>
                <a
                  href={profileInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-border bg-background rounded-lg font-medium hover:bg-accent transition-colors"
                >
                  <Linkedin className="size-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
