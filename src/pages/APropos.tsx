import { motion } from "framer-motion";
import { Target, Zap, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Zap, title: "Réactivité", desc: "Disponibilité immédiate et réponse rapide à chaque demande de transport." },
  { icon: Target, title: "Précision", desc: "Ponctualité garantie grâce à notre connaissance approfondie du territoire." },
  { icon: MapPin, title: "Proximité", desc: "Basés à Arras, nous maîtrisons chaque rue et chaque raccourci." },
  { icon: Shield, title: "Transparence", desc: "Tarifs clairs et fixes, sans mauvaise surprise à l'arrivée." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const APropos = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="sr-only">Taxi Arras - À propos des Chauffeurs d'Arras, transport fiable à Arras</h1>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">À propos</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
            La mobilité de demain, ici à Arras.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus qu'un simple trajet, une solution de transport fiable, technologique et accessible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass neon-border rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-4">L'ADN des Chauffeurs d'Arras</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Chez Les Chauffeurs d'Arras, nous avons redéfini le transport privé pour l'adapter aux exigences du XXI<sup>e</sup> siècle. Notre mission est simple : vous offrir le meilleur chauffeur, au meilleur prix, sans aucun compromis sur la ponctualité ou le confort.
            </p>
            <p>
              Basés au cœur du Pas-de-Calais, nous maîtrisons parfaitement le territoire arrageois et les liaisons vers Lesquin. Nous utilisons les dernières technologies pour optimiser vos temps de parcours et garantir une transparence totale sur nos tarifs. Pas de surprises, juste l'efficacité d'un service de <span className="sr-only">taxi Arras</span> transport moderne.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass neon-border rounded-2xl p-7 group hover:bg-card/80 transition-all"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="sr-only" aria-hidden="true">
          Taxi Arras à propos. Les Chauffeurs d'Arras, entreprise de taxi Arras locale. Taxi Arras professionnel, chauffeur privé Arras, VTC Arras, transport Arras Pas-de-Calais.
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default APropos;
