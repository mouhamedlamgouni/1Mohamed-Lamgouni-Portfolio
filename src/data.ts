// Edit this file to personalize the site. Missing URLs stay unavailable, never point to fake accounts.
export const profile = {
  name: 'Mohamed Lamgouni',
  role: 'Graphic & Creative Designer',
  location: 'Kenitra, Morocco',
  timezone: 'Africa/Casablanca',
  email: 'mouhamedlamgouni@gmail.com',
  resume: './Mohamed-Lamgouni-CV.pdf',
  portrait: './portrait-profile.jpeg',
  available: true, // Requested status; confirm current availability before publication.
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-lamgouni-4b10bb390/?isSelfProfile=true' },
    { label: 'GitHub', url: 'https://github.com/mouhamedlamgouni' },
  ],
};

export type Project = {
  id: string; title: string; category: string; year: string;
  description: string; tags: string[]; tone: string; wordmark: string;
  image: string; slides?: { src: string; alt: string; width?: number; height?: number; kind?: 'video'; poster?: string }[]; video?: string; href: string; deliverables: string[];
};

/* PLACEHOLDER: Project assets and case study links */
// Titles and scope come from the supplied PDF; decorative covers are explicitly placeholders.
export const projects: Project[] = [
  { id: 'lv-manager', title: 'LV Manager', category: 'Identity & digital', year: '2025—2026',
    description: 'A visual identity built around a digital product. Logo design, social content and advertising assets bring the brand across touchpoints.',
    tags: ['Branding', 'Digital design'], tone: 'lv', wordmark: 'LV', image: '', video: './projects/lv-manager/lv manager video.mp4', href: 'https://lvmanager.net',
    slides: [
      { src: './projects/lv-manager/1.jpg', alt: 'LV Manager blue logo and wordmark on white' },
      { src: './projects/lv-manager/2.png', alt: 'LV Manager white logo and wordmark on blue' },
      { src: './projects/lv-manager/lv manager66.png', alt: 'LV Manager logo construction: Location, Voitures and Manager' },
      { src: './projects/lv-manager/lv manager video.mp4', alt: 'LV Manager promotional video', kind: 'video', poster: './projects/lv-manager/lv-manager-video-poster.png' },
    ],
    deliverables: ['Logo and visual identity', 'Social media and advertising visuals', 'Product presentation materials', 'Promotional video content'] },
  { id: 'cofeeco1', title: 'CoffeeCo', category: 'Brand identity', year: '2024',
    description: 'A visual portfolio for CoffeeCo, bringing together the brand’s identity and coffee-inspired direction.',
    tags: ['Coffee brand', 'Visual identity'], tone: 'mind', wordmark: 'CoffeeCo', image: '', video: './projects/PORTFOLIO_COFEECO/coffeeco-video.mp4', href: 'https://www.instagram.com/coffeco.officiel/',
    slides: [
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECOy.jpg', alt: 'CoffeeCo visual identity presentation, design 1' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECOjhj.jpg', alt: 'CoffeeCo visual identity presentation, design 2' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO10.jpg', alt: 'CoffeeCo visual identity presentation, design 3' },
      { src: './projects/PORTFOLIO_COFEECO/ss-copie-2048x1365.jpg', alt: 'CoffeeCo brand materials and visual identity presentation, design 4' },
      { src: './projects/PORTFOLIO_COFEECO/coffeeco-video.mp4', alt: 'CoffeeCo promotional video', kind: 'video' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO5.jpg', alt: 'CoffeeCo visual identity presentation, design 5' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO6.jpg', alt: 'CoffeeCo visual identity presentation, design 6' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO7 (1).jpg', alt: 'CoffeeCo cookie packaging and brand presentation, design 7' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO2.jpg', alt: 'CoffeeCo visual identity presentation, design 8' },
      { src: './projects/PORTFOLIO_COFEECO/PORTFOLIO_COFEECO1.jpg', alt: 'CoffeeCo visual identity presentation, design 9' },
    ],
    deliverables: ['Brand identity', 'Project visuals'] },
  { id: 'mind-design', title: 'ElGrandeToto & Nibro — 3D Poster', category: 'Print & packaging', year: '2024—2025',
    description: 'A 3D illustrated poster inspired by ElGrandeToto and his brand, Nibro. The design combines a stylized cartoon portrait, bold colors, and brand-inspired details to create an energetic, urban visual identity.',
    tags: ['Graphic design', 'Packaging'], tone: 'mind', wordmark: 'ElGrandeToto\n& Nibro', image: '', href: '',
    slides: [
      { src: './projects/Urban 3D Cartoon Art/1.jpg', alt: 'Urban 3D cartoon poster with a Moroccan football character and bold EGT typography', width: 736, height: 915 },
      { src: './projects/Urban 3D Cartoon Art/GET YOURS. WORLDWIDE DELIVERY. www.nibrooo.com.jpg', alt: 'Moroccan footballer in a red and green jersey with Nibrooo branding on a white background' },
      { src: './projects/Urban 3D Cartoon Art/3.webp', alt: 'Close-up portrait of a Moroccan footballer in a red and green jersey' },
      { src: './projects/Urban 3D Cartoon Art/WhatsApp Image 2026-10-11 at 20.16.59.jpeg', alt: 'Two men holding an ElGrandeToto and Nibro 3D poster in front of a window' },
    ],
    deliverables: ['Posters', 'Catalogues', 'Packaging', 'Promotional materials'] },
  { id: 'creative-emarketing', title: 'Urban Pop & Sports Posters', category: 'Content & campaigns', year: '2025—2026',
    description: 'High-impact poster designs combining urban culture, sports, and dramatic photo manipulation with bold typography.',
    tags: ['Poster design', 'Sports & urban culture'], tone: 'creative', wordmark: 'Urban Pop\nSports Posters', image: '', href: '',
    slides: [
      { src: './projects/Urban Pop & Sports Posters/1.jpg', alt: 'Morocco football poster showing Achraf Hakimi facing an AFCON trophy', width: 1080, height: 1350 },
      { src: './projects/Urban Pop & Sports Posters/2.jpg', alt: 'Urban portrait poster featuring a Moroccan hip-hop artist with bold typography', width: 1080, height: 1350 },
      { src: './projects/Urban Pop & Sports Posters/3.jpg', alt: 'Sports poster showing Vinícius Júnior in a Real Madrid kit against a dramatic city background', width: 1200, height: 1900 },
      { src: './projects/Urban Pop & Sports Posters/4.jpg', alt: 'Dramatic portrait poster with a red title, photo collage, and crimson graphic lines', width: 796, height: 1024 },
      { src: './projects/Urban Pop & Sports Posters/5.jpg', alt: 'Blue-toned urban portrait poster with Arabic calligraphy and a streetwear look', width: 1400, height: 1600 },
    ],
    deliverables: ['Sports posters', 'Urban portrait artwork', 'Dramatic photo manipulation', 'Bold typography'] },
  { id: 'e-dltra', title: 'E-DLTRA', category: 'Training & communication', year: '2025—2026',
    description: 'Promotional graphics, social publications and communication materials for training.',
    tags: ['Promotional graphics', 'Social media'], tone: 'creative', wordmark: 'E-DLTRA', image: '', href: '',
    slides: [
      { src: './projects/E-DLTRA/affichejpj.jpg', alt: 'Promotional poster for E-DLTRA data science training featuring a student and Arabic text' },
    ],
    deliverables: ['Promotional graphics', 'Social media publications', 'Training communication materials'] },
  { id: 'youtube-thumbnails', title: 'YouTube Thumbnails', category: 'Digital & content design', year: '2024—2026',
    description: 'Eye-catching YouTube thumbnail designs created to capture attention, communicate each video’s idea, and strengthen channel identity.',
    tags: ['YouTube thumbnails', 'Digital design'], tone: 'creative', wordmark: 'YouTube\nThumbnails', image: '', href: '',
    slides: [
      { src: './projects/Miniatures YouTube/ILYASSjpg.jpg', alt: 'YouTube football thumbnail featuring a creator, Moroccan players, and Arabic headline text' },
    ],
    deliverables: ['YouTube thumbnail design', 'Video visual concepts', 'Channel identity assets'] },
  { id: 'cafe-boutique', title: 'CaféBoutique.ma – Logo Design', category: 'Brand identity', year: '2024',
    description: 'Création d’un logo professionnel pour CaféBoutique.ma, avec une identité visuelle moderne et élégante, reflétant l’univers du café et l’image de marque de la boutique en ligne.',
    tags: ['Logo design', 'Brand identity'], tone: 'mind', wordmark: 'CaféBoutique.ma', image: '', href: 'https://cafeboutique.ma/',
    slides: [
      { src: './projects/cafeboutique/ggggg.jpg', alt: 'Green CaféBoutique.ma logo with a red Moroccan emblem on a dark green background' },
      { src: './projects/cafeboutique/WhatsApp-Image-2021-02-17-at-10.36.05.webp', alt: 'Black CaféBoutique.ma logo with a red Moroccan emblem on a white background' },
    ],
    deliverables: ['Logo design', 'Visual identity'] },
  { id: 'zamani', title: 'Zamani Secrets Hair Oil', category: 'Beauty & brand', year: '2026',
    description: 'Brand identity for a hair-care product. Logo, product visuals and promotional content establish a cohesive beauty-focused expression.',
    tags: ['Visual identity', 'Product visuals'], tone: 'zamani', wordmark: 'Zamani', image: '', href: 'https://www.instagram.com/zamani_secret',
    slides: [
      { src: './projects/zamani/bottle.jpeg', alt: 'Zamani Secret hair oil bottle with botanical packaging' },
      { src: './projects/zamani/label.jpeg', alt: 'Zamani Secret botanical hair oil label design' },
      { src: './projects/zamani/lifestyle.jpeg', alt: 'Woman applying Zamani Secret hair oil with a dropper' },
    ],
    deliverables: ['Logo design', 'Visual identity', 'Product visuals', 'Promotional content'] },
];

export const disciplines = ['Brand identity', 'Graphic design', 'Packaging', 'UI & digital', 'Creative content', 'Motion & video'];
export const tools = ['Photoshop', 'Illustrator', 'Figma', 'Premiere Pro', 'After Effects', 'Canva'];
