// ============ NEW CONTACT LAYOUT — WITH MAP ============
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react'
import type { LayoutProps, ContactContent, FormField, LayoutMeta, DesignTokens } from '../../../types'

// Reuse FormInput component
const FormInput: React.FC<{
  field: FormField
  tokens: DesignTokens
}> = ({ field, tokens }) => {
  const baseStyles = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '0.75rem',
    background: tokens.colors.background.card,
    border: `1px solid ${tokens.colors.border.default}`,
    color: tokens.colors.text.primary,
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  
  const labelStyles = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: tokens.colors.text.secondary,
  }
  
  return (
    <div className="space-y-1">
      {field.label && (
        <label style={labelStyles as React.CSSProperties}>
          {field.label}
          {field.required && <span style={{ color: '#EF4444', marginLeft: '0.25rem' }}>*</span>}
        </label>
      )}
      
      {field.type === 'textarea' ? (
        <textarea
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={4}
          style={baseStyles}
          className="focus:ring-2 focus:ring-offset-0"
          onFocus={(e) => { e.target.style.borderColor = tokens.colors.primary; e.target.style.boxShadow = `0 0 0 3px ${tokens.colors.primary}20` }}
          onBlur={(e) => { e.target.style.borderColor = tokens.colors.border.default; e.target.style.boxShadow = 'none' }}
        />
      ) : field.type === 'select' ? (
        <select
          name={field.name}
          required={field.required}
          style={{ ...baseStyles, cursor: 'pointer' }}
          className="focus:ring-2 focus:ring-offset-0"
          onFocus={(e) => { e.target.style.borderColor = tokens.colors.primary; e.target.style.boxShadow = `0 0 0 3px ${tokens.colors.primary}20` }}
          onBlur={(e) => { e.target.style.borderColor = tokens.colors.border.default; e.target.style.boxShadow = 'none' }}
        >
          <option value="">{field.placeholder || 'Sélectionner...'}</option>
          {field.options?.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          style={baseStyles}
          className="focus:ring-2 focus:ring-offset-0"
          onFocus={(e) => { e.target.style.borderColor = tokens.colors.primary; e.target.style.boxShadow = `0 0 0 3px ${tokens.colors.primary}20` }}
          onBlur={(e) => { e.target.style.borderColor = tokens.colors.border.default; e.target.style.boxShadow = 'none' }}
        />
      )}
    </div>
  )
}

// ============ CONTACT WITH MAP ============
export const mapMeta: LayoutMeta = {
  id: 'contact-map',
  name: 'Avec Carte',
  description: 'Formulaire + carte interactive — Universel',
  category: 'core',
  sectionType: 'contact',
  tags: ['carte', 'map', 'localisation'],
  popularity: 91,
  isRecommended: true,
  isNew: true,
  bestFor: ['restaurant', 'realestate', 'healthcare'],
}

export const ContactMap: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => {
  // Default map URL (Paris) - can be customized via content.mapUrl
  const mapUrl = content.mapUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85836907928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1635959654789!5m2!1sfr!2sfr'

  return (
    <section className="py-24" style={{ background: tokens.colors.background.main }} id="contact">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <div 
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ border: `1px solid ${tokens.colors.border.default}` }}
            >
              <div className="aspect-[4/3] relative">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {content.address && (
                <motion.a
                  href={`https://maps.google.com/?q=${encodeURIComponent(content.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl flex items-start gap-3 transition-all hover:shadow-lg"
                  style={{ 
                    background: tokens.colors.background.card,
                    border: `1px solid ${tokens.colors.border.default}`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${tokens.colors.primary}15` }}
                  >
                    <MapPin size={18} style={{ color: tokens.colors.primary }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1" style={{ color: tokens.colors.text.primary }}>
                      Adresse
                    </p>
                    <p className="text-sm truncate" style={{ color: tokens.colors.text.muted }}>
                      {content.address}
                    </p>
                  </div>
                </motion.a>
              )}

              {content.phone && (
                <motion.a
                  href={`tel:${content.phone}`}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl flex items-start gap-3 transition-all hover:shadow-lg"
                  style={{ 
                    background: tokens.colors.background.card,
                    border: `1px solid ${tokens.colors.border.default}`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${tokens.colors.primary}15` }}
                  >
                    <Phone size={18} style={{ color: tokens.colors.primary }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1" style={{ color: tokens.colors.text.primary }}>
                      Téléphone
                    </p>
                    <p className="text-sm" style={{ color: tokens.colors.text.muted }}>
                      {content.phone}
                    </p>
                  </div>
                </motion.a>
              )}

              {content.email && (
                <motion.a
                  href={`mailto:${content.email}`}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl flex items-start gap-3 transition-all hover:shadow-lg"
                  style={{ 
                    background: tokens.colors.background.card,
                    border: `1px solid ${tokens.colors.border.default}`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${tokens.colors.primary}15` }}
                  >
                    <Mail size={18} style={{ color: tokens.colors.primary }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1" style={{ color: tokens.colors.text.primary }}>
                      Email
                    </p>
                    <p className="text-sm truncate" style={{ color: tokens.colors.text.muted }}>
                      {content.email}
                    </p>
                  </div>
                </motion.a>
              )}

              {content.hours && (
                <div 
                  className="p-4 rounded-xl flex items-start gap-3"
                  style={{ 
                    background: tokens.colors.background.card,
                    border: `1px solid ${tokens.colors.border.default}`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${tokens.colors.primary}15` }}
                  >
                    <Clock size={18} style={{ color: tokens.colors.primary }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1" style={{ color: tokens.colors.text.primary }}>
                      Horaires
                    </p>
                    <p className="text-sm" style={{ color: tokens.colors.text.muted }}>
                      {content.hours[0]?.hours || 'Lun-Ven: 9h-18h'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Get Directions Button */}
            {content.address && (
              <motion.a
                href={`https://maps.google.com/?q=${encodeURIComponent(content.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold"
                style={{ 
                  background: `${tokens.colors.primary}15`,
                  color: tokens.colors.primary
                }}
              >
                <Navigation size={18} />
                Obtenir l'itinéraire
              </motion.a>
            )}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              className="p-8 rounded-2xl h-full"
              style={{ 
                background: tokens.colors.background.card,
                border: `1px solid ${tokens.colors.border.default}`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-6" 
                style={{ color: tokens.colors.text.primary }}
              >
                Envoyez-nous un message
              </h3>

              <div className="grid gap-4">
                {/* 2-column layout for name/email */}
                <div className="grid md:grid-cols-2 gap-4">
                  {content.formFields.slice(0, 2).map((field, i) => (
                    <FormInput key={i} field={field} tokens={tokens} />
                  ))}
                </div>
                
                {/* Rest of fields */}
                {content.formFields.slice(2).map((field, i) => (
                  <FormInput key={i + 2} field={field} tokens={tokens} />
                ))}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                style={{ 
                  background: tokens.colors.primary,
                  boxShadow: `0 10px 30px ${tokens.colors.primary}30`
                }}
              >
                <Send size={18} />
                Envoyer le message
              </motion.button>

              <p className="text-center text-sm mt-4" style={{ color: tokens.colors.text.muted }}>
                Nous répondons généralement sous 24h
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap
