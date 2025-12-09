// ============ KIWI BUILDER V8 — DEFAULT CONTENT (ENRICHED) ============
import type { ActivityId, HeroContent, ServicesContent, AboutContent, TestimonialsContent, PricingContent, GalleryContent, CtaContent, ContactContent } from '../types'

// ============ PLACEHOLDER IMAGES - DIVERSIFIED ============
export const images = {
  // Restaurant
  restaurant: {
    hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    interior: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    chef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
    dish1: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    dish2: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    dish3: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
    dessert: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    terrace: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
  },
  // Photographer
  photographer: {
    hero: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80',
    portrait1: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    portrait2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    wedding1: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    wedding2: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    corporate: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    landscape: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    bw: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80',
  },
  // Tech/SaaS
  tech: {
    hero: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    dashboard: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    code: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  // Event
  event: {
    hero: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
    concert: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    conference: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    party: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  // Agency
  agency: {
    hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    creative: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
  },
  // Beauty
  beauty: {
    hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
    spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    makeup: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    before1: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80',
    after1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
  },
  // Avatars
  avatars: {
    woman1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    man1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    woman2: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    man2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    couple: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80',
  },
  // Generic
  generic: {
    hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  // Fitness
  fitness: {
    hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    gym: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    training: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80',
    yoga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  },
}

// ============ RESTAURANT CONTENT ============
export const restaurantContent = {
  hero: {
    badge: 'Restaurant gastronomique',
    title: 'Une expérience culinaire unique',
    subtitle: 'Cuisine française raffinée',
    description: 'Découvrez notre cuisine créative où tradition et innovation se rencontrent pour créer des moments inoubliables.',
    image: images.restaurant.hero,
    primaryCta: { text: 'Réserver une table', href: '#contact' },
    secondaryCta: { text: 'Voir le menu', href: '#services' },
    openingHours: '12h-14h30 • 19h-22h30',
    rating: '4.8',
    reviewCount: 234,
    stats: [
      { value: '1★', label: 'Michelin' },
      { value: '4.8', label: 'Note' },
      { value: '15+', label: 'Années' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Notre carte',
    title: 'Le Menu',
    subtitle: 'Des produits frais et de saison',
    categories: ['Entrées', 'Plats', 'Desserts'],
    services: [
      { title: 'Carpaccio de Saint-Jacques', description: 'Agrumes, huile de truffe, pousses de roquette', price: '24€', category: 'Entrées', popular: true, image: images.restaurant.dish1 },
      { title: 'Velouté de butternut', description: 'Chantilly de parmesan, noisettes torréfiées', price: '16€', category: 'Entrées', image: images.restaurant.dish2 },
      { title: 'Foie gras maison', description: 'Chutney de figues, brioche toastée', price: '28€', category: 'Entrées', image: images.restaurant.dish3 },
      { title: 'Filet de bœuf Rossini', description: 'Sauce périgourdine, pommes fondantes', price: '42€', category: 'Plats', popular: true, image: images.restaurant.dish1 },
      { title: 'Homard bleu rôti', description: 'Beurre d\'agrumes, légumes croquants', price: '58€', category: 'Plats', image: images.restaurant.dish2 },
      { title: 'Risotto aux cèpes', description: 'Parmesan 24 mois, huile de truffe', price: '32€', category: 'Plats', image: images.restaurant.dish3 },
      { title: 'Sphère chocolat', description: 'Cœur coulant caramel, glace vanille', price: '16€', category: 'Desserts', popular: true, image: images.restaurant.dessert },
      { title: 'Tarte fine aux pommes', description: 'Caramel beurre salé, crème fraîche', price: '14€', category: 'Desserts', image: images.restaurant.dessert },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'Notre histoire',
    title: 'Une passion familiale',
    subtitle: 'Depuis 1987',
    description: 'Depuis trois générations, notre famille perpétue l\'art de la gastronomie française. Notre chef, formé dans les plus grandes maisons parisiennes, sublime les produits de notre terroir avec créativité et respect des traditions.',
    image: images.restaurant.chef,
    features: ['Produits locaux et de saison', 'Cave de 500 références', 'Terrasse vue jardin'],
    stats: [
      { value: '1987', label: 'Fondation' },
      { value: '1', label: 'Étoile Michelin' },
      { value: '15', label: 'Ans d\'expérience' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Avis clients',
    title: 'Ce qu\'ils en disent',
    averageRating: 4.8,
    totalReviews: 234,
    testimonials: [
      { name: 'Marie Lefebvre', role: 'Dîner anniversaire', content: 'Une soirée magique ! Le menu dégustation était exceptionnel et le service irréprochable. Une adresse à ne pas manquer.', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Pierre Dumont', role: 'Client régulier', content: 'Ma table préférée depuis 10 ans. La constance dans l\'excellence est remarquable. Le chef se renouvelle sans cesse.', rating: 5, avatar: images.avatars.man1 },
      { name: 'Sophie Martin', role: 'Repas d\'affaires', content: 'Cadre parfait pour les réunions importantes. Cuisine raffinée et service discret. Mes clients ont été conquis.', rating: 5, avatar: images.avatars.woman2 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Galerie',
    title: 'Notre univers culinaire',
    subtitle: 'Découvrez l\'ambiance de notre restaurant',
    items: [
      { image: images.restaurant.dish1, title: 'Entrée signature', category: 'Cuisine' },
      { image: images.restaurant.interior, title: 'Notre salle', category: 'Ambiance' },
      { image: images.restaurant.chef, title: 'En cuisine', category: 'Équipe' },
      { image: images.restaurant.dessert, title: 'Dessert du chef', category: 'Cuisine' },
      { image: images.restaurant.dish2, title: 'Plat principal', category: 'Cuisine' },
      { image: images.restaurant.terrace, title: 'Terrasse', category: 'Ambiance' },
      { image: images.restaurant.dish3, title: 'Création du jour', category: 'Cuisine' },
      { image: images.restaurant.hero, title: 'Vue d\'ensemble', category: 'Ambiance' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Formules',
    title: 'Nos Menus',
    subtitle: 'Des formules pour toutes les occasions',
    plans: [
      { name: 'Menu Découverte', description: 'Entrée + Plat + Dessert', price: '55€', features: [{ text: '3 plats au choix', included: true }, { text: 'Accord mets-vins', included: false }, { text: 'Café offert', included: true }], cta: 'Réserver' },
      { name: 'Menu Dégustation', description: '5 plats signature du chef', price: '95€', popular: true, features: [{ text: '5 plats signature', included: true }, { text: 'Accord mets-vins', included: true }, { text: 'Café & mignardises', included: true }], cta: 'Réserver' },
      { name: 'Menu Prestige', description: '7 plats + accord vins', price: '150€', features: [{ text: '7 plats gastronomiques', included: true }, { text: 'Accord grands crus', included: true }, { text: 'Service VIP', included: true }], cta: 'Réserver' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Réservez votre table',
    description: 'Pour une occasion spéciale ou simplement pour vous faire plaisir, notre équipe vous attend.',
    primaryCta: { text: 'Réserver maintenant', href: '#contact' },
    secondaryCta: { text: 'Voir le menu', href: '#services' },
    stats: [
      { value: '4.8★', label: 'Note moyenne' },
      { value: '234', label: 'Avis clients' },
    ],
  } as CtaContent,
  
  contact: {
    badge: 'Réservation',
    title: 'Réservez votre table',
    subtitle: 'Notre équipe vous attend',
    email: 'reservation@restaurant.fr',
    phone: '+33 1 00 00 00 00',
    address: '15 rue de la Gastronomie, 75008 Paris',
    hours: [
      { day: 'Lundi', hours: 'Fermé' },
      { day: 'Mar-Sam', hours: '12h-14h30 • 19h-22h30' },
      { day: 'Dimanche', hours: '12h-15h' },
    ],
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { name: 'phone', type: 'tel', label: 'Téléphone', placeholder: '06 00 00 00 00', required: true },
      { name: 'date', type: 'date', label: 'Date', required: true },
      { name: 'time', type: 'select', label: 'Heure', options: ['12h00', '12h30', '13h00', '19h00', '19h30', '20h00', '20h30', '21h00'], required: true },
      { name: 'guests', type: 'select', label: 'Personnes', options: ['1', '2', '3', '4', '5', '6', '7', '8+'], required: true },
      { name: 'message', type: 'textarea', label: 'Demande spéciale', placeholder: 'Allergies, occasion spéciale...' },
    ],
  } as ContactContent,
}

// ============ PHOTOGRAPHER CONTENT ============
export const photographerContent = {
  hero: {
    badge: 'Photographe professionnel',
    title: 'Capturons ensemble vos plus beaux moments',
    subtitle: 'Portrait • Mariage • Corporate',
    description: 'Chaque image raconte une histoire. Je mets mon œil artistique et mon expertise technique au service de vos souvenirs.',
    image: images.photographer.hero,
    primaryCta: { text: 'Voir mes réalisations', href: '#gallery' },
    secondaryCta: { text: 'Me contacter', href: '#contact' },
    stats: [
      { value: '500+', label: 'Séances' },
      { value: '150+', label: 'Mariages' },
      { value: '10+', label: 'Années' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Prestations',
    title: 'Mes services',
    subtitle: 'Des formules adaptées à chaque projet',
    services: [
      { title: 'Portrait', description: 'Séance photo personnalisée en studio ou extérieur', price: 'À partir de 150€', features: ['1h de shooting', '20 photos retouchées', 'Galerie privée'], image: images.photographer.portrait1 },
      { title: 'Mariage', description: 'Couverture complète de votre jour J', price: 'À partir de 1500€', popular: true, features: ['Préparatifs au vin d\'honneur', '300+ photos', 'Album premium'], image: images.photographer.wedding1 },
      { title: 'Corporate', description: 'Portraits professionnels et événements d\'entreprise', price: 'Sur devis', features: ['Portraits LinkedIn', 'Événements', 'Reportages'], image: images.photographer.corporate },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'À propos',
    title: 'Passionné depuis toujours',
    description: 'Photographe depuis plus de 10 ans, j\'ai eu la chance de capturer des milliers de moments précieux. Mon approche allie technique et sensibilité pour créer des images authentiques qui vous ressemblent.',
    image: images.photographer.bw,
    features: ['Style naturel et lumineux', 'Retouche professionnelle', 'Galerie en ligne privée'],
    stats: [
      { value: '10+', label: 'Années d\'expérience' },
      { value: '500+', label: 'Clients satisfaits' },
      { value: '50K+', label: 'Photos livrées' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Avis clients',
    title: 'Ils me font confiance',
    testimonials: [
      { name: 'Emma & Thomas', role: 'Mariés en 2023', content: 'Des photos magnifiques qui capturent parfaitement l\'émotion de notre journée. Un vrai talent !', rating: 5, avatar: images.avatars.couple },
      { name: 'Julie Moreau', role: 'Séance portrait', content: 'À l\'aise dès les premières minutes. Les photos sont naturelles et je me reconnais enfin !', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Marc Dubois', role: 'CEO, StartupXYZ', content: 'Professionnalisme exemplaire. Nos portraits LinkedIn ont fait sensation auprès de nos clients.', rating: 5, avatar: images.avatars.man1 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Portfolio',
    title: 'Mes réalisations',
    subtitle: 'Un aperçu de mon travail',
    categories: ['Portrait', 'Mariage', 'Corporate', 'Lifestyle'],
    items: [
      { image: images.photographer.portrait1, title: 'Portrait studio', category: 'Portrait' },
      { image: images.photographer.wedding1, title: 'Cérémonie', category: 'Mariage' },
      { image: images.photographer.corporate, title: 'Team building', category: 'Corporate' },
      { image: images.photographer.portrait2, title: 'Portrait naturel', category: 'Portrait' },
      { image: images.photographer.wedding2, title: 'Couple', category: 'Mariage' },
      { image: images.photographer.landscape, title: 'Séance extérieure', category: 'Lifestyle' },
      { image: images.photographer.bw, title: 'Noir & Blanc', category: 'Portrait' },
      { image: images.photographer.hero, title: 'En action', category: 'Lifestyle' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Tarifs',
    title: 'Mes formules',
    subtitle: 'Transparence et qualité',
    plans: [
      { name: 'Essentiel', description: 'Séance portrait 1h', price: '150€', features: [{ text: '1h de shooting', included: true }, { text: '20 photos HD', included: true }, { text: 'Retouches avancées', included: false }], cta: 'Réserver' },
      { name: 'Premium', description: 'Séance complète 2h', price: '280€', popular: true, features: [{ text: '2h de shooting', included: true }, { text: '50 photos HD', included: true }, { text: 'Retouches avancées', included: true }], cta: 'Réserver' },
      { name: 'Mariage', description: 'Journée complète', price: '1500€', features: [{ text: 'Journée entière', included: true }, { text: '300+ photos HD', included: true }, { text: 'Album premium', included: true }], cta: 'Me contacter' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Prêt à capturer vos moments ?',
    description: 'Parlons de votre projet et créons ensemble des souvenirs inoubliables.',
    primaryCta: { text: 'Me contacter', href: '#contact' },
    features: ['Réponse sous 24h', 'Devis gratuit', 'Sans engagement'],
  } as CtaContent,
  
  contact: {
    badge: 'Contact',
    title: 'Parlons de votre projet',
    subtitle: 'Je réponds généralement sous 24h',
    email: 'hello@photographe.fr',
    phone: '+33 6 00 00 00 00',
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { name: 'service', type: 'select', label: 'Prestation', placeholder: 'Type', options: ['Mariage', 'Portrait', 'Corporate', 'Événement', 'Autre'], required: true },
      { name: 'date', type: 'date', label: 'Date souhaitée', placeholder: 'Date' },
      { name: 'message', type: 'textarea', label: 'Votre projet', placeholder: 'Décrivez votre projet...', required: true },
    ],
  } as ContactContent,
}

// ============ TECH/SAAS CONTENT ============
export const techContent = {
  hero: {
    badge: '🚀 Nouveau: Version 3.0',
    title: 'La plateforme qui propulse votre business',
    subtitle: 'Simple. Puissant. Évolutif.',
    description: 'Automatisez vos workflows, analysez vos données et boostez votre productivité avec notre solution tout-en-un.',
    image: images.tech.dashboard,
    primaryCta: { text: 'Essai gratuit 14 jours', href: '#pricing' },
    secondaryCta: { text: 'Voir la démo', href: '#services' },
    stats: [
      { value: '10K+', label: 'Utilisateurs' },
      { value: '99.9%', label: 'Uptime' },
      { value: '4.9★', label: 'Note' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Fonctionnalités',
    title: 'Tout ce dont vous avez besoin',
    subtitle: 'Une suite complète d\'outils puissants',
    services: [
      { title: 'Analyse avancée', description: 'Tableaux de bord en temps réel et rapports personnalisés', icon: '📊', features: ['KPIs personnalisés', 'Export PDF/Excel', 'Alertes automatiques'] },
      { title: 'Automatisation', description: 'Créez des workflows sans coder grâce à notre éditeur visuel', icon: '⚡', features: ['Drag & drop', '100+ intégrations', 'Triggers conditionnels'], popular: true },
      { title: 'Collaboration', description: 'Travaillez en équipe en temps réel sur vos projets', icon: '👥', features: ['Temps réel', 'Commentaires', 'Historique des versions'] },
      { title: 'Sécurité', description: 'Vos données protégées avec un chiffrement de niveau bancaire', icon: '🔒', features: ['Chiffrement E2E', 'SSO/SAML', 'Audit logs'] },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'Notre mission',
    title: 'Simplifier la technologie',
    description: 'Fondée en 2019, notre équipe de passionnés développe des solutions qui permettent aux entreprises de toutes tailles de tirer parti de la technologie sans complexité.',
    image: images.tech.team,
    features: ['Équipe de 50+ experts', 'Basés à Paris & San Francisco', 'Clients dans 40+ pays'],
    stats: [
      { value: '2019', label: 'Création' },
      { value: '50+', label: 'Employés' },
      { value: '$10M', label: 'Levée de fonds' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Témoignages',
    title: 'Ils ont transformé leur business',
    testimonials: [
      { name: 'Sarah Chen', role: 'CTO, ScaleUp', content: 'Nous avons réduit notre temps de reporting de 80%. Un game-changer pour notre équipe data.', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Marc Dubois', role: 'CEO, GrowthLab', content: 'L\'automatisation nous a permis de scaler sans recruter. ROI positif dès le premier mois.', rating: 5, avatar: images.avatars.man1 },
      { name: 'Julie Martin', role: 'Ops Manager, FastCorp', content: 'Interface intuitive, support réactif. Notre équipe a été opérationnelle en 2 jours.', rating: 5, avatar: images.avatars.woman2 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Aperçu',
    title: 'Découvrez l\'interface',
    items: [
      { image: images.tech.dashboard, title: 'Dashboard', category: 'Interface' },
      { image: images.tech.code, title: 'API', category: 'Développeur' },
      { image: images.tech.team, title: 'Collaboration', category: 'Équipe' },
      { image: images.tech.office, title: 'Mobile', category: 'Interface' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Tarifs',
    title: 'Simple et transparent',
    subtitle: 'Commencez gratuitement, évoluez à votre rythme',
    plans: [
      { name: 'Starter', description: 'Pour les petites équipes', price: '29€', monthlyPrice: '29€', yearlyPrice: '24€', period: 'mois', features: [{ text: 'Jusqu\'à 5 utilisateurs', included: true }, { text: 'Intégrations basiques', included: true }, { text: 'Support email', included: true }, { text: 'API access', included: false }, { text: 'SSO', included: false }], cta: 'Commencer' },
      { name: 'Pro', description: 'Pour les équipes en croissance', price: '79€', monthlyPrice: '79€', yearlyPrice: '66€', period: 'mois', popular: true, features: [{ text: 'Jusqu\'à 20 utilisateurs', included: true }, { text: 'Toutes les intégrations', included: true }, { text: 'Support prioritaire', included: true }, { text: 'API access', included: true }, { text: 'SSO', included: false }], cta: 'Essai gratuit' },
      { name: 'Enterprise', description: 'Pour les grandes organisations', price: 'Sur devis', features: [{ text: 'Utilisateurs illimités', included: true }, { text: 'Intégrations custom', included: true }, { text: 'Account manager dédié', included: true }, { text: 'API illimitée', included: true }, { text: 'SSO/SAML', included: true }], cta: 'Nous contacter' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Prêt à booster votre productivité ?',
    description: 'Rejoignez plus de 10 000 entreprises qui nous font confiance.',
    primaryCta: { text: 'Essai gratuit 14 jours', href: '#pricing' },
    secondaryCta: { text: 'Parler à un expert', href: '#contact' },
    features: ['Pas de carte bancaire requise', 'Configuration en 5 minutes', 'Support 24/7'],
  } as CtaContent,
  
  contact: {
    badge: 'Contact',
    title: 'Parlons de votre projet',
    subtitle: 'Notre équipe vous répond sous 24h',
    email: 'hello@techsaas.io',
    phone: '+33 1 00 00 00 00',
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email pro', placeholder: 'vous@entreprise.com', required: true },
      { name: 'company', type: 'text', label: 'Entreprise', placeholder: 'Nom de votre entreprise' },
      { name: 'size', type: 'select', label: 'Taille', options: ['1-10', '11-50', '51-200', '200+'] },
      { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Comment pouvons-nous vous aider ?', required: true },
    ],
  } as ContactContent,
}

// ============ EVENT CONTENT ============
export const eventContent = {
  hero: {
    badge: '🎉 Événement à venir',
    title: 'Festival Digital 2024',
    subtitle: 'L\'événement tech de l\'année',
    description: 'Rejoignez 5000+ professionnels pour 3 jours de conférences, workshops et networking au cœur de Paris.',
    image: images.event.hero,
    primaryCta: { text: 'Réserver ma place', href: '#pricing' },
    secondaryCta: { text: 'Programme', href: '#services' },
    stats: [
      { value: '5000+', label: 'Participants' },
      { value: '50+', label: 'Speakers' },
      { value: '3', label: 'Jours' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Programme',
    title: 'Au programme',
    subtitle: '3 jours d\'expériences uniques',
    services: [
      { title: 'Keynotes', description: 'Des interventions inspirantes par les leaders de l\'industrie', icon: '🎤', duration: 'Jour 1-3' },
      { title: 'Workshops', description: 'Sessions pratiques pour développer vos compétences', icon: '💻', duration: 'Jour 1-2', popular: true },
      { title: 'Networking', description: 'Rencontrez les acteurs de votre écosystème', icon: '🤝', duration: 'Tous les soirs' },
      { title: 'Startup Pitch', description: 'Découvrez les startups les plus prometteuses', icon: '🚀', duration: 'Jour 3' },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'À propos',
    title: 'Un événement unique',
    description: 'Depuis 2018, notre festival rassemble la communauté tech francophone autour de l\'innovation, du partage et de la convivialité. Une expérience inoubliable vous attend.',
    image: images.event.conference,
    features: ['Lieu d\'exception', 'Restauration incluse', 'App dédiée'],
    stats: [
      { value: '6', label: 'Éditions' },
      { value: '20K+', label: 'Alumni' },
      { value: '98%', label: 'Satisfaction' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Témoignages',
    title: 'Ce qu\'ils en pensent',
    testimonials: [
      { name: 'Sophie Bernard', role: 'Participante 2023', content: 'L\'événement tech incontournable ! J\'ai rencontré mes futurs associés ici.', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Thomas Petit', role: 'Speaker 2023', content: 'Une organisation parfaite et un public passionné. Hâte de revenir !', rating: 5, avatar: images.avatars.man1 },
      { name: 'Marie Leroy', role: 'Sponsor 2023', content: 'Un ROI exceptionnel. Nous avons signé 15 clients sur place.', rating: 5, avatar: images.avatars.woman2 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Édition 2023',
    title: 'Retour en images',
    items: [
      { image: images.event.conference, title: 'Keynote d\'ouverture', category: 'Conférence' },
      { image: images.event.party, title: 'Soirée networking', category: 'Networking' },
      { image: images.event.concert, title: 'Concert de clôture', category: 'Soirée' },
      { image: images.event.hero, title: 'Vue d\'ensemble', category: 'Événement' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Billets',
    title: 'Réservez votre place',
    subtitle: 'Tarifs early bird jusqu\'au 31 mars',
    plans: [
      { name: 'Pass Journée', description: '1 jour au choix', price: '149€', features: [{ text: 'Accès conférences', included: true }, { text: 'Workshops (2)', included: true }, { text: 'Networking du soir', included: false }], cta: 'Réserver' },
      { name: 'Pass Complet', description: '3 jours + soirées', price: '399€', popular: true, features: [{ text: 'Accès illimité', included: true }, { text: 'Tous les workshops', included: true }, { text: 'Soirées VIP', included: true }], cta: 'Réserver' },
      { name: 'Pass VIP', description: 'Expérience premium', price: '799€', features: [{ text: 'Accès backstage', included: true }, { text: 'Dîner speakers', included: true }, { text: 'Goodies exclusifs', included: true }], cta: 'Réserver' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Ne manquez pas l\'événement de l\'année',
    description: 'Places limitées. Réservez maintenant pour bénéficier du tarif early bird.',
    primaryCta: { text: 'Réserver ma place', href: '#pricing' },
    stats: [
      { value: '73%', label: 'Places vendues' },
      { value: '27', label: 'Jours restants' },
    ],
  } as CtaContent,
  
  contact: {
    badge: 'Contact',
    title: 'Une question ?',
    subtitle: 'Notre équipe est là pour vous',
    email: 'contact@festival.tech',
    phone: '+33 1 00 00 00 00',
    address: 'Station F, 5 Parvis Alan Turing, 75013 Paris',
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { name: 'subject', type: 'select', label: 'Sujet', options: ['Billetterie', 'Sponsoring', 'Presse', 'Autre'] },
      { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Votre message...', required: true },
    ],
  } as ContactContent,
}

// ============ AGENCY CONTENT ============
export const agencyContent = {
  hero: {
    badge: 'Agence créative',
    title: 'Nous donnons vie à vos idées',
    subtitle: 'Stratégie • Design • Développement',
    description: 'Une équipe de passionnés qui transforme vos ambitions en expériences digitales mémorables.',
    image: images.agency.hero,
    primaryCta: { text: 'Démarrer un projet', href: '#contact' },
    secondaryCta: { text: 'Voir nos réalisations', href: '#gallery' },
    stats: [
      { value: '200+', label: 'Projets' },
      { value: '50+', label: 'Clients' },
      { value: '15', label: 'Experts' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Notre process',
    title: 'Comment nous travaillons',
    subtitle: 'Une méthodologie éprouvée en 4 étapes',
    services: [
      { title: 'Découverte', description: 'Nous analysons vos besoins, votre marché et vos objectifs pour définir la stratégie idéale.', icon: '🔍', duration: '1-2 semaines', features: ['Audit complet', 'Analyse concurrentielle', 'Brief créatif'] },
      { title: 'Conception', description: 'Notre équipe créative conçoit l\'expérience utilisateur et le design de votre projet.', icon: '✏️', duration: '2-4 semaines', features: ['Wireframes', 'Design UI/UX', 'Prototypes interactifs'] },
      { title: 'Développement', description: 'Nos développeurs donnent vie à votre projet avec les technologies les plus adaptées.', icon: '💻', duration: '4-8 semaines', features: ['Code sur mesure', 'Tests qualité', 'Optimisation SEO'], popular: true },
      { title: 'Lancement', description: 'Nous vous accompagnons dans le déploiement et le suivi de votre projet.', icon: '🚀', duration: '1 semaine', features: ['Mise en production', 'Formation', 'Support 3 mois'] },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'L\'équipe',
    title: 'Des experts passionnés',
    description: 'Nous sommes une équipe multidisciplinaire de stratèges, designers et développeurs unis par la passion du digital et l\'envie de créer des projets qui comptent.',
    image: images.agency.team,
    features: ['Remote-first', 'Méthodologie agile', 'Veille permanente'],
    stats: [
      { value: '2015', label: 'Création' },
      { value: '15', label: 'Collaborateurs' },
      { value: '4.9/5', label: 'Note clients' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Témoignages',
    title: 'Ils nous font confiance',
    testimonials: [
      { name: 'Claire Fontaine', role: 'Directrice Marketing, BrandCo', content: 'Une équipe à l\'écoute qui a parfaitement compris notre vision. Résultat au-delà de nos attentes.', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Antoine Duval', role: 'Fondateur, TechStartup', content: 'Livraison dans les temps, communication fluide. Notre meilleure décision de l\'année.', rating: 5, avatar: images.avatars.man1 },
      { name: 'Sarah Lemoine', role: 'CEO, EcoShop', content: 'Notre nouveau site a doublé notre taux de conversion. ROI exceptionnel.', rating: 5, avatar: images.avatars.woman2 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Portfolio',
    title: 'Nos réalisations',
    subtitle: 'Une sélection de nos meilleurs projets',
    categories: ['Web', 'Mobile', 'Branding', 'E-commerce'],
    items: [
      { image: images.agency.creative, title: 'App Fitness', category: 'Mobile' },
      { image: images.agency.meeting, title: 'E-commerce Mode', category: 'E-commerce' },
      { image: images.agency.office, title: 'Site Corporate', category: 'Web' },
      { image: images.agency.team, title: 'Rebranding Startup', category: 'Branding' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Tarifs',
    title: 'Nos formules',
    subtitle: 'Des solutions adaptées à votre budget',
    plans: [
      { name: 'Site Vitrine', description: 'Pour présenter votre activité', price: 'À partir de 3K€', features: [{ text: 'Design sur mesure', included: true }, { text: 'Responsive', included: true }, { text: 'CMS intégré', included: true }, { text: 'E-commerce', included: false }], cta: 'En savoir plus' },
      { name: 'E-commerce', description: 'Pour vendre en ligne', price: 'À partir de 8K€', popular: true, features: [{ text: 'Tout Site Vitrine +', included: true }, { text: 'Boutique en ligne', included: true }, { text: 'Paiement sécurisé', included: true }, { text: 'Gestion stocks', included: true }], cta: 'En savoir plus' },
      { name: 'Application', description: 'Web ou mobile sur mesure', price: 'Sur devis', features: [{ text: 'Développement custom', included: true }, { text: 'API & intégrations', included: true }, { text: 'Maintenance incluse', included: true }, { text: 'Évolutions illimitées', included: true }], cta: 'Nous contacter' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Un projet en tête ?',
    description: 'Discutons de vos ambitions autour d\'un café (virtuel ou réel).',
    primaryCta: { text: 'Planifier un call', href: '#contact' },
    secondaryCta: { text: 'Voir nos réalisations', href: '#gallery' },
  } as CtaContent,
  
  contact: {
    badge: 'Contact',
    title: 'Parlons de votre projet',
    subtitle: 'Réponse garantie sous 24h',
    email: 'hello@agence-creative.fr',
    phone: '+33 1 00 00 00 00',
    address: 'WeWork, 33 rue Lafayette, 75009 Paris',
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { name: 'company', type: 'text', label: 'Entreprise', placeholder: 'Nom de votre entreprise' },
      { name: 'project', type: 'select', label: 'Type de projet', options: ['Site vitrine', 'E-commerce', 'Application web', 'Application mobile', 'Autre'] },
      { name: 'budget', type: 'select', label: 'Budget estimé', options: ['< 5K€', '5-10K€', '10-25K€', '25K€+'] },
      { name: 'message', type: 'textarea', label: 'Votre projet', placeholder: 'Décrivez votre projet...', required: true },
    ],
  } as ContactContent,
}

// ============ BEAUTY CONTENT ============
export const beautyContent = {
  hero: {
    badge: 'Institut de beauté',
    title: 'Révélez votre beauté naturelle',
    subtitle: 'Soins • Esthétique • Bien-être',
    description: 'Un moment de détente et de beauté dans un cadre raffiné. Nos expertes prennent soin de vous.',
    image: images.beauty.hero,
    primaryCta: { text: 'Prendre RDV', href: '#contact' },
    secondaryCta: { text: 'Nos soins', href: '#services' },
    stats: [
      { value: '15+', label: 'Soins' },
      { value: '5★', label: 'Avis Google' },
      { value: '10', label: 'Années' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Nos soins',
    title: 'La carte des soins',
    subtitle: 'Des prestations sur-mesure',
    categories: ['Visage', 'Corps', 'Mains & Pieds', 'Épilation'],
    services: [
      { title: 'Soin Éclat', description: 'Nettoyage profond, gommage et masque hydratant', price: '65€', duration: '1h', category: 'Visage', popular: true },
      { title: 'Massage Relaxant', description: 'Massage corps complet aux huiles essentielles', price: '85€', duration: '1h15', category: 'Corps' },
      { title: 'Manucure Complète', description: 'Soin des mains, pose de vernis semi-permanent', price: '45€', duration: '45min', category: 'Mains & Pieds' },
      { title: 'Épilation Jambes', description: 'Épilation complète à la cire tiède', price: '35€', duration: '30min', category: 'Épilation' },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'Notre institut',
    title: 'Un espace dédié à votre bien-être',
    description: 'Depuis 10 ans, notre institut vous accueille dans un cadre élégant et apaisant. Nos esthéticiennes diplômées utilisent exclusivement des produits haut de gamme pour des résultats visibles.',
    image: images.beauty.spa,
    features: ['Produits bio', 'Cabines privatives', 'Parking gratuit'],
    stats: [
      { value: '10', label: 'Années' },
      { value: '8', label: 'Expertes' },
      { value: '5000+', label: 'Clientes' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Avis',
    title: 'Ce qu\'elles en disent',
    testimonials: [
      { name: 'Camille Dupont', role: 'Cliente fidèle', content: 'Mon rendez-vous mensuel dont je ne peux plus me passer ! Résultats impeccables.', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Léa Martin', role: 'Première visite', content: 'Accueil chaleureux, institut magnifique. Ma nouvelle adresse beauté !', rating: 5, avatar: images.avatars.woman2 },
      { name: 'Sophie Bernard', role: 'Cliente 3 ans', content: 'Des professionnelles à l\'écoute. Je recommande les yeux fermés.', rating: 5, avatar: images.avatars.woman1 },
    ],
  } as TestimonialsContent,
  
  gallery: {
    badge: 'Résultats',
    title: 'Avant / Après',
    subtitle: 'Découvrez les transformations',
    items: [
      { image: images.beauty.before1, title: 'Soin visage - Avant', category: 'Visage' },
      { image: images.beauty.after1, title: 'Soin visage - Après', category: 'Visage' },
      { image: images.beauty.makeup, title: 'Maquillage - Avant', category: 'Maquillage' },
      { image: images.beauty.hair, title: 'Maquillage - Après', category: 'Maquillage' },
      { image: images.beauty.nails, title: 'Manucure - Avant', category: 'Ongles' },
      { image: images.beauty.spa, title: 'Manucure - Après', category: 'Ongles' },
    ],
  } as GalleryContent,
  
  pricing: {
    badge: 'Forfaits',
    title: 'Nos formules',
    subtitle: 'Des packages avantageux',
    plans: [
      { name: 'Découverte', description: 'Premier soin', price: '49€', features: [{ text: 'Soin visage 45min', included: true }, { text: 'Diagnostic peau', included: true }, { text: '-20% prochain soin', included: true }], cta: 'Réserver' },
      { name: 'Coup d\'Éclat', description: 'Visage + Corps', price: '129€', popular: true, features: [{ text: 'Soin visage 1h', included: true }, { text: 'Massage 30min', included: true }, { text: 'Thé offert', included: true }], cta: 'Réserver' },
      { name: 'Journée VIP', description: 'Expérience complète', price: '249€', features: [{ text: 'Soins illimités', included: true }, { text: 'Déjeuner inclus', included: true }, { text: 'Cadeau surprise', included: true }], cta: 'Réserver' },
    ],
  } as PricingContent,
  
  cta: {
    title: 'Offrez-vous un moment de détente',
    description: 'Prenez rendez-vous en ligne en quelques clics.',
    primaryCta: { text: 'Réserver en ligne', href: '#contact' },
    features: ['RDV en ligne 24/7', 'Annulation gratuite', 'Rappel SMS'],
  } as CtaContent,
  
  contact: {
    badge: 'Rendez-vous',
    title: 'Prenez rendez-vous',
    subtitle: 'Nous vous rappelons pour confirmer',
    email: 'contact@institut-beaute.fr',
    phone: '+33 1 00 00 00 00',
    address: '25 rue de la Beauté, 75016 Paris',
    hours: [
      { day: 'Lundi', hours: 'Fermé' },
      { day: 'Mar-Sam', hours: '10h-19h' },
      { day: 'Dimanche', hours: 'Fermé' },
    ],
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'phone', type: 'tel', label: 'Téléphone', placeholder: '06 00 00 00 00', required: true },
      { name: 'service', type: 'select', label: 'Soin souhaité', options: ['Soin visage', 'Massage', 'Épilation', 'Manucure', 'Autre'], required: true },
      { name: 'date', type: 'date', label: 'Date souhaitée' },
      { name: 'message', type: 'textarea', label: 'Précisions', placeholder: 'Allergies, préférences...' },
    ],
  } as ContactContent,
}

// ============ GENERIC CONTENT ============
export const genericContent = {
  hero: {
    badge: 'Bienvenue',
    title: 'Votre titre accrocheur ici',
    subtitle: 'Un sous-titre impactant',
    description: 'Décrivez votre activité en quelques mots. Mettez en avant ce qui vous rend unique.',
    image: images.generic.hero,
    primaryCta: { text: 'Découvrir', href: '#services' },
    secondaryCta: { text: 'Contact', href: '#contact' },
    stats: [
      { value: '10+', label: 'Années' },
      { value: '500+', label: 'Clients' },
      { value: '98%', label: 'Satisfaction' },
    ],
  } as HeroContent,
  
  services: {
    badge: 'Nos services',
    title: 'Ce que nous proposons',
    subtitle: 'Des solutions adaptées à vos besoins',
    services: [
      { title: 'Service Premium', description: 'Description de votre premier service avec ses avantages', icon: '⭐', price: '99€' },
      { title: 'Service Pro', description: 'Description de votre deuxième service avec ses avantages', icon: '🚀', price: '149€', popular: true },
      { title: 'Service Expert', description: 'Description de votre troisième service avec ses avantages', icon: '💡', price: '199€' },
    ],
  } as ServicesContent,
  
  about: {
    badge: 'À propos',
    title: 'Notre histoire',
    description: 'Racontez votre histoire, vos valeurs, ce qui vous anime au quotidien. Partagez votre passion et créez une connexion avec vos visiteurs.',
    image: images.generic.team,
    features: ['Expertise reconnue', 'Service personnalisé', 'Satisfaction garantie'],
    stats: [
      { value: '10+', label: 'Années' },
      { value: '500+', label: 'Projets' },
      { value: '50+', label: 'Experts' },
    ],
  } as AboutContent,
  
  testimonials: {
    badge: 'Témoignages',
    title: 'Ce qu\'ils disent de nous',
    testimonials: [
      { name: 'Sophie Martin', role: 'CEO, TechCorp', content: 'Un service exceptionnel qui a dépassé toutes nos attentes. Je recommande vivement !', rating: 5, avatar: images.avatars.woman1 },
      { name: 'Pierre Durand', role: 'Directeur, Innov\'Lab', content: 'Professionnalisme et créativité au rendez-vous. Une collaboration parfaite.', rating: 5, avatar: images.avatars.man1 },
      { name: 'Marie Lambert', role: 'Fondatrice, StartupX', content: 'Une équipe à l\'écoute qui comprend vraiment nos besoins. Merci !', rating: 5, avatar: images.avatars.woman2 },
    ],
  } as TestimonialsContent,
  
  pricing: {
    badge: 'Tarifs',
    title: 'Nos offres',
    subtitle: 'Choisissez la formule adaptée à vos besoins',
    plans: [
      { name: 'Starter', price: '29€', monthlyPrice: '29€', yearlyPrice: '24€', period: 'mois', features: [{ text: 'Fonctionnalité 1', included: true }, { text: 'Fonctionnalité 2', included: true }, { text: 'Fonctionnalité 3', included: false }], cta: 'Choisir' },
      { name: 'Pro', price: '59€', monthlyPrice: '59€', yearlyPrice: '49€', period: 'mois', popular: true, features: [{ text: 'Tout Starter +', included: true }, { text: 'Fonctionnalité 3', included: true }, { text: 'Support prioritaire', included: true }], cta: 'Choisir' },
      { name: 'Enterprise', price: '99€', monthlyPrice: '99€', yearlyPrice: '79€', period: 'mois', features: [{ text: 'Tout Pro +', included: true }, { text: 'Support dédié', included: true }, { text: 'Sur mesure', included: true }], cta: 'Contacter' },
    ],
  } as PricingContent,
  
  gallery: {
    badge: 'Portfolio',
    title: 'Nos réalisations',
    items: [
      { image: images.generic.hero, title: 'Projet 1', category: 'Design' },
      { image: images.generic.team, title: 'Projet 2', category: 'Web' },
      { image: images.generic.office, title: 'Projet 3', category: 'Branding' },
      { image: images.generic.meeting, title: 'Projet 4', category: 'Design' },
    ],
  } as GalleryContent,
  
  cta: {
    title: 'Prêt à commencer ?',
    description: 'Contactez-nous dès aujourd\'hui pour discuter de votre projet.',
    primaryCta: { text: 'Nous contacter', href: '#contact' },
    secondaryCta: { text: 'En savoir plus', href: '#about' },
  } as CtaContent,
  
  contact: {
    badge: 'Contact',
    title: 'Contactez-nous',
    subtitle: 'Nous sommes là pour répondre à vos questions',
    email: 'contact@example.com',
    phone: '+33 1 00 00 00 00',
    address: '123 rue Example, 75000 Paris',
    formFields: [
      { name: 'name', type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { name: 'email', type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { name: 'subject', type: 'select', label: 'Sujet', placeholder: 'Choisir', options: ['Information', 'Devis', 'Support', 'Autre'] },
      { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Votre message...', required: true },
    ],
  } as ContactContent,
}

// ============ CONTENT BY ACTIVITY ============
const contentByActivity: Partial<Record<ActivityId, typeof genericContent>> = {
  restaurant: restaurantContent,
  photographer: photographerContent,
  tech: techContent,
  event: eventContent,
  agency: agencyContent,
  beauty: beautyContent,
}

export function getDefaultContent<T>(sectionType: keyof typeof genericContent, activityId?: ActivityId): T {
  if (activityId && contentByActivity[activityId]) {
    const content = contentByActivity[activityId]!
    if (content[sectionType]) return content[sectionType] as T
  }
  return genericContent[sectionType] as T
}

export function getAllDefaultContent(activityId?: ActivityId): typeof genericContent {
  if (activityId && contentByActivity[activityId]) return contentByActivity[activityId]!
  return genericContent
}

export default genericContent
