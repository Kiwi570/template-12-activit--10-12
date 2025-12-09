// ============ CTA LAYOUTS — ALL VARIANTS ============
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar, Mail } from 'lucide-react'
import type { LayoutProps, CtaContent, LayoutMeta } from '../../../types'

// ============ CTA CENTERED ============
export const centeredMeta: LayoutMeta = {
  id: 'cta-centered',
  name: 'Centré',
  description: 'Texte centré — Direct et efficace',
  category: 'core',
  sectionType: 'cta',
  tags: ['centré', 'simple', 'efficace'],
  popularity: 95,
  isRecommended: true,
}

export const CtaCentered: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="cta">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.description && <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>}
        
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg" style={{ background: tokens.colors.primary, boxShadow: `0 10px 30px ${tokens.colors.primary}40` }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
          {content.secondaryCta && (
            <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold transition-colors" style={{ border: `2px solid ${tokens.colors.border.strong}`, color: tokens.colors.text.primary }}>
              {content.secondaryCta.text}
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  </section>
)

// ============ CTA GRADIENT ============
export const gradientMeta: LayoutMeta = {
  id: 'cta-gradient',
  name: 'Gradient',
  description: 'Fond gradient — Impactant',
  category: 'core',
  sectionType: 'cta',
  tags: ['gradient', 'coloré', 'impactant'],
  popularity: 92,
  isRecommended: true,
}

export const CtaGradient: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-24 relative overflow-hidden" style={{ background: tokens.colors.gradient.cta }} id="cta">
    <div className="absolute inset-0 opacity-20">
      <motion.div animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
      <motion.div animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
    </div>
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.description && <p className="text-lg mb-8 text-white/80">{content.description}</p>}
        
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 bg-white shadow-xl" style={{ color: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
          {content.secondaryCta && (
            <motion.a href={content.secondaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              {content.secondaryCta.text}
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  </section>
)

// ============ CTA SPLIT ============
export const splitMeta: LayoutMeta = {
  id: 'cta-split',
  name: 'Split',
  description: 'Avec image — Visuel',
  category: 'core',
  sectionType: 'cta',
  tags: ['split', 'image', 'visuel'],
  popularity: 85,
}

export const CtaSplit: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="cta">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p className="text-xl mb-4" style={{ color: tokens.colors.primary }}>{content.subtitle}</p>}
          {content.description && <p className="mb-8" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>}
          
          {content.features && (
            <ul className="space-y-3 mb-8">
              {content.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: tokens.colors.text.secondary }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: tokens.colors.primary }} />
                  {f}
                </li>
              ))}
            </ul>
          )}
          
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white" style={{ background: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
        </motion.div>
        
        {content.image && (
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-square rounded-2xl overflow-hidden">
            <img src={content.image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </div>
    </div>
  </section>
)

// ============ CTA CARD ============
export const cardMeta: LayoutMeta = {
  id: 'cta-card',
  name: 'Card',
  description: 'En card flottante — Élégant',
  category: 'core',
  sectionType: 'cta',
  tags: ['card', 'flottant', 'élégant'],
  popularity: 80,
}

export const CtaCard: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="cta">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl" style={{ background: tokens.colors.gradient.cta }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.description && <p className="text-lg mb-8 text-white/80 max-w-xl mx-auto">{content.description}</p>}
          
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white" style={{ color: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
)

// ============ CTA MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'cta-minimal',
  name: 'Minimal',
  description: 'Une ligne — Épuré',
  category: 'core',
  sectionType: 'cta',
  tags: ['minimal', 'inline', 'épuré'],
  popularity: 70,
}

export const CtaMinimal: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-16" style={{ background: tokens.colors.background.surface }} id="cta">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 flex-shrink-0" style={{ background: tokens.colors.primary }}>
          {content.primaryCta.text} <ArrowRight size={18} />
        </motion.a>
      </div>
    </div>
  </section>
)

// ============ CTA ACTIONS ============
export const actionsMeta: LayoutMeta = {
  id: 'cta-actions',
  name: 'Actions',
  description: 'Plusieurs boutons — Multi-contact',
  category: 'core',
  sectionType: 'cta',
  tags: ['actions', 'multi', 'contact'],
  popularity: 75,
}

export const CtaActions: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => {
  // Use content for actions if available, otherwise defaults
  const actions = [
    { icon: Phone, label: 'Appeler', href: content.secondaryCta?.href || 'tel:+33100000000' },
    { icon: Calendar, label: 'Réserver', href: content.primaryCta.href },
    { icon: Mail, label: 'Email', href: `mailto:contact@example.com` },
  ]
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="cta">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.description && <p className="text-lg mb-12" style={{ color: tokens.colors.text.secondary }}>{content.description}</p>}
        
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, i) => (
            <motion.a key={i} href={action.href} whileHover={{ y: -4 }} className="p-6 rounded-2xl flex flex-col items-center gap-3 transition-shadow hover:shadow-lg" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <action.icon size={32} style={{ color: tokens.colors.primary }} />
              <span className="font-semibold" style={{ color: tokens.colors.text.primary }}>{action.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ CTA STATS ============
export const statsMeta: LayoutMeta = {
  id: 'cta-stats',
  name: 'Stats',
  description: 'Avec chiffres — Crédibilité',
  category: 'core',
  sectionType: 'cta',
  tags: ['stats', 'chiffres', 'crédibilité'],
  popularity: 78,
}

export const CtaStats: React.FC<LayoutProps<CtaContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.gradient.hero }} id="cta">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.description && <p className="text-lg mb-8 text-white/80">{content.description}</p>}
          <motion.a href={content.primaryCta.href} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white" style={{ color: tokens.colors.primary }}>
            {content.primaryCta.text} <ArrowRight size={18} />
          </motion.a>
        </div>
        
        {content.stats && (
          <div className="grid grid-cols-2 gap-6">
            {content.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
)

export default CtaCentered
