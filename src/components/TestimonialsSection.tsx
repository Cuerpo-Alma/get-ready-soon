import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Yvonne",
    role: "Kundin mit chronischer Müdigkeit",
    quote:
      "Dank der bioplasmatischen Analyse mit dem Biotensor konnte ich gezielt herausfinden, welche Lebensmittel meinen Körper positiv beeinflussen und welche Nahrungsergänzungsmittel mein Körper tatsächlich braucht. Unverträglichkeiten wurden sichtbar gemacht und ich konnte meine Ernährung entsprechend anpassen. Seitdem fühle ich mich deutlich ausgeglichener, leichter und energiegeladener.",
    rating: 5,
  },
  {
    name: "Dominik",
    role: "Geschäftsführer",
    quote:
      "Die energetische Begleitung hat mir geholfen, tief verwurzelte Themen zu erkennen und Schritt für Schritt aufzulösen. Besonders beeindruckt hat mich, wie sich innere Unruhe und Erschöpfung spürbar reduziert haben. Ich fühle mich heute ausgeglichener, stabiler und wieder mehr in meiner eigenen Kraft.",
    rating: 5,
  },
  {
    name: "Maria",
    role: "Rentnerin",
    quote:
      "Die Frequenztherapie mit Biophotonenlicht war für mich zunächst ungewohnt. Die Wirkung jedoch schnell spürbar. Besonders beeindruckend war, dass meine Knieschmerzen vollständig verschwunden sind und ich mich wieder schmerzfrei bewegen kann.",
    rating: 5,
  },
  {
    name: "Sandro",
    role: "Sportler",
    quote:
      "Die Kombination aus Sportmassage und Biomechanische Stimulation hat meine Regeneration deutlich verbessert. Meine Muskelspannungen haben sich gelöst und ich fühle mich spürbar leistungsfähiger und dynamischer.",
    rating: 5,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Referenzen
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
            Echte Erfahrungen. <br />
            <span className="text-primary italic">Spürbare Veränderung.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Einblicke in persönliche Wege zu mehr Wohlbefinden, innerer Balance und neuer Lebensqualität.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              variants={itemVariants}
              key={idx}
              className="group relative rounded-3xl border border-border/40 bg-white/50 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/20"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 mb-8 italic relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{t.name}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/60">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

