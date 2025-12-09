// ============ HERO LAYOUTS — ALL VARIANTS ============
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Clock, ChevronDown, Play } from 'lucide-react'
import type { LayoutProps, HeroContent, LayoutMeta } from '../../../types'

// ============ HERO SPLIT ============
export const splitMeta: LayoutMeta = {
  id: 'hero-split',
  name: 'Split',
  description: 'Image à droite — Équilibré et moderne',
  category: 'core',
  sectionType: 'hero',
  tags: ['split', 'image', 'moderne'],
  popularity: 95,
  isRecommended: true,
}

export const HeroSplit: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen flex items-center py-20" style={{ background: tokens.colors.background.main }} id="hero">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          {content.badge && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>
              {content.badge}
            </motion.span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>
            {content.title}
          </h1>
          {content.subtitle && <p className="text-xl mb-4" style={{ color: tokens.colors.primary }}>{content.subtitle}</p>}
          <p className="text-lg mb-8 max-w-lg" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg" style={{ background: tokens.colors.primary, boxShadow: `0 10px 30px ${tokens.colors.primary}40` }}>
              {content.primaryCta.text} <ArrowRight size={18} />
            </motion.a>
            {content.secondaryCta && (
              <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold transition-colors" style={{ border: `2px solid ${tokens.colors.border.strong}`, color: tokens.colors.text.primary }}>
                {content.secondaryCta.text}
              </motion.a>
            )}
          </div>
          
          {content.stats && (
            <div className="flex gap-8 pt-4 border-t" style={{ borderColor: tokens.colors.border.default }}>
              {content.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
        
        {content.image && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src={content.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl opacity-20" style={{ background: tokens.colors.primary }} />
          </motion.div>
        )}
      </div>
    </div>
  </section>
)

// ============ HERO CENTERED ============
export const centeredMeta: LayoutMeta = {
  id: 'hero-centered',
  name: 'Centré',
  description: 'Tout centré — Focus sur le message',
  category: 'core',
  sectionType: 'hero',
  tags: ['centré', 'simple', 'focus'],
  popularity: 90,
  isRecommended: true,
}

export const HeroCentered: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden" style={{ background: tokens.colors.gradient.hero }} id="hero">
    <div className="absolute inset-0 opacity-10">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 left-20 w-64 h-64 rounded-full" style={{ background: 'white' }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [180, 0, 180] }} transition={{ duration: 25, repeat: Infinity }} className="absolute bottom-20 right-20 w-48 h-48 rounded-full" style={{ background: 'white' }} />
    </div>
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/20 text-white backdrop-blur-sm">{content.badge}</span>}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h1>
        {content.subtitle && <p className="text-xl md:text-2xl mb-4 text-white/80">{content.subtitle}</p>}
        <p className="text-lg mb-10 text-white/70 max-w-2xl mx-auto">{content.description}</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 bg-white shadow-xl" style={{ color: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
          {content.secondaryCta && (
            <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              {content.secondaryCta.text}
            </motion.a>
          )}
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// ============ HERO BOLD ============
export const boldMeta: LayoutMeta = {
  id: 'hero-bold',
  name: 'Bold',
  description: 'Typographie XXL — Maximum impact',
  category: 'core',
  sectionType: 'hero',
  tags: ['bold', 'typo', 'impact'],
  popularity: 85,
  isNew: true,
}

export const HeroBold: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => {
  const words = content.title.split(' ')
  const highlightIndex = Math.floor(words.length / 2)
  
  return (
    <section className="min-h-screen flex items-center py-20" style={{ background: tokens.colors.background.main }} id="hero">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-8">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8" style={{ fontFamily: tokens.typography.fontFamily.heading }}>
            {words.map((word, i) => (
              <span key={i} style={{ color: i === highlightIndex ? tokens.colors.primary : tokens.colors.text.primary }}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-10" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg text-white shadow-2xl" style={{ background: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={24} />
          </motion.a>
        </motion.div>
        
        {content.stats && (
          <div className="flex flex-wrap gap-12 mt-16 pt-8 border-t" style={{ borderColor: tokens.colors.border.default }}>
            {content.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <div className="text-4xl font-bold" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                <div style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ============ HERO MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'hero-minimal',
  name: 'Minimal',
  description: 'Épuré — Élégance simple',
  category: 'core',
  sectionType: 'hero',
  tags: ['minimal', 'épuré', 'simple'],
  popularity: 75,
}

export const HeroMinimal: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-[80vh] flex items-center py-20" style={{ background: tokens.colors.background.surface }} id="hero">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="w-12 h-1 mb-8" style={{ background: tokens.colors.primary }} />
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>
          {content.title}
        </h1>
        <p className="text-xl mb-10 max-w-2xl" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
        
        <motion.a href={content.primaryCta.href} whileHover={{ x: 10 }} className="inline-flex items-center gap-3 font-semibold text-lg" style={{ color: tokens.colors.primary }}>
          {content.primaryCta.text} <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </div>
  </section>
)

// ============ HERO FULL ============
export const fullMeta: LayoutMeta = {
  id: 'hero-full',
  name: 'Full',
  description: 'Image plein écran — Immersif',
  category: 'core',
  sectionType: 'hero',
  tags: ['full', 'image', 'immersif'],
  popularity: 88,
}

export const HeroFull: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen relative flex items-center justify-center" id="hero">
    {content.image && (
      <div className="absolute inset-0">
        <img src={content.image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
    )}
    
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm">{content.badge}</span>}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h1>
        {content.subtitle && <p className="text-xl md:text-2xl mb-4 text-white/80">{content.subtitle}</p>}
        <p className="text-lg mb-10 text-white/70 max-w-2xl mx-auto">{content.description}</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2" style={{ background: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
          {content.secondaryCta && (
            <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10">
              {content.secondaryCta.text}
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
    
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown size={32} className="text-white/50" />
      </motion.div>
    </motion.div>
  </section>
)

// ============ HERO STATS ============
export const statsMeta: LayoutMeta = {
  id: 'hero-stats',
  name: 'Stats',
  description: 'Chiffres en avant — Crédibilité',
  category: 'core',
  sectionType: 'hero',
  tags: ['stats', 'chiffres', 'crédibilité'],
  popularity: 82,
}

export const HeroStats: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen flex items-center py-20" style={{ background: tokens.colors.background.surface }} id="hero">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h1>
          <p className="text-lg mb-8" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white" style={{ background: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
        </motion.div>
        
        {content.stats && (
          <div className="grid grid-cols-2 gap-6">
            {content.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-8 rounded-2xl text-center" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
                <div className="text-5xl font-bold mb-2" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                <div style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
)

// ============ HERO VIDEO ============
export const videoMeta: LayoutMeta = {
  id: 'hero-video',
  name: 'Video',
  description: 'Avec bouton vidéo — Engageant',
  category: 'core',
  sectionType: 'hero',
  tags: ['video', 'media', 'engageant'],
  popularity: 78,
}

export const HeroVideo: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen flex items-center py-20" style={{ background: tokens.colors.background.main }} id="hero">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h1>
          <p className="text-lg mb-8" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2" style={{ background: tokens.colors.primary }}>
              {content.primaryCta.text} <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
        
        {content.image && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
            <img src={content.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                <Play size={32} fill={tokens.colors.primary} style={{ color: tokens.colors.primary }} className="ml-1" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
)

// ============ HERO RESTAURANT ============
export const restaurantMeta: LayoutMeta = {
  id: 'hero-restaurant',
  name: 'Restaurant',
  description: 'Avec horaires et note — Restauration',
  category: 'restaurant',
  sectionType: 'hero',
  tags: ['restaurant', 'horaires', 'avis'],
  popularity: 92,
  isRecommended: true,
  bestFor: ['restaurant'],
}

export const HeroRestaurant: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => (
  <section className="min-h-screen flex items-center py-20" style={{ background: tokens.colors.background.main }} id="hero">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h1>
          {content.subtitle && <p className="text-xl mb-4" style={{ color: tokens.colors.primary }}>{content.subtitle}</p>}
          <p className="text-lg mb-6" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {content.openingHours && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: tokens.colors.background.surface }}>
                <Clock size={18} style={{ color: tokens.colors.primary }} />
                <span style={{ color: tokens.colors.text.secondary }}>{content.openingHours}</span>
              </div>
            )}
            {content.rating && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: tokens.colors.background.surface }}>
                <Star size={18} fill={tokens.colors.primary} style={{ color: tokens.colors.primary }} />
                <span className="font-semibold" style={{ color: tokens.colors.text.primary }}>{content.rating}</span>
                {content.reviewCount && <span style={{ color: tokens.colors.text.muted }}>({content.reviewCount} avis)</span>}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2" style={{ background: tokens.colors.primary }}>
              {content.primaryCta.text} <ArrowRight size={18} />
            </motion.a>
            {content.secondaryCta && (
              <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold" style={{ border: `2px solid ${tokens.colors.border.strong}`, color: tokens.colors.text.primary }}>
                {content.secondaryCta.text}
              </motion.a>
            )}
          </div>
        </motion.div>
        
        {content.image && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src={content.image} alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
)

export default HeroSplit
