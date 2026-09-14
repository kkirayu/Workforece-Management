# Nexus Workforce — Development Roadmap to Production

**Status:** Phase 0 (Frontend Prototype)  
**Target:** Full Production SaaS  
**Stack:** React 19 + TypeScript + Tailwind CSS + Laravel + MySQL + Redis + AI Layer

---

## Current State

- ✅ 12 frontend screens (static UI, mock data)
- ✅ Light theme matching Stitch designs
- ✅ Material Symbols + Inter + JetBrains Mono fonts
- ❌ No backend, no API, no auth
- ❌ No database, no real data flow
- ❌ No tests, no linting, no CI/CD
- ❌ No state management (no TanStack Query, no Zustand)
- ❌ No routing (screen switching via useState)
- ❌ No error handling, no loading states, no empty states

---

## Phase 0.5 — Fix Foundation (Week 1)

### 0.5.1 Project Cleanup
- [ ] Remove Vite scaffold files (`counter.ts`, `main.ts`, `style.css`, `assets/hero.png`, `assets/typescript.svg`, `assets/vite.svg`)
- [ ] Add `react` and `react-dom` to `package.json` dependencies
- [ ] Remove `dist/` from git tracking (add to `.gitignore`)
- [ ] Run `npm audit fix` and clean unused deps

### 0.5.2 Code Quality
- [ ] Install ESLint + Prettier with React/TypeScript config
- [ ] Add `npm run lint` and `npm run format` scripts
- [ ] Fix all lint warnings across 12 screen files
- [ ] Add strict TypeScript config (`strict: true` in tsconfig)

### 0.5.3 Frontend Architecture
- [ ] Install `react-router-dom` — replace useState screen switching with proper URL routing
- [ ] Install `@tanstack/react-query` — prepare data fetching layer
- [ ] Install `zustand` — global state management (auth, tenant, UI state)
- [ ] Create `src/services/api.ts` — HTTP client (axios/fetch wrapper) with base URL config
- [ ] Create `src/hooks/` directory — custom hooks per screen
- [ ] Create `src/components/layout/AppLayout.tsx` — extract shell layout from App.tsx
- [ ] Create `src/components/layout/PageHeader.tsx` — reusable breadcrumb + title + actions pattern

---

## Phase 1 — Backend Foundation (Weeks 2-3)

### 1.1 Laravel Project Setup
- [ ] `composer create-project laravel/laravel nexus-api`
- [ ] Configure `.env` (MySQL, Redis, S3, Queue)
- [ ] Setup `Laravel Sanctum` for SPA auth
- [ ] Configure CORS for `localhost:5173` (dev) + production domain
- [ ] Setup API versioning (`/api/v1/...`)

### 1.2 Database Schema (Core Tables)
Based on PRD Module 01-05:

```
users, roles, permissions, role_permissions, user_roles
companies, divisions, departments, teams, positions, levels
employees, employee_histories, employee_managers
skills, skill_categories, employee_skills, position_skills
projects, milestones, tasks, subtasks, task_assignments
capacity_rules, employee_capacities, workload_allocations
goals, okrs, key_results, kpis, employee_kpis
performance_cycles, performance_reviews, performance_snapshots
audit_logs, activity_logs
```

- [ ] Create migrations for all core tables
- [ ] Add foreign keys, indexes, and constraints
- [ ] Create seeders with realistic test data (matching mock data)

### 1.3 Authentication & RBAC
- [ ] User registration / login / logout (Sanctum tokens)
- [ ] Password reset flow (email-based)
- [ ] Role model: Super Admin, HC Admin, Director, Lead, Manager, Employee
- [ ] Permission model: granular permissions per module
- [ ] Middleware: `role:director`, `permission:employee.write`
- [ ] Frontend: Login page, auth context, route guards

### 1.4 Organization Module (PRD Module 02)
- [ ] CRUD Company
- [ ] CRUD Division
- [ ] CRUD Department
- [ ] CRUD Team
- [ ] Employee → Manager relationship
- [ ] Organization tree API (`GET /api/v1/organization/tree`)
- [ ] Frontend: Connect Screen1 (Org Chart) to real API

---

## Phase 2 — Employee & Skills (Weeks 4-5)

### 2.1 Employee Module (PRD Module 03)
- [ ] Employee CRUD with validation
- [ ] Employee profile with all fields (position, level, department, location)
- [ ] Employee list with search, filter, pagination
- [ ] Employee import (CSV/Excel upload)
- [ ] Bulk employee update
- [ ] Employee status management (Active, On Leave, Inactive)
- [ ] Frontend: Connect Screen3 (Employee Profile) to API
- [ ] Frontend: Employee list view with table + filters

### 2.2 Skill Module (PRD Module 05)
- [ ] Skill catalog CRUD
- [ ] Skill categories (Technical, Soft, Leadership, etc.)
- [ ] Employee skill assignment with levels (1-5)
- [ ] Skill verification (ARB Certified, Peer Confirmed)
- [ ] Skill gap calculation API
- [ ] Organization-wide skill matrix API
- [ ] Frontend: Connect skill table in Screen3
- [ ] Frontend: Skill gap visualization

---

## Phase 3 — Projects & Tasks (Weeks 5-6)

### 3.1 Project Module (PRD Module 06)
- [ ] Project CRUD
- [ ] Milestone management
- [ ] Task CRUD with all attributes (priority, complexity, estimate, deadline, status)
- [ ] Task status workflow: Backlog → Ready → In Progress → Review → Done
- [ ] Task dependencies
- [ ] Required skills per task
- [ ] Task assignment (single/multiple assignees)
- [ ] Project members management
- [ ] Frontend: Project list + detail pages
- [ ] Frontend: Task board (Kanban view)
- [ ] Frontend: Connect Screen9 (My Tasks) to API

### 3.2 Task Comments & Activity
- [ ] Task comment API
- [ ] Task activity timeline
- [ ] File attachments (S3/Object Storage)
- [ ] Frontend: Comment section in task detail

---

## Phase 4 — Capacity & Workload (Weeks 6-7)

### 4.1 Capacity Module (PRD Module 07)
- [ ] Capacity rules per employee/level
- [ ] Working calendar (holidays, PTO)
- [ ] Calculate available capacity per period
- [ ] Allocate workload to employees
- [ ] Utilization calculation: `Allocated / Capacity × 100%`
- [ ] Thresholds: <60% Underutilized, 60-80% Healthy, 80-90% High, >90% Overloaded
- [ ] Capacity adjustment for leave/holidays
- [ ] Workload history snapshots
- [ ] Frontend: Connect Screen4 (Workload History) to API
- [ ] Frontend: Connect Screen6 (Heatmap) to API

### 4.2 Workload Alerts
- [ ] Overload detection (>90% threshold)
- [ ] Underutilization detection (<60%)
- [ ] Alert notification system
- [ ] Frontend: Real-time alert indicators on Dashboard

---

## Phase 5 — Resource Allocation Engine (Weeks 7-8)

### 5.1 Resource Pool (PRD Module 08)
- [ ] Resource pool entity
- [ ] Candidate matching query (skill + level + capacity + availability)
- [ ] Suitability scoring service (configurable weights)
  ```
  Score = Skill(30%) + Capacity(20%) + Level(15%) + Experience(10%)
        + Availability(10%) + Performance(10%) + Context(5%)
  ```
- [ ] Recommendation API (`POST /api/v1/resources/recommend`)
- [ ] Assignment with approval workflow
- [ ] Manual override capability
- [ ] Conflict detection
- [ ] Allocation history audit trail
- [ ] Frontend: Connect Screen7 (Rebalance Preview) to API
- [ ] Frontend: Resource recommendation UI in task detail

---

## Phase 6 — KPI, Goals & Performance (Weeks 8-9)

### 6.1 KPI & Goals (PRD Module 09)
- [ ] KPI catalog + configuration
- [ ] Goal hierarchy: Company → Department → Team → Employee
- [ ] OKR management (Objectives + Key Results)
- [ ] Progress tracking per goal
- [ ] Task ↔ KPI linking
- [ ] Frontend: Goal dashboard

### 6.2 Performance Module (PRD Module 10)
- [ ] Performance cycle management (monthly/quarterly)
- [ ] Weighted score calculation (configurable weights):
  ```
  Task Completion (30%) + Quality (25%) + Deadline (20%)
  + Productivity (15%) + Collaboration (10%)
  ```
- [ ] Self-assessment workflow
- [ ] Manager review workflow
- [ ] Peer feedback workflow
- [ ] Performance snapshot (monthly/quarterly)
- [ ] Performance trend data
- [ ] Frontend: Connect Screen5 (Performance) to API
- [ ] Frontend: Review submission forms

---

## Phase 7 — AI Intelligence Layer (Weeks 9-11)

### 7.1 AI Service Abstraction (PRD Module 13)
- [ ] `AiService` class with provider interface
- [ ] Configurable AI provider (OpenAI/Claude/local LLM)
- [ ] Prompt template management
- [ ] AI request logging + audit
- [ ] Fallback strategy (provider timeout/error)

### 7.2 AI Features
- [ ] **Performance Summary**: Auto-generate narrative from metrics
- [ ] **Resource Recommendation**: AI-powered candidate ranking
- [ ] **Workload Risk Detection**: Predict burnout patterns
- [ ] **Skill Gap Analysis**: Identify org-wide skill shortages
- [ ] **Career Recommendation**: Suggest development paths
- [ ] **Natural Language Query**: "Who is best for payment gateway project?"
- [ ] **Executive Summary**: AI-generated workforce health report
- [ ] Frontend: AI Copilot panel in TopBar
- [ ] Frontend: AI recommendation cards in Dashboard
- [ ] Frontend: Skill gap recommendations in Career Development

### 7.3 Scenario Simulation (PRD Module 14)
- [ ] Scenario model + assumptions
- [ ] Allocation simulation engine
- [ ] Capacity simulation
- [ ] Project impact calculation
- [ ] Monte Carlo simulation for risk analysis
- [ ] Frontend: Connect Screen11 (What-If) to simulation API
- [ ] Frontend: Save/share scenarios

---

## Phase 8 — Workforce Planning (Week 11)

### 8.1 Planning Module (PRD Module 12)
- [ ] Project demand model
- [ ] Future capacity model
- [ ] Demand aggregation by period
- [ ] Capacity forecast (30/60/90 day)
- [ ] Skill demand forecast
- [ ] Shortage calculation
- [ ] Hiring recommendation generation
- [ ] Training recommendation
- [ ] Internal mobility recommendation
- [ ] Frontend: Connect Screen10 (Planning) to API

---

## Phase 9 — Notifications & Audit (Week 12)

### 9.1 Notification System (PRD Module 15)
- [ ] Notification model + preferences
- [ ] In-app notifications (real-time via WebSocket)
- [ ] Email notifications (queue-based)
- [ ] Notification types: Task assignment, overload, deadline, performance cycle, AI alert
- [ ] Notification center UI in TopBar
- [ ] Reminder scheduler

### 9.2 Audit & Security (PRD Module 17)
- [ ] Audit log for all critical actions
- [ ] Activity log per user
- [ ] Login history
- [ ] Sensitive data access logging
- [ ] Rate limiting on API
- [ ] API security headers
- [ ] Encrypted sensitive fields
- [ ] Backup/restore procedure

---

## Phase 10 — Testing & Quality (Week 13)

### 10.1 Frontend Tests
- [ ] Install Vitest + React Testing Library
- [ ] Unit tests: utility functions, hooks, formatters
- [ ] Component tests: UI components render correctly
- [ ] Integration tests: Screen flows (create employee → assign task → track capacity)
- [ ] E2E tests: Playwright/Cypress for critical paths

### 10.2 Backend Tests
- [ ] Unit tests: Services, scoring engine, calculation logic
- [ ] Feature tests: API endpoints with role-based auth
- [ ] Integration tests: Database operations, queue jobs
- [ ] Authorization tests: Each permission combination

### 10.3 Security Audit
- [ ] SQL injection prevention (Eloquent ORM)
- [ ] XSS prevention (escaped output)
- [ ] CSRF protection (Sanctum)
- [ ] Input validation on all endpoints
- [ ] Rate limiting (throttle middleware)
- [ ] Audit trail for all mutations

---

## Phase 11 — Deployment & DevOps (Week 14)

### 11.1 Docker Setup
- [ ] `Dockerfile` for Laravel API
- [ ] `Dockerfile` for React frontend
- [ ] `docker-compose.yml` (MySQL, Redis, PHP-FPM, Nginx, Node)
- [ ] Development environment config

### 11.2 CI/CD Pipeline
- [ ] GitHub Actions / GitLab CI
  - Lint (ESLint + PHP-CS-Fixer)
  - Type check (TypeScript + PHPStan)
  - Test (Vitest + PHPUnit)
  - Build
  - Deploy to staging
- [ ] Environment-based configuration

### 11.3 Production Deployment
- [ ] Server setup (VPS / AWS / GCP)
- [ ] SSL certificate
- [ ] Domain configuration
- [ ] Database backup schedule
- [ ] Log aggregation (Sentry / Laravel Telescope)
- [ ] Monitoring (Uptime, performance metrics)

---

## Phase 12 — Polish & Launch (Weeks 15-16)

### 12.1 UI Polish
- [ ] Loading skeletons for all screens
- [ ] Empty states for all list views
- [ ] Error boundaries + fallback UI
- [ ] Toast notifications for user actions
- [ ] Keyboard shortcuts (⌘K search, etc.)
- [ ] Responsive design (mobile/tablet)
- [ ] Dark mode support
- [ ] Export to PDF/CSV on all data views

### 12.2 Data Export & Reporting
- [ ] CSV export for employee lists
- [ ] PDF export for talent cards
- [ ] Report generation (workforce health, performance, capacity)
- [ ] Scheduled report delivery via email

### 12.3 Multi-Tenant Support
- [ ] Tenant isolation (company_id on all tables)
- [ ] Tenant context switcher
- [ ] Per-tenant configuration (workload thresholds, performance weights)
- [ ] Feature flags per tenant

### 12.4 Documentation
- [ ] API documentation (Swagger/OpenAPI)
- [ ] User manual (role-based guides)
- [ ] Admin guide (system configuration)
- [ ] Developer guide (architecture, conventions)

---

## Priority Matrix

| Phase | Priority | Effort | Depends On |
|-------|----------|--------|------------|
| 0.5 Fix Foundation | P0 | 1 week | — |
| 1 Backend + Auth | P0 | 2 weeks | Phase 0.5 |
| 2 Employee & Skills | P0 | 2 weeks | Phase 1 |
| 3 Projects & Tasks | P0 | 1 week | Phase 2 |
| 4 Capacity & Workload | P0 | 1 week | Phase 3 |
| 5 Resource Allocation | P1 | 1 week | Phase 4 |
| 6 KPI & Performance | P1 | 1 week | Phase 3 |
| 7 AI Intelligence | P1 | 2 weeks | Phase 5, 6 |
| 8 Workforce Planning | P1 | 1 week | Phase 4, 7 |
| 9 Notifications & Audit | P1 | 1 week | Phase 1 |
| 10 Testing | P1 | 1 week | All phases |
| 11 Deployment | P0 | 1 week | All phases |
| 12 Polish & Launch | P0 | 2 weeks | All phases |

**Total Estimated:** 16 weeks (4 months)

---

## MVP Definition (Ship after Phase 6)

If you want to ship an MVP fast, ship after Phase 6 with:
- Auth + RBAC
- Employee management
- Skills management
- Project/Task management
- Capacity tracking
- Resource allocation (rule-based)
- Basic performance tracking
- Dashboard with KPIs

AI, planning, and simulation come in v2.

---

## Recommended Team Composition

| Role | Count | Focus |
|------|-------|-------|
| Full-Stack Developer | 2 | Laravel + React, API + Frontend |
| Frontend Specialist | 1 | Screens, UX, responsive design |
| Backend Specialist | 1 | API, database, queue, auth |
| QA / Test Engineer | 1 | Test coverage, E2E, security |
| DevOps | 0.5 | Docker, CI/CD, deployment |

**Minimum viable team:** 2 full-stack developers

---

## File Cleanup Checklist (Phase 0.5)

Remove these unused Vite scaffold files:
- `src/main.ts`
- `src/counter.ts`
- `src/style.css`
- `src/assets/hero.png`
- `src/assets/typescript.svg`
- `src/assets/vite.svg`
