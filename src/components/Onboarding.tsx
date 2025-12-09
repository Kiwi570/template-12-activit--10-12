// ============ ONBOARDING COMPONENT ============
import React from 'react'
import { motion } from 'framer-motion'
import { 
  UtensilsCrossed, Camera, Scale, Dumbbell, Building2, Scissors, 
  Stethoscope, Home, Music, ShoppingBag, GraduationCap, PartyPopper, 
  Cpu, Palette, Sparkles, ArrowRight
} from 'lucide-react'
import type { ActivityId } from '../types'

const ACTIVITIES: { id: ActivityId; label: string; icon: React.ElementType; description: string }[] = [
  { id: 'restaurant', label: 'Restaurant', icon: UtensilsCrossed, description: 'Café, bistrot, gastronomique' },
  { id: 'photographer', label: 'Photographe', icon: Camera, description: 'Portrait, mariage, corporate' },
  { id: 'lawyer', label: 'Avocat', icon: Scale, description: 'Cabinet, juriste, notaire' },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell, description: 'Salle, coach, bien-être' },
  { id: 'agency', label: 'Agence', icon: Building2, description: 'Digital, marketing, créa' },
  { id: 'beauty', label: 'Beauté', icon: Scissors, description: 'Coiffeur, spa, esthétique' },
  { id: 'healthcare', label: 'Santé', icon: Stethoscope, description: 'Médecin, clinique, thérapie' },
  { id: 'realestate', label: 'Immobilier', icon: Home, description: 'Agence, promoteur, location' },
  { id: 'musician', label: 'Musicien', icon: Music, description: 'Artiste, groupe, studio' },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag, description: 'Boutique, marketplace' },
  { id: 'education', label: 'Formation', icon: GraduationCap, description: 'École, cours, coaching' },
  { id: 'event', label: 'Événement', icon: PartyPopper, description: 'Traiteur, DJ, organisation' },
  { id: 'tech', label: 'Tech', icon: Cpu, description: 'Startup, SaaS, dev' },
  { id: 'artisan', label: 'Artisan', icon: Palette, description: 'Créateur, métier d\'art' },
]

interface OnboardingProps {
  onSelectActivity: (activity: ActivityId) => void
}

export const Onboarding: React.FC<OnboardingProps> = ({ onSelectActivity }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-lg shadow-green-500/30">
            <Sparkles size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Bienvenue sur Kiwi Builder
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Créez votre site web professionnel en quelques clics. Commencez par choisir votre activité.
          </p>
        </motion.div>
        
        {/* Activity Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {ACTIVITIES.map((activity, i) => (
            <motion.button
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.03 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectActivity(activity.id)}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-left transition-all hover:shadow-xl hover:border-green-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
                <activity.icon size={24} className="text-slate-600 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{activity.label}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">{activity.description}</p>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Footer Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-500 mt-8 flex items-center justify-center gap-2"
        >
          Cliquez sur une activité pour commencer <ArrowRight size={14} />
        </motion.p>
      </div>
    </div>
  )
}

export default Onboarding
