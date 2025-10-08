<<<<<<< HEAD
# Modular CRM/Hosting Platform

Eine modulare CRM/Hosting-Software die sowohl als SaaS als auch Self-Hosted betrieben werden kann.

## 🚀 Quick Start

### Voraussetzungen
- Node.js (v16+)
- PostgreSQL (v12+)
- npm oder yarn

### Installation

1. **Repository klonen und Dependencies installieren:**
```bash
npm run install:all
```

2. **PostgreSQL Datenbank erstellen:**
```sql
CREATE DATABASE crm_dev;
CREATE USER crm_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE crm_dev TO crm_user;
```

3. **Environment Variablen konfigurieren:**
```bash
# Backend
cd apps/backend
cp .env.example .env
# .env Datei bearbeiten und Datenbankverbindung eintragen
```

4. **Datenbank migrieren und Seed-Daten laden:**
```bash
npm run db:migrate
npm run db:seed
```

5. **Anwendung starten:**
```bash
# Development Mode (Frontend + Backend)
npm run dev

# Oder separat:
npm run backend:dev  # Backend auf Port 3001
npm run frontend:dev # Frontend auf Port 3000
```

## 📋 Features

### Core Features
- **Multi-Tenant SaaS** oder **Self-Hosting**
- **Rollenbasierte Zugriffskontrolle** (Admin, Employee, Customer, Reseller)
- **Modulares System** - Module per Abo oder Lizenz aktivierbar
- **Real-time Updates** via WebSockets
- **Responsive Design** mit Tailwind CSS

### Module
- **CRM** - Kundenverwaltung
- **Billing** - Rechnungen und Abos
- **Hosting** - Server-Management (Proxmox, Plesk, cPanel)
- **Tickets** - Support-System
- **Monitoring** - Server-Überwachung
- **Security** - Audit Logs, MFA

## 🏗️ Architektur

```
/apps
├─ /backend     # Node.js + Express API
└─ /frontend    # React + Tailwind Dashboard
/modules        # Dynamische Module
/installer      # Self-Hosting Installer
/db            # Datenbank Migrationen
```

## 🔧 Technologien

- **Frontend:** React 18, Tailwind CSS, React Query, Socket.io Client
- **Backend:** Node.js, Express, PostgreSQL, Sequelize, Socket.io
- **Auth:** JWT mit bcryptjs
- **Real-time:** Socket.io
- **Database:** PostgreSQL mit JSONB für flexible Daten

## 📊 API Endpunkte

### Authentication
- `POST /api/auth/login` - Benutzer anmelden
- `POST /api/auth/register` - Benutzer registrieren
- `GET /api/auth/profile` - Profil abrufen

### Core Resources
- `GET /api/users` - Benutzer verwalten
- `GET /api/customers` - Kunden verwalten
- `GET /api/modules` - Module verwalten
- `GET /api/subscriptions` - Abos verwalten
- `GET /api/servers` - Server verwalten
- `GET /api/tickets` - Tickets verwalten
- `GET /api/invoices` - Rechnungen verwalten

## 🔐 Standard Login

**Admin Account:**
- Email: `admin@example.com`
- Password: `password`

## 🐳 Docker (Optional)

```bash
# Docker Compose für Development
docker-compose up -d

# Oder Production Build
docker-compose -f docker-compose.prod.yml up -d
```

## 📝 Environment Variablen

### Backend (.env)
```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crm_dev
DB_USER=crm_user
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=24h

# Server
PORT=3001
NODE_ENV=development

# Features
SAAS_MODE=true
MULTI_TENANT=true
```

## 🔄 Development

### Datenbank zurücksetzen
```bash
npm run db:reset
npm run db:migrate
npm run db:seed
```

### Tests ausführen
```bash
npm test
```

### Production Build
```bash
npm run build
npm start
```

## 📦 Module entwickeln

Module werden im `/modules` Verzeichnis erstellt:

```javascript
// modules/example-module/manifest.json
{
  "name": "example-module",
  "version": "1.0.0",
  "dependencies": [],
  "api_endpoints": ["/api/example"],
  "ui_components": ["ExampleComponent"]
}

// modules/example-module/index.js
class ExampleModule {
  async initialize() {
    // Module initialization
  }
  
  async activate(customerId) {
    // Activate for customer
  }
}
```

## 🚀 Deployment

### SaaS Mode
- Multi-Tenant Datenbank
- Automatische Updates
- Module per Abo aktiviert

### Self-Hosting
- Einzelne Datenbank pro Installation
- Manuelle Updates
- Module per Lizenz aktiviert

## 📞 Support

Bei Fragen oder Problemen erstelle ein Ticket im System oder kontaktiere den Administrator.
=======
# webhoster-crm
>>>>>>> a0fe96e5194336e2cefb677664bb3acd5e03ce5e
