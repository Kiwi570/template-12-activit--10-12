// ============ LAYOUT REGISTRY — EXPLICIT IMPORTS (V8 - 55 LAYOUTS) ============
import type { LayoutEntry, SectionType, ActivityId } from '../types'

// Hero Layouts (existing)
import {
  splitMeta as heroSplitMeta, HeroSplit,
  centeredMeta as heroCenteredMeta, HeroCentered,
  boldMeta as heroBoldMeta, HeroBold,
  minimalMeta as heroMinimalMeta, HeroMinimal,
  fullMeta as heroFullMeta, HeroFull,
  statsMeta as heroStatsMeta, HeroStats,
  videoMeta as heroVideoMeta, HeroVideo,
  restaurantMeta as heroRestaurantMeta, HeroRestaurant,
} from './core/hero'

// Hero Layouts (new)
import {
  saasMeta as heroSaasMeta, HeroSaas,
  countdownMeta as heroCountdownMeta, HeroCountdown,
} from './core/hero/new-layouts'

// Services Layouts (existing)
import {
  gridMeta as servicesGridMeta, ServicesGrid,
  cardsMeta as servicesCardsMeta, ServicesCards,
  listMeta as servicesListMeta, ServicesList,
  minimalMeta as servicesMinimalMeta, ServicesMinimal,
  tabsMeta as servicesTabsMeta, ServicesTabs,
  packagesMeta as servicesPackagesMeta, ServicesPackages,
} from './core/services'

// Services Layouts (new)
import {
  timelineMeta as servicesTimelineMeta, ServicesTimeline,
} from './core/services/new-layouts'

// About Layouts (existing)
import {
  splitMeta as aboutSplitMeta, AboutSplit,
  centeredMeta as aboutCenteredMeta, AboutCentered,
  minimalMeta as aboutMinimalMeta, AboutMinimal,
  fullMeta as aboutFullMeta, AboutFull,
  cardsMeta as aboutCardsMeta, AboutCards,
} from './core/about'

// About Layouts (new)
import {
  teamMeta as aboutTeamMeta, AboutTeam,
} from './core/about/new-layouts'

// Testimonials Layouts
import {
  cardsMeta as testimonialsCardsMeta, TestimonialsCards,
  sliderMeta as testimonialsSliderMeta, TestimonialsSlider,
  featuredMeta as testimonialsFeaturedMeta, TestimonialsFeatured,
  listMeta as testimonialsListMeta, TestimonialsList,
  minimalMeta as testimonialsMinimalMeta, TestimonialsMinimal,
  marqueeMeta as testimonialsMarqueeMeta, TestimonialsMarquee,
} from './core/testimonials'

// Pricing Layouts (existing)
import {
  cardsMeta as pricingCardsMeta, PricingCards,
  simpleMeta as pricingSimpleMeta, PricingSimple,
  toggleMeta as pricingToggleMeta, PricingToggle,
  featuredMeta as pricingFeaturedMeta, PricingFeatured,
  minimalMeta as pricingMinimalMeta, PricingMinimal,
} from './core/pricing'

// Pricing Layouts (new)
import {
  comparisonMeta as pricingComparisonMeta, PricingComparison,
} from './core/pricing/new-layouts'

// Gallery Layouts (existing)
import {
  gridMeta as galleryGridMeta, GalleryGrid,
  masonryMeta as galleryMasonryMeta, GalleryMasonry,
  carouselMeta as galleryCarouselMeta, GalleryCarousel,
  featuredMeta as galleryFeaturedMeta, GalleryFeatured,
  minimalMeta as galleryMinimalMeta, GalleryMinimal,
} from './core/gallery'

// Gallery Layouts (new)
import {
  filterableMeta as galleryFilterableMeta, GalleryFilterable,
  beforeAfterMeta as galleryBeforeAfterMeta, GalleryBeforeAfter,
} from './core/gallery/new-layouts'

// CTA Layouts
import {
  centeredMeta as ctaCenteredMeta, CtaCentered,
  gradientMeta as ctaGradientMeta, CtaGradient,
  splitMeta as ctaSplitMeta, CtaSplit,
  cardMeta as ctaCardMeta, CtaCard,
  minimalMeta as ctaMinimalMeta, CtaMinimal,
  actionsMeta as ctaActionsMeta, CtaActions,
  statsMeta as ctaStatsMeta, CtaStats,
} from './core/cta'

// Contact Layouts (existing)
import {
  splitMeta as contactSplitMeta, ContactSplit,
  centeredMeta as contactCenteredMeta, ContactCentered,
  minimalMeta as contactMinimalMeta, ContactMinimal,
  fullMeta as contactFullMeta, ContactFull,
  reservationMeta as contactReservationMeta, ContactReservation,
} from './core/contact'

// Contact Layouts (new)
import {
  mapMeta as contactMapMeta, ContactMap,
} from './core/contact/new-layouts'

// Build registry with explicit mappings
const allLayouts: [LayoutEntry['meta'], LayoutEntry['component']][] = [
  // Hero (10) - +2 new
  [heroSplitMeta, HeroSplit],
  [heroCenteredMeta, HeroCentered],
  [heroBoldMeta, HeroBold],
  [heroMinimalMeta, HeroMinimal],
  [heroFullMeta, HeroFull],
  [heroStatsMeta, HeroStats],
  [heroVideoMeta, HeroVideo],
  [heroRestaurantMeta, HeroRestaurant],
  [heroSaasMeta, HeroSaas],           // NEW: Tech/SaaS
  [heroCountdownMeta, HeroCountdown], // NEW: Event countdown
  
  // Services (7) - +1 new
  [servicesGridMeta, ServicesGrid],
  [servicesCardsMeta, ServicesCards],
  [servicesListMeta, ServicesList],
  [servicesMinimalMeta, ServicesMinimal],
  [servicesTabsMeta, ServicesTabs],
  [servicesPackagesMeta, ServicesPackages],
  [servicesTimelineMeta, ServicesTimeline], // NEW: Timeline/Process
  
  // About (6) - +1 new
  [aboutSplitMeta, AboutSplit],
  [aboutCenteredMeta, AboutCentered],
  [aboutMinimalMeta, AboutMinimal],
  [aboutFullMeta, AboutFull],
  [aboutCardsMeta, AboutCards],
  [aboutTeamMeta, AboutTeam], // NEW: Team presentation
  
  // Testimonials (6)
  [testimonialsCardsMeta, TestimonialsCards],
  [testimonialsSliderMeta, TestimonialsSlider],
  [testimonialsFeaturedMeta, TestimonialsFeatured],
  [testimonialsListMeta, TestimonialsList],
  [testimonialsMinimalMeta, TestimonialsMinimal],
  [testimonialsMarqueeMeta, TestimonialsMarquee],
  
  // Pricing (6) - +1 new
  [pricingCardsMeta, PricingCards],
  [pricingSimpleMeta, PricingSimple],
  [pricingToggleMeta, PricingToggle],
  [pricingFeaturedMeta, PricingFeatured],
  [pricingMinimalMeta, PricingMinimal],
  [pricingComparisonMeta, PricingComparison], // NEW: Comparison table
  
  // Gallery (7) - +2 new
  [galleryGridMeta, GalleryGrid],
  [galleryMasonryMeta, GalleryMasonry],
  [galleryCarouselMeta, GalleryCarousel],
  [galleryFeaturedMeta, GalleryFeatured],
  [galleryMinimalMeta, GalleryMinimal],
  [galleryFilterableMeta, GalleryFilterable],     // NEW: Filterable
  [galleryBeforeAfterMeta, GalleryBeforeAfter],   // NEW: Before/After
  
  // CTA (7)
  [ctaCenteredMeta, CtaCentered],
  [ctaGradientMeta, CtaGradient],
  [ctaSplitMeta, CtaSplit],
  [ctaCardMeta, CtaCard],
  [ctaMinimalMeta, CtaMinimal],
  [ctaActionsMeta, CtaActions],
  [ctaStatsMeta, CtaStats],
  
  // Contact (6) - +1 new
  [contactSplitMeta, ContactSplit],
  [contactCenteredMeta, ContactCentered],
  [contactMinimalMeta, ContactMinimal],
  [contactFullMeta, ContactFull],
  [contactReservationMeta, ContactReservation],
  [contactMapMeta, ContactMap], // NEW: With map
]

// Build the registry map
export const layoutRegistry = new Map<string, LayoutEntry>(
  allLayouts.map(([meta, component]) => [
    meta.id,
    { meta, component }
  ])
)

// Get layouts by section type
export function getLayoutsForSection(sectionType: SectionType, activityId?: ActivityId): LayoutEntry[] {
  const layouts: LayoutEntry[] = []
  
  layoutRegistry.forEach((entry) => {
    if (entry.meta.sectionType === sectionType) {
      // Include core layouts and activity-specific layouts
      if (entry.meta.category === 'core' || entry.meta.category === activityId) {
        layouts.push(entry)
      }
    }
  })
  
  // Sort by popularity and recommended status
  return layouts.sort((a, b) => {
    if (a.meta.isRecommended && !b.meta.isRecommended) return -1
    if (!a.meta.isRecommended && b.meta.isRecommended) return 1
    return (b.meta.popularity || 0) - (a.meta.popularity || 0)
  })
}

// Get a specific layout by ID
export function getLayout(layoutId: string): LayoutEntry | undefined {
  return layoutRegistry.get(layoutId)
}

// Get default layout for a section
export function getDefaultLayoutId(sectionType: SectionType, activityId?: ActivityId): string {
  const layouts = getLayoutsForSection(sectionType, activityId)
  
  // Prefer activity-specific layouts first
  const activityLayout = layouts.find(l => l.meta.category === activityId)
  if (activityLayout) return activityLayout.meta.id
  
  // Then recommended core layouts
  const recommended = layouts.find(l => l.meta.isRecommended)
  if (recommended) return recommended.meta.id
  
  // Fallback to first available
  return layouts[0]?.meta.id || `${sectionType}-split`
}

// Debug: log registry size
console.log(`[Kiwi V8] Layout registry loaded: ${layoutRegistry.size} layouts (+8 nouveaux)`)

export default layoutRegistry
