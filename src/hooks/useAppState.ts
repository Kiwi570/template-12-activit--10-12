// ============ APP STATE MANAGEMENT ============
import { useState, useCallback, useMemo } from 'react'
import type { AppState, ActivityId, SectionType, Section } from '../types'
import { generateTokens } from '../design-tokens'
import { getDefaultLayoutId } from '../layouts'
import { getDefaultContent } from '../content/defaults'

// Default sections for all activities
const DEFAULT_SECTIONS: SectionType[] = ['hero', 'services', 'about', 'testimonials', 'pricing', 'gallery', 'cta', 'contact']

// Create initial state for an activity
function createInitialState(activityId: ActivityId): AppState {
  const sections: Section[] = DEFAULT_SECTIONS.map((type, index) => ({
    id: `${type}-${index}`,
    type,
    layoutId: getDefaultLayoutId(type, activityId),
    content: getDefaultContent(type, activityId),
    enabled: true,
  }))
  
  return {
    activityId,
    theme: 'light',
    sections,
    editingSection: null,
    comparingLayouts: null,
  }
}

// History for undo/redo
interface HistoryState {
  past: AppState[]
  present: AppState
  future: AppState[]
}

export function useAppState(initialActivity: ActivityId = 'restaurant') {
  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: createInitialState(initialActivity),
    future: [],
  })
  
  const state = history.present
  const canUndo = history.past.length > 0
  const canRedo = history.future.length > 0
  
  // Generate tokens based on current state
  const tokens = useMemo(
    () => generateTokens(state.activityId, state.theme),
    [state.activityId, state.theme]
  )
  
  // Update state with history tracking
  const updateState = useCallback((updater: (prev: AppState) => AppState) => {
    setHistory(h => ({
      past: [...h.past.slice(-49), h.present], // Keep last 50 states
      present: updater(h.present),
      future: [],
    }))
  }, [])
  
  // Undo
  const undo = useCallback(() => {
    setHistory(h => {
      if (h.past.length === 0) return h
      const previous = h.past[h.past.length - 1]
      return {
        past: h.past.slice(0, -1),
        present: previous,
        future: [h.present, ...h.future],
      }
    })
  }, [])
  
  // Redo
  const redo = useCallback(() => {
    setHistory(h => {
      if (h.future.length === 0) return h
      const next = h.future[0]
      return {
        past: [...h.past, h.present],
        present: next,
        future: h.future.slice(1),
      }
    })
  }, [])
  
  // Change activity
  const setActivity = useCallback((activityId: ActivityId) => {
    setHistory(h => ({
      past: [...h.past, h.present],
      present: createInitialState(activityId),
      future: [],
    }))
  }, [])
  
  // Toggle theme
  const toggleTheme = useCallback(() => {
    updateState(s => ({ ...s, theme: s.theme === 'light' ? 'dark' : 'light' }))
  }, [updateState])
  
  // Update section layout
  const setLayout = useCallback((sectionId: string, layoutId: string) => {
    updateState(s => ({
      ...s,
      sections: s.sections.map(section =>
        section.id === sectionId ? { ...section, layoutId } : section
      ),
    }))
  }, [updateState])
  
  // Update section content
  const setContent = useCallback((sectionId: string, content: any) => {
    updateState(s => ({
      ...s,
      sections: s.sections.map(section =>
        section.id === sectionId ? { ...section, content } : section
      ),
    }))
  }, [updateState])
  
  // Toggle section enabled
  const toggleSection = useCallback((sectionId: string) => {
    updateState(s => ({
      ...s,
      sections: s.sections.map(section =>
        section.id === sectionId ? { ...section, enabled: !section.enabled } : section
      ),
    }))
  }, [updateState])
  
  // Reorder sections
  const reorderSections = useCallback((fromIndex: number, toIndex: number) => {
    updateState(s => {
      const newSections = [...s.sections]
      const [removed] = newSections.splice(fromIndex, 1)
      newSections.splice(toIndex, 0, removed)
      return { ...s, sections: newSections }
    })
  }, [updateState])
  
  // Set editing section
  const setEditingSection = useCallback((sectionId: string | null) => {
    setHistory(h => ({
      ...h,
      present: { ...h.present, editingSection: sectionId },
    }))
  }, [])
  
  // Reset to defaults
  const reset = useCallback(() => {
    setHistory(h => ({
      past: [...h.past, h.present],
      present: createInitialState(h.present.activityId),
      future: [],
    }))
  }, [])
  
  // Export state as JSON
  const exportState = useCallback(() => {
    const dataStr = JSON.stringify(state, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `kiwi-site-${state.activityId}-${Date.now()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }, [state])
  
  return {
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
    reorderSections,
    setEditingSection,
    reset,
    exportState,
  }
}

export default useAppState
