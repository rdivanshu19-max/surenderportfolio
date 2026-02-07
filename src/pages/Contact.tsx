import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { profileInfo } from '@/data/profile';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${profileInfo.name} - ${profileInfo.title}`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Open to opportunities and collaborations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Details */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Separator />

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium tracking-wide text-muted-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${profileInfo.email}`}
                      className="text-base md:text-lg font-light hover:text-primary transition-colors"
                    >
                      {profileInfo.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Linkedin className="size-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium tracking-wide text-muted-foreground">
                      LinkedIn
                    </p>
                    <a
                      href={profileInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-light hover:text-primary transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium tracking-wide text-muted-foreground">
                      Location
                    </p>
                    <p className="text-base md:text-lg font-light">
                      {profileInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
