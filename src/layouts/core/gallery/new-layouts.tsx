// ============ NEW GALLERY LAYOUTS — FILTERABLE + BEFORE/AFTER ============
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, GripVertical } from 'lucide-react'
import type { LayoutProps, GalleryContent, LayoutMeta } from '../../../types'

// ============ GALLERY FILTERABLE ============
export const filterableMeta: LayoutMeta = {
  id: 'gallery-filterable',
  name: 'Filtrable',
  description: 'Avec filtres par catégorie — Photographe/Artisan',
  category: 'photographer',
  sectionType: 'gallery',
  tags: ['filtres', 'catégories', 'portfolio'],
  popularity: 93,
  isRecommended: true,
  isNew: true,
  bestFor: ['photographer', 'artisan'],
}

export const GalleryFilterable: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  // Extract unique categories
  const categories = ['all', ...new Set(content.items.map(item => item.category).filter(Boolean) as string[])]
  
  // Filter items
  const filteredItems = activeFilter === 'all' 
    ? content.items 
    : content.items.filter(item => item.category === activeFilter)

  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {content.badge && (
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
              style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}
            >
              {content.badge}
            </span>
          )}
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}
          >
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>
              {content.subtitle}
            </p>
          )}
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-medium transition-all capitalize"
              style={{ 
                background: activeFilter === cat ? tokens.colors.primary : tokens.colors.background.card,
                color: activeFilter === cat ? 'white' : tokens.colors.text.secondary,
                border: `1px solid ${activeFilter === cat ? tokens.colors.primary : tokens.colors.border.default}`
              }}
            >
              {cat === 'all' ? 'Tous' : cat}
            </motion.button>
          ))}
        </div>
        
        {/* Gallery Grid with Animation */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={`${item.image}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelected(content.items.indexOf(item))}
              >
                <img 
                  src={item.image} 
                  alt={item.title || ''} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  {item.title && (
                    <p className="text-white font-semibold">{item.title}</p>
                  )}
                  {item.category && (
                    <p className="text-white/70 text-sm">{item.category}</p>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Show count */}
        <p className="text-center mt-8 text-sm" style={{ color: tokens.colors.text.muted }}>
          {filteredItems.length} projet{filteredItems.length > 1 ? 's' : ''} affiché{filteredItems.length > 1 ? 's' : ''}
        </p>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-white/60 hover:text-white z-10">
              <X size={32} />
            </button>
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white z-10" 
              onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + content.items.length) % content.items.length) }}
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white z-10" 
              onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % content.items.length) }}
            >
              <ChevronRight size={32} />
            </button>
            <motion.img 
              key={selected} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              src={content.items[selected].image} 
              alt="" 
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg" 
              onClick={(e) => e.stopPropagation()} 
            />
            {content.items[selected].title && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white font-semibold">{content.items[selected].title}</p>
                {content.items[selected].category && (
                  <p className="text-white/60 text-sm">{content.items[selected].category}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ============ GALLERY BEFORE/AFTER ============
export const beforeAfterMeta: LayoutMeta = {
  id: 'gallery-beforeafter',
  name: 'Avant/Après',
  description: 'Comparaison avec slider — Beauté/Fitness',
  category: 'beauty',
  sectionType: 'gallery',
  tags: ['avant-après', 'slider', 'comparaison'],
  popularity: 89,
  isRecommended: true,
  isNew: true,
  bestFor: ['beauty', 'fitness'],
}

// Before/After Slider Component
const BeforeAfterSlider: React.FC<{
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  tokens: any
}> = ({ beforeImage, afterImage, beforeLabel = 'Avant', afterLabel = 'Après', tokens }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <div 
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Après" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Avant" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            width: `${100 / (sliderPosition / 100)}%`,
            maxWidth: 'none'
          }}
        />
      </div>
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center"
          style={{ border: `3px solid ${tokens.colors.primary}` }}
        >
          <GripVertical size={20} style={{ color: tokens.colors.primary }} />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
        <span className="text-white text-sm font-medium">{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
        <span className="text-white text-sm font-medium">{afterLabel}</span>
      </div>
    </div>
  )
}

export const GalleryBeforeAfter: React.FC<LayoutProps<GalleryContent>> = ({ content, tokens }) => {
  // Group items in pairs (before/after)
  const pairs = []
  for (let i = 0; i < content.items.length - 1; i += 2) {
    pairs.push({
      before: content.items[i],
      after: content.items[i + 1],
      title: content.items[i].title || `Transformation ${Math.floor(i/2) + 1}`
    })
  }

  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {content.badge && (
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
              style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}
            >
              {content.badge}
            </span>
          )}
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}
          >
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>
              {content.subtitle}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <BeforeAfterSlider
                beforeImage={pair.before.image}
                afterImage={pair.after.image}
                tokens={tokens}
              />
              <div className="text-center">
                <h3 className="font-semibold" style={{ color: tokens.colors.text.primary }}>
                  {pair.title}
                </h3>
                {pair.before.description && (
                  <p className="text-sm" style={{ color: tokens.colors.text.muted }}>
                    {pair.before.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm"
          style={{ color: tokens.colors.text.muted }}
        >
          Faites glisser le curseur pour voir la transformation
        </motion.p>
      </div>
    </section>
  )
}

export default { GalleryFilterable, GalleryBeforeAfter }
