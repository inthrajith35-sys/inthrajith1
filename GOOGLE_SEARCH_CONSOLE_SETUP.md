# Google Search Console Setup Guide - Zytheron Software

## Step-by-Step Instructions

### 1. Access Google Search Console
- Go to: https://search.google.com/search-console/
- Sign in with your Google account (create one if needed)

### 2. Add Your Website Property
**Option A: URL Prefix Property (Recommended for small sites)**
1. Click "Add property" button
2. Select "URL prefix"
3. Enter: `https://zytheron.io/`
4. Click "Continue"

**Option B: Domain Property (Recommended for multi-subdomain sites)**
1. Click "Add property" button
2. Select "Domain"
3. Enter: `zytheron.io`
4. Click "Continue"

### 3. Verify Domain Ownership
**Choose one verification method:**

#### Method 1: DNS TXT Record (Recommended)
1. Get the TXT record from GSC
2. Go to your domain registrar (e.g., GoDaddy, Namecheap, etc.)
3. Add the TXT record to your DNS settings
4. Wait 24-48 hours for propagation
5. Click "Verify" in GSC

#### Method 2: HTML File Upload
1. Download the verification HTML file from GSC
2. Upload to your website root directory
3. Click "Verify" in GSC

#### Method 3: HTML Meta Tag
1. Copy the meta tag from GSC
2. Add to `<head>` section of index.html (already implemented)
3. Click "Verify" in GSC

#### Method 4: Google Analytics
1. Have Google Analytics linked to property
2. Click "Verify" in GSC

#### Method 5: Google Tag Manager
1. Have GTM container on property
2. Click "Verify" in GSC

### 4. Submit Your Sitemap
1. Go to "Sitemaps" section in GSC sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to crawl and index your sitemap

### 5. Check Indexing Coverage
1. Go to "Coverage" section in GSC
2. Monitor for:
   - ✅ Valid pages (should be green)
   - ⚠️ Excluded pages (review if expected)
   - ❌ Errors (fix immediately if any)

### 6. Request Indexing (Optional)
1. Go to "URL Inspection" tool
2. Enter your homepage: `https://zytheron.io/`
3. Click "Request Indexing"
4. Repeat for important pages:
   - `https://zytheron.io/about.html`
   - `https://zytheron.io/#services`
   - `https://zytheron.io/#work`

### 7. Monitor Core Web Vitals
1. Go to "Core Web Vitals" section
2. Check metrics:
   - **Largest Contentful Paint (LCP)** - should be < 2.5s
   - **First Input Delay (FID)** - should be < 100ms
   - **Cumulative Layout Shift (CLS)** - should be < 0.1
3. If any are poor, fix and retest

### 8. Review Search Performance
1. Go to "Performance" section
2. Monitor:
   - Total impressions
   - Total clicks
   - Average position
   - Click-through rate (CTR)
3. Analyze which queries drive traffic

### 9. Check Mobile Usability
1. Go to "Mobile Usability" section
2. Check for errors
3. Ensure site is mobile-responsive (already implemented)

### 10. Review Security Issues
1. Go to "Security & Manual Actions"
2. Monitor for security warnings
3. No manual actions should appear

## Key GSC Features

### Search Appearance
- Check how your site appears in search results
- Review rich snippets
- View which pages show structured data

### Enhancements
- Review structured data issues
- Check for breadcrumb errors
- Monitor Article markup (if applicable)

### Analytics
- See real search query data
- Identify low-performing keywords
- Find content improvement opportunities

### Testing Tools
- **URL Inspection:** Check specific page indexing status
- **Mobile-Friendly Test:** Verify mobile optimization
- **Rich Results Test:** Validate structured data
- **Core Web Vitals:** Check performance metrics

## Recommended Actions

### Month 1
- [ ] Verify domain and submit sitemap
- [ ] Request indexing of main pages
- [ ] Check initial crawl coverage
- [ ] Review mobile usability
- [ ] Validate structured data

### Month 2-3
- [ ] Monitor performance data
- [ ] Track keyword rankings
- [ ] Improve low-performing pages
- [ ] Check indexation progress
- [ ] Review user experience metrics

### Month 3+
- [ ] Analyze top performing queries
- [ ] Optimize content for featured snippets
- [ ] Build backlinks from authority sites
- [ ] Regularly update content
- [ ] Monitor Core Web Vitals monthly

## Important: Useful External Tools

### Google Tools
- **Google Analytics 4:** https://analytics.google.com/
- **Google My Business:** https://business.google.com/
- **Google Trends:** https://trends.google.com/

### SEO Testing Tools
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** Built into Chrome DevTools (F12 → Lighthouse)
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/mobile-friendly

### Third-Party SEO Tools (Optional)
- **Ahrefs:** Backlink analysis and keyword research
- **SEMrush:** Competitor analysis and keyword research
- **Moz:** SEO tools and rank tracking
- **Screaming Frog:** Technical SEO audit

## Troubleshooting

### "Claim this domain" Message
- Complete domain verification first
- Use DNS TXT record method for fastest verification
- Wait 24-48 hours for DNS propagation

### Pages Not Indexed
- Check for robots.txt blocking
- Verify no noindex meta tags
- Submit URL directly in URL Inspection tool
- Check for crawl errors in Coverage report

### Low Click-Through Rate
- Improve meta description (more compelling)
- Optimize page title for keywords
- Use structured data for rich snippets
- Increase position in search results

### Poor Core Web Vitals
- Optimize images (compress, use modern formats)
- Minify CSS and JavaScript
- Enable gzip compression
- Reduce render-blocking resources
- Use browser caching

## Contact & Support

**For GSC Help:**
- Community: https://support.google.com/webmasters/
- Forums: https://support.google.com/webmasters/community

**Your Business Details:**
- Name: Zytheron Software
- Email: inthrajith35@gmail.com
- Phone: +91-6380898030
- Location: Tamil Nadu, India

---

**Note:** Monitor GSC regularly (at least monthly) to track your SEO progress and identify opportunities for improvement.
