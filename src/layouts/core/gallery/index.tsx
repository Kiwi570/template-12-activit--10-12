// ============ GALLERY LAYOUTS — ALL VARIANTS ============
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { LayoutProps, GalleryContent, LayoutMeta } from '../../../types'

// ============ GALLERY GRID ============
export const gridMeta: LayoutMeta = {
  id: 'gallery-grid',
  name: 'Grille',
  description: 'Grille régulière — Classique',
  category: 'core',
  sectionType: 'gallery',
  tags: ['grille', 'régulier', 'classique'],
  popularity: 90,
  isRecommended: true,
}

export const GalleryGrid: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => {
  const [selected, setSelected] = useState<number | null>(null)
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative" onClick={() => setSelected(i)}>
              <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 p-2 text-white/60 hover:text-white z-10"><X size={32} /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white z-10" onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + content.items.length) % content.items.length) }}><ChevronLeft size={32} /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white z-10" onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % content.items.length) }}><ChevronRight size={32} /></button>
            <motion.img key={selected} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={content.items[selected].image} alt="" className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            {content.items[selected].title && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white font-semibold">{content.items[selected].title}</p>
                {content.items[selected].category && <p className="text-white/60 text-sm">{content.items[selected].category}</p>}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ============ GALLERY MASONRY ============
export const masonryMeta: LayoutMeta = {
  id: 'gallery-masonry',
  name: 'Masonry',
  description: 'Grille irrégulière — Dynamique',
  category: 'core',
  sectionType: 'gallery',
  tags: ['masonry', 'irrégulier', 'pinterest'],
  popularity: 88,
  isRecommended: true,
}

export const GalleryMasonry: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="gallery">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {content.items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer">
            <div className="relative">
              <img src={item.image} alt={item.title || ''} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                {item.title && <p className="text-white font-semibold">{item.title}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ GALLERY CAROUSEL ============
export const carouselMeta: LayoutMeta = {
  id: 'gallery-carousel',
  name: 'Carousel',
  description: 'Défilement horizontal — Interactif',
  category: 'core',
  sectionType: 'gallery',
  tags: ['carousel', 'slider', 'interactif'],
  popularity: 82,
}

export const GalleryCarousel: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 3
  const maxIndex = Math.max(0, content.items.length - itemsToShow)
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            {content.badge && <p className="text-sm uppercase tracking-widest mb-2" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0} className="p-3 rounded-full transition-colors disabled:opacity-30" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <ChevronLeft size={20} style={{ color: tokens.colors.text.primary }} />
            </button>
            <button onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))} disabled={currentIndex >= maxIndex} className="p-3 rounded-full transition-colors disabled:opacity-30" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <ChevronRight size={20} style={{ color: tokens.colors.text.primary }} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-hidden px-6">
        <motion.div animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="flex gap-6">
          {content.items.map((item, i) => (
            <motion.div key={i} className="flex-shrink-0 w-80 rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-[4/5] relative">
                <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold">{item.title}</p>
                    {item.category && <p className="text-white/60 text-sm">{item.category}</p>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============ GALLERY FEATURED ============
export const featuredMeta: LayoutMeta = {
  id: 'gallery-featured',
  name: 'Featured',
  description: 'Une grande + petites — Mise en avant',
  category: 'core',
  sectionType: 'gallery',
  tags: ['featured', 'bento', 'highlight'],
  popularity: 85,
}

export const GalleryFeatured: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="gallery">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Featured image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square lg:aspect-auto lg:row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
          <img src={content.items[0]?.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </motion.div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 gap-6">
          {content.items.slice(1, 5).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ============ GALLERY MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'gallery-minimal',
  name: 'Minimal',
  description: 'Simple 2 colonnes — Épuré',
  category: 'core',
  sectionType: 'gallery',
  tags: ['minimal', 'simple', 'épuré'],
  popularity: 75,
}

export const GalleryMinimal: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="gallery">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: tokens.colors.primary }}>{content.badge}</p>
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {content.items.slice(0, 4).map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-video rounded-xl overflow-hidden group cursor-pointer">
            <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default GalleryGrid
