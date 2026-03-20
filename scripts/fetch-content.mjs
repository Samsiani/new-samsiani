#!/usr/bin/env node
/**
 * Pre-build script: fetches all content from WordPress REST API
 * and writes JSON files that the static Next.js site imports at build time.
 *
 * Usage: node scripts/fetch-content.mjs
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'src', 'data', 'wp')
// Use WP_API_URL env var on server (localhost, bypasses Cloudflare), fallback to public URL
const WP_API = process.env.WP_API_URL || 'https://wp-samsiani.artcase.ge/wp-json/wp/v2'

mkdirSync(DATA_DIR, { recursive: true })

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function fetchAll(endpoint, params = {}) {
  let all = []
  let page = 1
  while (true) {
    const url = new URL(`${WP_API}/${endpoint}`)
    url.searchParams.set('per_page', '20')
    url.searchParams.set('page', String(page))
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)))
    let res
    for (let attempt = 0; attempt < 3; attempt++) {
      res = await fetch(url.toString(), {
        headers: {
        'User-Agent': 'Samsiani-NextJS-Build/1.0',
        ...(process.env.WP_API_HOST ? { 'Host': process.env.WP_API_HOST } : {}),
      }
      })
      if (res.ok) break
      await sleep(1000 * (attempt + 1))
    }
    if (!res.ok) {
      if (page === 1) console.warn(`⚠ Failed to fetch ${endpoint}: ${res.status}`)
      break
    }
    const data = await res.json()
    if (data.length === 0) break
    all = all.concat(data)
    if (data.length < 20) break
    page++
  }
  return all
}

function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, '').trim() || ''
}

async function main() {
  console.log('📥 Fetching content from WordPress...\n')

  // Fetch all content types sequentially to avoid Cloudflare rate limits
  const posts = await fetchAll('posts')
  const portfolio = await fetchAll('portfolio')
  const faqs = await fetchAll('faqs')
  const services = await fetchAll('services')
  const categories = await fetchAll('categories')
  const portfolioCategories = await fetchAll('portfolio-categories')
  const faqCategories = await fetchAll('faq-categories')

  // Build category lookup maps
  const catMap = Object.fromEntries(categories.map(c => [c.id, { name: c.name, slug: c.slug }]))
  const portCatMap = Object.fromEntries(portfolioCategories.map(c => [c.id, { name: c.name, slug: c.slug }]))
  const faqCatMap = Object.fromEntries(faqCategories.map(c => [c.id, { name: c.name, slug: c.slug }]))

  // Transform blog posts
  const blogData = posts.map(p => ({
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    date: p.date.split('T')[0],
    category: p.categories?.[0] ? catMap[p.categories[0]]?.slug || 'general' : 'general',
    categoryLabel: p.categories?.[0] ? catMap[p.categories[0]]?.name || '' : '',
    excerpt: stripHtml(p.excerpt.rendered),
    body: p.content.rendered,
    image: p.featured_image_url || null,
    readingTime: Math.ceil(stripHtml(p.content.rendered).split(/\s+/).length / 200),
    seo: p.rank_math_seo || {},
  }))

  // Transform portfolio projects
  const portfolioData = portfolio.map(p => ({
    name: stripHtml(p.title.rendered),
    slug: p.slug,
    category: p.portfolio_category?.[0] ? portCatMap[p.portfolio_category[0]]?.slug || '' : '',
    categoryLabel: p.portfolio_category?.[0] ? portCatMap[p.portfolio_category[0]]?.name || '' : '',
    year: p.acf?.year || new Date(p.date).getFullYear(),
    description: stripHtml(p.excerpt.rendered || p.content.rendered),
    techStack: p.acf?.tech_stack ? p.acf.tech_stack.split(',').map(s => s.trim()) : [],
    externalUrl: p.acf?.external_url || '#',
    image: p.featured_image_url || null,
    content: p.content.rendered,
    seo: p.rank_math_seo || {},
  }))

  // Transform FAQs
  const faqData = faqs
    .sort((a, b) => (a.acf?.sort_order || 0) - (b.acf?.sort_order || 0))
    .map((f, i) => ({
      id: f.id,
      title: stripHtml(f.title.rendered),
      content: stripHtml(f.content.rendered),
      category: f.faq_category?.[0] ? faqCatMap[f.faq_category[0]]?.slug || 'general' : 'general',
    }))

  // Transform services
  const serviceData = services.map(s => ({
    title: stripHtml(s.title.rendered),
    slug: s.slug,
    icon: s.acf?.icon_name || 'Code',
    description: stripHtml(s.excerpt.rendered),
    href: s.acf?.href || `/services/${s.slug}`,
    body: s.content.rendered,
    image: s.featured_image_url || null,
    seo: s.rank_math_seo || {},
  }))

  // Write JSON files
  const files = {
    'blog-posts.json': blogData,
    'projects.json': portfolioData,
    'faqs.json': faqData,
    'services.json': serviceData,
    'categories.json': { blog: categories.map(c => ({ value: c.slug, label: c.name })), portfolio: portfolioCategories.map(c => ({ value: c.slug, label: c.name })), faq: faqCategories.map(c => ({ value: c.slug, label: c.name })) },
  }

  for (const [filename, data] of Object.entries(files)) {
    const path = join(DATA_DIR, filename)
    writeFileSync(path, JSON.stringify(data, null, 2))
    const count = Array.isArray(data) ? data.length : Object.keys(data).length
    console.log(`  ✅ ${filename} (${count} items)`)
  }

  console.log('\n✨ Content fetched successfully!\n')
}

main().catch(err => {
  console.error('❌ Failed to fetch content:', err.message)
  process.exit(1)
})
