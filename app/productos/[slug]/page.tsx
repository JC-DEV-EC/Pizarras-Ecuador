"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, productsData } from "@/lib/productsData";
import Icons from "@/components/Icons";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#1A1A1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Producto no encontrado</h1>
          <Link href="/#products" className="text-[#E1B261] hover:text-[#CBA058] transition">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#222224]">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Breadcrumbs */}
      <section className="bg-[#1A1A1C] py-4 border-b border-[#E1B261]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#A7A7A7] hover:text-[#E1B261] transition">
              Inicio
            </Link>
            <Icons.chevronRight className="w-4 h-4 text-[#A7A7A7]" />
            <Link href="/#products" className="text-[#A7A7A7] hover:text-[#E1B261] transition">
              Productos
            </Link>
            <Icons.chevronRight className="w-4 h-4 text-[#A7A7A7]" />
            <span className="text-white font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="relative py-16 bg-gradient-to-br from-[#1A1A1C] to-[#222224] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E1B261]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#CBA058]/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Images */}
            <AnimatedSection>
              <div className="space-y-6">
                {/* Main Image */}
                <div className="liquid-glass-dark rounded-3xl overflow-hidden p-8">
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                    <Image
                      src={product.gallery[selectedImage]}
                      alt={`${product.name} - Imagen ${selectedImage + 1}`}
                      fill
                      className="object-contain p-8"
                      priority
                    />
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition ${
                        idx === selectedImage
                          ? 'border-[#E1B261] scale-105'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-contain bg-white p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Details */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E1B261]/20 to-[#CBA058]/20 rounded-full text-sm font-semibold text-[#E1B261]">
                  {product.category}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-xl text-[#A7A7A7]">
                  {product.description}
                </p>

                {/* Long Description */}
                <p className="text-lg text-[#A7A7A7] leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Features */}
                <div className="liquid-glass p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <Icons.checkCircle className="w-6 h-6 text-[#E1B261]" />
                    Características
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#A7A7A7]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261] mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                {product.specifications && (
                  <div className="liquid-glass p-6 rounded-2xl">
                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                      <Icons.cube className="w-6 h-6 text-[#E1B261]" />
                      Especificaciones
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specifications.map((spec, idx) => (
                        <div key={idx}>
                          <div className="text-[#A7A7A7] text-sm mb-1">{spec.label}</div>
                          <div className="text-white font-semibold">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/59399529697?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-gradient-to-r from-[#E1B261] to-[#CBA058] text-[#1A1A1C] px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-[#E1B261]/50 transition-all font-bold text-lg hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Icons.whatsapp className="w-6 h-6" />
                    Solicitar Cotización
                    <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/#products"
                    className="flex-1 border-2 border-[#E1B261] text-[#E1B261] px-8 py-4 rounded-2xl hover:bg-[#E1B261] hover:text-[#1A1A1C] transition-all font-bold text-lg hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Ver Más Productos
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative py-16 bg-[#1A1A1C]">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Productos <span className="bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">Relacionados</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, idx) => (
                <AnimatedSection key={relatedProduct.id} delay={idx * 100}>
                  <Link
                    href={`/productos/${relatedProduct.id}`}
                    className="group block liquid-glass-dark rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500"
                  >
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-8 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#E1B261]/20 to-[#CBA058]/20 text-[#E1B261] text-xs font-bold rounded-full mb-3">
                        {relatedProduct.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E1B261] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-[#A7A7A7] text-sm">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
