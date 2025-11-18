/**
 * Hardcoded related content configuration for guides
 *
 * Each guide maps to exactly 6 curated blog posts.
 * This provides more control over related content vs tag-based algorithms.
 */

export type GuideSlug = string
export type PostSlug = string

export interface GuideRelatedContent {
  /**
   * Exactly 6 blog post slugs that are most relevant to this guide
   */
  posts: [PostSlug, PostSlug, PostSlug, PostSlug, PostSlug, PostSlug]
}

/**
 * Map of guide slugs to their related content
 *
 * IMPORTANT: Each guide MUST have exactly 6 related posts defined.
 * This is validated by tests in __tests__/guides-related-content.test.ts
 *
 * These are curated related posts from each guide's topic cluster.
 * Updated for Plant Doctor News with plant-focused hub guides.
 */
export const guideRelatedContent: Record<GuideSlug, GuideRelatedContent> = {
  'ai-plant-diagnosis-photo-guide': {
    posts: [
      'app-ready-plant-photos-3-shots-that-cut-misdiagnoses-by-80',
      'smartphone-ai-plant-diagnosis-guide',
      'ai-plant-diagnosis-when-to-trust-the-app',
      'troubleshooting-common-mistakes-when-shooting-plant-disease-photos-and-how-to-fix-them',
      'when-to-trust-the-app-vs-call-an-expert-a-decision-flow-for-plant-owners',
      'plant-diagnosis-photos-three-shot-routine',
    ],
  },
  'indoor-plant-pest-disease-management': {
    posts: [
      'beat-fungus-gnats-apartments-practical-guide',
      'diagnose-treat-spider-mites-fiddle-leaf-fig',
      'stop-powdery-mildew-indoor-roses-fast',
      'plant-quarantine-checklist-inspect-isolate-care',
      'ipm-toolkit-home-gardeners',
      'the-10-minute-plant-patrol-a-weekly-routine-to-catch-pests-before-they-spread',
    ],
  },
  'succulent-care-rescue-mastery': {
    posts: [
      'root-rot-rescue-apartment-succulents',
      'propagate-succulents-save-multiply-rescue',
      'diagnose-succulent-rot-vs-thirst',
      'winter-succulent-watering-apartment',
      'beginner-guide-getting-started-with-grow-lights-for-succulents',
      '48-hour-succulent-rescue-prioritized-checklist-to-save-soft-leaves',
    ],
  },
}

/**
 * Get related posts for a specific guide
 *
 * @param guideSlug - The slug of the guide
 * @returns Array of exactly 6 post slugs, or empty array if guide not found
 */
export function getRelatedPostsForGuide(guideSlug: string): PostSlug[] {
  const content = guideRelatedContent[guideSlug]
  return content?.posts ?? []
}

/**
 * Check if a guide has related content defined
 *
 * @param guideSlug - The slug of the guide
 * @returns true if the guide has related content configuration
 */
export function hasRelatedContent(guideSlug: string): boolean {
  return guideSlug in guideRelatedContent
}
