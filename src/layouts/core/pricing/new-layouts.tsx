// ============ NEW PRICING LAYOUT — COMPARISON TABLE ============
import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, HelpCircle } from 'lucide-react'
import type { LayoutProps, PricingContent, LayoutMeta } from '../../../types'

// ============ PRICING COMPARISON TABLE ============
export const comparisonMeta: LayoutMeta = {
  id: 'pricing-comparison',
  name: 'Tableau comparatif',
  description: 'Tableau détaillé — Comparaison complète',
  category: 'core',
  sectionType: 'pricing',
  tags: ['tableau', 'comparatif', 'détaillé'],
  popularity: 86,
  isRecommended: true,
  isNew: true,
  bestFor: ['tech', 'agency', 'education'],
}

// Extract all unique features from plans
const extractAllFeatures = (plans: PricingContent['plans']): string[] => {
  const allFeatures = new Set<string>()
  plans.forEach(plan => {
    plan.features.forEach(f => allFeatures.add(f.text))
  })
  return Array.from(allFeatures)
}

// Check if plan has feature
const planHasFeature = (plan: PricingContent['plans'][0], featureText: string): boolean | 'partial' => {
  const feature = plan.features.find(f => f.text === featureText)
  if (!feature) return false
  return feature.included
}

export const PricingComparison: React.FC<LayoutProps<PricingContent>> = ({ content, tokens }) => {
  const allFeatures = extractAllFeatures(content.plans)

  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <motion.table 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full min-w-[800px]"
          >
            {/* Header Row */}
            <thead>
              <tr>
                <th 
                  className="text-left p-6 rounded-tl-2xl"
                  style={{ background: tokens.colors.background.card }}
                >
                  <span style={{ color: tokens.colors.text.muted }}>Fonctionnalités</span>
                </th>
                {content.plans.map((plan, i) => (
                  <th 
                    key={i}
                    className={`p-6 text-center ${i === content.plans.length - 1 ? 'rounded-tr-2xl' : ''}`}
                    style={{ 
                      background: plan.popular ? tokens.colors.primary : tokens.colors.background.card,
                      color: plan.popular ? 'white' : tokens.colors.text.primary
                    }}
                  >
                    {plan.popular && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-white/20">
                        Recommandé
                      </span>
                    )}
                    <div className="font-bold text-xl mb-1">{plan.name}</div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className={`text-sm ${plan.popular ? 'text-white/70' : ''}`} style={!plan.popular ? { color: tokens.colors.text.muted } : {}}>
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features Rows */}
            <tbody>
              {allFeatures.map((featureText, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="group"
                >
                  <td 
                    className="p-4 border-b group-hover:bg-black/5 transition-colors"
                    style={{ 
                      borderColor: tokens.colors.border.default,
                      background: tokens.colors.background.card
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ color: tokens.colors.text.secondary }}>{featureText}</span>
                      {/* Optional tooltip */}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <HelpCircle size={14} style={{ color: tokens.colors.text.muted }} />
                      </button>
                    </div>
                  </td>
                  {content.plans.map((plan, j) => {
                    const hasFeature = planHasFeature(plan, featureText)
                    return (
                      <td 
                        key={j}
                        className="p-4 text-center border-b group-hover:bg-black/5 transition-colors"
                        style={{ 
                          borderColor: tokens.colors.border.default,
                          background: plan.popular ? `${tokens.colors.primary}10` : tokens.colors.background.card
                        }}
                      >
                        {hasFeature === true ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="w-8 h-8 rounded-full mx-auto flex items-center justify-center"
                            style={{ background: `${tokens.colors.primary}20` }}
                          >
                            <Check size={18} style={{ color: tokens.colors.primary }} />
                          </motion.div>
                        ) : hasFeature === false ? (
                          <div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center bg-gray-100">
                            <X size={18} className="text-gray-400" />
                          </div>
                        ) : (
                          <span className="text-sm" style={{ color: tokens.colors.text.muted }}>Partiel</span>
                        )}
                      </td>
                    )
                  })}
                </motion.tr>
              ))}

              {/* CTA Row */}
              <tr>
                <td 
                  className="p-6 rounded-bl-2xl"
                  style={{ background: tokens.colors.background.card }}
                />
                {content.plans.map((plan, i) => (
                  <td 
                    key={i}
                    className={`p-6 text-center ${i === content.plans.length - 1 ? 'rounded-br-2xl' : ''}`}
                    style={{ background: plan.popular ? `${tokens.colors.primary}10` : tokens.colors.background.card }}
                  >
                    <motion.a
                      href={plan.ctaHref || '#contact'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-8 py-3 rounded-xl font-semibold transition-colors"
                      style={{ 
                        background: plan.popular ? tokens.colors.primary : 'transparent',
                        color: plan.popular ? 'white' : tokens.colors.primary,
                        border: `2px solid ${tokens.colors.primary}`
                      }}
                    >
                      {plan.cta}
                    </motion.a>
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>

        {/* Disclaimer */}
        {content.disclaimer && (
          <p className="text-center mt-8 text-sm" style={{ color: tokens.colors.text.muted }}>
            {content.disclaimer}
          </p>
        )}

        {/* Mobile Hint */}
        <p className="text-center mt-4 text-sm md:hidden" style={{ color: tokens.colors.text.muted }}>
          ← Faites défiler pour voir toutes les options →
        </p>
      </div>
    </section>
  )
}

export default PricingComparison
