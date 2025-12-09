// ============ TESTIMONIALS LAYOUTS — ALL VARIANTS (MARQUEE FIXED) ============
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import type { LayoutProps, TestimonialsContent, LayoutMeta } from '../../../types'

const StarRating = ({ rating, color }: { rating: number; color: string }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map(i => (
      <Star key={i} size={16} fill={i <= rating ? color : 'transparent'} color={color} />
    ))}
  </div>
)

// ============ TESTIMONIALS CARDS ============
export const cardsMeta: LayoutMeta = {
  id: 'testimonials-cards',
  name: 'Cards',
  description: 'En grille — Vue d\'ensemble',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['cards', 'grille', 'multiple'],
  popularity: 95,
  isRecommended: true,
}

export const TestimonialsCards: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="testimonials">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.averageRating && (
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={content.averageRating} color={tokens.colors.primary} />
            <span style={{ color: tokens.colors.text.muted }}>{content.totalReviews} avis</span>
          </div>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            <Quote size={24} style={{ color: tokens.colors.primary }} className="mb-4 opacity-50" />
            <p className="mb-6" style={{ color: tokens.colors.text.secondary }}>{t.content}</p>
            <div className="flex items-center gap-3">
              {t.avatar && <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />}
              <div>
                <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>{t.name}</p>
                {t.role && <p className="text-sm" style={{ color: tokens.colors.text.muted }}>{t.role}</p>}
              </div>
            </div>
            {t.rating && <div className="mt-4"><StarRating rating={t.rating} color={tokens.colors.primary} /></div>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ TESTIMONIALS SLIDER ============
export const sliderMeta: LayoutMeta = {
  id: 'testimonials-slider',
  name: 'Slider',
  description: 'Carrousel interactif — Engageant',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['slider', 'carrousel', 'interactif'],
  popularity: 88,
  isRecommended: true,
}

export const TestimonialsSlider: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((c) => (c + 1) % content.testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + content.testimonials.length) % content.testimonials.length)
  const t = content.testimonials[current]
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center p-8 rounded-2xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <Quote size={48} style={{ color: tokens.colors.primary }} className="mx-auto mb-6 opacity-30" />
              <p className="text-xl mb-8" style={{ color: tokens.colors.text.secondary }}>{t.content}</p>
              <div className="flex flex-col items-center">
                {t.avatar && <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-3" />}
                <p className="font-semibold text-lg" style={{ color: tokens.colors.text.primary }}>{t.name}</p>
                {t.role && <p className="text-sm" style={{ color: tokens.colors.text.muted }}>{t.role}</p>}
                {t.rating && <div className="mt-3"><StarRating rating={t.rating} color={tokens.colors.primary} /></div>}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full transition-colors hover:bg-black/5" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <ChevronLeft size={20} style={{ color: tokens.colors.text.primary }} />
            </button>
            <div className="flex items-center gap-2">
              {content.testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="h-2 rounded-full transition-all" style={{ background: i === current ? tokens.colors.primary : tokens.colors.border.default, width: i === current ? '24px' : '8px' }} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full transition-colors hover:bg-black/5" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <ChevronRight size={20} style={{ color: tokens.colors.text.primary }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ TESTIMONIALS FEATURED ============
export const featuredMeta: LayoutMeta = {
  id: 'testimonials-featured',
  name: 'Featured',
  description: 'Un seul grand — Mise en avant',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['featured', 'grand', 'focus'],
  popularity: 85,
}

export const TestimonialsFeatured: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => {
  const featured = content.testimonials[0]
  return (
    <section className="py-24" style={{ background: tokens.colors.gradient.hero }} id="testimonials">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote size={64} className="mx-auto mb-8 text-white/30" />
        <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">{featured.content}</p>
        <div className="flex flex-col items-center">
          {featured.avatar && <img src={featured.avatar} alt={featured.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white/20" />}
          <p className="font-semibold text-xl text-white">{featured.name}</p>
          {featured.role && <p className="text-white/60">{featured.role}</p>}
        </div>
      </div>
    </section>
  )
}

// ============ TESTIMONIALS LIST ============
export const listMeta: LayoutMeta = {
  id: 'testimonials-list',
  name: 'Liste',
  description: 'Liste verticale — Compact',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['liste', 'vertical', 'compact'],
  popularity: 75,
}

export const TestimonialsList: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="testimonials">
    <div className="max-w-3xl mx-auto px-6">
      <div className="mb-12">
        {content.badge && <p className="text-sm uppercase tracking-widest mb-2" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      <div className="space-y-6">
        {content.testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-xl" style={{ background: tokens.colors.background.surface, border: `1px solid ${tokens.colors.border.default}` }}>
            <p className="mb-4" style={{ color: tokens.colors.text.secondary }}>{t.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {t.avatar && <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />}
                <div>
                  <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>{t.name}</p>
                  {t.role && <p className="text-xs" style={{ color: tokens.colors.text.muted }}>{t.role}</p>}
                </div>
              </div>
              {t.rating && <StarRating rating={t.rating} color={tokens.colors.primary} />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ TESTIMONIALS MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'testimonials-minimal',
  name: 'Minimal',
  description: 'Split simple — Épuré',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['minimal', 'split', 'épuré'],
  popularity: 70,
}

export const TestimonialsMinimal: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="testimonials">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        </div>
        <div className="space-y-8">
          {content.testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-2 pl-6" style={{ borderColor: tokens.colors.primary }}>
              <p className="mb-4 italic" style={{ color: tokens.colors.text.secondary }}>"{t.content}"</p>
              <div className="flex items-center gap-3">
                {t.avatar && <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />}
                <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ============ TESTIMONIALS MARQUEE (FIXED with CSS animation) ============
export const marqueeMeta: LayoutMeta = {
  id: 'testimonials-marquee',
  name: 'Marquee',
  description: 'Défilement infini — Dynamique',
  category: 'core',
  sectionType: 'testimonials',
  tags: ['marquee', 'animation', 'infini'],
  popularity: 76,
  isNew: true,
}

export const TestimonialsMarquee: React.FC<LayoutProps<TestimonialsContent>> = ({ content, tokens }) => {
  // Double the testimonials for seamless loop
  const items = [...content.testimonials, ...content.testimonials]
  
  return (
    <section className="py-24 overflow-hidden" style={{ background: tokens.colors.background.surface }} id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        </div>
      </div>
      
      {/* Marquee container with CSS animation */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {items.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-80 p-6 rounded-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <p className="text-sm mb-4" style={{ color: tokens.colors.text.secondary }}>{t.content}</p>
              <div className="flex items-center gap-3">
                {t.avatar && <img src={t.avatar} alt="" className="w-10 h-10 rounded-full" />}
                <div>
                  <p className="font-semibold text-sm" style={{ color: tokens.colors.text.primary }}>{t.name}</p>
                  {t.rating && <StarRating rating={t.rating} color={tokens.colors.primary} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCards
