# 0001: Hybrid Multi-Page Routing Architecture

We decided to build the portfolio as a multi-page Next.js App Router application with dedicated project routes (`/projects/[slug]`) rather than a single-page drawer application. This decision prioritizes direct linkability, canonical URLs for individual project sharing on professional platforms (LinkedIn, Twitter), and independent open-graph metadata for each case study, while preserving fluid client-side navigation transitions on the homepage.
