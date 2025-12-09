// ============ KIWI BUILDER V7 — MAIN APP ============
import React, { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Undo2, Redo2, Sparkles, Menu, X, RefreshCw, FileDown, ChevronDown, Moon, Sun,
  UtensilsCrossed, Camera, Scale, Dumbbell, Building2, Scissors, Stethoscope, 
  Home, Music, ShoppingBag, GraduationCap, PartyPopper, Cpu, Palette
} from 'lucide-react'

import { useAppState } from './hooks/useAppState'
import { Onboarding } from './components/Onboarding'
import { LayoutGallery } from './components/LayoutGallery'
import { PreviewFrame, Sidebar, EditPanel } from './components/Preview'
import type { ActivityId, SectionType } from './types'

// Activity config
const ACTIVITIES: { id: ActivityId; name: string; icon: React.ElementType }[] = [
  { id: 'restaurant', name: 'Restaurant', icon: UtensilsCrossed },
  { id: 'photographer', name: 'Photographe', icon: Camera },
  { id: 'lawyer', name: 'Avocat', icon: Scale },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell },
  { id: 'agency', name: 'Agence', icon: Building2 },
  { id: 'beauty', name: 'Beauté', icon: Scissors },
  { id: 'healthcare', name: 'Santé', icon: Stethoscope },
  { id: 'realestate', name: 'Immobilier', icon: Home },
  { id: 'musician', name: 'Musicien', icon: Music },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag },
  { id: 'education', name: 'Formation', icon: GraduationCap },
  { id: 'event', name: 'Événement', icon: PartyPopper },
  { id: 'tech', name: 'Tech', icon: Cpu },
  { id: 'artisan', name: 'Artisan', icon: Palette },
]

// ============ ACTIVITY SELECTOR ============
const ActivitySelector: React.FC<{
  currentActivity: ActivityId
  onSelect: (activity: ActivityId) => void
  tokens: any
}> = ({ currentActivity, onSelect, tokens }) => {
  const [isOpen, setIsOpen] = useState(false)
  const current = ACTIVITIES.find(a => a.id === currentActivity)
  const CurrentIcon = current?.icon || Building2
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all hover:shadow-md"
        style={{ 
          background: tokens.colors.background.card,
          borderColor: isOpen ? tokens.colors.primary : tokens.colors.border.default,
        }}
      >
        <CurrentIcon size={18} style={{ color: tokens.colors.primary }} />
        <span className="font-medium hidden sm:block" style={{ color: tokens.colors.text.primary }}>
          {current?.name || 'Activité'}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: tokens.colors.text.muted }}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 p-2 rounded-xl border shadow-2xl z-50 max-h-80 overflow-y-auto"
              style={{ 
                background: tokens.colors.background.card,
                borderColor: tokens.colors.border.default,
              }}
            >
              <div className="grid grid-cols-2 gap-1">
                {ACTIVITIES.map(activity => {
                  const Icon = activity.icon
                  const isActive = activity.id === currentActivity
                  return (
                    <button
                      key={activity.id}
                      onClick={() => { onSelect(activity.id); setIsOpen(false) }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all text-left ${
                        isActive ? '' : 'hover:bg-black/5'
                      }`}
                      style={{ 
                        background: isActive ? `${tokens.colors.primary}15` : 'transparent',
                        color: isActive ? tokens.colors.primary : tokens.colors.text.secondary,
                      }}
                    >
                      <Icon size={16} />
                      <span className="text-sm font-medium truncate">{activity.name}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// ============ HEADER ============
const Header: React.FC<{
  activityId: ActivityId
  tokens: any
  canUndo: boolean
  canRedo: boolean
  onUndo: () => void
  onRedo: () => void
  onExport: () => void
  onReset: () => void
  onToggleMobileMenu: () => void
  onChangeActivity: (activity: ActivityId) => void
  onToggleTheme: () => void
  theme: 'light' | 'dark'
}> = ({ activityId, tokens, canUndo, canRedo, onUndo, onRedo, onExport, onReset, onToggleMobileMenu, onChangeActivity, onToggleTheme, theme }) => (
  <header 
    className="h-16 border-b flex items-center justify-between px-4 flex-shrink-0"
    style={{ background: tokens.colors.background.main, borderColor: tokens.colors.border.default }}
  >
    <div className="flex items-center gap-4">
      <button onClick={onToggleMobileMenu} className="lg:hidden p-2">
        <Menu size={20} style={{ color: tokens.colors.text.primary }} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: tokens.colors.gradient.hero }}>
          <Sparkles size={18} className="text-white" />
        </div>
        <div className="hidden sm:block">
          <h1 className="font-bold" style={{ color: tokens.colors.text.primary }}>Kiwi Builder</h1>
        </div>
      </div>
    </div>
    
    {/* Activity Selector - Center */}
    <ActivitySelector
      currentActivity={activityId}
      onSelect={onChangeActivity}
      tokens={tokens}
    />
    
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="p-2.5 rounded-lg border hover:bg-black/5 transition-colors hidden sm:block"
        style={{ borderColor: tokens.colors.border.default }}
        title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
      >
        {theme === 'light' ? (
          <Moon size={16} style={{ color: tokens.colors.text.secondary }} />
        ) : (
          <Sun size={16} style={{ color: tokens.colors.text.secondary }} />
        )}
      </button>
      
      {/* Undo/Redo */}
      <div 
        className="flex items-center rounded-lg overflow-hidden border" 
        style={{ background: tokens.colors.background.card, borderColor: tokens.colors.border.default }}
      >
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className={`p-2.5 transition-colors ${!canUndo ? 'opacity-30' : 'hover:bg-black/5'}`}
          title="Annuler"
        >
          <Undo2 size={16} style={{ color: tokens.colors.text.secondary }} />
        </button>
        <div className="w-px h-6" style={{ background: tokens.colors.border.default }} />
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className={`p-2.5 transition-colors ${!canRedo ? 'opacity-30' : 'hover:bg-black/5'}`}
          title="Rétablir"
        >
          <Redo2 size={16} style={{ color: tokens.colors.text.secondary }} />
        </button>
      </div>
      
      {/* Reset */}
      <button
        onClick={onReset}
        className="p-2.5 rounded-lg border hover:bg-black/5 transition-colors hidden sm:block"
        style={{ borderColor: tokens.colors.border.default }}
        title="Réinitialiser"
      >
        <RefreshCw size={16} style={{ color: tokens.colors.text.secondary }} />
      </button>
      
      {/* Export */}
      <motion.button
        onClick={onExport}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg"
        style={{ background: tokens.colors.primary, boxShadow: `0 4px 14px ${tokens.colors.primary}40` }}
      >
        <FileDown size={16} /> <span className="hidden sm:inline">Exporter</span>
      </motion.button>
    </div>
  </header>
)

// ============ MOBILE MENU ============
const MobileMenu: React.FC<{
  isOpen: boolean
  onClose: () => void
  tokens: any
  children: React.ReactNode
}> = ({ isOpen, onClose, tokens, children }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed left-0 top-0 bottom-0 w-80 z-50 lg:hidden shadow-2xl flex flex-col"
          style={{ background: tokens.colors.background.surface }}
        >
          <div 
            className="p-4 border-b flex items-center justify-between flex-shrink-0"
            style={{ borderColor: tokens.colors.border.default }}
          >
            <span className="font-bold" style={{ color: tokens.colors.text.primary }}>Sections</span>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-black/10 transition-colors">
              <X size={20} style={{ color: tokens.colors.text.secondary }} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

// ============ MAIN APP ============
function App() {
  const {
    state,
    tokens,
    canUndo,
    canRedo,
    undo,
    redo,
    setActivity,
    toggleTheme,
    setLayout,
    setContent,
    toggleSection,
    setEditingSection,
    reset,
    exportState,
  } = useAppState()
  
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [galleryState, setGalleryState] = useState<{ isOpen: boolean; sectionType: SectionType; sectionId: string } | null>(null)
  const [editPanelSection, setEditPanelSection] = useState<string | null>(null)
  
  const previewRef = useRef<HTMLDivElement>(null)
  
  // Handle activity selection from onboarding
  const handleSelectActivity = useCallback((activityId: ActivityId) => {
    setActivity(activityId)
    setShowOnboarding(false)
  }, [setActivity])
  
  // Handle section click - scroll to section
  const handleSectionClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(`section-${sectionId}`)
    const container = document.getElementById('preview-container')
    if (element && container) {
      const offsetTop = element.offsetTop - 20
      container.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }, [])
  
  // Handle layout change from sidebar navigation
  const handleLayoutChange = useCallback((sectionId: string, layoutId: string) => {
    setLayout(sectionId, layoutId)
  }, [setLayout])
  
  // Handle opening layout gallery
  const handleOpenGallery = useCallback((sectionType: SectionType, sectionId: string) => {
    setGalleryState({ isOpen: true, sectionType, sectionId })
  }, [])
  
  // Handle gallery layout selection
  const handleSelectLayout = useCallback((layoutId: string) => {
    if (galleryState) {
      setLayout(galleryState.sectionId, layoutId)
    }
  }, [galleryState, setLayout])
  
  // Handle edit panel
  const handleOpenEdit = useCallback((sectionId: string) => {
    setEditPanelSection(sectionId)
  }, [])
  
  const handleContentChange = useCallback((content: any) => {
    if (editPanelSection) {
      setContent(editPanelSection, content)
    }
  }, [editPanelSection, setContent])
  
  // Handle activity change
  const handleChangeActivity = useCallback((activityId: ActivityId) => {
    setActivity(activityId)
  }, [setActivity])
  
  // Get editing section
  const editingSection = editPanelSection 
    ? state.sections.find(s => s.id === editPanelSection) 
    : null
  
  // Show onboarding if needed
  if (showOnboarding) {
    return <Onboarding onSelectActivity={handleSelectActivity} />
  }
  
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background: tokens.colors.background.surface }}>
      {/* Header */}
      <Header
        activityId={state.activityId}
        tokens={tokens}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={undo}
        onRedo={redo}
        onExport={exportState}
        onReset={reset}
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
        onChangeActivity={handleChangeActivity}
        onToggleTheme={toggleTheme}
        theme={state.theme}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside 
          className="w-72 border-r flex-shrink-0 hidden lg:flex flex-col"
          style={{ background: tokens.colors.background.surface, borderColor: tokens.colors.border.default }}
        >
          <div className="p-4 border-b" style={{ borderColor: tokens.colors.border.default }}>
            <h2 className="font-semibold" style={{ color: tokens.colors.text.primary }}>Sections</h2>
            <p className="text-xs" style={{ color: tokens.colors.text.muted }}>
              {state.sections.filter(s => s.enabled).length} actives
            </p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Sidebar
              sections={state.sections}
              activityId={state.activityId}
              tokens={tokens}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
              onLayoutChange={handleLayoutChange}
              onToggleSection={toggleSection}
              onOpenGallery={handleOpenGallery}
              onOpenEdit={handleOpenEdit}
            />
          </div>
        </aside>
        
        {/* Preview */}
        <main className="flex-1 overflow-hidden">
          <PreviewFrame
            sections={state.sections}
            tokens={tokens}
            previewRef={previewRef}
          />
        </main>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        tokens={tokens}
      >
        <Sidebar
          sections={state.sections}
          activityId={state.activityId}
          tokens={tokens}
          activeSection={activeSection}
          onSectionClick={(id) => { handleSectionClick(id); setMobileMenuOpen(false) }}
          onLayoutChange={handleLayoutChange}
          onToggleSection={toggleSection}
          onOpenGallery={handleOpenGallery}
          onOpenEdit={handleOpenEdit}
        />
      </MobileMenu>
      
      {/* Layout Gallery Modal */}
      {galleryState && (
        <LayoutGallery
          isOpen={galleryState.isOpen}
          onClose={() => setGalleryState(null)}
          sectionType={galleryState.sectionType}
          activityId={state.activityId}
          currentLayoutId={state.sections.find(s => s.id === galleryState.sectionId)?.layoutId || ''}
          onSelectLayout={handleSelectLayout}
          tokens={tokens}
        />
      )}
      
      {/* Edit Panel */}
      <EditPanel
        isOpen={!!editPanelSection}
        onClose={() => setEditPanelSection(null)}
        section={editingSection || null}
        tokens={tokens}
        onContentChange={handleContentChange}
      />
    </div>
  )
}

export default App
