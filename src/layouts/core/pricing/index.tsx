// ============ PRICING LAYOUTS — ALL VARIANTS (TOGGLE FIXED) ============
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { LayoutProps, PricingContent, LayoutMeta } from '../../../types'

// ============ PRICING CARDS ============
export const cardsMeta: LayoutMeta = {
  id: 'pricing-cards',
  name: 'Cards',
  description: 'Cards comparatives — Standard',
  category: 'core',
  sectionType: 'pricing',
  tags: ['cards', 'comparatif', 'standard'],
  popularity: 95,
  isRecommended: true,
}

export const PricingCards: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="pricing">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.plans.map((plan, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-8 rounded-2xl relative ${plan.popular ? 'ring-2' : ''}`} style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}`, ringColor: tokens.colors.primary }}>
            {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white" style={{ background: tokens.colors.primary }}>Populaire</span>}
            
            <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.colors.text.primary }}>{plan.name}</h3>
            {plan.description && <p className="text-sm mb-4" style={{ color: tokens.colors.text.muted }}>{plan.description}</p>}
            
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: tokens.colors.primary }}>{plan.price}</span>
              {plan.period && <span className="text-sm" style={{ color: tokens.colors.text.muted }}>/{plan.period}</span>}
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3">
                  {f.included ? <Check size={18} style={{ color: tokens.colors.primary }} /> : <X size={18} style={{ color: tokens.colors.text.muted }} />}
                  <span style={{ color: f.included ? tokens.colors.text.secondary : tokens.colors.text.muted }}>{f.text}</span>
                </li>
              ))}
            </ul>
            
            <motion.a href={plan.ctaHref || '#contact'} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block w-full py-3 rounded-lg text-center font-semibold transition-colors" style={{ background: plan.popular ? tokens.colors.primary : 'transparent', color: plan.popular ? 'white' : tokens.colors.primary, border: plan.popular ? 'none' : `2px solid ${tokens.colors.primary}` }}>
              {plan.cta}
            </motion.a>
          </motion.div>
        ))}
      </div>
      
      {content.disclaimer && <p className="text-center mt-8 text-sm" style={{ color: tokens.colors.text.muted }}>{content.disclaimer}</p>}
    </div>
  </section>
)

// ============ PRICING SIMPLE ============
export const simpleMeta: LayoutMeta = {
  id: 'pricing-simple',
  name: 'Simple',
  description: 'Liste simple — Épuré',
  category: 'core',
  sectionType: 'pricing',
  tags: ['simple', 'liste', 'épuré'],
  popularity: 80,
}

export const PricingSimple: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="pricing">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12">
        {content.badge && <p className="text-sm uppercase tracking-widest mb-2" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="space-y-4">
        {content.plans.map((plan, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-between p-6 rounded-xl" style={{ background: tokens.colors.background.surface, border: `1px solid ${tokens.colors.border.default}` }}>
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-semibold" style={{ color: tokens.colors.text.primary }}>{plan.name}</h3>
                {plan.description && <p className="text-sm" style={{ color: tokens.colors.text.muted }}>{plan.description}</p>}
              </div>
              {plan.popular && <span className="px-2 py-1 rounded text-xs font-medium text-white" style={{ background: tokens.colors.primary }}>Populaire</span>}
            </div>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold" style={{ color: tokens.colors.primary }}>{plan.price}</span>
              <motion.a href={plan.ctaHref || '#contact'} whileHover={{ scale: 1.05 }} className="px-6 py-2 rounded-lg text-white font-medium" style={{ background: tokens.colors.primary }}>
                {plan.cta}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ============ PRICING TOGGLE (FIXED with real price switching) ============
export const toggleMeta: LayoutMeta = {
  id: 'pricing-toggle',
  name: 'Toggle',
  description: 'Mensuel/Annuel — Interactif',
  category: 'core',
  sectionType: 'pricing',
  tags: ['toggle', 'interactif', 'switch'],
  popularity: 85,
  isNew: true,
}

export const PricingToggle: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => {
  const [isYearly, setIsYearly] = useState(false)
  
  // Calculate yearly price (20% discount) if not provided
  const getPrice = (plan: typeof content.plans[0]) => {
    if (isYearly) {
      if (plan.yearlyPrice) return plan.yearlyPrice
      // Calculate 20% discount
      const numericPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ''))
      if (!isNaN(numericPrice)) {
        const yearlyPrice = Math.round(numericPrice * 0.8)
        return plan.price.replace(/[0-9.]+/, String(yearlyPrice))
      }
      return plan.price
    }
    return plan.monthlyPrice || plan.price
  }
  
  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="font-medium transition-colors" style={{ color: !isYearly ? tokens.colors.primary : tokens.colors.text.muted }}>Mensuel</span>
            <button onClick={() => setIsYearly(!isYearly)} className="w-14 h-8 rounded-full relative transition-colors" style={{ background: isYearly ? tokens.colors.primary : tokens.colors.border.strong }}>
              <motion.div animate={{ x: isYearly ? 24 : 4 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} className="w-6 h-6 rounded-full bg-white absolute top-1 shadow-md" />
            </button>
            <span className="font-medium transition-colors" style={{ color: isYearly ? tokens.colors.primary : tokens.colors.text.muted }}>
              Annuel <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-600 ml-1">-20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content.plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`p-8 rounded-2xl ${plan.popular ? 'ring-2' : ''}`} style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}`, ringColor: tokens.colors.primary }}>
              {plan.popular && <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4" style={{ background: tokens.colors.primary }}>Recommandé</span>}
              <h3 className="text-xl font-semibold mb-4" style={{ color: tokens.colors.text.primary }}>{plan.name}</h3>
              <div className="mb-6">
                <motion.span key={isYearly ? 'yearly' : 'monthly'} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold" style={{ color: tokens.colors.primary }}>
                  {getPrice(plan)}
                </motion.span>
                <span className="text-sm" style={{ color: tokens.colors.text.muted }}>/{isYearly ? 'an' : 'mois'}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.slice(0, 5).map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check size={16} style={{ color: tokens.colors.primary }} />
                    <span style={{ color: tokens.colors.text.secondary }}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} className="block w-full py-3 rounded-lg text-center font-semibold" style={{ background: plan.popular ? tokens.colors.primary : 'transparent', color: plan.popular ? 'white' : tokens.colors.primary, border: `2px solid ${tokens.colors.primary}` }}>
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ PRICING FEATURED ============
export const featuredMeta: LayoutMeta = {
  id: 'pricing-featured',
  name: 'Featured',
  description: 'Plan central mis en avant — Focus',
  category: 'core',
  sectionType: 'pricing',
  tags: ['featured', 'focus', 'highlight'],
  popularity: 82,
}

export const PricingFeatured: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="pricing">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-0 items-center">
        {content.plans.map((plan, i) => {
          const isCenter = i === 1
          return (
            <motion.div key={i} initial={{ opacity: 0, y: isCenter ? 30 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`p-8 rounded-2xl ${isCenter ? 'scale-105 z-10 shadow-2xl relative' : ''}`} style={{ background: isCenter ? tokens.colors.gradient.hero : tokens.colors.background.card, border: isCenter ? 'none' : `1px solid ${tokens.colors.border.default}` }}>
              <h3 className={`text-xl font-semibold mb-2`} style={{ color: isCenter ? 'white' : tokens.colors.text.primary }}>{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold`} style={{ color: isCenter ? 'white' : tokens.colors.primary }}>{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check size={16} style={{ color: isCenter ? 'white' : tokens.colors.primary }} />
                    <span style={{ color: isCenter ? 'rgba(255,255,255,0.8)' : tokens.colors.text.secondary }}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} className="block w-full py-3 rounded-lg text-center font-semibold" style={{ background: isCenter ? 'white' : tokens.colors.primary, color: isCenter ? tokens.colors.primary : 'white' }}>
                {plan.cta}
              </motion.a>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

// ============ PRICING MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'pricing-minimal',
  name: 'Minimal',
  description: 'Un seul plan — Épuré',
  category: 'core',
  sectionType: 'pricing',
  tags: ['minimal', 'single', 'épuré'],
  popularity: 70,
}

export const PricingMinimal: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => {
  const plan = content.plans[0]
  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="pricing">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {content.badge && <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>}
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        
        <div className="p-8 rounded-2xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
          <span className="text-6xl font-bold" style={{ color: tokens.colors.primary }}>{plan.price}</span>
          {plan.period && <span className="text-lg" style={{ color: tokens.colors.text.muted }}>/{plan.period}</span>}
          
          <ul className="space-y-3 my-8 text-left max-w-sm mx-auto">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check size={18} style={{ color: tokens.colors.primary }} />
                <span style={{ color: tokens.colors.text.secondary }}>{f.text}</span>
              </li>
            ))}
          </ul>
          
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="inline-block px-12 py-4 rounded-lg text-white font-semibold" style={{ background: tokens.colors.primary }}>
            {plan.cta}
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default PricingCards
