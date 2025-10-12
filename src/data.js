import photo1 from './assets/images/photo1.jpg'
import photo2 from './assets/images/photo2.jpg'
import photo3 from './assets/images/photo3.jpg'
import photo4 from './assets/images/photo4.jpg'

import um from './assets/images/um.jpeg'
import um2 from './assets/images/um2.jpeg'
import um3 from './assets/images/um3.jpeg'

import bdf from './assets/images/bdf.jpeg'
import bdf2 from './assets/images/bdf2.jpeg'
import bdf3 from './assets/images/bdf3.jpeg'

import cdo from './assets/images/cdo.jpeg'
import cdo2 from './assets/images/cdo2.jpeg'
import cdo3 from './assets/images/cdo3.jpeg'
import cdo4 from './assets/images/cdo4.jpeg'
import cdo5 from './assets/images/cdo5.jpeg'

import fdf from './assets/images/fdf.jpeg'
import fdf2 from './assets/images/fdf2.jpeg'
import fdf3 from './assets/images/fdf3.jpeg'

import p from './assets/images/p.jpeg'
import p2 from './assets/images/p2.jpeg'
import p3 from './assets/images/p3.jpeg'

import e from './assets/images/e.jpeg'
import e2 from './assets/images/e2.jpeg'
import e3 from './assets/images/e3.jpeg'

import l from './assets/images/l.jpeg'
import l2 from './assets/images/l2.jpeg'
import l3 from './assets/images/l3.jpeg'
import l4 from './assets/images/l4.jpeg'

import fef from './assets/images/fef.jpeg'
import fef2 from './assets/images/fef2.jpeg'
import fef3 from './assets/images/fef3.jpeg'

import tpt from './assets/images/tpt.jpeg'
import tpt2 from './assets/images/tpt2.jpeg'
import tpt3 from './assets/images/tpt3.jpeg'
import tpt4 from './assets/images/tpt4.jpeg'

import jm from './assets/images/jm.jpeg'
import jm2 from './assets/images/jm2.jpeg'
import jm3 from './assets/images/jm3.jpeg'

import ac from './assets/images/ac.jpeg'
import ac2 from './assets/images/ac2.jpeg'
import ac3 from './assets/images/ac3.jpeg'

import a from './assets/images/a.jpeg'
import a2 from './assets/images/a2.jpeg'
import a3 from './assets/images/a3.jpeg'
import a4 from './assets/images/a4.jpeg'
import a5 from './assets/images/a5.jpeg'

import lojmp from './assets/images/lojmp.jpeg'
import lojmp2 from './assets/images/lojmp2.jpeg'
import lojmp3 from './assets/images/lojmp3.jpeg'


const data = {
  imagesAbout: [
    {
      id: 1,
      title: "Photos 1",
      src: photo1,
      alt: "A beautiful sunset over the mountains."
    },
    {
      id: 2,
      title: "Photos 2",
      src: photo2,
      alt: "A bustling cityscape at night."
    },
    {
      id: 3,
      title: "Photos 3",
      src: photo3,
      alt: "A peaceful forest with tall trees."
    },
    {
      id: 4,
      title: "Photos 4",
      src: photo4,
      alt: "A majestic waterfall in a tropical setting."
    }
  ],
  imagesGallery: [
    {
  id: 1,
  title: "Bouquet de fleurs",
  src: bdf,
      alt: "Peinture Bouquet de fleurs, acrylique sur toile coton, 50x150 cm.",
      date: "2024",
      dimensions: "50x150 cm",
      technique: "Acrylique sur toile coton",
      description: "Une œuvre florale vibrante, mêlant couleurs et formes expressives.",
      subImages: [
        {
          src: bdf2,
          alt: "Détail de la peinture Bouquet de fleurs, acrylique sur toile coton, 50x150 cm."
        },
        {
          src: bdf3,
          alt: "Détail de la peinture Bouquet de fleurs, acrylique sur toile coton, 50x150 cm."
        }
      ]
    },
    {
  id: 2,
  title: "Un moment",
  src: um,
      alt: "Peinture Un moment, acrylique sur toile coton, 30x30 cm.",
      date: "2024",
      dimensions: "30x30 cm",
      technique: "Acrylique sur toile coton",
      description: "Une composition intime évoquant la simplicité et la quiétude.",
      subImages: [
        {
          src: um2,
          alt: "Détail de la peinture Un moment, acrylique sur toile coton, 30x30 cm."
        },
        {
          src: um3,
          alt: "Détail de la peinture Un moment, acrylique sur toile coton, 30x30 cm."
        }
      ]
    },
    {
  id: 3,
  title: "Chant des oiseaux",
  src: cdo,
      alt: "Peinture Chant des oiseaux, acrylique sur toile coton, 40x50 cm.",
      date: "2024",
      dimensions: "40x50 cm",
      technique: "Acrylique sur toile coton",
      description: "Une œuvre légère et harmonieuse inspirée des sons et du mouvement des oiseaux.",
      subImages: [
        {
          src: cdo2,
          alt: "Détail de la peinture Chant des oiseaux, acrylique sur toile coton, 40x50 cm."
        },
        {
          src: cdo3,
          alt: "Détail de la peinture Chant des oiseaux, acrylique sur toile coton, 40x50 cm."
        },
        {
          src: cdo4,
          alt: "Détail de la peinture Chant des oiseaux, acrylique sur toile coton, 40x50 cm."
        },
        {
          src: cdo5,
          alt: "Détail de la peinture Chant des oiseaux, acrylique sur toile coton, 40x50 cm."
        }
      ]
    },
    {
  id: 4,
  title: "Fête des fleurs",
  src: fdf,
      alt: "Peinture Fête des fleurs, acrylique sur toile coton, 50x70 cm.",
      date: "2024",
      dimensions: "50x70 cm",
      technique: "Acrylique sur toile coton",
      description: "Explosion de couleurs et d’énergie florale célébrant la nature.",
      subImages: [
        {
          src: fdf2,
          alt: "Détail de la peinture Fête des fleurs, acrylique sur toile coton, 50x70 cm."
        },
        {
          src: fdf3,
          alt: "Détail de la peinture Fête des fleurs, acrylique sur toile coton, 50x70 cm."
        }
      ]
    },
    {
  id: 5,
  title: "Psychédélique",
  src: p,
      alt: "Peinture Psychédélique, acrylique sur toile coton, 30x30 cm.",
      date: "2024",
      dimensions: "30x30 cm",
      technique: "Acrylique sur toile coton",
      description: "Un jeu visuel audacieux aux formes et teintes hypnotiques.",
      subImages: [
        {
          src: p2,
          alt: "Détail de la peinture Psychédélique, acrylique sur toile coton, 30x30 cm."
        },
        {
          src: p3,
          alt: "Détail de la peinture Psychédélique, acrylique sur toile coton, 30x30 cm."
        }
      ]
    },
    {
  id: 6,
  title: "Enchantement",
  src: e,
      alt: "Peinture Enchantement, acrylique sur toile coton, 80x80 cm.",
      date: "2024",
      dimensions: "80x80 cm",
      technique: "Acrylique sur toile coton",
      description: "Une œuvre immersive aux tonalités rêveuses et poétiques.",
      subImages: [
        {
          src: e2,
          alt: "Détail de la peinture Enchantement, acrylique sur toile coton, 80x80 cm."
        },
        {
          src: e3,
          alt: "Détail de la peinture Enchantement, acrylique sur toile coton, 80x80 cm."
        }
      ]
    },
    {
      "id": 7,
      "title": "Lïam",
  "src": l,
      "alt": "Peinture Lïam, acrylique sur toile coton, 40x50 cm.",
      "date": "2024",
      "dimensions": "40x50 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Une œuvre personnelle exprimant la singularité et la profondeur de l’artiste.",
      "subImages": [
        {
          "src": l2,
          "alt": "Détail de la peinture Lïam, acrylique sur toile coton, 40x50 cm."
        },
        {
          "src": l3,
          "alt": "Détail de la peinture Lïam, acrylique sur toile coton, 40x50 cm."
        },
        {
          "src": l4,
          "alt": "Détail de la peinture Lïam, acrylique sur toile coton, 40x50 cm."
        }
      ]
    },
    {
      "id": 8,
      "title": "Fleurs en folie",
  "src": fef,
      "alt": "Peinture Fleurs en folie, acrylique sur toile coton, 60x80 cm.",
      "date": "2024",
      "dimensions": "60x80 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Une composition dynamique et joyeuse autour du thème floral.",
      "subImages": [
        {
          "src": fef2,
          "alt": "Détail de la peinture Fleurs en folie, acrylique sur toile coton, 60x80 cm."
        },
        {
          "src": fef3,
          "alt": "Détail de la peinture Fleurs en folie, acrylique sur toile coton, 60x80 cm."
        }
      ]
    },
    {
      "id": 9,
      "title": "Trait pour trait",
  "src": tpt,
      "alt": "Peinture Trait pour trait, acrylique sur toile coton, 80x80 cm.",
      "date": "2024",
      "dimensions": "80x80 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Une étude graphique du trait et de la forme dans la couleur.",
      "subImages": [
        {
          "src": tpt2,
          "alt": "Détail de la peinture Trait pour trait, acrylique sur toile coton, 80x80 cm."
        },
        {
          "src": tpt3,
          "alt": "Détail de la peinture Trait pour trait, acrylique sur toile coton, 80x80 cm."
        },
        {
          "src": tpt4,
          "alt": "Détail de la peinture Trait pour trait, acrylique sur toile coton, 80x80 cm."
        }
      ]
    },
    {
      "id": 10,
      "title": "Je m’éparpille",
  "src": jm,
      "alt": "Peinture Je m’éparpille, acrylique sur toile coton, 100x100 cm.",
      "date": "2025",
      "dimensions": "100x100 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Une œuvre abstraite illustrant la dispersion et la multiplicité intérieure.",
      "subImages": [
        {
          "src": jm2,
          "alt": "Détail de la peinture Je m’éparpille, acrylique sur toile coton, 100x100 cm."
        },
        {
          "src": jm3,
          "alt": "Détail de la peinture Je m’éparpille, acrylique sur toile coton, 100x100 cm."
        }
      ]
    },
    {
      "id": 11,
      "title": "À consommer",
  "src": ac,
      "alt": "Peinture À consommer, acrylique sur toile coton, 100x100 cm.",
      "date": "2025",
      "dimensions": "100x100 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Réflexion picturale sur la société de consommation et l’éphémère.",
      "subImages": [
        {
          "src": ac2,
          "alt": "Détail de la peinture À consommer, acrylique sur toile coton, 100x100 cm."
        },
        {
          "src": ac3,
          "alt": "Détail de la peinture À consommer, acrylique sur toile coton, 100x100 cm."
        }
      ]
    },
    {
      "id": 12,
      "title": "Amitié",
  "src": a,
      "alt": "Peinture Amitié, acrylique sur toile coton, 80x80 cm.",
      "date": "2025",
      "dimensions": "80x80 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Une œuvre lumineuse symbolisant le lien, le partage et la chaleur humaine.",
      "subImages": [
        {
          "src": a2,
          "alt": "Détail de la peinture Amitié, acrylique sur toile coton, 80x80 cm."
        },
        {
          "src": a3,
          "alt": "Détail de la peinture Amitié, acrylique sur toile coton, 80x80 cm."
        },
        {
          "src": a4,
          "alt": "Détail de la peinture Amitié, acrylique sur toile coton, 80x80 cm."
        },
        {
          "src": a5,
          "alt": "Détail de la peinture Amitié, acrylique sur toile coton, 80x80 cm."
        }
      ]
    },
    {
      "id": 13,
      "title": "Là où je me pose",
  "src": lojmp,
      "alt": "Peinture Là où je me pose, acrylique sur toile coton, 80x60 cm.",
      "date": "2025",
      "dimensions": "80x60 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Un espace de calme et d’ancrage intérieur, entre repos et contemplation.",
      "subImages": [
        {
          "src": lojmp2,
          "alt": "Détail de la peinture Là où je me pose, acrylique sur toile coton, 80x60 cm."
        },
        {
          "src": lojmp3,
          "alt": "Détail de la peinture Là où je me pose, acrylique sur toile coton, 80x60 cm."
        }
      ]
    },
    {
      "id": 14,
      "title": "Totem 1",
  "src": bdf,
      "alt": "Sculpture Totem 1, acrylique sur bois MDF, 6.4x3.5x50 cm.",
      "date": "2025",
      "dimensions": "6.4x3.5x50 cm",
      "technique": "Acrylique sur bois MDF",
      "description": "Un totem minimaliste jouant sur la verticalité et la matière.",
      "subImages": []
    },
    {
      "id": 15,
      "title": "Totem 2",
      "src": bdf,
      "alt": "Sculpture Totem 2, acrylique sur bois MDF, 6.4x3.5x50 cm.",
      "date": "2025",
      "dimensions": "6.4x3.5x50 cm",
      "technique": "Acrylique sur bois MDF",
      "description": "Second totem de la série, jouant sur les contrastes et l’équilibre.",
      "subImages": []
    },
    {
      "id": 16,
      "title": "Admirable (recto/verso)",
      "src": bdf,
      "alt": "Œuvre Admirable, acrylique sur bois MDF, 34.5x33.5 cm, recto/verso.",
      "date": "2025",
      "dimensions": "34.5x33.5 cm",
      "technique": "Acrylique sur bois MDF",
      "description": "Une pièce recto-verso jouant sur la dualité et la perception.",
      "subImages": []
    },
    {
      "id": 17,
      "title": "Nonchalant",
      "src": bdf,
      "alt": "Peinture Nonchalant, acrylique sur toile coton, tissus et fils coton, 80x80 cm.",
      "date": "2025",
      "dimensions": "80x80 cm",
      "technique": "Acrylique sur toile coton, tissus et fils coton",
      "description": "Une œuvre texturée exprimant la liberté du geste et la douceur du textile.",
      "subImages": []
    },
    {
      "id": 18,
      "title": "L’envolée (tryptique)",
      "src": bdf,
      "alt": "Tryptique L’envolée : plaisir, confiance, détermination. Acrylique sur toile coton, 3 toiles 150x50 cm.",
      "date": "2025",
      "dimensions": "3 toiles 150x50 cm",
      "technique": "Acrylique sur toile coton",
      "description": "Un triptyque évoquant l’ascension intérieure à travers plaisir, confiance et détermination.",
      "subImages": []
    }
  ]
};

export default data;
