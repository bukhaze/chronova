---
description: # Chronova Workspace Workflow
---

# Chronova Workspace Workflow

## Phase 1: Inspect the Workspace
1. Inspect the entire opened folder first
2. Identify the framework, routing, components, styling setup, backend structure, and database setup
3. Identify which parts of the Stitch UI already exist in the workspace
4. Determine what is complete, partial, missing, broken, or disconnected
5. Summarize findings before making major implementation changes

## Phase 2: Plan the Build
1. Create a phased implementation plan from the current workspace state
2. Prioritize connecting and upgrading existing work instead of rebuilding unnecessarily
3. Keep the Stitch design as the visual reference
4. List the key pages, backend modules, and admin areas that need to be completed

## Phase 3: Align and Complete the UI
1. Review all existing UI sections and components
2. Standardize them into a consistent design system
3. Build or refine reusable components such as:
   - navbar
   - footer
   - hero section
   - category cards
   - product cards
   - filters
   - buttons
   - forms
   - modals
   - dashboard widgets
4. Ensure the UI is responsive for desktop, tablet, and mobile
5. Remove generic or inconsistent design sections that do not fit Chronova

## Phase 4: Complete Customer-Facing Pages
Build or complete these pages:
- Home page
- Shop page
- Product details page
- Cart page
- Checkout page
- Wishlist page
- Login page
- Signup page
- Forgot password page
- User account dashboard
- Order history page
- Order tracking page
- About page
- Contact page

## Phase 5: Implement Backend and Database
1. Review the current backend and data structure
2. Create or refine the database schema for:
   - users
   - products
   - categories
   - product_images
   - cart_items
   - wishlist_items
   - orders
   - order_items
   - addresses
   - reviews
   - payments
   - coupons
   - inventory_logs
3. Connect the frontend to real backend logic
4. Ensure data flows correctly into UI components
5. Ensure customer actions persist correctly

## Phase 6: Authentication and Authorization
1. Implement or refine signup, login, logout, forgot password, and session handling
2. Support customer and admin roles
3. Protect admin routes and admin actions
4. Ensure users can securely manage their own profile, addresses, orders, and wishlist

## Phase 7: Ecommerce Logic
1. Implement cart logic
2. Implement wishlist logic
3. Implement checkout flow
4. Validate stock before checkout
5. Reduce stock after successful order
6. Support order creation and order status updates
7. Support coupon application if included
8. Support review submission if included

## Phase 8: Admin Dashboard
Build or complete:
- dashboard overview
- product CRUD
- category CRUD
- inventory management
- order management
- customer management
- review moderation
- coupon management
- analytics widgets
- settings

## Phase 9: Testing and Cleanup
1. Test all routes and pages
2. Test authentication flow
3. Test cart, wishlist, and checkout
4. Test admin operations
5. Fix broken imports, duplicate files, and disconnected components
6. Remove placeholder content that should not ship to production
7. Ensure the project builds successfully

## Phase 10: Vercel Deployment Readiness
1. Confirm environment variables are correctly used
2. Ensure the production build passes
3. Optimize images and asset usage
4. Check metadata and SEO basics
5. Remove local-only blockers
6. Prepare the project for clean Vercel deployment

## Execution Rules
- Do not skip inspection
- Do not rewrite the whole project unless necessary
- Prefer phased implementation
- After each major phase, verify the project still runs
- Keep the Stitch design aligned throughout
- Focus on production-ready quality