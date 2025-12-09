// ============ CONTACT LAYOUTS — ALL VARIANTS (IMPROVED FORMS) ============
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import type { LayoutProps, ContactContent, FormField, LayoutMeta, DesignTokens } from '../../../types'

// Improved Form Input Component with proper styling
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
        <label style={labelStyles}>
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

// ============ CONTACT SPLIT ============
export const splitMeta: LayoutMeta = {
  id: 'contact-split',
  name: 'Split',
  description: 'Infos + formulaire — Équilibré',
  category: 'core',
  sectionType: 'contact',
  tags: ['split', 'formulaire', 'équilibré'],
  popularity: 95,
  isRecommended: true,
}

export const ContactSplit: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="contact">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p className="text-lg mb-8" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
          
          <div className="space-y-6">
            {content.address && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tokens.colors.primary}15` }}>
                  <MapPin size={20} style={{ color: tokens.colors.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>Adresse</p>
                  <p style={{ color: tokens.colors.text.secondary }}>{content.address}</p>
                </div>
              </div>
            )}
            {content.phone && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tokens.colors.primary}15` }}>
                  <Phone size={20} style={{ color: tokens.colors.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>Téléphone</p>
                  <a href={`tel:${content.phone}`} style={{ color: tokens.colors.text.secondary }} className="hover:underline">{content.phone}</a>
                </div>
              </div>
            )}
            {content.email && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tokens.colors.primary}15` }}>
                  <Mail size={20} style={{ color: tokens.colors.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: tokens.colors.text.primary }}>Email</p>
                  <a href={`mailto:${content.email}`} style={{ color: tokens.colors.text.secondary }} className="hover:underline">{content.email}</a>
                </div>
              </div>
            )}
          </div>
          
          {content.hours && (
            <div className="mt-8 p-6 rounded-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} style={{ color: tokens.colors.primary }} />
                <span className="font-semibold" style={{ color: tokens.colors.text.primary }}>Horaires</span>
              </div>
              <div className="space-y-2">
                {content.hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span style={{ color: tokens.colors.text.secondary }}>{h.day}</span>
                    <span className="font-medium" style={{ color: tokens.colors.text.primary }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <form className="p-8 rounded-2xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            <div className="grid gap-4">
              {content.formFields.map((field, i) => (
                <FormInput key={i} field={field} tokens={tokens} />
              ))}
            </div>
            
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-6 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ background: tokens.colors.primary }}>
              <Send size={18} /> Envoyer
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
)

// ============ CONTACT CENTERED ============
export const centeredMeta: LayoutMeta = {
  id: 'contact-centered',
  name: 'Centré',
  description: 'Formulaire centré — Focus',
  category: 'core',
  sectionType: 'contact',
  tags: ['centré', 'simple', 'focus'],
  popularity: 85,
}

export const ContactCentered: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.main }} id="contact">
    <div className="max-w-2xl mx-auto px-6">
      <div className="text-center mb-12">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
      </div>
      
      <form className="space-y-4">
        {content.formFields.map((field, i) => (
          <FormInput key={i} field={field} tokens={tokens} />
        ))}
        
        <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ background: tokens.colors.primary }}>
          <Send size={18} /> Envoyer le message
        </motion.button>
      </form>
      
      {(content.email || content.phone) && (
        <div className="flex justify-center gap-8 mt-12 pt-8 border-t" style={{ borderColor: tokens.colors.border.default }}>
          {content.email && (
            <a href={`mailto:${content.email}`} className="flex items-center gap-2 hover:opacity-80" style={{ color: tokens.colors.text.secondary }}>
              <Mail size={18} style={{ color: tokens.colors.primary }} /> {content.email}
            </a>
          )}
          {content.phone && (
            <a href={`tel:${content.phone}`} className="flex items-center gap-2 hover:opacity-80" style={{ color: tokens.colors.text.secondary }}>
              <Phone size={18} style={{ color: tokens.colors.primary }} /> {content.phone}
            </a>
          )}
        </div>
      )}
    </div>
  </section>
)

// ============ CONTACT MINIMAL ============
export const minimalMeta: LayoutMeta = {
  id: 'contact-minimal',
  name: 'Minimal',
  description: 'Épuré — Simple et direct',
  category: 'core',
  sectionType: 'contact',
  tags: ['minimal', 'simple', 'épuré'],
  popularity: 75,
}

export const ContactMinimal: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="contact">
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: tokens.colors.primary }}>{content.badge}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
        </div>
        
        <form className="space-y-4">
          {content.formFields.slice(0, 3).map((field, i) => (
            <FormInput key={i} field={field} tokens={tokens} />
          ))}
          <motion.button type="submit" whileHover={{ scale: 1.02 }} className="px-8 py-3 rounded-lg font-semibold text-white" style={{ background: tokens.colors.primary }}>
            Envoyer
          </motion.button>
        </form>
      </div>
    </div>
  </section>
)

// ============ CONTACT FULL ============
export const fullMeta: LayoutMeta = {
  id: 'contact-full',
  name: 'Full',
  description: 'Tout en un — Complet',
  category: 'core',
  sectionType: 'contact',
  tags: ['full', 'complet', 'tout-en-un'],
  popularity: 80,
}

export const ContactFull: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.gradient.hero }} id="contact">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white">{content.badge}</span>}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
        {content.subtitle && <p className="text-lg text-white/80">{content.subtitle}</p>}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Cards */}
        <div className="space-y-4">
          {content.phone && (
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Phone size={24} className="text-white mb-3" />
              <p className="text-white/60 text-sm mb-1">Téléphone</p>
              <a href={`tel:${content.phone}`} className="text-white font-semibold hover:underline">{content.phone}</a>
            </div>
          )}
          {content.email && (
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Mail size={24} className="text-white mb-3" />
              <p className="text-white/60 text-sm mb-1">Email</p>
              <a href={`mailto:${content.email}`} className="text-white font-semibold hover:underline">{content.email}</a>
            </div>
          )}
          {content.address && (
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <MapPin size={24} className="text-white mb-3" />
              <p className="text-white/60 text-sm mb-1">Adresse</p>
              <p className="text-white font-semibold">{content.address}</p>
            </div>
          )}
        </div>
        
        {/* Form */}
        <div className="lg:col-span-2">
          <form className="p-8 rounded-2xl bg-white">
            <div className="grid md:grid-cols-2 gap-4">
              {content.formFields.map((field, i) => (
                <div key={i} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <FormInput field={field} tokens={tokens} />
                </div>
              ))}
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} className="w-full mt-6 py-4 rounded-lg font-semibold text-white" style={{ background: tokens.colors.primary }}>
              Envoyer le message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

// ============ CONTACT RESERVATION (Restaurant) ============
export const reservationMeta: LayoutMeta = {
  id: 'contact-reservation',
  name: 'Réservation',
  description: 'Formulaire de réservation — Restaurant',
  category: 'restaurant',
  sectionType: 'contact',
  tags: ['réservation', 'restaurant', 'booking'],
  popularity: 92,
  isRecommended: true,
  bestFor: ['restaurant'],
}

export const ContactReservation: React.FC<LayoutProps<ContactContent>> = ({ content, tokens }) => (
  <section className="py-24" style={{ background: tokens.colors.background.surface }} id="contact">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          {content.badge && <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}>{content.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>{content.title}</h2>
          {content.subtitle && <p className="text-lg mb-8" style={{ color: tokens.colors.text.secondary }}>{content.subtitle}</p>}
          
          {content.hours && (
            <div className="mb-8 p-6 rounded-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} style={{ color: tokens.colors.primary }} />
                <span className="font-semibold" style={{ color: tokens.colors.text.primary }}>Horaires d'ouverture</span>
              </div>
              {content.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-2 border-b last:border-0" style={{ borderColor: tokens.colors.border.default }}>
                  <span style={{ color: tokens.colors.text.secondary }}>{h.day}</span>
                  <span className="font-medium" style={{ color: tokens.colors.text.primary }}>{h.hours}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex gap-4">
            {content.phone && (
              <a href={`tel:${content.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80" style={{ background: `${tokens.colors.primary}15`, color: tokens.colors.primary }}>
                <Phone size={18} /> {content.phone}
              </a>
            )}
          </div>
        </div>
        
        {/* Reservation Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <form className="p-8 rounded-2xl shadow-xl" style={{ background: tokens.colors.background.card, border: `1px solid ${tokens.colors.border.default}` }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: tokens.colors.text.primary }}>Réserver une table</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {content.formFields.map((field, i) => (
                <div key={i} className={field.type === 'textarea' || field.name === 'name' || field.name === 'email' ? 'col-span-2' : ''}>
                  <FormInput field={field} tokens={tokens} />
                </div>
              ))}
            </div>
            
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-6 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ background: tokens.colors.primary }}>
              Confirmer la réservation
            </motion.button>
            
            <p className="text-center text-sm mt-4" style={{ color: tokens.colors.text.muted }}>
              Confirmation par email sous 24h
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
)

export default ContactSplit
