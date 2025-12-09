// ============ NEW ABOUT LAYOUT — TEAM ============
import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import type { LayoutProps, AboutContent, LayoutMeta } from '../../../types'

// Extended About Content type for team
interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

interface AboutTeamContent extends AboutContent {
  team?: TeamMember[]
}

// ============ ABOUT TEAM ============
export const teamMeta: LayoutMeta = {
  id: 'about-team',
  name: 'Équipe',
  description: 'Présentation de l\'équipe — Agence/Cabinet',
  category: 'agency',
  sectionType: 'about',
  tags: ['équipe', 'team', 'personnes'],
  popularity: 88,
  isRecommended: true,
  isNew: true,
  bestFor: ['agency', 'lawyer', 'healthcare'],
}

export const AboutTeam: React.FC<LayoutProps<AboutTeamContent>> = ({ content, tokens }) => {
  // Default team if not provided
  const defaultTeam: TeamMember[] = [
    {
      name: 'Marie Dupont',
      role: 'CEO & Fondatrice',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Plus de 15 ans d\'expérience dans le domaine.',
      social: { linkedin: '#', twitter: '#', email: 'marie@example.com' }
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Technique',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Expert en solutions innovantes.',
      social: { linkedin: '#', email: 'pierre@example.com' }
    },
    {
      name: 'Sophie Bernard',
      role: 'Directrice Créative',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Passionnée par le design et l\'innovation.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Lucas Moreau',
      role: 'Responsable Projets',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Garantit le succès de chaque projet.',
      social: { linkedin: '#', email: 'lucas@example.com' }
    },
  ]

  const team = content.team || defaultTeam

  return (
    <section className="py-24" style={{ background: tokens.colors.background.surface }} id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
          <p 
            className="text-lg max-w-2xl mx-auto" 
            style={{ color: tokens.colors.text.secondary }}
          >
            {content.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div 
                className="rounded-2xl overflow-hidden mb-4 relative"
                style={{ background: tokens.colors.background.card }}
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Social overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="flex gap-3">
                    {member.social?.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin size={18} className="text-white" />
                      </motion.a>
                    )}
                    {member.social?.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Twitter size={18} className="text-white" />
                      </motion.a>
                    )}
                    {member.social?.email && (
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail size={18} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Info */}
              <div className="text-center">
                <h3 
                  className="font-semibold text-lg mb-1" 
                  style={{ color: tokens.colors.text.primary }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-sm mb-2" 
                  style={{ color: tokens.colors.primary }}
                >
                  {member.role}
                </p>
                {member.bio && (
                  <p 
                    className="text-sm" 
                    style={{ color: tokens.colors.text.muted }}
                  >
                    {member.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {content.stats && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div 
                  className="text-4xl font-bold mb-2" 
                  style={{ color: tokens.colors.primary }}
                >
                  {stat.value}
                </div>
                <div style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default AboutTeam
