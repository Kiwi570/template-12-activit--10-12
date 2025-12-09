// ============ NEW SERVICES LAYOUT — TIMELINE ============
import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import type { LayoutProps, ServicesContent, LayoutMeta } from '../../../types'

// ============ SERVICES TIMELINE ============
export const timelineMeta: LayoutMeta = {
  id: 'services-timeline',
  name: 'Timeline',
  description: 'Processus étape par étape — Agence/Cabinet',
  category: 'agency',
  sectionType: 'services',
  tags: ['timeline', 'processus', 'étapes'],
  popularity: 87,
  isRecommended: true,
  isNew: true,
  bestFor: ['agency', 'lawyer', 'healthcare'],
}

export const ServicesTimeline: React.FC<LayoutProps<ServicesContent>> = ({ content, tokens }) => {
  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          {content.badge && (
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
              style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ background: `linear-gradient(to bottom, ${tokens.colors.primary}, ${tokens.colors.primary}30)` }}
          />
          
          {/* Mobile Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5 md:hidden"
            style={{ background: `linear-gradient(to bottom, ${tokens.colors.primary}, ${tokens.colors.primary}30)` }}
          />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {content.services.map((service, i) => {
              const isEven = i % 2 === 0
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Number - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg"
                      style={{ 
                        background: tokens.colors.gradient.hero,
                        boxShadow: `0 8px 30px ${tokens.colors.primary}40`
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.div>
                  </div>
                  
                  {/* Step Number - Mobile */}
                  <div className="md:hidden absolute left-0 z-10">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
                      style={{ 
                        background: tokens.colors.gradient.hero,
                        boxShadow: `0 8px 30px ${tokens.colors.primary}40`
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 md:w-5/12 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ y: -5, boxShadow: `0 20px 40px ${tokens.colors.primary}10` }}
                      className="ml-24 md:ml-0 p-6 md:p-8 rounded-2xl transition-all"
                      style={{ 
                        background: tokens.colors.background.card,
                        border: `1px solid ${tokens.colors.border.default}`
                      }}
                    >
                      {/* Icon */}
                      {service.icon && (
                        <div 
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                            isEven ? 'md:ml-auto' : ''
                          }`}
                          style={{ background: `${tokens.colors.primary}15` }}
                        >
                          {service.icon}
                        </div>
                      )}
                      
                      <h3 
                        className="text-xl font-semibold mb-2" 
                        style={{ color: tokens.colors.text.primary }}
                      >
                        {service.title}
                      </h3>
                      
                      <p 
                        className="mb-4" 
                        style={{ color: tokens.colors.text.secondary }}
                      >
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      {service.features && (
                        <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                          {service.features.map((feature, j) => (
                            <li 
                              key={j} 
                              className={`flex items-center gap-2 text-sm ${
                                isEven ? 'md:flex-row-reverse' : ''
                              }`}
                              style={{ color: tokens.colors.text.muted }}
                            >
                              <Check size={14} style={{ color: tokens.colors.primary }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Duration/Price */}
                      {(service.duration || service.price) && (
                        <div 
                          className={`mt-4 pt-4 border-t flex items-center gap-4 ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                          style={{ borderColor: tokens.colors.border.default }}
                        >
                          {service.duration && (
                            <span className="text-sm" style={{ color: tokens.colors.text.muted }}>
                              ⏱️ {service.duration}
                            </span>
                          )}
                          {service.price && (
                            <span className="font-semibold" style={{ color: tokens.colors.primary }}>
                              {service.price}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1 md:w-5/12" />
                </motion.div>
              )
            })}
          </div>

          {/* End indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div 
              className="px-6 py-3 rounded-full flex items-center gap-2 font-medium"
              style={{ 
                background: `${tokens.colors.primary}15`,
                color: tokens.colors.primary
              }}
            >
              <Check size={18} />
              Projet livré !
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesTimeline
