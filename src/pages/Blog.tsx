import { motion } from "framer-motion";
import { Calendar, ArrowRight, TrendingUp, PartyPopper, Route } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    slug: "marche-taxis-arras-lesquin-2026",
    title: "Évolution des transports entre Arras et l'aéroport de Lesquin : ce qu'il faut savoir",
    excerpt:
      "Le flux de voyageurs entre la zone urbaine d'Arras et l'aéroport de Lille-Lesquin n'a jamais été aussi dense. Pour les professionnels comme pour les particuliers, trouver un taxi Arras disponible et compétitif est devenu un enjeu quotidien.",
    content:
      "Chez Les Chauffeurs d'Arras, nous analysons ces flux en temps réel pour garantir une disponibilité constante. La clé du marché actuel ? La réactivité et la maîtrise des prix fixes, loin des tarifs variables des plateformes impersonnelles.",
    date: "15 février 2026",
    readTime: "5 min",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    slug: "evenements-arras-2026",
    title: "Arras en mouvement : les grands événements de la saison",
    excerpt:
      "De la Grand'Place aux quartiers en plein renouveau, Arras vibre au rythme de ses festivals et de son dynamisme économique.",
    content:
      "Que ce soit pour vous rendre au Main Square Festival ou pour un rendez-vous d'affaires dans le centre-ville, la circulation peut s'avérer complexe. Faire appel à un chauffeur local, c'est l'assurance de contourner les bouchons grâce à une connaissance parfaite des rues d'Arras et de sa périphérie.",
    date: "8 février 2026",
    readTime: "4 min",
    icon: PartyPopper,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    slug: "transport-local-gare-aeroport",
    title: "Pourquoi choisir un transport local pour vos trajets Gare d'Arras / Aéroport Lesquin",
    excerpt:
      "Réserver un trajet pour un départ matinal ou une arrivée tardive demande une confiance absolue.",
    content:
      "En choisissant un acteur localisé à Arras, vous bénéficiez d'une proximité géographique qui réduit les risques de retard. Notre flotte de berlines modernes assure vos transferts vers Lesquin dans des conditions de sécurité et de calme optimales. Simplifiez-vous la ville, choisissez l'efficacité.",
    date: "1 février 2026",
    readTime: "6 min",
    icon: Route,
    gradient: "from-emerald-500/20 to-teal-500/20",
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
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="sr-only">Blog taxi Arras - actualités transport à Arras et Lesquin</h1>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Blog</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">Actualités & Conseils</h2>
          <p className="text-muted-foreground mt-3">Restez informé sur le transport et la vie locale à Arras.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass neon-border rounded-2xl overflow-hidden group hover:bg-card/80 transition-all flex flex-col"
            >
              {/* Card header with icon */}
              <div className={`bg-gradient-to-br ${article.gradient} p-8 flex items-center justify-center`}>
                <article.icon className="w-12 h-12 text-primary" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed flex-1">{article.content}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-5">
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Blog;
