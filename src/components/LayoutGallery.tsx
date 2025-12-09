// ============ LAYOUT GALLERY COMPONENT ============
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Star, Sparkles } from 'lucide-react'
import { getLayoutsForSection, getLayout } from '../layouts'
import type { SectionType, ActivityId, DesignTokens, LayoutEntry } from '../types'

interface LayoutGalleryProps {
  isOpen: boolean
  onClose: () => void
  sectionType: SectionType
  activityId: ActivityId
  currentLayoutId: string
  onSelectLayout: (layoutId: string) => void
  tokens: DesignTokens
}

export const LayoutGallery: React.FC<LayoutGalleryProps> = ({
  isOpen,
  onClose,
  sectionType,
  activityId,
  currentLayoutId,
  onSelectLayout,
  tokens,
}) => {
  const layouts = getLayoutsForSection(sectionType, activityId)
  
  const handleSelect = (layoutId: string) => {
    onSelectLayout(layoutId)
    onClose()
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ background: tokens.colors.background.main }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
              style={{ borderColor: tokens.colors.border.default }}
            >
              <div>
                <h2 className="text-xl font-bold capitalize" style={{ color: tokens.colors.text.primary }}>
                  Choisir un layout — {sectionType}
                </h2>
                <p className="text-sm" style={{ color: tokens.colors.text.muted }}>
                  {layouts.length} layouts disponibles
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
              >
                <X size={20} style={{ color: tokens.colors.text.secondary }} />
              </button>
            </div>
            
            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {layouts.map((layout) => {
                  const isSelected = layout.meta.id === currentLayoutId
                  
                  return (
                    <motion.button
                      key={layout.meta.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(layout.meta.id)}
                      className={`relative p-4 rounded-xl text-left transition-all ${
                        isSelected ? 'ring-2' : 'hover:shadow-lg'
                      }`}
                      style={{
                        background: tokens.colors.background.card,
                        border: `1px solid ${isSelected ? tokens.colors.primary : tokens.colors.border.default}`,
                        ringColor: tokens.colors.primary,
                      }}
                    >
                      {/* Preview placeholder */}
                      <div 
                        className="aspect-[4/3] rounded-lg mb-3 flex items-center justify-center"
                        style={{ background: `${tokens.colors.primary}10` }}
                      >
                        <div className="text-4xl opacity-30">
                          {sectionType === 'hero' && '🏠'}
                          {sectionType === 'services' && '⚙️'}
                          {sectionType === 'about' && '👤'}
                          {sectionType === 'testimonials' && '💬'}
                          {sectionType === 'pricing' && '💰'}
                          {sectionType === 'gallery' && '🖼️'}
                          {sectionType === 'cta' && '📣'}
                          {sectionType === 'contact' && '📧'}
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate" style={{ color: tokens.colors.text.primary }}>
                            {layout.meta.name}
                          </h3>
                          <p className="text-xs truncate" style={{ color: tokens.colors.text.muted }}>
                            {layout.meta.description}
                          </p>
                        </div>
                        
                        {isSelected && (
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: tokens.colors.primary }}
                          >
                            <Check size={14} className="text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Badges */}
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {layout.meta.isRecommended && (
                          <span 
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                            style={{ background: `${tokens.colors.primary}20`, color: tokens.colors.primary }}
                          >
                            <Star size={10} fill="currentColor" /> Recommandé
                          </span>
                        )}
                        {layout.meta.isNew && (
                          <span 
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700"
                          >
                            <Sparkles size={10} /> Nouveau
                          </span>
                        )}
                        {layout.meta.category !== 'core' && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700 capitalize"
                          >
                            {layout.meta.category}
                          </span>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LayoutGallery
