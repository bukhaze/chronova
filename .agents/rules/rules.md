---
trigger: always_on
---

# Chronova Workspace Rules

## Project Context
This workspace is for building **Chronova**, a premium full-stack ecommerce watch website.

Important context:
- The UI has already been designed in Stitch
- The Stitch design is the visual source of truth
- The current folder may already contain generated UI sections and partial code
- The goal is to turn this workspace into a complete, production-ready ecommerce system
- Deployment target is Vercel

## Core Behavior
- Always inspect the existing folder structure before making major changes
- Understand what already exists before editing, replacing, or generating new code
- Prefer improving and connecting the existing project instead of rebuilding it unnecessarily
- Keep the premium luxury watch brand feeling across the entire application
- Follow the Stitch UI design closely for layout, spacing, typography, styling, hierarchy, and responsiveness
- Avoid generic templates that do not match the premium Chronova style
- Keep the project clean, modular, scalable, and production-ready

## UI and Design Rules
- Preserve the premium luxury ecommerce aesthetic
- Use elegant, modern, polished UI patterns
- Keep pages visually consistent with the Stitch design
- Reuse components where possible
- Maintain strong spacing, visual hierarchy, and responsive behavior
- Do not introduce clashing styles or random design changes
- Remove awkward placeholder UI if it reduces quality
- Keep interactions smooth and professional

## Engineering Rules
- Use clean folder structure and readable code
- Use reusable components instead of duplicating code
- Keep business logic separated from UI where possible
- Keep files reasonably sized and organized
- Avoid unnecessary dependencies
- Do not break working functionality while implementing new features
- Before major changes, inspect dependencies and affected files
- Explain major file changes clearly while working

## Functional Scope
The system should support:
- customer-facing ecommerce pages
- product listing and product details
- cart and wishlist
- checkout flow
- authentication
- user account pages
- order history and order tracking
- admin dashboard
- product management
- category management
- inventory handling
- order management
- reviews
- coupons if included
- analytics widgets if included

## Security and Data Rules
- Never expose secrets in frontend code
- Never hardcode sensitive keys
- Protect admin-only routes and actions
- Validate authentication and authorization properly
- Validate inputs and prevent invalid order states
- Ensure stock and order logic are consistent

## Quality Rules
- Handle loading, empty, success, and error states properly
- Ensure routes are connected correctly
- Ensure forms are validated properly
- Ensure mobile responsiveness is not an afterthought
- Remove duplicate code, broken imports, and unused placeholders
- Keep the final result deployable and professional

## Working Method
- First inspect the whole folder
- Then summarize what exists
- Then identify missing pieces
- Then create a phased implementation plan
- Then implement carefully, phase by phase
- Verify the system still runs after each major change
- Prioritize production readiness over quick hacks

## Final Goal
Transform this workspace into a polished, fully connected, premium ecommerce watch store called Chronova, aligned with the Stitch design and ready for Vercel deployment.