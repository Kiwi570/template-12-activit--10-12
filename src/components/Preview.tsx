// ============ PREVIEW COMPONENT — SIDEBAR + PREVIEW + EDIT PANEL ============
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Eye, EyeOff, Settings, Layers, GripVertical, X } from 'lucide-react'
import { getLayout, getLayoutsForSection } from '../layouts'
import type { Section, ActivityId, DesignTokens, SectionType } from '../types'

// ============ SIDEBAR ============
interface SidebarProps {
  sections: Section[]
  activityId: ActivityId
  tokens: DesignTokens
  activeSection: string | null
  onSectionClick: (sectionId: string) => void
  onLayoutChange: (sectionId: string, layoutId: string) => void
  onToggleSection: (sectionId: string) => void
  onOpenGallery: (sectionType: SectionType, sectionId: string) => void
  onOpenEdit: (sectionId: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activityId,
  tokens,
  activeSection,
  onSectionClick,
  onLayoutChange,
  onToggleSection,
  onOpenGallery,
  onOpenEdit,
}) => {
  return (
    <div className="h-full overflow-y-auto p-4 space-y-2">
      {sections.map((section, index) => {
        const layout = getLayout(section.layoutId)
        const layouts = getLayoutsForSection(section.type, activityId)
        const currentIndex = layouts.findIndex(l => l.meta.id === section.layoutId)
        const isActive = activeSection === section.id
        
        const handlePrev = (e: React.MouseEvent) => {
          e.stopPropagation()
          const prevIndex = (currentIndex - 1 + layouts.length) % layouts.length
          onLayoutChange(section.id, layouts[prevIndex].meta.id)
        }
        
        const handleNext = (e: React.MouseEvent) => {
          e.stopPropagation()
          const nextIndex = (currentIndex + 1) % layouts.length
          onLayoutChange(section.id, layouts[nextIndex].meta.id)
        }
        
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl transition-all ${!section.enabled ? 'opacity-50' : ''}`}
            style={{
              background: isActive ? `${tokens.colors.primary}10` : tokens.colors.background.card,
              border: `1px solid ${isActive ? tokens.colors.primary : tokens.colors.border.default}`,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-2 p-3 cursor-pointer"
              onClick={() => onSectionClick(section.id)}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {/* Active indicator */}
                {isActive && (
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tokens.colors.primary }} />
                )}
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold capitalize text-sm truncate" style={{ color: tokens.colors.text.primary }}>
                    {section.type}
                  </p>
                  <p className="text-xs truncate" style={{ color: tokens.colors.text.muted }}>
                    {layout?.meta.name || 'Layout'}
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleSection(section.id) }}
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  title={section.enabled ? 'Masquer' : 'Afficher'}
                >
                  {section.enabled ? (
                    <Eye size={14} style={{ color: tokens.colors.text.muted }} />
                  ) : (
                    <EyeOff size={14} style={{ color: tokens.colors.text.muted }} />
                  )}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenEdit(section.id) }}
                  className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
                  title="Éditer le contenu"
                >
                  <Settings size={14} style={{ color: tokens.colors.text.muted }} />
                </button>
              </div>
            </div>
            
            {/* Layout Navigation */}
            {section.enabled && (
              <div 
                className="flex items-center justify-between px-3 pb-3 pt-1 border-t"
                style={{ borderColor: tokens.colors.border.default }}
              >
                <button
                  onClick={handlePrev}
                  disabled={layouts.length <= 1}
                  className="p-1 rounded hover:bg-black/5 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft size={16} style={{ color: tokens.colors.text.secondary }} />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenGallery(section.type, section.id) }}
                  className="text-xs font-medium px-2 py-1 rounded-lg hover:bg-black/5 transition-colors"
                  style={{ color: tokens.colors.primary }}
                >
                  {currentIndex + 1}/{layouts.length}
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={layouts.length <= 1}
                  className="p-1 rounded hover:bg-black/5 disabled:opacity-30 transition-colors"
                >
                  <ChevronRight size={16} style={{ color: tokens.colors.text.secondary }} />
                </button>
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

// ============ PREVIEW FRAME ============
interface PreviewFrameProps {
  sections: Section[]
  tokens: DesignTokens
  previewRef: React.RefObject<HTMLDivElement>
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ sections, tokens, previewRef }) => {
  return (
    <div 
      ref={previewRef}
      id="preview-container"
      className="h-full overflow-y-auto"
      style={{ background: tokens.colors.background.main }}
    >
      {sections.filter(s => s.enabled).map((section) => {
        const layoutEntry = getLayout(section.layoutId)
        if (!layoutEntry) return null
        
        const LayoutComponent = layoutEntry.component
        
        return (
          <div 
            key={section.id} 
            id={`section-${section.id}`}
            className="scroll-mt-4"
          >
            <LayoutComponent content={section.content} tokens={tokens} />
          </div>
        )
      })}
      
      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  )
}

// ============ EDIT PANEL ============
interface EditPanelProps {
  isOpen: boolean
  onClose: () => void
  section: Section | null
  tokens: DesignTokens
  onContentChange: (content: any) => void
}

export const EditPanel: React.FC<EditPanelProps> = ({
  isOpen,
  onClose,
  section,
  tokens,
  onContentChange,
}) => {
  const [localContent, setLocalContent] = useState<any>(null)
  
  useEffect(() => {
    if (section) {
      setLocalContent(section.content)
    }
  }, [section])
  
  const handleFieldChange = (key: string, value: any) => {
    const newContent = { ...localContent, [key]: value }
    setLocalContent(newContent)
    onContentChange(newContent)
  }
  
  const renderField = (key: string, value: any, path: string = '') => {
    const fullKey = path ? `${path}.${key}` : key
    
    if (typeof value === 'string') {
      const isLong = value.length > 100
      return (
        <div key={fullKey} className="space-y-1">
          <label className="text-xs font-medium capitalize" style={{ color: tokens.colors.text.muted }}>
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          {isLong ? (
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(key, e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-lg text-sm resize-none"
              style={{
                background: tokens.colors.background.card,
                border: `1px solid ${tokens.colors.border.default}`,
                color: tokens.colors.text.primary,
              }}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => handleFieldChange(key, e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-sm"
              style={{
                background: tokens.colors.background.card,
                border: `1px solid ${tokens.colors.border.default}`,
                color: tokens.colors.text.primary,
              }}
            />
          )}
        </div>
      )
    }
    
    if (typeof value === 'number') {
      return (
        <div key={fullKey} className="space-y-1">
          <label className="text-xs font-medium capitalize" style={{ color: tokens.colors.text.muted }}>
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => handleFieldChange(key, Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg text-sm"
            style={{
              background: tokens.colors.background.card,
              border: `1px solid ${tokens.colors.border.default}`,
              color: tokens.colors.text.primary,
            }}
          />
        </div>
      )
    }
    
    if (Array.isArray(value) || typeof value === 'object') {
      return (
        <div key={fullKey} className="space-y-1">
          <label className="text-xs font-medium capitalize" style={{ color: tokens.colors.text.muted }}>
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <div 
            className="px-3 py-2 rounded-lg text-xs"
            style={{ 
              background: `${tokens.colors.primary}10`, 
              color: tokens.colors.text.muted,
            }}
          >
            {Array.isArray(value) ? `${value.length} éléments` : 'Objet complexe'}
          </div>
        </div>
      )
    }
    
    return null
  }
  
  return (
    <AnimatePresence>
      {isOpen && section && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-96 z-50 flex flex-col shadow-2xl"
            style={{ background: tokens.colors.background.surface }}
          >
            {/* Header */}
            <div 
              className="px-4 py-3 border-b flex items-center justify-between flex-shrink-0"
              style={{ borderColor: tokens.colors.border.default }}
            >
              <div>
                <h3 className="font-semibold capitalize" style={{ color: tokens.colors.text.primary }}>
                  Éditer: {section.type}
                </h3>
                <p className="text-xs" style={{ color: tokens.colors.text.muted }}>
                  Modifiez le contenu
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-black/5 transition-colors"
              >
                <X size={18} style={{ color: tokens.colors.text.secondary }} />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {localContent && Object.entries(localContent).map(([key, value]) => 
                renderField(key, value)
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default { Sidebar, PreviewFrame, EditPanel }
