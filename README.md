# 🚀 LaunchStack

> Cloud-native multi-tenant SaaS foundation built with NestJS, Prisma 7,
> PostgreSQL, and Docker. Designed to simulate real-world startup
> backend architecture with production-grade authentication and tenant
> isolation.

------------------------------------------------------------------------

## 🧠 Overview

LaunchStack is a backend-focused SaaS architecture project that models
how modern B2B platforms structure authentication, multi-tenancy, and
role-based access control.

This project emphasizes:

-   Clean modular architecture
-   Secure authentication (JWT + bcrypt)
-   Multi-tenant organization modeling
-   Role-based membership system
-   Containerized infrastructure
-   Production-style configuration management

------------------------------------------------------------------------

## 🏗 Architecture

Client\
↓\
NestJS API\
↓\
Prisma ORM\
↓\
PostgreSQL (Docker)

### Core Design Principles

-   Separation of concerns (Modules)
-   Stateless authentication (JWT)
-   Explicit runtime configuration
-   Multi-tenant data isolation
-   Membership-based authorization
-   Docker-first infrastructure

------------------------------------------------------------------------

## 🔐 Authentication System

-   DTO validation with class-validator
-   Password hashing using bcrypt
-   JWT issuance via @nestjs/jwt
-   Passport strategy integration
-   Guard-based route protection
-   Protected `/me` endpoint

------------------------------------------------------------------------

## 🏢 Multi-Tenant Architecture

### Data Model

User\
↓\
Membership\
↓\
Organization

### Features

-   Create organization
-   Auto-assign creator as OWNER
-   List user organizations
-   Organization-scoped route protection
-   Membership validation guard
-   Role enum (OWNER, ADMIN, MEMBER)

------------------------------------------------------------------------

## 🛠 Tech Stack

### Backend

-   NestJS
-   Prisma 7
-   PostgreSQL
-   Passport + JWT
-   bcrypt

### Infrastructure

-   Docker
-   Docker Compose
-   WSL2 (Linux dev environment)

------------------------------------------------------------------------

## 🚀 Getting Started

### 1️⃣ Start Database

``` bash
docker compose up -d
```

### 2️⃣ Run Migrations

``` bash
npx prisma migrate dev
```

### 3️⃣ Start Backend

``` bash
npm run start:dev
```

API runs at:

http://localhost:3000

------------------------------------------------------------------------

## 📦 Roadmap

-   Role-based authorization guard
-   Organization-scoped resources (Projects)
-   Background jobs (Redis + BullMQ)
-   CI/CD pipeline
-   AWS deployment
-   Reverse proxy (Nginx)
-   Observability & logging
-   Security hardening & rate limiting

------------------------------------------------------------------------

## 🎯 Purpose

LaunchStack is built as a learning-driven system architecture project to
deepen understanding of:

-   Backend system design
-   Multi-tenant SaaS modeling
-   DevOps fundamentals
-   Production-ready authentication patterns

This repository reflects how early-stage startups structure backend
systems.
