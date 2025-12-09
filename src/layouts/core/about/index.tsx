// ============ ABOUT LAYOUTS — ALL VARIANTS ============
import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { LayoutProps, AboutContent, LayoutMeta } from '../../../types'

// ============ ABOUT SPLIT ============
export const splitMeta: LayoutMeta = {
  id: 'about-split',
  name: 'Split',
  description: 'Image + texte — Classique et équilibré',
  category: 'core',
  sectionType: 'about',
  tags: ['split', 'image', 'équilibré'],
  popularity: 90,
  isRecommended: true,
}

export const AboutSplit: React.FC<LayoutProps<AboutContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {content.image && (
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={content.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl opacity-20" style={{ background: tokens.colors.primary }} />
          </motion.div>
        )}
        
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p className="text-xl mb-4" style={{ color: tokens.colors.primary }}>{content.subtitle}</p>}
          <p className="text-lg mb-8" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
          
          {content.features && (
            <ul className="space-y-3 mb-8">
              {content.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: tokens.colors.text.secondary }}>
                  <Check size={18} style={{ color: tokens.colors.primary }} /> {f}
                </li>
              ))}
            </ul>
          )}
          
          {content.stats && (
            <div className="flex gap-8 pt-6 border-t" style={{ borderColor: tokens.colors.border.default }}>
              {content.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  </section>
)

// ============ ABOUT CENTERED ============
export const centeredMeta: LayoutMeta = {
  id: 'about-centered',
  name: 'Centré',
  description: 'Tout centré — Focus sur le message',
  category: 'core',
  sectionType: 'about',
  tags: ['centré', 'texte', 'simple'],
  popularity: 80,
}

export const AboutCentered: React.FC<LayoutProps<AboutContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="about">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
        
        {content.image && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img src={content.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        
        {content.stats && (
          <div className="flex justify-center gap-16 flex-wrap">
            {content.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-bold" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                <div className="text-sm" style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  </section>
)

// ============ ABOUT MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'about-minimal',
  name: 'Minimal',
  description: 'Texte seul — Épuré et élégant',
  category: 'core',
  sectionType: 'about',
  tags: ['minimal', 'texte', 'épuré'],
  popularity: 70,
}

export const AboutMinimal: React.FC<LayoutProps<AboutContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="about">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {content.badge && <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        <div className="w-16 h-1 mb-8" style={{ background: tokens.colors.primary }} />
        <p className="text-xl leading-relaxed" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
      </motion.div>
    </div>
  </section>
)

// ============ ABOUT FULL ============
export const fullMeta: LayoutMeta = {
  id: 'about-full',
  name: 'Full',
  description: 'Fond gradient — Immersif',
  category: 'core',
  sectionType: 'about',
  tags: ['full', 'gradient', 'immersif'],
  popularity: 85,
}

export const AboutFull: React.FC<LayoutProps<AboutContent>> = ({ content, tokens }) => (
  <section className="py-24 relative" style={{ background: tokens.colors.gradient.hero }} id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white">{content.badge}</span>}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          <p className="text-lg text-white/80 mb-8">{content.description}</p>
          
          {content.features && (
            <ul className="space-y-3 mb-8">
              {content.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <Check size={18} className="text-white" /> {f}
                </li>
              ))}
            </ul>
          )}
          
          {content.stats && (
            <div className="flex gap-8">
              {content.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
        
        {content.image && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src={content.image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </div>
    </div>
  </section>
)

// ============ ABOUT CARDS ============
export const cardsMeta: LayoutMeta = {
  id: 'about-cards',
  name: 'Cards Stats',
  description: 'Stats en cards — Données en évidence',
  category: 'core',
  sectionType: 'about',
  tags: ['cards', 'stats', 'données'],
  popularity: 75,
}

export const AboutCards: React.FC<LayoutProps<AboutContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>
      </div>
      
      {content.stats && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 rounded-2xl text-center transition-shadow hover:shadow-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <div className="text-5xl font-bold mb-2" style={{ color: tokens.colors.primary }}>{stat.value}</div>
              <div style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </section>
)

export default AboutSplit
