import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Activity, Hand, Bone, Brain, Zap, ChevronDown, LucideIcon, Sparkles } from "lucide-react";

import serviceMassage from "@/assets/service_massage.png";
import serviceBms from "@/assets/real_photos/bms_device.png";
import serviceFrequency from "@/assets/service_frequency.png";
import serviceBioplasmatic from "@/assets/real_photos/biotensor.png";
import serviceConsultation from "@/assets/service_consultation.png";
import serviceBiophotonen from "@/assets/real_photos/biophoton_device.png";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Bone,
  Brain,
  Zap,
};

interface Service {
  iconName: string;
  image: string;
  title: string;
  price: string;
  description: string;
  accent: string;       // soft light bg color class
  iconBg: string;       // icon container bg
  iconColor: string;    // icon & text accent color
  border: string;       // card border color
  detail: string;       // expanded detail text
  highlights: string[]; // bullet highlights shown on expand
}

const services: Service[] = [
  {
    iconName: "Hand",
    image: serviceMassage,
    title: "Individuelle Massagen",
    price: "Ab 120",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Personalisierte Massagetherapie, die auf Ihre muskulären Bedürfnisse und Entspannungsziele zugeschnitten ist.",
    detail: "Wählen Sie aus meinen fachmännisch angewandten Massagemethoden: Klassische Massage, Sportmassage oder Schröpfen. Jede Sitzung wird an Ihren individuellen Körper angepasst, um Verspannungen zu lösen und die Regeneration zu fördern.",
    highlights: ["Klassische Massage", "Sportmassage", "Schröpfen"],
  },
  {
    iconName: "Activity",
    image: serviceBms,
    title: "Biomechanische Stimulation (BMS)",
    price: "Ab 24",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Die biomechanische Stimulation nach Prof. Dr. habil. Vladimir T. Nazarov ist eine hochwirksame Methode zur Regeneration.",
    detail: "BMS nutzt präzise kalibrierte mechanische Vibrationen, die direkt auf das Muskel- und Bindegewebe einwirken. Preise: 45 Minuten CHF 72, 30 Minuten CHF 48, 15 Minuten CHF 24.",
    highlights: ["Regeneration durch Schwingung", "Beschleunigte Muskelerholung", "Tiefenwirkung"],
  },
  {
    iconName: "Zap",
    image: serviceFrequency,
    title: "Energetikarbeit",
    price: "145",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Tiefgreifende energetische Blockaden lösen und den Energiefluss im Körper harmonisieren.",
    detail: "Mit verschiedenen Techniken der Energetikarbeit unterstütze ich Sie dabei, Blockaden auf feinstofflicher Ebene aufzulösen, um die Selbstheilungskräfte zu aktivieren und ein tiefes Gefühl der Ausgeglichenheit zu schaffen.",
    highlights: ["Auflösen von Blockaden", "Harmonisierung des Energieflusses", "Aktivierung der Selbstheilungskräfte"],
  },
  {
    iconName: "Brain",
    image: serviceBioplasmatic,
    title: "Bioplasmatik & Biotensor Analyse",
    price: "Ab 96",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Die bioplasmatische Analyse mit dem Biotensor ermöglicht das präzise Auffinden energetischer Störfelder.",
    detail: "Harmonisieren energetischer Störfelder in Körper, Umfeld und Lebensraum, um Balance, Verträglichkeit und Wohlbefinden ganzheitlich zu fördern. 60 Minuten ab CHF 96.",
    highlights: ["Bioelektrischer Energiefeldausgleich", "Präzises Auffinden von Störfeldern", "Ganzheitliche Harmonisierung"],
  },
  {
    iconName: "Bone",
    image: serviceConsultation,
    title: "Gesundheitsberatung",
    price: "Ab 96",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Individuelle, ganzheitliche Beratung zur Förderung Ihrer Balance, Energie und Lebensqualität.",
    detail: "Mit gezielten Impulsen bei Stress, Erschöpfung, Schlafproblemen, körperlichen Beschwerden und Gewichtsproblemen. 60 Minuten ab CHF 96.",
    highlights: ["Personalisierter Gesundheitsfahrplan", "Nachhaltige Vitalität", "Ganzheitlicher Ansatz"],
  },
  {
    iconName: "Activity",
    image: serviceBiophotonen,
    title: "Biophotonen-Licht",
    price: "Ab 24",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Innovative Technologie trifft auf natürliche Frequenzen. Sanfte Impulse aus solarem Rauschen und Licht.",
    detail: "Das ProLight LemBaLight vereint modernste Technologie mit der Kraft natürlicher Frequenzen zur Unterstützung der Balance und Regeneration des Körpers. Preise: 30 Minuten CHF 48, 15 Minuten CHF 24.",
    highlights: ["Zellregeneration", "Natürliche Frequenzen", "Sanfte Lichtimpulse"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-slate-200/40 to-slate-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-slate-100/50 to-slate-50/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 text-primary text-[11px] font-bold tracking-[0.18em] uppercase mb-5 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Meine Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">
            Dienstleistungen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Professionelle therapeutische Lösungen, die darauf ausgerichtet sind, das Gleichgewicht wiederherzustellen, die Leistung zu steigern und Ihre Lebensqualität zu verbessern.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-7 w-full"
        >
          {services.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Activity;
            const isOpen = openIndex === idx;

            return (
              <motion.article
                variants={cardVariants}
                key={s.title}
                className={`w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] group relative rounded-3xl border bg-gradient-to-br ${s.accent} border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col`}
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 border-b border-border">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                </div>

                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/20" />

                <div className="relative p-7 flex flex-col flex-1">
                  {/* Icon + Price row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className={`relative inline-flex rounded-2xl ${s.iconBg} p-3.5 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`h-7 w-7 ${s.iconColor}`} />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 mb-0.5">
                        Sitzung {s.price.includes('Ab') ? 'ab' : ''}
                      </span>
                      <div className="text-2xl font-black text-foreground leading-none">
                        <span className={`text-sm font-bold ${s.iconColor} mr-1`}>CHF</span>
                        {s.price.replace('Ab ', '')}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-foreground tracking-tight mb-2.5 transition-colors duration-300 group-hover:${s.iconColor}`}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-foreground/60 leading-relaxed mb-6 flex-1">
                    {s.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-black/5 mb-5" />

                  {/* Learn more toggle */}
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className={`flex items-center justify-between w-full text-sm font-semibold ${s.iconColor} hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current rounded-lg ${isOpen ? 'mb-2' : ''}`}
                  >
                    <span>{isOpen ? "Weniger anzeigen" : "Mehr erfahren"}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  {/* Expandable detail panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2">
                          <p className="text-[14px] text-foreground/70 leading-relaxed mb-5">
                            {s.detail}
                          </p>

                          {/* Highlight pills */}
                          <ul className="flex flex-col gap-3">
                            {s.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className={`mt-1.5 inline-flex w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary`} />
                                <span className="text-[13px] font-medium text-foreground/75 leading-snug">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* Payment Info */}
          <div className="mx-auto max-w-2xl bg-white/60 backdrop-blur-sm border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm text-center">
            <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mb-4">
              Im Mittelpunkt meiner Arbeit steht Ihre individuelle Betreuung unabhängig von Krankenkassen und frei von äußeren Vorgaben. Die Investition in Ihre Gesundheit zahlt sich aus: Sie stärkt Ihr Wohlbefinden, unterstützt die Prävention und fördert langfristige Vitalität.
            </p>
            <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">
              Die Bezahlung erfolgt bequem im Anschluss an die Behandlung <span className="font-semibold text-foreground">bar oder via TWINT</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

