// ============ SERVICES LAYOUTS — ALL VARIANTS ============
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock, Star } from 'lucide-react'
import type { LayoutProps, ServicesContent, LayoutMeta } from '../../../types'

// ============ SERVICES GRID ============
export const gridMeta: LayoutMeta = {
  id: 'services-grid',
  name: 'Grille',
  description: 'Grille avec icônes — Simple et clair',
  category: 'core',
  sectionType: 'services',
  tags: ['grille', 'icônes', 'simple'],
  popularity: 90,
  isRecommended: true,
}

export const ServicesGrid: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 rounded-2xl transition-shadow hover:shadow-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            {service.icon && <div className="text-4xl mb-4">{service.icon}</div>}
            <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
            <p className="mb-4" style={{ color: tokens.colors.text.secondary }}>{service.description}</p>
            {service.price && (
              <div className="pt-4 border-t" style={{ borderColor: tokens.colors.border.default }}>
                <span className="font-bold text-lg" style={{ color: tokens.colors.primary }}>{service.price}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ SERVICES CARDS ============
export const cardsMeta: LayoutMeta = {
  id: 'services-cards',
  name: 'Cards Images',
  description: 'Cards avec images — Visuel et attractif',
  category: 'core',
  sectionType: 'services',
  tags: ['cards', 'images', 'visuel'],
  popularity: 88,
  isRecommended: true,
}

export const ServicesCards: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl overflow-hidden group" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            {service.image && (
              <div className="aspect-video overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {service.popular && <span className="px-2 py-1 rounded text-xs font-medium text-white" style={{ background: tokens.colors.primary }}>Populaire</span>}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
              <p className="mb-4 text-sm" style={{ color: tokens.colors.text.secondary }}>{service.description}</p>
              {service.features && (
                <ul className="space-y-2 mb-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: tokens.colors.text.muted }}>
                      <Check size={14} style={{ color: tokens.colors.primary }} /> {f}
                    </li>
                  ))}
                </ul>
              )}
              {service.price && (
                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: tokens.colors.border.default }}>
                  <span className="font-bold text-lg" style={{ color: tokens.colors.primary }}>{service.price}</span>
                  <motion.button whileHover={{ x: 5 }} className="flex items-center gap-1 font-medium text-sm" style={{ color: tokens.colors.primary }}>
                    En savoir plus <ArrowRight size={14} />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ SERVICES LIST ============
export const listMeta: LayoutMeta = {
  id: 'services-list',
  name: 'Liste',
  description: 'Liste numérotée — Processus clair',
  category: 'core',
  sectionType: 'services',
  tags: ['liste', 'numéroté', 'processus'],
  popularity: 75,
}

export const ServicesList: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="services">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-16">
        {content.badge && <p className="text-sm uppercase tracking-widest mb-2" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="space-y-8">
        {content.services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 p-6 rounded-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ background: tokens.colors.primary }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
              <p style={{ color: tokens.colors.text.secondary }}>{service.description}</p>
            </div>
            {service.price && (
              <div className="flex-shrink-0 text-right">
                <span className="font-bold text-lg" style={{ color: tokens.colors.primary }}>{service.price}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ SERVICES MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'services-minimal',
  name: 'Minimal',
  description: 'Style épuré — Élégant',
  category: 'core',
  sectionType: 'services',
  tags: ['minimal', 'épuré', 'élégant'],
  popularity: 70,
}

export const ServicesMinimal: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="services">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          {content.badge && <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        </div>
        
        <div className="space-y-12">
          {content.services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-l-2 pl-6" style={{ borderColor: tokens.colors.primary }}>
              <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
              <p style={{ color: tokens.colors.text.secondary }}>{service.description}</p>
              {service.price && <p className="mt-2 font-semibold" style={{ color: tokens.colors.primary }}>{service.price}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ============ SERVICES TABS (MENU) ============
export const tabsMeta: LayoutMeta = {
  id: 'services-tabs',
  name: 'Tabs/Menu',
  description: 'Par catégories — Restaurant/Menu',
  category: 'restaurant',
  sectionType: 'services',
  tags: ['tabs', 'catégories', 'menu'],
  popularity: 92,
  isRecommended: true,
  bestFor: ['restaurant'],
}

export const ServicesTabs: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => {
  const categories = content.categories || [...new Set(content.services.map(s => s.category).filter(Boolean))]
  const [activeCategory, setActiveCategory] = useState(categories[0] || '')
  const filteredServices = activeCategory ? content.services.filter(s => s.category === activeCategory) : content.services
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="services">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        </div>
        
        {categories.length > 0 && (
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat || '')} className="px-6 py-3 rounded-full font-medium transition-all" style={{ background: activeCategory === cat ? tokens.colors.primary : tokens.colors.background.card, color: activeCategory === cat ? 'white' : tokens.colors.text.secondary, border: `1px solid ${activeCategory === cat ? tokens.colors.primary : tokens.colors.border.default}` }}>
                {cat}
              </button>
            ))}
          </div>
        )}
        
        <div className="space-y-4">
          {filteredServices.map((service, i) => (
            <motion.div key={`${activeCategory}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between p-6 rounded-xl group hover:shadow-lg transition-shadow" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
                  {service.popular && <Star size={14} fill={tokens.colors.primary} style={{ color: tokens.colors.primary }} />}
                </div>
                <p className="text-sm" style={{ color: tokens.colors.text.muted }}>{service.description}</p>
              </div>
              {service.price && <span className="font-bold text-lg ml-4" style={{ color: tokens.colors.primary }}>{service.price}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ SERVICES PACKAGES ============
export const packagesMeta: LayoutMeta = {
  id: 'services-packages',
  name: 'Packages',
  description: 'Formules détaillées — Prestations',
  category: 'photographer',
  sectionType: 'services',
  tags: ['packages', 'formules', 'détaillé'],
  popularity: 88,
  bestFor: ['photographer'],
}

export const ServicesPackages: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {content.services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-2xl overflow-hidden ${service.popular ? 'ring-2' : ''}`} style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}`, ringColor: tokens.colors.primary }}>
            {service.image && (
              <div className="aspect-[16/10] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              {service.popular && <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4" style={{ background: tokens.colors.primary }}>Populaire</span>}
              <h3 className="text-2xl font-bold mb-2" style={{ color: tokens.colors.text.primary }}>{service.title}</h3>
              <p className="mb-4" style={{ color: tokens.colors.text.secondary }}>{service.description}</p>
              {service.price && <p className="text-2xl font-bold mb-6" style={{ color: tokens.colors.primary }}>{service.price}</p>}
              
              {service.features && (
                <ul className="space-y-3 mb-6">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3" style={{ color: tokens.colors.text.secondary }}>
                      <Check size={18} style={{ color: tokens.colors.primary }} /> {f}
                    </li>
                  ))}
                </ul>
              )}
              
              <motion.button whileHover={{ scale: 1.02 }} className="w-full py-3 rounded-lg font-semibold transition-colors" style={{ background: service.popular ? tokens.colors.primary : 'transparent', color: service.popular ? 'white' : tokens.colors.primary, border: `2px solid ${tokens.colors.primary}` }}>
                Choisir cette formule
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesGrid
