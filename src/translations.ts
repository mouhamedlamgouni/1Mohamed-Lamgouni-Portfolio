export type Language = 'en' | 'fr';

export const ui = {
  en: {
    skip: 'Skip to content', navigation: 'Main navigation', about: 'About', projects: 'Projects', contact: 'Contact',
    available: 'Available for work', languageLabel: 'Choose language', english: 'Switch language to English', french: 'Changer la langue en français',
    switchToLight: 'Switch to light theme', switchToDark: 'Switch to dark theme',
    heroTitle: 'Thoughtful design.', heroAccent: 'Distinct character.', introName: "I'm Mohamed Lamgouni.",
    intro: 'A graphic & creative designer shaping brands, visual stories and digital experiences. Grounded in technology. Driven by curiosity.',
    role: 'Graphic & Creative Designer', downloadCv: 'Download CV', explore: 'Explore selected work', heroNote: 'Independent perspective. Multidisciplinary practice.',
    practiceTitle: 'One curious mind.', practiceTitleSecond: 'Many ways to create.',
    practiceDescription: 'From a logo’s smallest detail to a complete visual identity, I connect creativity with technical understanding. My background in computer systems engineering informs how I approach digital work.',
    background: 'More about my background', whatIWorkOn: 'What I work on',
    disciplines: ['Brand identity', 'Graphic design', 'Packaging', 'UI & digital', 'Creative content', 'Motion & video'],
    tools: 'Tools of the trade', contactTitle: 'Good things start', contactTitleSecond: 'with a conversation.',
    contactPrompt: 'Have a brand to shape, a story to tell,', contactPromptSecond: 'or a digital idea to bring to life?',
    contactNote: 'Contact details are being updated. Social profiles will be linked soon.',
    selectedWork: 'Selected work', selectedWorkDescription: 'From the first idea', selectedWorkDescriptionSecond: 'to the details that make it matter.',
    projectArtwork: 'Project artwork placeholder', disciplinesLabel: 'Disciplines',
    carouselLabel: 'artwork', viewProject: 'View project details', showImage: 'Show image', playSlideshow: 'Play slideshow', pauseSlideshow: 'Pause slideshow', nextSlide: 'Show next slide',
    closeDetails: 'Close project details', scope: 'Scope of work', fullCaseStudy: 'The full case study will be added here.', videoUnsupported: 'Your browser does not support video playback.',
    artworkAndCaseStudy: 'Project artwork and the full case study will be added here.', socialProfiles: 'Social profiles', linkPending: 'link pending',
  },
  fr: {
    skip: 'Aller au contenu', navigation: 'Navigation principale', about: 'À propos', projects: 'Projets', contact: 'Contact',
    available: 'Disponible pour des projets', languageLabel: 'Choisir la langue', english: 'Switch language to English', french: 'Langue : français',
    switchToLight: 'Passer au thème clair', switchToDark: 'Passer au thème sombre',
    heroTitle: 'Un design réfléchi.', heroAccent: 'Un caractère affirmé.', introName: 'Je suis Mohamed Lamgouni.',
    intro: 'Designer graphique et créatif, je façonne des marques, des récits visuels et des expériences numériques. Ancré dans la technologie, guidé par la curiosité.',
    role: 'Designer graphique et créatif', downloadCv: 'Télécharger le CV', explore: 'Découvrir une sélection de projets', heroNote: 'Un regard indépendant. Une pratique pluridisciplinaire.',
    practiceTitle: 'Un esprit curieux.', practiceTitleSecond: 'Mille façons de créer.',
    practiceDescription: 'Du moindre détail d’un logo à une identité visuelle complète, j’allie créativité et compréhension technique. Ma formation en systèmes informatiques influence ma manière d’aborder le design numérique.',
    background: 'En savoir plus sur mon parcours', whatIWorkOn: 'Mes domaines d’activité',
    disciplines: ['Identité de marque', 'Design graphique', 'Packaging', 'UI et numérique', 'Contenu créatif', 'Animation et vidéo'],
    tools: 'Mes outils', contactTitle: 'Les belles choses commencent', contactTitleSecond: 'par une conversation.',
    contactPrompt: 'Une marque à façonner, une histoire à raconter,', contactPromptSecond: 'ou une idée numérique à concrétiser ?',
    contactNote: 'Les coordonnées sont en cours de mise à jour. Les profils sociaux seront bientôt ajoutés.',
    selectedWork: 'Projets choisis', selectedWorkDescription: 'De la première idée', selectedWorkDescriptionSecond: 'aux détails qui font la différence.',
    projectArtwork: 'Visuel du projet à venir', disciplinesLabel: 'Domaines',
    carouselLabel: 'visuels', viewProject: 'Voir les détails du projet', showImage: 'Afficher l’image', playSlideshow: 'Lancer le diaporama', pauseSlideshow: 'Mettre le diaporama en pause', nextSlide: 'Afficher la diapositive suivante',
    closeDetails: 'Fermer les détails du projet', scope: 'Prestations', fullCaseStudy: 'L’étude de cas complète sera bientôt disponible.', videoUnsupported: 'Votre navigateur ne prend pas en charge la lecture vidéo.',
    artworkAndCaseStudy: 'Les visuels et l’étude de cas complète seront bientôt disponibles.', socialProfiles: 'Profils sociaux', linkPending: 'lien à venir',
  },
} as const;

type ProjectTranslation = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  deliverables: string[];
  slideAlts: string[];
};

export const projectTranslations: { fr: Record<string, ProjectTranslation> } = {
  fr: {
    'lv-manager': {
      title: 'LV Manager', category: 'Identité et numérique',
      description: 'Une identité visuelle conçue autour d’un produit numérique. Le logo, les contenus pour les réseaux sociaux et les supports publicitaires assurent la cohérence de la marque sur tous ses points de contact.',
      tags: ['Identité de marque', 'Design numérique'],
      deliverables: ['Logo et identité visuelle', 'Visuels pour les réseaux sociaux et la publicité', 'Supports de présentation du produit', 'Contenus vidéo promotionnels'],
      slideAlts: ['Logo et nom LV Manager bleus sur fond blanc', 'Logo et nom LV Manager blancs sur fond bleu', 'Construction du logo LV Manager : Location, Voitures et Manager'],
    },
    zamani: {
      title: 'Zamani Secrets Hair Oil', category: 'Beauté et marque',
      description: 'Identité de marque pour un produit de soin capillaire. Le logo, les visuels produit et les contenus promotionnels composent un univers cohérent dédié à la beauté.',
      tags: ['Identité visuelle', 'Visuels produit'],
      deliverables: ['Création du logo', 'Identité visuelle', 'Visuels produit', 'Contenus promotionnels'],
      slideAlts: ['Flacon d’huile capillaire Zamani Secret et son emballage botanique', 'Étiquette botanique de l’huile capillaire Zamani Secret', 'Femme appliquant l’huile capillaire Zamani Secret avec une pipette'],
    },
    'mind-design': {
      title: 'ElGrandeToto & Nibro — Affiche 3D', category: 'Affiche et packaging',
      description: 'Une affiche illustrée en 3D inspirée d’ElGrandeToto et de sa marque, Nibro. Le design associe un portrait cartoon stylisé, des couleurs affirmées et des détails inspirés de la marque pour créer une identité visuelle urbaine et énergique.',
      tags: ['Design graphique', 'Packaging'],
      deliverables: ['Affiches', 'Catalogues', 'Packaging', 'Supports promotionnels'],
      slideAlts: [
        'Affiche cartoon 3D urbaine avec un personnage de football marocain et une typographie EGT affirmée',
        'Footballeur marocain en maillot rouge et vert avec la marque Nibrooo sur fond blanc',
        'Portrait rapproché d’un footballeur marocain en maillot rouge et vert',
        'Deux hommes tenant une affiche 3D ElGrandeToto et Nibro devant une fenêtre',
      ],
    },
    'creative-emarketing': {
      title: 'Affiches urbaines pop et sportives', category: 'Affiches et art sportif',
      description: 'Des affiches percutantes qui mêlent culture urbaine, sport et retouche photo dramatique, avec une typographie affirmée.',
      tags: ['Design d’affiche', 'Culture urbaine et sport'],
      deliverables: ['Affiches sportives', 'Portraits urbains', 'Retouche photo dramatique', 'Typographie affirmée'],
      slideAlts: [
        'Affiche de football marocain montrant Achraf Hakimi face au trophée de la CAN',
        'Affiche de portrait urbain d’un artiste hip-hop marocain avec une typographie affirmée',
        'Affiche sportive de Vinícius Júnior en tenue du Real Madrid sur fond de ville dramatique',
        'Affiche portrait dramatique avec titre rouge, collage photo et lignes graphiques écarlates',
        'Affiche portrait urbaine aux tons bleus, avec calligraphie arabe et style streetwear',
      ],
    },
    'e-dltra': {
      title: 'E-DLTRA', category: 'Formation et communication',
      description: 'Visuels promotionnels, publications pour les réseaux sociaux et supports de communication pour la formation.',
      tags: ['Visuels promotionnels', 'Réseaux sociaux'],
      deliverables: ['Visuels promotionnels', 'Publications pour les réseaux sociaux', 'Supports de communication pour la formation'],
      slideAlts: ['Affiche promotionnelle de la formation E-DLTRA en science des données, avec une étudiante et du texte en arabe'],
    },
    'youtube-thumbnails': {
      title: 'Miniatures YouTube', category: 'Design numérique et contenu',
      description: 'Des miniatures YouTube accrocheuses, conçues pour attirer l’attention, présenter l’idée de chaque vidéo et renforcer l’identité de la chaîne.',
      tags: ['Miniatures YouTube', 'Design numérique'],
      deliverables: ['Création de miniatures YouTube', 'Concepts visuels pour les vidéos', 'Éléments d’identité de chaîne'],
      slideAlts: ['Miniature YouTube sur le football avec un créateur, des joueurs marocains et un titre en arabe'],
    },
    'cafe-boutique': {
      title: 'CaféBoutique.ma – Création de logo', category: 'Identité de marque',
      description: 'Création d’un logo professionnel pour CaféBoutique.ma, avec une identité visuelle moderne et élégante, reflétant l’univers du café et l’image de marque de la boutique en ligne.',
      tags: ['Création de logo', 'Identité de marque'],
      deliverables: ['Création de logo', 'Identité visuelle'],
      slideAlts: [
        'Logo vert CaféBoutique.ma avec emblème marocain rouge sur fond vert foncé',
        'Logo noir CaféBoutique.ma avec emblème marocain rouge sur fond blanc',
      ],
    },
    cofeeco1: {
      title: 'CoffeeCo', category: 'Identité de marque',
      description: 'Un portfolio visuel pour CoffeeCo, réunissant l’identité de la marque et un univers inspiré du café.',
      tags: ['Marque de café', 'Identité visuelle'],
      deliverables: ['Identité de marque', 'Visuels du projet'],
      slideAlts: [
        'Présentation de l’identité visuelle CoffeeCo, design 1',
        'Présentation de l’identité visuelle CoffeeCo, design 2',
        'Présentation de l’identité visuelle CoffeeCo, design 3',
        'Supports de marque CoffeeCo, design 4',
        'Vidéo promotionnelle CoffeeCo',
        'Présentation de l’identité visuelle CoffeeCo, design 5',
        'Présentation de l’identité visuelle CoffeeCo, design 6',
        'Packaging de cookies CoffeeCo, design 7',
        'Présentation de l’identité visuelle CoffeeCo, design 8',
        'Présentation de l’identité visuelle CoffeeCo, design 9',
      ],
    },
  },
};