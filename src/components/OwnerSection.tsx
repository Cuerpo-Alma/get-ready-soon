import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import joseProfile from "@/assets/jose_profile.png";

const OwnerSection = () => {
    return (
        <section id="owner" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                            Ganzheitliche Begleitung - <br />
                            <span className="text-primary italic">Das Herz hinter Cuerpo & Alma.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Meine Arbeit ist mehr als ein Beruf. Sie ist Ausdruck meiner Überzeugung, dass echte Gesundheit aus Balance, Achtsamkeit und innerer Verbindung entsteht.
                            </p>
                            <p>
                                Als ehemaliger Fussballspieler habe ich früh gelernt, wie entscheidend es ist, Körper und Seele in Einklang zu halten. Aus dieser Erfahrung heraus entwickelte sich mein Weg: Menschen auf einer tieferen Ebene zu begleiten und ihnen Raum für Regeneration, Selbstheilung und neue Kraft zu schenken.
                            </p>
                            <p>
                                Seit 2014 widme ich mich der ganzheitlichen Arbeit mit Menschen und habe mein Wissen durch kontinuierliche Weiterbildungen, unter anderem in der Energetikarbeit, im Schröpfen sowie in der Gesundheits- und Sportberatung stetig erweitert. Dabei ist eine Arbeitsweise entstanden, die Präzision, Intuition und ein tiefes Verständnis für individuelle Prozesse miteinander verbindet.
                            </p>
                            <p>
                                In meiner Begleitung geht es nicht nur darum, Symptome zu lindern, sondern darum, die zugrunde liegende Balance wiederzufinden. Gemeinsam schaffen wir die Basis für nachhaltige Vitalität und ein neues Körpergefühl.
                            </p>
                        </div>

                        <div className="mt-10 p-6 bg-white rounded-2xl border border-border/50 shadow-sm relative italic text-foreground/80">
                            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/20" />
                            „Die beste Investition ist die in dich selbst und deine Gesundheit.“
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <img
                                src={joseProfile}
                                alt="Jose Barassa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/50 rounded-full blur-3xl z-0" />
                        <div className="absolute top-1/2 -right-12 w-24 h-24 border border-primary/20 rounded-full z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OwnerSection;
