// ============ KIWI BUILDER V7 — DESIGN TOKENS ============
import type { ActivityId, DesignTokens } from '../types'

// Color palettes by activity
export const activityPalettes: Record<ActivityId, { light: typeof basePalette; dark: typeof basePalette }> = {
  restaurant: {
    light: { primary: '#D4A853', secondary: '#8B4513', accent: '#2C1810', bg: '#FFFDF7', surface: '#FDF8EE', card: '#FFFFFF', text: '#2C1810', textSecondary: '#5C4030', textMuted: '#8B7355', border: '#E8DCC8', borderStrong: '#D4C4A8' },
    dark: { primary: '#D4A853', secondary: '#C49A47', accent: '#F5E6C8', bg: '#1A1412', surface: '#241C18', card: '#2E2420', text: '#F5E6C8', textSecondary: '#D4C4A8', textMuted: '#8B7355', border: '#3D332C', borderStrong: '#5C4A3D' },
  },
  photographer: {
    light: { primary: '#1A1A1A', secondary: '#4A4A4A', accent: '#FF6B35', bg: '#FFFFFF', surface: '#F8F8F8', card: '#FFFFFF', text: '#1A1A1A', textSecondary: '#4A4A4A', textMuted: '#8A8A8A', border: '#E5E5E5', borderStrong: '#CCCCCC' },
    dark: { primary: '#FFFFFF', secondary: '#E5E5E5', accent: '#FF6B35', bg: '#0A0A0A', surface: '#141414', card: '#1A1A1A', text: '#FFFFFF', textSecondary: '#CCCCCC', textMuted: '#6A6A6A', border: '#2A2A2A', borderStrong: '#3A3A3A' },
  },
  lawyer: {
    light: { primary: '#1E3A5F', secondary: '#2C5282', accent: '#C9A227', bg: '#FAFBFC', surface: '#F0F4F8', card: '#FFFFFF', text: '#1A202C', textSecondary: '#4A5568', textMuted: '#718096', border: '#E2E8F0', borderStrong: '#CBD5E0' },
    dark: { primary: '#63B3ED', secondary: '#4299E1', accent: '#D4AF37', bg: '#0F1419', surface: '#1A2332', card: '#243447', text: '#F7FAFC', textSecondary: '#CBD5E0', textMuted: '#718096', border: '#2D3748', borderStrong: '#4A5568' },
  },
  fitness: {
    light: { primary: '#E53E3E', secondary: '#C53030', accent: '#38A169', bg: '#FFFFFF', surface: '#F7F7F7', card: '#FFFFFF', text: '#1A1A1A', textSecondary: '#4A4A4A', textMuted: '#8A8A8A', border: '#E5E5E5', borderStrong: '#CCCCCC' },
    dark: { primary: '#FC8181', secondary: '#F56565', accent: '#48BB78', bg: '#0D0D0D', surface: '#1A1A1A', card: '#242424', text: '#FFFFFF', textSecondary: '#CCCCCC', textMuted: '#6A6A6A', border: '#333333', borderStrong: '#444444' },
  },
  agency: {
    light: { primary: '#6366F1', secondary: '#4F46E5', accent: '#EC4899', bg: '#FFFFFF', surface: '#F8F9FF', card: '#FFFFFF', text: '#111827', textSecondary: '#4B5563', textMuted: '#9CA3AF', border: '#E5E7EB', borderStrong: '#D1D5DB' },
    dark: { primary: '#818CF8', secondary: '#6366F1', accent: '#F472B6', bg: '#0F0F1A', surface: '#1A1A2E', card: '#252540', text: '#F9FAFB', textSecondary: '#D1D5DB', textMuted: '#6B7280', border: '#374151', borderStrong: '#4B5563' },
  },
  beauty: {
    light: { primary: '#DB2777', secondary: '#BE185D', accent: '#F9A8D4', bg: '#FFFBFC', surface: '#FFF5F7', card: '#FFFFFF', text: '#1F1F1F', textSecondary: '#4A4A4A', textMuted: '#8A8A8A', border: '#FCE7F3', borderStrong: '#FBCFE8' },
    dark: { primary: '#F472B6', secondary: '#EC4899', accent: '#FDF2F8', bg: '#1A0F14', surface: '#2D1F28', card: '#3D2935', text: '#FDF2F8', textSecondary: '#FBCFE8', textMuted: '#9D7A8C', border: '#4D3344', borderStrong: '#6D4D5D' },
  },
  healthcare: {
    light: { primary: '#059669', secondary: '#047857', accent: '#34D399', bg: '#F0FDF4', surface: '#ECFDF5', card: '#FFFFFF', text: '#064E3B', textSecondary: '#065F46', textMuted: '#6B7280', border: '#D1FAE5', borderStrong: '#A7F3D0' },
    dark: { primary: '#34D399', secondary: '#10B981', accent: '#6EE7B7', bg: '#0A1612', surface: '#0F201A', card: '#152A22', text: '#ECFDF5', textSecondary: '#A7F3D0', textMuted: '#6B8C7A', border: '#1F3D31', borderStrong: '#2F5747' },
  },
  realestate: {
    light: { primary: '#0369A1', secondary: '#0284C7', accent: '#FCD34D', bg: '#FFFFFF', surface: '#F0F9FF', card: '#FFFFFF', text: '#0C4A6E', textSecondary: '#075985', textMuted: '#6B7280', border: '#BAE6FD', borderStrong: '#7DD3FC' },
    dark: { primary: '#38BDF8', secondary: '#0EA5E9', accent: '#FBBF24', bg: '#0A1520', surface: '#0F2030', card: '#152840', text: '#F0F9FF', textSecondary: '#BAE6FD', textMuted: '#6B8A9C', border: '#1F3D55', borderStrong: '#2F5575' },
  },
  musician: {
    light: { primary: '#7C3AED', secondary: '#6D28D9', accent: '#F59E0B', bg: '#FEFEFE', surface: '#FAF5FF', card: '#FFFFFF', text: '#1F1F1F', textSecondary: '#4A4A4A', textMuted: '#8A8A8A', border: '#EDE9FE', borderStrong: '#DDD6FE' },
    dark: { primary: '#A78BFA', secondary: '#8B5CF6', accent: '#FBBF24', bg: '#0D0A15', surface: '#1A1425', card: '#251E35', text: '#FAF5FF', textSecondary: '#DDD6FE', textMuted: '#8B7AA0', border: '#3D3055', borderStrong: '#5D4875' },
  },
  ecommerce: {
    light: { primary: '#F97316', secondary: '#EA580C', accent: '#22C55E', bg: '#FFFFFF', surface: '#FFF7ED', card: '#FFFFFF', text: '#1C1917', textSecondary: '#44403C', textMuted: '#78716C', border: '#FED7AA', borderStrong: '#FDBA74' },
    dark: { primary: '#FB923C', secondary: '#F97316', accent: '#4ADE80', bg: '#0F0C08', surface: '#1C1610', card: '#2A2218', text: '#FFF7ED', textSecondary: '#FED7AA', textMuted: '#A8998C', border: '#44362A', borderStrong: '#64503A' },
  },
  education: {
    light: { primary: '#2563EB', secondary: '#1D4ED8', accent: '#F59E0B', bg: '#FFFFFF', surface: '#EFF6FF', card: '#FFFFFF', text: '#1E3A8A', textSecondary: '#3B82F6', textMuted: '#6B7280', border: '#BFDBFE', borderStrong: '#93C5FD' },
    dark: { primary: '#60A5FA', secondary: '#3B82F6', accent: '#FBBF24', bg: '#0A1225', surface: '#0F1A35', card: '#152545', text: '#EFF6FF', textSecondary: '#BFDBFE', textMuted: '#6B8AB0', border: '#1F3565', borderStrong: '#2F4585' },
  },
  event: {
    light: { primary: '#DC2626', secondary: '#B91C1C', accent: '#FBBF24', bg: '#FFFFFF', surface: '#FEF2F2', card: '#FFFFFF', text: '#1F1F1F', textSecondary: '#4A4A4A', textMuted: '#8A8A8A', border: '#FECACA', borderStrong: '#FCA5A5' },
    dark: { primary: '#F87171', secondary: '#EF4444', accent: '#FCD34D', bg: '#120808', surface: '#1F1010', card: '#2C1818', text: '#FEF2F2', textSecondary: '#FECACA', textMuted: '#9C7A7A', border: '#4C2828', borderStrong: '#6C3838' },
  },
  tech: {
    light: { primary: '#14B8A6', secondary: '#0D9488', accent: '#8B5CF6', bg: '#FFFFFF', surface: '#F0FDFA', card: '#FFFFFF', text: '#134E4A', textSecondary: '#0F766E', textMuted: '#6B7280', border: '#99F6E4', borderStrong: '#5EEAD4' },
    dark: { primary: '#2DD4BF', secondary: '#14B8A6', accent: '#A78BFA', bg: '#0A1512', surface: '#0F201C', card: '#152A26', text: '#F0FDFA', textSecondary: '#99F6E4', textMuted: '#6B8C85', border: '#1F3D36', borderStrong: '#2F5D52' },
  },
  artisan: {
    light: { primary: '#92400E', secondary: '#B45309', accent: '#059669', bg: '#FFFBEB', surface: '#FEF3C7', card: '#FFFFFF', text: '#451A03', textSecondary: '#78350F', textMuted: '#A16207', border: '#FDE68A', borderStrong: '#FCD34D' },
    dark: { primary: '#F59E0B', secondary: '#D97706', accent: '#34D399', bg: '#12100A', surface: '#1C1810', card: '#282418', text: '#FFFBEB', textSecondary: '#FDE68A', textMuted: '#A89060', border: '#3D3520', borderStrong: '#5D5030' },
  },
}

const basePalette = activityPalettes.restaurant.light

// Typography by activity
export const activityTypography: Record<ActivityId, { heading: string; body: string }> = {
  restaurant: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
  photographer: { heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  lawyer: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
  fitness: { heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  agency: { heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  beauty: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
  healthcare: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  realestate: { heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  musician: { heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  ecommerce: { heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  education: { heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  event: { heading: "'Poppins', sans-serif", body: "'Inter', sans-serif" },
  tech: { heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  artisan: { heading: "'Roboto Slab', serif", body: "'Inter', sans-serif" },
}

// Generate tokens
export function generateTokens(activityId: ActivityId, theme: 'light' | 'dark'): DesignTokens {
  const palette = activityPalettes[activityId]?.[theme] || activityPalettes.restaurant[theme]
  const typography = activityTypography[activityId] || activityTypography.restaurant
  
  return {
    colors: {
      primary: palette.primary,
      secondary: palette.secondary,
      accent: palette.accent,
      background: { main: palette.bg, surface: palette.surface, card: palette.card },
      text: { primary: palette.text, secondary: palette.textSecondary, muted: palette.textMuted },
      border: { default: palette.border, strong: palette.borderStrong },
      gradient: {
        hero: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)`,
        cta: `linear-gradient(135deg, ${palette.secondary} 0%, ${palette.primary} 100%)`,
      },
    },
    typography: {
      fontFamily: { heading: typography.heading, body: typography.body },
      fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' },
    },
    spacing: { section: '6rem', container: '1.5rem' },
    borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px' },
    components: {
      button: { padding: '0.75rem 1.5rem', borderRadius: '0.5rem' },
      card: { padding: '1.5rem', borderRadius: '1rem', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
      input: {
        background: palette.card,
        border: `1px solid ${palette.border}`,
        text: palette.text,
        placeholder: palette.textMuted,
        focus: palette.primary,
      },
    },
  }
}

export default generateTokens
