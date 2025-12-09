// ============ KIWI BUILDER V7 — TYPES ============

export type ActivityId = 
  | 'restaurant' | 'photographer' | 'lawyer' | 'fitness' | 'agency' 
  | 'beauty' | 'healthcare' | 'realestate' | 'musician' | 'ecommerce' 
  | 'education' | 'event' | 'tech' | 'artisan'

export type SectionType = 
  | 'hero' | 'services' | 'about' | 'testimonials' 
  | 'pricing' | 'gallery' | 'cta' | 'contact'

export interface DesignTokens {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: { main: string; surface: string; card: string }
    text: { primary: string; secondary: string; muted: string }
    border: { default: string; strong: string }
    gradient: { hero: string; cta: string }
  }
  typography: {
    fontFamily: { heading: string; body: string }
    fontSize: { xs: string; sm: string; base: string; lg: string; xl: string; '2xl': string; '3xl': string; '4xl': string }
  }
  spacing: { section: string; container: string }
  borderRadius: { sm: string; md: string; lg: string; xl: string; full: string }
  components: {
    button: { padding: string; borderRadius: string }
    card: { padding: string; borderRadius: string; shadow: string }
    input: { background: string; border: string; text: string; placeholder: string; focus: string }
  }
}

export interface LayoutMeta {
  id: string
  name: string
  description: string
  category: 'core' | ActivityId
  sectionType: SectionType
  tags: string[]
  popularity: number
  isRecommended?: boolean
  isNew?: boolean
  bestFor?: string[]
}

export interface LayoutProps<T = any> {
  content: T
  tokens: DesignTokens
  isEditing?: boolean
  onContentChange?: (content: T) => void
}

export interface LayoutEntry {
  meta: LayoutMeta
  component: React.ComponentType<LayoutProps<any>>
}

// Content Types
export interface HeroContent {
  badge?: string
  title: string
  subtitle?: string
  description: string
  image?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  stats?: { value: string; label: string }[]
  openingHours?: string
  rating?: string
  reviewCount?: number
}

export interface ServiceItem {
  title: string
  description: string
  icon?: string
  image?: string
  price?: string
  duration?: string
  popular?: boolean
  features?: string[]
  category?: string
}

export interface ServicesContent {
  badge?: string
  title: string
  subtitle?: string
  services: ServiceItem[]
  categories?: string[]
}

export interface AboutContent {
  badge?: string
  title: string
  subtitle?: string
  description: string
  image?: string
  features?: string[]
  stats?: { value: string; label: string }[]
}

export interface TestimonialItem {
  name: string
  role?: string
  content: string
  rating?: number
  avatar?: string
  image?: string
}

export interface TestimonialsContent {
  badge?: string
  title: string
  subtitle?: string
  testimonials: TestimonialItem[]
  averageRating?: number
  totalReviews?: number
}

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  name: string
  description?: string
  price: string
  monthlyPrice?: string
  yearlyPrice?: string
  period?: string
  features: PricingFeature[]
  cta: string
  ctaHref?: string
  popular?: boolean
}

export interface PricingContent {
  badge?: string
  title: string
  subtitle?: string
  plans: PricingPlan[]
  disclaimer?: string
}

export interface GalleryItem {
  image: string
  title?: string
  category?: string
  description?: string
}

export interface GalleryContent {
  badge?: string
  title: string
  subtitle?: string
  items: GalleryItem[]
  categories?: string[]
}

export interface CtaContent {
  title: string
  subtitle?: string
  description?: string
  image?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  features?: string[]
  stats?: { value: string; label: string }[]
}

export interface FormField {
  name: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'time' | 'number'
  label?: string
  placeholder?: string
  required?: boolean
  options?: string[]
}

export interface ContactContent {
  badge?: string
  title: string
  subtitle?: string
  email?: string
  phone?: string
  address?: string
  hours?: { day: string; hours: string }[]
  formFields: FormField[]
  socials?: { platform: string; url: string; icon: string }[]
  mapUrl?: string
}

export interface Section {
  id: string
  type: SectionType
  layoutId: string
  content: any
  enabled: boolean
}

export interface AppState {
  activityId: ActivityId
  theme: 'light' | 'dark'
  sections: Section[]
  editingSection: string | null
  comparingLayouts: string[] | null
}
