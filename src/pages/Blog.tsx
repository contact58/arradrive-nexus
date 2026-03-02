import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    slug: "marche-taxis-arras-lesquin-2026",
    title: "Le marché des taxis à Arras et Lesquin en 2026",
    excerpt:
      "Découvrez comment le secteur du transport évolue dans la métropole d'Arras et autour de l'aéroport de Lesquin. Tendances, innovations et perspectives pour les usagers.",
    date: "15 février 2026",
    readTime: "5 min",
  },
  {
    slug: "evenements-arras-2026",
    title: "Actualités d'Arras : les événements à ne pas manquer",
    excerpt:
      "Arras est une ville dynamique riche en événements culturels, sportifs et festifs. Retrouvez notre sélection des rendez-vous incontournables pour cette année.",
    date: "8 février 2026",
    readTime: "4 min",
  },
  {
    slug: "transport-local-gare-aeroport",
    title: "Pourquoi choisir un transport local pour vos trajets Gare d'Arras / Aéroport Lesquin",
    excerpt:
      "Un chauffeur local connaît chaque rue, chaque raccourci. Découvrez les avantages d'un service de proximité pour vos déplacements entre la gare et l'aéroport.",
    date: "1 février 2026",
    readTime: "6 min",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="sr-only">Blog taxi Arras - actualités transport à Arras et Lesquin</h1>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Blog</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">Actualités & Conseils</h2>
          <p className="text-muted-foreground mt-3">Restez informé sur le transport et la vie locale à Arras.</p>
        </motion.div>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass neon-border rounded-2xl p-8 group hover:bg-card/80 transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime} de lecture</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                Lire l'article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Blog;
