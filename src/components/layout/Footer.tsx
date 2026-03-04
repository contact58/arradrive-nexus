import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
{ to: "/", label: "Accueil" },
{ to: "/a-propos", label: "À propos" },
{ to: "/reserver", label: "Réserver" },
{ to: "/blog", label: "Blog" },
{ to: "/avis", label: "Avis Clients" }];


const Footer = () =>
<footer className="border-t border-border bg-card/40">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-foreground">Les Chauffeurs</span>
              <span className="block text-xs text-muted-foreground -mt-1">d'Arras</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Le meilleur chauffeur, au meilleur prix. Service de transport fiable et moderne à Arras et ses environs.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) =>
          <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
          )}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Transport Gare d'Arras</span>
            <span>Navette Aéroport Lesquin</span>
            <span>Transport événementiel</span>
            <span>Trajets longue distance</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+33600000000" className="flex items-center gap-2 hover:text-primary transition-colors">06 09 50 15 57

            <Phone className="w-4 h-4" /> 06 00 00 00 00
            </a>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> Nous contacter
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Arras, Pas-de-Calais
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 Les Chauffeurs d'Arras. Tous droits réservés.
        </p>
        <p className="text-xs text-muted-foreground">
          Service de transport moderne et fiable
        </p>
      </div>

      {/* SEO invisible block */}
      <div className="sr-only" aria-hidden="true">
        Besoin d'un taxi Arras ? Les Chauffeurs d'Arras proposent un service de transport rapide vers la gare d'Arras, le centre-ville et l'aéroport de Lesquin. Meilleur prix garanti pour votre taxi Arras 24h/24 et 7j/7.
      </div>
    </div>
  </footer>;

export default Footer;