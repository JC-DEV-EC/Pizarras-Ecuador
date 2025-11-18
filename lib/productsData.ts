export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  gallery: string[];
  price?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
}

export const productsData: Product[] = [
  {
    id: "pizarra-vidrio",
    name: "Pizarras de Vidrio",
    category: "Premium",
    description: "Elegantes y modernas, perfectas para oficinas",
    longDescription: "Nuestras pizarras de vidrio templado ofrecen una superficie lisa y duradera que no se mancha ni se decolora. Perfectas para espacios corporativos y modernos.",
    features: [
      "Vidrio templado de 6mm",
      "Superficie no porosa, fácil de limpiar",
      "Resistente a manchas y rayones",
      "Diseño minimalista y elegante",
      "Disponible en varios colores",
      "Incluye kit de instalación"
    ],
    image: "/images/pizarra_vidrio.png",
    gallery: [
      "/images/products/pizarra-vidrio/pizarra.V1.png",
      "/images/products/pizarra-vidrio/pizarra.V2.png",
      "/images/products/pizarra-vidrio/pizarra.V3.png"
    ],
    specifications: [
      { label: "Material", value: "Vidrio templado" },
      { label: "Grosor", value: "6mm" },
      { label: "Magnética", value: "Opcional" },
      { label: "Garantía", value: "5 años" }
    ]
  },
  {
    id: "pizarra-pedestal",
    name: "Pizarras de Pedestal",
    category: "Profesional",
    description: "Móviles y versátiles para cualquier espacio",
    longDescription: "Pizarras con pedestal móvil ideales para presentaciones y salas de reuniones. Fáciles de transportar y ajustar según tus necesidades.",
    features: [
      "Base con ruedas para fácil movilidad",
      "Altura ajustable",
      "Superficie de alta calidad",
      "Estable y segura",
      "Doble cara disponible",
      "Bandeja para marcadores incluida"
    ],
    image: "/images/pizarra_pedestal.png",
    gallery: [
      "/images/products/pizarra-pedestal/pedestal.P1.png",
      "/images/products/pizarra-pedestal/pedestal.P2.png",
      "/images/products/pizarra-pedestal/pedestal.P3.png"
    ],
    specifications: [
      { label: "Tipo", value: "Pedestal móvil" },
      { label: "Altura", value: "Ajustable" },
      { label: "Ruedas", value: "Sí, con freno" },
      { label: "Garantía", value: "3 años" }
    ]
  },
  {
    id: "pizarra-tiza",
    name: "Pizarras de Tiza",
    category: "Educación",
    description: "Clásicas y duraderas para educación",
    longDescription: "Las tradicionales pizarras de tiza, perfectas para ambientes educativos. Material resistente y de larga duración.",
    features: [
      "Superficie de alta calidad para tiza",
      "No refleja luz",
      "Fácil borrado",
      "Marco de aluminio reforzado",
      "Instalación en pared",
      "Bandeja para tizas y borrador"
    ],
    image: "/images/pizarra_tiza.png",
    gallery: [
      "/images/products/pizarra-tiza/pizarra.T1.jpg",
      "/images/products/pizarra-tiza/pizarra.T2.jpg",
      "/images/products/pizarra-tiza/pizarra.T3.jpg"
    ],
    specifications: [
      { label: "Material", value: "Melamina verde" },
      { label: "Marco", value: "Aluminio" },
      { label: "Montaje", value: "Pared" },
      { label: "Garantía", value: "2 años" }
    ]
  },
  {
    id: "pizarra-diseno",
    name: "Pizarras de Diseño",
    category: "Personalizado",
    description: "Personalizadas según tus necesidades",
    longDescription: "Diseñamos pizarras únicas adaptadas a tu espacio y marca. Desde formas personalizadas hasta impresiones corporativas.",
    features: [
      "Diseño 100% personalizado",
      "Renders 3D previos",
      "Variedad de materiales",
      "Impresión de logos y gráficos",
      "Formas y tamaños a medida",
      "Asesoría de diseño incluida"
    ],
    image: "/images/pizarra_diseño.png",
    gallery: [
      "/images/products/pizarra-diseño/pizarra.D1.png",
      "/images/products/pizarra-diseño/pizarra.D2.png",
      "/images/products/pizarra-diseño/pizarra.D3.png"
    ],
    specifications: [
      { label: "Tipo", value: "Personalizado" },
      { label: "Diseño", value: "A medida" },
      { label: "Materiales", value: "Varios" },
      { label: "Garantía", value: "3 años" }
    ]
  },
  {
    id: "pizarra-pared",
    name: "Pizarras de Pared",
    category: "Estándar",
    description: "Solución fija para espacios permanentes",
    longDescription: "Pizarras blancas magnéticas para instalación en pared. La solución clásica y confiable para oficinas y aulas.",
    features: [
      "Superficie magnética",
      "Marco de aluminio",
      "Fácil instalación",
      "Superficie borrable en seco",
      "Esquinas redondeadas",
      "Bandeja integrada"
    ],
    image: "/images/pizarra_pared.png",
    gallery: [
      "/images/products/pizarra-pared/pizarra.P1.png",
      "/images/products/pizarra-pared/pizarra.P2.png",
      "/images/products/pizarra-pared/pizarra.P3.png"
    ],
    specifications: [
      { label: "Material", value: "Acero esmaltado" },
      { label: "Magnética", value: "Sí" },
      { label: "Marco", value: "Aluminio" },
      { label: "Garantía", value: "5 años" }
    ]
  },
  {
    id: "caballete",
    name: "Caballetes",
    category: "Móvil",
    description: "Ideales para presentaciones y arte",
    longDescription: "Caballetes versátiles para uso en restaurantes, eventos y presentaciones. Estructura resistente y diseño profesional.",
    features: [
      "Estructura de madera o metal",
      "Plegable para fácil almacenamiento",
      "Superficie intercambiable",
      "Altura ajustable",
      "Base estable",
      "Ideal para menús y promociones"
    ],
    image: "/images/caballete.png",
    gallery: [
      "/images/products/caballete/CABALLETE NEW.png",
      "/images/products/caballete/PARA RESTAURANTES.png",
      "/images/products/caballete/Publicacion_pizarracaballete2v2_FB.jpg"
    ],
    specifications: [
      { label: "Material", value: "Madera/Metal" },
      { label: "Tipo", value: "Plegable" },
      { label: "Uso", value: "Interior/Exterior" },
      { label: "Garantía", value: "1 año" }
    ]
  },
  {
    id: "rotafolio",
    name: "Rotafolios",
    category: "Presentación",
    description: "Para presentaciones dinámicas",
    longDescription: "Rotafolios profesionales con caballete ajustable. Perfectos para talleres, capacitaciones y lluvia de ideas.",
    features: [
      "Caballete con trípode",
      "Sujetadores para papel",
      "Superficie magnética opcional",
      "Portátil y ligero",
      "Altura ajustable",
      "Bandeja para marcadores"
    ],
    image: "/images/rotafolio.png",
    gallery: [
      "/images/products/rotafolio/rotafolio.P1.png",
      "/images/products/rotafolio/rotafolio.P2.png",
      "/images/products/rotafolio/rotafolio.P3.png"
    ],
    specifications: [
      { label: "Tipo", value: "Trípode" },
      { label: "Material", value: "Metal" },
      { label: "Papel", value: "Tamaño estándar" },
      { label: "Garantía", value: "2 años" }
    ]
  },
  {
    id: "pedestal-vidrio",
    name: "Pedestal de Vidrio",
    category: "Premium",
    description: "Elegancia y funcionalidad premium",
    longDescription: "Combinación perfecta de vidrio templado con base móvil. Máxima elegancia y funcionalidad para espacios corporativos.",
    features: [
      "Vidrio templado de alta calidad",
      "Base con ruedas",
      "Diseño contemporáneo",
      "Fácil de mover",
      "Superficie magnética",
      "Acabados premium"
    ],
    image: "/images/pedestal_vidrio.png",
    gallery: [
      "/images/products/pedestal-vidrio/pedestal.V1.png",
      "/images/products/pedestal-vidrio/pedestal.V2.png",
      "/images/products/pedestal-vidrio/pedestal.V3.png"
    ],
    specifications: [
      { label: "Material", value: "Vidrio templado" },
      { label: "Base", value: "Móvil con ruedas" },
      { label: "Magnética", value: "Sí" },
      { label: "Garantía", value: "5 años" }
    ]
  },
  {
    id: "caballete-ninos",
    name: "Caballetes para Niños",
    category: "Infantil",
    description: "Perfectos para el aprendizaje creativo",
    longDescription: "Caballetes diseñados especialmente para niños. Altura adecuada, colores vibrantes y materiales seguros.",
    features: [
      "Altura adaptada para niños",
      "Colores llamativos",
      "Doble cara: pizarra y papel",
      "Base estable y segura",
      "Fácil de limpiar",
      "Incluye accesorios"
    ],
    image: "/images/products/caballete-ninos/caballete.P1.png",
    gallery: [
      "/images/products/caballete-ninos/caballete.P1.png",
      "/images/products/caballete-ninos/caballete.P2.png",
      "/images/products/caballete-ninos/caballete.P3.png"
    ],
    specifications: [
      { label: "Edad", value: "3-10 años" },
      { label: "Material", value: "Madera/Plástico" },
      { label: "Tipo", value: "Doble cara" },
      { label: "Garantía", value: "1 año" }
    ]
  },
  {
    id: "mesa-ninos",
    name: "Mesas para Niños",
    category: "Infantil",
    description: "Espacios didácticos y divertidos",
    longDescription: "Mesas con superficie de pizarra para que los niños desarrollen su creatividad. Ideales para escuelas y hogares.",
    features: [
      "Superficie tipo pizarra",
      "Altura para niños",
      "Colores vibrantes",
      "Material resistente",
      "Fácil de limpiar",
      "Bordes redondeados"
    ],
    image: "/images/products/mesa-niños/mesa.P1.png",
    gallery: [
      "/images/products/mesa-niños/mesa.P1.png",
      "/images/products/mesa-niños/mesa.P2.png",
      "/images/products/mesa-niños/mesa.P3.png"
    ],
    specifications: [
      { label: "Edad", value: "3-8 años" },
      { label: "Material", value: "MDF/Melamina" },
      { label: "Forma", value: "Rectangular" },
      { label: "Garantía", value: "1 año" }
    ]
  },
  {
    id: "carchografo",
    name: "Carchógrafo",
    category: "Profesional",
    description: "Exhibición profesional de documentos",
    longDescription: "Sistema de exhibición vertical para documentos, ideales para oficinas y recepciones. Organización profesional garantizada.",
    features: [
      "Múltiples compartimentos",
      "Instalación en pared",
      "Material acrílico transparente",
      "Fácil cambio de documentos",
      "Diseño limpio y moderno",
      "Varios tamaños disponibles"
    ],
    image: "/images/carchigrafos.jpg",
    gallery: [
      "/images/products/carchografo/carchografo.P1.png",
      "/images/products/carchografo/carchografo.P2.jpg"
    ],
    specifications: [
      { label: "Material", value: "Acrílico" },
      { label: "Compartimentos", value: "Variable" },
      { label: "Montaje", value: "Pared" },
      { label: "Garantía", value: "2 años" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(p => p.id === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter(p => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(productsData.map(p => p.category)));
}
