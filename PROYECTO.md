# Proyecto Pizarras Ecuador - Sitio Web Next.js

## 🎯 Descripción

Sitio web profesional y moderno para negocio de pizarras en Ecuador, inspirado en diseños de alta calidad del sector de diseño de interiores.

## 🚀 Tecnologías Utilizadas

- **Next.js 16** - Framework React de última generación
- **TypeScript** - Tipado estático para código más seguro
- **Tailwind CSS 4** - Framework CSS moderno y utilitario
- **React 19** - Biblioteca de UI
- **ESLint** - Linting de código

## 📋 Secciones del Sitio

### 1. **Header / Navegación**
- Logo de la empresa
- Enlaces a productos, servicios y contacto
- Diseño responsivo con menú adaptable

### 2. **Hero Section (Sección Principal)**
- Título impactante: "Pizarras de Alta Calidad"
- Descripción del negocio
- Dos botones de CTA:
  - Ver Catálogo
  - Solicitar Cotización
- Imagen/placeholder ilustrativo

### 3. **¿Por Qué Elegirnos?**
Tres columnas destacando:
- ✨ **Calidad Premium** - Materiales importados de primera
- 🛠️ **Instalación Profesional** - Equipo técnico capacitado
- 🎨 **Diseños Personalizados** - Adaptados a cada cliente

### 4. **Nuestros Productos**
Grid con 4 tipos de pizarras:
- 📋 Pizarras Acrílicas
- 🧲 Pizarras Magnéticas
- ✏️ Pizarras de Tiza
- 🎯 Pizarras Personalizadas

### 5. **Call to Action (CTA)**
- Fondo oscuro elegante
- Título motivador
- Botón para cotización gratuita

### 6. **Footer**
4 columnas con:
- Información de la empresa
- Enlaces a productos
- Enlaces a servicios
- Información de contacto (email, teléfono, ubicación)

## 🎨 Diseño

### Paleta de Colores
- **Principal**: Gris oscuro (#111827, #1F2937)
- **Secundario**: Gris claro (#F9FAFB, #F3F4F6)
- **Fondo**: Blanco (#FFFFFF)
- **Texto**: Grises variados para jerarquía

### Tipografía
- Font system nativo para mejor rendimiento
- Tamaños de fuente escalables (responsive)
- Pesos: Regular (400), Semibold (600), Bold (700)

### Características de Diseño
- ✅ Bordes redondeados modernos (rounded-lg, rounded-2xl)
- ✅ Sombras sutiles para profundidad
- ✅ Transiciones suaves en hover
- ✅ Grid responsive con Tailwind
- ✅ Espaciado consistente

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 📂 Estructura de Archivos

```
whiteboard-app/
├── app/
│   ├── page.tsx          # Página principal (landing page)
│   ├── layout.tsx        # Layout raíz de la aplicación
│   ├── globals.css       # Estilos globales + Tailwind
│   └── favicon.ico       # Ícono del sitio
├── public/               # Archivos estáticos
├── package.json          # Dependencias del proyecto
├── tsconfig.json         # Configuración TypeScript
├── next.config.ts        # Configuración Next.js
└── README.md             # Documentación principal
```

## 🎯 Próximos Pasos Sugeridos

1. **Contenido**
   - Reemplazar placeholder de imagen hero con foto real
   - Agregar imágenes de productos reales
   - Actualizar información de contacto real

2. **Funcionalidad**
   - Agregar página de productos individual
   - Implementar formulario de contacto funcional
   - Integrar con backend/CMS si es necesario

3. **Optimización**
   - Agregar imágenes optimizadas
   - Configurar SEO metadata
   - Implementar analytics (Google Analytics, etc.)

4. **Mejoras**
   - Agregar página de galería de proyectos
   - Implementar página de servicios detallados
   - Agregar testimonios de clientes

## 📞 Información de Contacto (Ejemplo)

- **Email**: info@pizarrasecuador.com
- **Teléfono**: +593 99 123 4567
- **Ubicación**: Quito, Ecuador

## 🌐 Despliegue

El sitio está listo para ser desplegado en:

- **Vercel** (Recomendado - integración directa con Next.js)
- **Netlify**
- **AWS / Google Cloud**
- Cualquier hosting con soporte Node.js

### Despliegue rápido en Vercel:

```bash
npm install -g vercel
vercel
```

---

**Creado con ❤️ para Pizarras Ecuador**
*Noviembre 2025*
