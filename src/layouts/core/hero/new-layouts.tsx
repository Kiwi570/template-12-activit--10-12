// ============ NEW HERO LAYOUTS — SAAS/TECH + COUNTDOWN ============
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Zap, Shield, Rocket, Globe, Code, Cpu } from 'lucide-react'
import type { LayoutProps, HeroContent, LayoutMeta } from '../../../types'

// ============ HERO SAAS/TECH ============
export const saasMeta: LayoutMeta = {
  id: 'hero-saas',
  name: 'SaaS/Tech',
  description: 'Grille de features animée — Startups & Tech',
  category: 'tech',
  sectionType: 'hero',
  tags: ['saas', 'tech', 'startup', 'moderne'],
  popularity: 94,
  isRecommended: true,
  isNew: true,
  bestFor: ['tech', 'agency'],
}

const floatingIcons = [
  { Icon: Zap, delay: 0, x: '10%', y: '20%' },
  { Icon: Shield, delay: 0.5, x: '85%', y: '15%' },
  { Icon: Rocket, delay: 1, x: '75%', y: '75%' },
  { Icon: Globe, delay: 1.5, x: '15%', y: '70%' },
  { Icon: Code, delay: 2, x: '90%', y: '45%' },
  { Icon: Cpu, delay: 2.5, x: '5%', y: '45%' },
]

export const HeroSaas: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => {
  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden" style={{ background: tokens.colors.background.main }} id="hero">
      {/* Floating animated icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1, y: [0, -20, 0] }}
          transition={{ 
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <Icon size={48} style={{ color: tokens.colors.primary }} />
        </motion.div>
      ))}
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{ background: `${tokens.colors.primary}30` }}
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{ background: `${tokens.colors.secondary}30` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {content.badge && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
                style={{ 
                  background: `${tokens.colors.primary}10`, 
                  color: tokens.colors.primary,
                  borderColor: `${tokens.colors.primary}30`
                }}
              >
                <Zap size={14} />
                {content.badge}
              </motion.span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: tokens.colors.text.primary, fontFamily: tokens.typography.fontFamily.heading }}>
              {content.title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="inline-block mr-3"
                  style={i === Math.floor(content.title.split(' ').length / 2) ? { color: tokens.colors.primary } : {}}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" 
              style={{ color: tokens.colors.text.secondary }}
            >
              {content.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a 
                href={content.primaryCta.href} 
                whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${tokens.colors.primary}40` }} 
                whileTap={{ scale: 0.95 }} 
                className="px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 shadow-lg"
                style={{ background: tokens.colors.gradient.hero }}
              >
                {content.primaryCta.text} <ArrowRight size={18} />
              </motion.a>
              {content.secondaryCta && (
                <motion.a 
                  href={content.secondaryCta.href} 
                  whileHover={{ scale: 1.05 }} 
                  className="px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2"
                  style={{ 
                    border: `2px solid ${tokens.colors.border.strong}`, 
                    color: tokens.colors.text.primary,
                    background: tokens.colors.background.card
                  }}
                >
                  <Play size={18} fill={tokens.colors.primary} style={{ color: tokens.colors.primary }} />
                  {content.secondaryCta.text}
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Features Grid */}
        {content.stats && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {content.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 20px 40px ${tokens.colors.primary}15` }}
                className="p-6 rounded-2xl text-center backdrop-blur-sm"
                style={{ 
                  background: `${tokens.colors.background.card}90`,
                  border: `1px solid ${tokens.colors.border.default}`
                }}
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${tokens.colors.primary}15` }}>
                  <CheckCircle size={24} style={{ color: tokens.colors.primary }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: tokens.colors.primary }}>{stat.value}</div>
                <div className="text-sm" style={{ color: tokens.colors.text.muted }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

// ============ HERO COUNTDOWN (EVENT) ============
export const countdownMeta: LayoutMeta = {
  id: 'hero-countdown',
  name: 'Countdown',
  description: 'Compte à rebours — Événements',
  category: 'event',
  sectionType: 'hero',
  tags: ['countdown', 'event', 'lancement'],
  popularity: 91,
  isRecommended: true,
  isNew: true,
  bestFor: ['event'],
}

interface CountdownUnit {
  value: number
  label: string
}

const CountdownDisplay: React.FC<{ targetDate: Date; tokens: any }> = ({ targetDate, tokens }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownUnit[]>([
    { value: 0, label: 'Jours' },
    { value: 0, label: 'Heures' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Secondes' },
  ])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft([
          { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: 'Jours' },
          { value: Math.floor((difference / (1000 * 60 * 60)) % 24), label: 'Heures' },
          { value: Math.floor((difference / 1000 / 60) % 60), label: 'Minutes' },
          { value: Math.floor((difference / 1000) % 60), label: 'Secondes' },
        ])
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {timeLeft.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="text-center"
        >
          <motion.div
            key={unit.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2 shadow-xl"
            style={{ 
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <span className="text-2xl md:text-4xl font-bold text-white">
              {String(unit.value).padStart(2, '0')}
            </span>
          </motion.div>
          <span className="text-xs md:text-sm text-white/70 uppercase tracking-wider">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export const HeroCountdown: React.FC<LayoutProps<HeroContent>> = ({ content, tokens }) => {
  // Default to 30 days from now if no date specified
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden" style={{ background: tokens.colors.gradient.hero }} id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ 
            scale: [1.5, 1, 1.5],
            rotate: [180, 0, 180],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Confetti-like particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: -20,
            x: Math.random() * 100 - 50
          }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 100, 200],
            x: Math.random() * 200 - 100
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            background: i % 2 === 0 ? '#FFD700' : '#FFFFFF'
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {content.badge && (
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold mb-8 bg-white/20 text-white backdrop-blur-sm"
            >
              🎉 {content.badge}
            </motion.span>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: tokens.typography.fontFamily.heading }}
          >
            {content.title}
          </motion.h1>
          
          {content.subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 mb-4"
            >
              {content.subtitle}
            </motion.p>
          )}
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
          >
            {content.description}
          </motion.p>
          
          {/* Countdown */}
          <div className="mb-12">
            <CountdownDisplay targetDate={targetDate} tokens={tokens} />
          </div>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a 
              href={content.primaryCta.href} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 bg-white shadow-xl"
              style={{ color: tokens.colors.primary }}
            >
              {content.primaryCta.text} <ArrowRight size={18} />
            </motion.a>
            {content.secondaryCta && (
              <motion.a 
                href={content.secondaryCta.href} 
                whileHover={{ scale: 1.05 }} 
                className="px-8 py-4 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {content.secondaryCta.text}
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default { HeroSaas, HeroCountdown }
