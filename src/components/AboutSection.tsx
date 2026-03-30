import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Sparkles, Star } from "lucide-react";
import joseProfile from "@/assets/jose_profile.png";

const aboutFeatures = [
  {
    icon: Heart,
    title: "Ganzheitliche Begleitung",
    description: "Deine Gesundheit und dein Wohlbefinden stehen im Mittelpunkt meiner Arbeit. Gemeinsam schaffen wir die Basis für nachhaltige Vitalität."
  },
  {
    icon: Award,
    title: "Expertise & Intuition",
    description: "Seit 2014 begleite ich Menschen mit fachlicher Präzision und tiefem Verständnis für individuelle Prozesse."
  },
  {
    icon: Users,
    title: "Individueller Ansatz",
    description: "Kein Weg ist wie der andere. Deshalb wird jede Behandlung persönlich auf dich und deine Bedürfnisse abgestimmt."
  },
  {
    icon: Target,
    title: "Nachhaltige Vitalität",
    description: "Mein Fokus liegt darauf, die zugrunde liegende Balance wiederzufinden und langfristige Gesundheit zu fördern."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Über mich
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Ankommen. Loslassen. <br />
              <span className="text-primary italic">In Selbstheilung kommen.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ich unterstütze dich dabei, Stress abzubauen, besser zu schlafen und wieder mehr Energie und Lebensfreude zu spüren – auch bei körperlichen Beschwerden, Sportverletzungen oder chronischen Schmerzen.
              </p>
              <p>
                Individuell abgestimmt, ganzheitlich und auf deine Bedürfnisse ausgerichtet, schaffen wir gemeinsam den Raum für deine Regeneration, Selbstheilung und neue Kraft.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

