const WP_API = 'https://wp-samsiani.artcase.ge/wp-json/wp/v2'

async function fetchAPI<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(`${WP_API}/${endpoint}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)))
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`WP API error: ${res.status} ${endpoint}`)
  return res.json()
}

// ---------- Blog Posts ----------

export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  categories: number[]
  featured_image_url: string | null
  rank_math_seo: {
    title: string
    description: string
    focus_keyword: string
    canonical_url: string
  }
  acf?: Record<string, any>
}

export async function getBlogPosts(): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>('posts', { per_page: 100, _embed: 1 })
}

export async function getBlogPost(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>('posts', { slug, _embed: 1 })
  return posts[0] || null
}

export async function getBlogCategories(): Promise<{ id: number; name: string; slug: string }[]> {
  return fetchAPI('categories', { per_page: 100 })
}

// ---------- Portfolio ----------

export interface WPPortfolio {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_image_url: string | null
  rank_math_seo: {
    title: string
    description: string
    focus_keyword: string
    canonical_url: string
  }
  acf?: {
    year?: number
    tech_stack?: string
    external_url?: string
  }
  portfolio_category?: number[]
}

export async function getProjects(): Promise<WPPortfolio[]> {
  return fetchAPI<WPPortfolio[]>('portfolio', { per_page: 100 })
}

export async function getProject(slug: string): Promise<WPPortfolio | null> {
  const items = await fetchAPI<WPPortfolio[]>('portfolio', { slug })
  return items[0] || null
}

export async function getPortfolioCategories(): Promise<{ id: number; name: string; slug: string }[]> {
  return fetchAPI('portfolio-categories', { per_page: 100 })
}

// ---------- FAQ ----------

export interface WPFaq {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  faq_category?: number[]
  acf?: {
    sort_order?: number
  }
}

export async function getFaqs(): Promise<WPFaq[]> {
  return fetchAPI<WPFaq[]>('faqs', { per_page: 100 })
}

export async function getFaqCategories(): Promise<{ id: number; name: string; slug: string }[]> {
  return fetchAPI('faq-categories', { per_page: 100 })
}

// ---------- Services ----------

export interface WPService {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_image_url: string | null
  rank_math_seo: {
    title: string
    description: string
    focus_keyword: string
    canonical_url: string
  }
  acf?: {
    icon_name?: string
    href?: string
  }
}

export async function getServices(): Promise<WPService[]> {
  return fetchAPI<WPService[]>('services', { per_page: 100 })
}

export async function getService(slug: string): Promise<WPService | null> {
  const items = await fetchAPI<WPService[]>('services', { slug })
  return items[0] || null
}
