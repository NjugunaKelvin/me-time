# vin.log

> "Seniority is knowing what **not** to write."

## Hello, I'm Vin.

You've found the source code for my digital garden. 

This isn't just a portfolio; it's a statement on software design. In a world obsessed with over-engineering—microservices for blogs, k8s for landing pages—this project is an exercise in **restraint**.

I built this to be:
1.  **Fast.** Sub-100ms load times.
2.  **Clean.** Code that documents itself.
3.  **Human.** It feels like me.

## The Stack

I chose tools that get out of the way.

-   **Next.js:** Because I care about SEO and valid HTML, but I also want React's ecosystem.
-   **Tailwind:** Because naming CSS classes is a waste of mental cycles.
-   **No CMS:** My content lives in `src/data/content.js`. Why? Because I don't need an API call to tell me what my own name is.

## Running Locally

If you're curious about the implementation:

```bash
#  1. Clone the repo
git clone https://github.com/NjugunaKelvin/me-time.git

# 2. Install dependencies (I use npm, but bun is cool too)
npm install

# 3. Spin up the dev server
npm run dev
```

## Licensing

Feel free to fork this and make it your own. The code is MIT. The content is mine.

---

*If you're reading this code to evaluate me for a role: Start with `src/app/code/page.js`. That's where I show, not tell.*